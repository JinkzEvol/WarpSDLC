# WarpSDLC Execution Checklist (Installer + Transplant Operator)

This checklist is for operators installing and activating the WarpSDLC APM package in a host repository and for package maintainers validating local installability.

Use it to maximize value quickly while minimizing failed transplants, partial activations, and noisy eval results.

## Success definition

- [ ] The package is installed and pinned to a known tag.
- [ ] `warp-transplant-grow` runs with a closed required binding gate.
- [ ] A mode (`skills-only`, `skills-plus-policy`, or `full-core`) is selected with evidence.
- [ ] `transplant-report.md` and `SDLC-bench/manifests/<host>-transplant.md` are produced.
- [ ] Post-transplant Genesis review produces architecture artifacts and clear next actions.
- [ ] Evals show the transplanted SDLC improves outcomes versus baseline behavior.

## Phase 0 - Prerequisites and host readiness

- [ ] Confirm you are in the host repository root.
- [ ] Confirm you can run build, lint, and test commands in the host repo.
- [ ] Confirm the host has a default branch and PR process.
- [ ] Confirm you know where specs should live (target `HOST_SPEC_ROOT`).
- [ ] Create a temporary operator notes file: `transplant-operator-notes.md`.

Recommended notes to capture before starting:

- repo name and base branch
- task system in use
- build/lint/test/validation commands
- CI provider and log artifact location
- skill root location for the host

## Phase 1 - Install APM locally

### Windows quick install

- [ ] Install APM:

```powershell
irm https://aka.ms/apm-windows | iex
```

- [ ] Verify APM is callable:

```powershell
apm --version
```

If shell resolution is inconsistent, use the full binary path:

```powershell
& "C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd" --version
```

## Phase 2 - Install WarpSDLC package

### Public install (recommended for users)

- [ ] Install latest pinned tag:

```bash
apm install JinkzEvol/WarpSDLC#v0.2.0 --target agent-skills
```

### Local path install (recommended for package maintainers)

- [ ] From a local consumer repo, install from local package path:

```powershell
& "C:\Users\dalon\AppData\Local\Programs\apm\bin\apm.cmd" install "..\warp-apm-package" --target agent-skills -v
```

### Install verification

- [ ] Confirm `.agents/skills/` contains 27 skill directories.
- [ ] Confirm transplant operator sidecar exists:
	`.agents/skills/warp-transplant-grow/agents/warp-transplant-grow.agent.md`
- [ ] Confirm Genesis architecture sidecar exists:
	`.agents/skills/genesis/agents/genesis-architect.agent.md`
- [ ] Confirm lockfile and manifest were generated/updated (`apm.lock.yaml`, `apm.yml`).

## Phase 3 - Pre-transplant interaction pack

Run these prompts before activating layers.

### Prompt A - Repo analysis

```text
Use warp-transplant-grow to analyze this host repository for transplant readiness.
Produce transplant-analysis.md with concrete evidence for process, automation, and operations signals.
Do not activate any layer yet.
```

- [ ] `transplant-analysis.md` generated and grounded in host evidence.

### Prompt B - Mode recommendation

```text
Using warp-transplant-grow recommendation rules, recommend one mode:
skills-only, skills-plus-policy, or full-core.
Produce transplant-recommendation.md with explicit rationale and risks.
```

- [ ] `transplant-recommendation.md` generated with rationale and risk profile.

### Prompt C - Preview before apply

```text
Before applying any changes, generate transplant-preview.md.
Include all three modes in a comparison table: activation scope, skipped components,
new files expected, and risk profile. Mark one mode as recommended.
```

- [ ] `transplant-preview.md` exists and recommendation is explicit.

### Prompt D - Binding audit (hard gate)

```text
Run binding audit against transplant-package-manifest required bindings.
List unresolved required portable-core bindings only, each with suggested host evidence to resolve.
If any required binding is unresolved, mark transplant as blocked.
```

- [ ] All required bindings are resolved or explicitly marked blocked.
- [ ] No activation starts with unresolved required portable-core bindings.

Required binding gate keys:

- `HOST_SPEC_ROOT`
- `HOST_TASK_SYSTEM`
- `HOST_VALIDATION_COMMAND`
- `HOST_BASE_BRANCH`
- `HOST_PR_TEMPLATE`
- `HOST_REVIEW_OUTPUT`
- `HOST_REVIEW_SEVERITY`
- `HOST_BUILD_COMMAND`
- `HOST_LINT_COMMAND`
- `HOST_TEST_COMMAND`
- `HOST_CI_PROVIDER`
- `HOST_LOG_ARTIFACTS`
- `HOST_PLAN_DESTINATION`
- `HOST_SKILL_ROOT`

## Phase 4 - Mid-transplant operator loop

### Prompt E - Activate selected mode

```text
Execute warp-transplant-grow in <selected-mode>.
Enforce hard gate: stop if required portable-core bindings are unresolved.
Install portable core first, then eligible host adapters, then selected utility layers.
Route unsupported/redundant components to SDLC-bench with manifest entries.
Generate transplant-report.md and SDLC-bench/manifests/<host>-transplant.md.
```

- [ ] Portable core activation completed first.
- [ ] Host adapters activated only when host contract is satisfied.
- [ ] Policy/workflow layers activated only if included by selected mode.
- [ ] Bench routing used for unsupported/redundant surfaces.

### Prompt F - Progress snapshot during activation

```text
Show activation status by tier:
portable core, host adapters, bench-ready, utility layers.
List activated, deferred, and benched items with reasons and required next actions.
```

- [ ] Mid-run status snapshot saved in operator notes.

### Prompt G - Blocker handling

