---
name: sanitize-warp-sdlc
description: Regenerate the sanitized Warp SDLC layer by reading the Warp-only analysis docs, refreshing each approved -san skill, and preserving explicit placeholder comments for host-repo bindings instead of copying Warp-specific prose.
---

# sanitize-warp-sdlc

Use this skill when the staged package needs to create or refresh the `-san`
skill layer from the Warp-only analysis corpus.

## Inputs

- `references/analysis/primitive-inventory.md`
- `references/analysis/sanitization-matrix.md`
- `references/analysis/placeholder-catalog.md`
- the current `skills/*-san/` directories

## Workflow

1. Load the sanitization matrix and classify each primitive as portable core,
   host-adapter, bench-ready, or blocked.
2. Refresh every approved `-san` skill as an original rewrite. Do not copy Warp
   repo text through unchanged.
3. Preserve placeholder comments wherever the host repo must bind a policy,
   path, command, label set, or review contract.
4. Emit or refresh `references/generated-manifest.md` with generated skills,
   conditional skills, and bench-only notes.
5. If a source primitive is blocked or depends on a missing core primitive,
   record that in the manifest instead of forcing a broken skill.

## Guardrails

- Do not copy files from `../warp/` directly into `skills/`.
- Do not remove placeholder comments until the host transplant step binds them.
- Do not treat Warp-specific workflows, media policies, labels, or commands as
  portable defaults.

## References

- `references/analysis/primitive-inventory.md`
- `references/analysis/sanitization-matrix.md`
- `references/analysis/placeholder-catalog.md`
- `references/operations.md`
- `references/generated-manifest.md`