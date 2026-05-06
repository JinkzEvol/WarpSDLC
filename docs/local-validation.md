# Local Installability Smoke Test

This file records the local validation workflow for the staged package using the installed APM CLI.

Verified local binary:

- `C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd`
- Version: `0.12.2`

## Goals

- Verify the staged package layout is accepted by APM locally
- Verify a local consumer can install the package without relying on a public repository
- Capture the exact commands to re-run before publication

## Validation sequence

1. Validate staged skills:

```powershell
Set-Location "e:\VS code projects\warp-sdlc\warp-apm-package"
node .\scripts\validate-skills.js
```

2. Run the repeatable local prepublish smoke test:

```powershell
Set-Location "e:\VS code projects\warp-sdlc\warp-apm-package"
powershell -ExecutionPolicy Bypass -File .\scripts\repeat-local-apm-test.ps1
```

3. If you need to inspect the underlying APM behavior manually, create or reuse a clean local consumer directory outside the package repo.

4. Install the staged package into the consumer with a local path dependency:

```powershell
Set-Location "<consumer-dir>"
& "C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd" install "..\warp-apm-package" --target agent-skills
```

5. Inspect the consumer output:

- `apm.yml`
- `apm.lock.yaml`
- `.agents/skills/`
- `.agents/skills/warp-transplant-grow/agents/`

6. Confirm the expected skill directory exists under `.agents/skills/`.

7. Re-run with `--dry-run` or `-v` if the install output is ambiguous:

```powershell
& "C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd" install "..\warp-apm-package" --target agent-skills --dry-run -v
```

## Current known limitations

- This validates local installability, not public GitHub shorthand install yet.
- It does not approve any upstream Warp content for copying.
- If the final package type changes from a skill collection to another APM layout, these commands must be updated.

## Validation log

### 2026-05-06

- APM CLI detected locally at the path above
- `apm install --help` confirms `--target agent-skills` support in APM `0.12.2`
- Created local consumer directory: `e:\VS code projects\warp-sdlc\warp-apm-consumer-smoke`
- Ran:

```powershell
Set-Location "e:\VS code projects\warp-sdlc\warp-apm-consumer-smoke"
& "C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd" install "..\warp-apm-package" --target agent-skills -v
```

- Result: success
- Observed outputs:
	- `apm.yml` created in the consumer
	- `apm.lock.yaml` created in the consumer
	- `.agents/skills/package-compliance-review/` deployed
	- Lockfile recorded `_local/warp-apm-package` with `package_type: skill_bundle`
- Created local consumer directory: `e:\VS code projects\warp-sdlc\warp-apm-consumer-agents-check`
- Re-ran install after the sanitized transplant layer was expanded to 24 skill directories
- Result: success
- Observed outputs:
	- 24 skill directories deployed under `.agents/skills/`
	- `warp-transplant-grow` preserved its nested `agents/warp-transplant-grow.agent.md` sidecar

- Prepublish smoke-test script added: `scripts/repeat-local-apm-test.ps1`
- The script validates:
	- 24 installed skill directories
	- bundled sanitize analysis references
	- bundled transplant manifest reference
	- presence of the `warp-transplant-grow` agent sidecar

## Current verdict

- Scripted prepublish smoke test (`scripts/repeat-local-apm-test.ps1`): passed, 24 skill directories
- Agent sidecar verified inside installed bundle: `.agents/skills/warp-transplant-grow/agents/warp-transplant-grow.agent.md`
- Orchestration skill bundled references verified: sanitize analysis refs and transplant manifest
- Public GitHub shorthand install validation: not yet run
- npm publication validation: not yet run

This same validation workflow should be re-run later against the final release candidate contents before any publish step.
Run: `npm run validate:local-apm` from `warp-apm-package/`