```text
If blocked, produce a blocked transplant-report.md with:
1) exact unresolved binding,
2) minimal evidence needed,
3) one concrete command or file check to resolve it,
4) restart point after resolution.
```

- [ ] No silent failures or partial activation when blocked.

## Phase 5 - Post-transplant acceptance gates

- [ ] `transplant-report.md` exists and records selected mode, outcomes, and unresolved items.
- [ ] `SDLC-bench/manifests/<host>-transplant.md` exists and explains every benched primitive.
- [ ] Required binding gate is closed (or transplant correctly marked blocked).
- [ ] Installed skill set aligns with selected mode.
- [ ] Bench items have explicit reactivation conditions.

### Quick acceptance prompt

```text
Assess transplant success now.
Return PASS/FAIL with evidence for: binding closure, layer activation correctness,
bench manifest completeness, and operator reproducibility.
```

- [ ] PASS recorded with evidence, or FAIL with remediation plan.

## Phase 6 - Genesis architecture assessment

Use Genesis after transplant to validate and improve architecture decisions.

### Prompt H - Genesis design review

```text
Use genesis and genesis-architect to assess the transplanted SDLC architecture.
Design first, no module drafting. Produce:
1) component flowchart,
2) sequence diagram,
3) dependency graph,
4) module composition table,
5) compliance findings by severity,
6) handoff packet with prioritized next actions.
```

- [ ] Genesis artifacts generated.
- [ ] BLOCKER/HIGH findings triaged before broad rollout.

### Prompt I - Value optimization pass

```text
From the Genesis handoff packet, identify the top 3 highest-leverage changes
to reduce transplant friction and improve SDLC outcome quality.
Rank by impact and implementation effort.
```

- [ ] Ranked improvement plan captured.

## Phase 7 - Post-transplant eval setup

Genesis requires evals that prove skill value and trigger correctness.

- [ ] Create `evals/` folder in host repo (or agreed eval location).
- [ ] Define a baseline run (without invoking transplanted skills).
- [ ] Define a transplanted run (with skills invoked).

### Required eval categories

- [ ] Content evals (2-3 per critical skill path): same prompt with and without skill.
- [ ] Trigger evals (~20 total):
	- 8-10 prompts that should trigger.
	- 8-10 near-miss prompts that should not trigger.
	- Split 60/40 train/validation.
- [ ] Validation split serves as ship gate for dispatch quality.

### Prompt J - Build eval plan

```text
Create an eval plan for this transplanted SDLC:
- content evals with with-skill vs without-skill comparison,
- trigger eval matrix (positive and near-miss),
- pass/fail thresholds,
- artifact locations for outputs.
```

- [ ] Eval plan created with explicit thresholds.

## Phase 8 - Complex SDLC eval runs

Run higher-complexity workflows to confirm the system works end-to-end.

### Complex scenario set

- [ ] Scenario 1: Intake -> product spec -> tech spec -> implementation -> PR -> review -> fix.
- [ ] Scenario 2: CI failure diagnosis and recovery loop.
- [ ] Scenario 3: Merge-conflict resolution with re-validation.
- [ ] Scenario 4: Feature-flag add/promote/remove lifecycle (if host adapters are active).
- [ ] Scenario 5: Triage + dedupe issue flow (if host adapters are active).

### Prompt K - Execute complex drill

```text
Run a full SDLC drill using transplanted skills and produce:
1) artifact ledger,
2) decision log,
3) failure points,
4) time-to-recovery,
5) recommended process or skill adjustments.
```

- [ ] Drill outputs recorded and reviewed.
- [ ] Repeat until failure rate and rework fall below team threshold.

## Phase 9 - Ongoing operations (maximize value, minimize pain)

- [ ] Pin package version for team stability.
- [ ] Re-run transplant in a branch before upgrading package versions.
- [ ] Keep binding catalog current as host tooling changes.
- [ ] Treat `SDLC-bench/` as deferred backlog, not dead content.
- [ ] Re-run eval suite after major host workflow changes.
- [ ] Keep one owner for transplant artifacts and one backup owner.

## Quick troubleshooting checklist

### APM install issues

- [ ] Re-check APM binary path and shell resolution.
- [ ] Re-run install with `--dry-run -v` for richer output.

### Binding gate blocked

- [ ] Resolve only required portable-core bindings first.
- [ ] Restart from binding audit, not from scratch.

### Too many benched skills

- [ ] Validate selected mode was appropriate.
- [ ] Confirm host evidence for adapter/runtime capabilities exists.
- [ ] Promote benched items only when capability evidence is present.

### Evals show low value delta

- [ ] Re-check trigger wording and dispatch conditions.
- [ ] Tighten eval prompts so expected outcomes are measurable.
- [ ] Use Genesis review to refactor boundaries and composition.

## Maintainer-only validation before publish/update

- [ ] Run skill validation:

```powershell
Set-Location "e:\VS code projects\warp-sdlc\warp-apm-package"
node .\scripts\validate-skills.js
```

- [ ] Run local prepublish smoke test:

```powershell
Set-Location "e:\VS code projects\warp-sdlc\warp-apm-package"
powershell -ExecutionPolicy Bypass -File .\scripts\repeat-local-apm-test.ps1
```

- [ ] Confirm release-readiness and provenance docs are current.

## Final go/no-go

- [ ] INSTALLABLE: package installs cleanly (public tag and/or local path).
- [ ] OPERABLE: transplant can run with closed required binding gate.
- [ ] REPRODUCIBLE: transplant artifacts and bench manifest are complete.
- [ ] VALUABLE: evals show clear quality delta with transplanted SDLC.
- [ ] MAINTAINABLE: upgrade path and revalidation loop are documented.