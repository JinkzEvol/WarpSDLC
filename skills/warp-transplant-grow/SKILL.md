---
name: warp-transplant-grow
description: Reconstitute the sanitized Warp SDLC package in a host repo by running a host-tooling analysis, recommending a transplant mode, and then activating portable core, policy/workflow layers, and bench handling in a reproducible order.
---

# warp-transplant-grow

Use this skill when a host repository is ready to receive the sanitized Warp
SDLC package.

## Inputs

- the sanitized skill layer under `skills/*-san/`
- `references/transplant-package-manifest.json`
- `references/transplant-order.md`
- `references/host-repo-contract.md`
- `references/binding-audit.md`
- `references/repo-analysis.md`
- `references/layered-modes.md`
- `references/recommendation-rules.md`
- `references/sanitized-manifest.md`
- `references/sdlc-bench-policy.md`

## Workflow

1. Analyze the host repo using `references/repo-analysis.md`.
2. Produce a level recommendation using `references/recommendation-rules.md`.
3. Before applying changes, generate a level-by-level execution preview using
   `references/layered-modes.md` so the user sees exactly what will happen.
4. Collect required bindings and run the binding audit against
   `references/transplant-package-manifest.json`.
5. Stop if any required portable-core binding is unresolved.
6. Install portable core skills first.
7. Activate host-adapter skills after the host contract is satisfied.
8. If the selected mode includes policy and workflow layers, activate
   `transplant-policy-pack` and `transplant-workflow-pack`.
9. Route conditional or redundant components into `SDLC-bench/` with a manifest
   entry instead of deleting them.
10. Produce `transplant-report.md` plus
   `SDLC-bench/manifests/<host>-transplant.md` so activation and bench decisions
   are reproducible.

## Binding gate

Portable-core placeholders are hard blockers. If the binding audit is not
closed, write a blocked `transplant-report.md` and do not activate the package.

## Mode model

- `skills-only`: portable core, eligible host-adapter, and bench routing only.
- `skills-plus-policy`: skills-only plus policy/PR/intake scaffolding.
- `full-core`: skills-plus-policy plus workflow automation and optional Genesis
   architecture support.

## Outputs

- `transplant-analysis.md`
- `transplant-recommendation.md`
- `transplant-preview.md`
- `transplant-report.md`
- `SDLC-bench/manifests/<host>-transplant.md`
   including selected mode, activated layers, bench placements, and unresolved
   host bindings.