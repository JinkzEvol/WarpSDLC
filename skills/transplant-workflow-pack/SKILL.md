---
name: transplant-workflow-pack
description: Generate workflow automation scaffolding for the transplanted SDLC by mapping host CI/test/release signals to reproducible review and validation pipelines.
---

# transplant-workflow-pack

Use this skill when transplant mode is `full-core`.

## Inputs

- `transplant-analysis.md`
- `transplant-recommendation.md`
- `transplant-preview.md`
- `references/workflow-tooling-matrix.md`
- host bindings:
  - `HOST_CI_PROVIDER`
  - `HOST_BUILD_COMMAND`
  - `HOST_LINT_COMMAND`
  - `HOST_TEST_COMMAND`
  - `HOST_LOG_ARTIFACTS`
  - `HOST_PLAN_DESTINATION`

## Actions

1. Map host tooling to a workflow profile.
2. Generate workflow skeleton(s) for validation and review publication.
3. Add explicit artifact and handoff points for failure triage.
4. Emit deferred items into `SDLC-bench/` if workflow automation cannot be safely
   activated.

## Outputs

- `.github/workflows/sdlc-validate.yml` or equivalent CI provider mapping
- `docs/sdlc/workflows/automation-summary.md`
- `SDLC-bench/manifests/<host>-workflow-gaps.md` when required signals are missing
