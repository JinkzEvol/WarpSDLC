param(
    [string]$ConsumerDir = "e:\VS code projects\warp-sdlc\warp-apm-consumer-prepublish"
)

$ErrorActionPreference = "Stop"

$repoRoot = "e:\VS code projects\warp-sdlc\warp-apm-package"
$apm = "C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd"

if (-not (Test-Path $apm)) {
    throw "APM CLI not found at $apm"
}

Set-Location $repoRoot
node .\scripts\validate-skills.js | Out-Host

if (Test-Path $ConsumerDir) {
    Remove-Item -Recurse -Force $ConsumerDir
}

New-Item -ItemType Directory -Path $ConsumerDir | Out-Null
Set-Location $ConsumerDir

& $apm install "..\warp-apm-package" --target agent-skills -v | Out-Host

$requiredPaths = @(
    ".agents\skills\warp-transplant-grow\SKILL.md",
    ".agents\skills\warp-transplant-grow\agents\warp-transplant-grow.agent.md",
    ".agents\skills\warp-transplant-grow\references\transplant-package-manifest.json",
    ".agents\skills\transplant-policy-pack\SKILL.md",
    ".agents\skills\transplant-workflow-pack\SKILL.md",
    ".agents\skills\genesis\SKILL.md",
    ".agents\skills\genesis\agents\genesis-architect.agent.md",
    ".agents\skills\sanitize-warp-sdlc\references\analysis\primitive-inventory.md",
    ".agents\skills\sanitize-warp-sdlc\references\analysis\sanitization-matrix.md",
    ".agents\skills\sanitize-warp-sdlc\references\analysis\placeholder-catalog.md",
    "apm.yml",
    "apm.lock.yaml"
)

foreach ($relativePath in $requiredPaths) {
    if (-not (Test-Path $relativePath)) {
        throw "Missing expected installed path: $relativePath"
    }
}

$skillDirs = Get-ChildItem ".agents\skills" -Directory
if ($skillDirs.Count -ne 27) {
    throw "Expected 27 installed skill directories, found $($skillDirs.Count)"
}

$lockfileText = Get-Content ".\apm.lock.yaml" -Raw
if ($lockfileText -notmatch [regex]::Escape(".agents/skills/warp-transplant-grow")) {
    throw "Lockfile does not mention warp-transplant-grow deployment"
}

Write-Host "Local APM prepublish smoke test passed. Installed $($skillDirs.Count) skill directories." -ForegroundColor Green