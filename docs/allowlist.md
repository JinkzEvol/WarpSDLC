# Extraction Allowlist

List only the upstream paths that are approved for copying into this repo.

Example format:

```text
../warp/.agents/skills/example-skill/
../warp/.agents/skills/example-skill/SKILL.md
../warp/.agents/skills/example-skill/references/
```

Rules:

- Every allowlist entry must have a matching provenance entry
- Directory allowlist entries should be used sparingly
- If a file is not on this allowlist, do not copy it
- If a copied file references another file, add the sidecar explicitly

## Current allowlist

```text
local:warp-apm-package/skills/package-compliance-review/SKILL.md
```

No upstream Warp paths are approved for copying yet.