const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const skillsDir = path.join(repoRoot, "skills");
const transplantManifestPath = path.join(repoRoot, "transplant-package-manifest.json");
const bundledTransplantManifestPath = path.join(
  repoRoot,
  "skills",
  "warp-transplant-grow",
  "references",
  "transplant-package-manifest.json"
);
const placeholderCatalogPath = path.join(repoRoot, "docs", "warp-sdlc", "placeholder-catalog.md");

function fail(message) {
  console.error(message);
  process.exitCode = 1;
}

function readDirectoryNames(directory) {
  if (!fs.existsSync(directory)) {
    fail(`Missing skills directory: ${directory}`);
    return [];
  }

  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function parseFrontmatter(content, skillPath) {
  if (!(content.startsWith("---\n") || content.startsWith("---\r\n"))) {
    fail(`Missing frontmatter start in ${skillPath}`);
    return null;
  }

  const lineBreak = content.startsWith("---\r\n") ? "\r\n" : "\n";
  const endIndex = content.indexOf(`${lineBreak}---${lineBreak}`, 4);
  if (endIndex === -1) {
    fail(`Missing frontmatter end in ${skillPath}`);
    return null;
  }

  const startOffset = 3 + lineBreak.length;
  const rawFrontmatter = content.slice(startOffset, endIndex).trim();
  const fields = {};

  for (const line of rawFrontmatter.split(/\r?\n/)) {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) {
      fail(`Invalid frontmatter line in ${skillPath}: ${line}`);
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    fields[key] = value;
  }

  return fields;
}

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing JSON file: ${filePath}`);
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    fail(`Invalid JSON in ${filePath}: ${error.message}`);
    return null;
  }
}

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map((entry) => stableStringify(entry)).join(",")}]`;
  }

  if (value && typeof value === "object") {
    const sortedKeys = Object.keys(value).sort();
    return `{${sortedKeys.map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`).join(",")}}`;
  }

  return JSON.stringify(value);
}

function parsePlaceholderCatalog(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`Missing placeholder catalog: ${filePath}`);
    return new Set();
  }

  const content = fs.readFileSync(filePath, "utf8");
  const placeholderIds = new Set();

  for (const match of content.matchAll(/`(HOST_[A-Z0-9_]+)`/g)) {
    placeholderIds.add(match[1]);
  }

  return placeholderIds;
}

function parsePlaceholdersFromSkill(content) {
  const placeholderIds = new Set();

  for (const match of content.matchAll(/HOST_[A-Z0-9_]+/g)) {
    placeholderIds.add(match[0]);
  }

  return placeholderIds;
}

function setDifference(left, right) {
  return [...left].filter((item) => !right.has(item));
}

function detectManifestCycles(manifestSkills) {
  const visited = new Set();
  const activeStack = new Set();

  function visit(skillName) {
    if (activeStack.has(skillName)) {
      fail(`Circular manifest dependency detected at ${skillName}`);
      return;
    }

    if (visited.has(skillName)) {
      return;
    }

    visited.add(skillName);
    activeStack.add(skillName);

    for (const dependencyName of manifestSkills[skillName]?.dependsOn ?? []) {
      visit(dependencyName);
    }

    activeStack.delete(skillName);
  }

  for (const skillName of Object.keys(manifestSkills)) {
    visit(skillName);
  }
}

function validateSkillDirectory(skillName, manifestSkills, placeholderCatalogIds) {
  const skillDirectory = path.join(skillsDir, skillName);
  const skillFile = path.join(skillDirectory, "SKILL.md");

  if (!fs.existsSync(skillFile)) {
    fail(`Missing SKILL.md in ${skillDirectory}`);
    return;
  }

  const content = fs.readFileSync(skillFile, "utf8");
  const frontmatter = parseFrontmatter(content, skillFile);
  if (!frontmatter) {
    return;
  }

  if (!frontmatter.name) {
    fail(`Missing 'name' in ${skillFile}`);
  }

  if (!frontmatter.description) {
    fail(`Missing 'description' in ${skillFile}`);
  }

  if (frontmatter.name && frontmatter.name !== skillName) {
    fail(`Frontmatter name '${frontmatter.name}' does not match directory '${skillName}' in ${skillFile}`);
  }

  if (content.includes("replace-me")) {
    fail(`Template placeholder found in ${skillFile}`);
  }

  const skillPlaceholderIds = parsePlaceholdersFromSkill(content);
  for (const placeholderId of skillPlaceholderIds) {
    if (!placeholderCatalogIds.has(placeholderId)) {
      fail(`Unknown placeholder '${placeholderId}' in ${skillFile}`);
    }
  }

  const manifestEntry = manifestSkills?.[skillName];

  // Check if this is a managed skill (portableCore, hostAdapters, or benchReady)
  // that is missing a manifest entry
  if (transplantManifest) {
    const allManagedSkills = new Set([
      ...(transplantManifest.portableCore ?? []),
      ...(transplantManifest.hostAdapters ?? []),
      ...(transplantManifest.benchReady ?? []),
    ]);

    if (allManagedSkills.has(skillName) && !manifestEntry) {
      fail(`Missing manifest entry for managed skill ${skillName}`);
      return;
    }
  }

  if (!manifestEntry) {
    return;
  }

  // PR-01: description must mention at least one required binding
  const required = manifestEntry.requiredBindings ?? [];
  if (required.length > 0) {
    const desc = frontmatter.description || "";
    const mentioned = required.some((b) => desc.includes(b));
    if (!mentioned) {
      fail(`${skillName}: description must mention at least one of: ${required.join(", ")}`);
    }
  }

  const manifestBindings = new Set([
    ...(manifestEntry.requiredBindings ?? []),
    ...(manifestEntry.optionalBindings ?? []),
  ]);

  for (const binding of manifestBindings) {
    if (!placeholderCatalogIds.has(binding)) {
      fail(`Unknown manifest binding '${binding}' for ${skillName}`);
    }
  }

  const missingBindingsInSkill = setDifference(manifestBindings, skillPlaceholderIds);
  const undeclaredSkillBindings = setDifference(skillPlaceholderIds, manifestBindings);

  if (missingBindingsInSkill.length > 0) {
    fail(`Manifest bindings missing from ${skillFile}: ${missingBindingsInSkill.join(", ")}`);
  }

  if (undeclaredSkillBindings.length > 0) {
    fail(`Skill placeholders missing from manifest for ${skillFile}: ${undeclaredSkillBindings.join(", ")}`);
  }
}

function validateTransplantManifest(manifest, skillDirectoryNames, placeholderCatalogIds) {
  if (!manifest) {
    return;
  }

  if (!manifest.skills || typeof manifest.skills !== "object") {
    fail(`Missing skills map in ${transplantManifestPath}`);
    return;
  }

  detectManifestCycles(manifest.skills);

  const skillDirectorySet = new Set(skillDirectoryNames);

  for (const [skillName, entry] of Object.entries(manifest.skills)) {
    if (!skillDirectorySet.has(skillName)) {
      fail(`Manifest references missing skill directory: ${skillName}`);
    }

    for (const dependencyName of entry.dependsOn ?? []) {
      if (!skillDirectorySet.has(dependencyName)) {
        fail(`Manifest dependency '${dependencyName}' for ${skillName} does not exist`);
      }
    }

    for (const binding of [...(entry.requiredBindings ?? []), ...(entry.optionalBindings ?? [])]) {
      if (!placeholderCatalogIds.has(binding)) {
        fail(`Manifest binding '${binding}' for ${skillName} is not in the placeholder catalog`);
      }
    }
  }

  const requiredPortableCoreBindings = new Set();
  for (const entry of Object.values(manifest.skills)) {
    if (entry.class !== "portableCore") {
      continue;
    }

    for (const binding of entry.requiredBindings ?? []) {
      requiredPortableCoreBindings.add(binding);
    }
  }

  const bindingGateRequired = new Set(manifest.bindingGate?.required ?? []);
  const missingFromBindingGate = setDifference(requiredPortableCoreBindings, bindingGateRequired);
  const extraInBindingGate = setDifference(bindingGateRequired, requiredPortableCoreBindings);

  if (missingFromBindingGate.length > 0) {
    fail(`bindingGate.required is missing portable-core bindings: ${missingFromBindingGate.join(", ")}`);
  }

  if (extraInBindingGate.length > 0) {
    fail(`bindingGate.required has extra bindings not required by portable-core skills: ${extraInBindingGate.join(", ")}`);
  }
}

const skillDirectories = readDirectoryNames(skillsDir).filter((name) => name !== "README.md");
const transplantManifest = readJsonFile(transplantManifestPath);
const bundledTransplantManifest = readJsonFile(bundledTransplantManifestPath);
const placeholderCatalogIds = parsePlaceholderCatalog(placeholderCatalogPath);

if (transplantManifest && bundledTransplantManifest) {
  const rootManifestString = stableStringify(transplantManifest);
  const bundledManifestString = stableStringify(bundledTransplantManifest);
  if (rootManifestString !== bundledManifestString) {
    fail(
      "Root transplant manifest and bundled warp-transplant-grow manifest are out of sync"
    );
  }
}

for (const skillName of skillDirectories) {
  validateSkillDirectory(skillName, transplantManifest?.skills, placeholderCatalogIds);
}

validateTransplantManifest(transplantManifest, skillDirectories, placeholderCatalogIds);

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log(`Validated ${skillDirectories.length} skill directories.`);