---
name: warp-transplant-grow
description: Reconstitute the sanitized Warp SDLC package inside a host repository by installing portable core skills first, binding host-adapter placeholders, and preserving redundant or unsupported components under SDLC-bench instead of discarding them.
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
- `references/sanitized-manifest.md`
- `references/sdlc-bench-policy.md`

## Workflow

1. Inspect the host repo and collect the required bindings.
2. Run the binding audit against `references/transplant-package-manifest.json` and
   stop if any required portable-core binding is unresolved.
3. Install portable core skills first.
4. Activate host-adapter skills only after the host contract is satisfied.
5. Route conditional or redundant components into `SDLC-bench/` with a manifest
   entry instead of deleting them.
6. Produce `transplant-report.md` plus `SDLC-bench/manifests/<host>-transplant.md`
   so activation and bench decisions are reproducible.

## Binding gate

Portable-core placeholders are hard blockers. If the binding audit is not
closed, write a blocked `transplant-report.md` and do not activate the package.

## Outputs

- `transplant-report.md`
- `SDLC-bench/manifests/<host>-transplant.md`
   bench placements, and unresolved host bindings.