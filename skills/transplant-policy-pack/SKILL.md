---
name: transplant-policy-pack
description: Generate policy and process scaffolding for a transplanted SDLC bundle by translating host bindings into PR, issue, review, and governance operating documents.
---

# transplant-policy-pack

Use this skill when the selected transplant mode is `skills-plus-policy` or
`full-core`.

## Inputs

- `transplant-analysis.md`
- `transplant-recommendation.md`
- `references/layer-policy-mapping.md`
- host bindings:
  - `HOST_PR_TEMPLATE`
  - `HOST_LABEL_TAXONOMY`
  - `HOST_REVIEW_OUTPUT`
  - `HOST_REVIEW_SEVERITY`
  - `HOST_TASK_SYSTEM`
  - `HOST_REPO_CONVENTIONS`

## Actions

1. Map available host process evidence to policy artifacts.
2. Create missing scaffolds for issue intake, review format, and PR quality
   expectations.
3. Emit a policy handoff section that identifies owners and maintenance cadence.

## Outputs

- `docs/sdlc/policy/transplant-policy-summary.md`
- `docs/sdlc/policy/review-contract.md`
- `docs/sdlc/policy/intake-and-triage.md`

If host policy files already exist, produce additive updates rather than
replacement documents.
