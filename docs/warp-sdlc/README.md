# Warp SDLC Transplant Analysis

This folder is the working corpus for the Warp-only SDLC primitive inventory,
the sanitization plan, and the transplant package staged in
`warp-apm-package/skills/`.

Scope rules for this analysis:

- Source inventory is limited to `../warp/`
- The goal is a host-neutral SDLC package, not a trimmed copy of `../warp`
- Repo-specific Warp content is rewritten as original guidance with explicit
  placeholder comments instead of being copied verbatim

Primary artifacts:

- `primitive-inventory.md` - full warp-only SDLC primitive inventory and map
- `non-ai-primitives.md` - non-AI SDLC primitives coupled to the AI workflow
- `ai-sdlc-system.md` - how the AI SDLC primitives fit together and transplant
- `sanitization-matrix.md` - portability classification and target mapping
- `placeholder-catalog.md` - placeholder ids used by the sanitized package
- `genesis-design-packet.md` - pre-authoring architecture packet for the package

Staged package surfaces:

- `../../skills/sanitize-warp-sdlc/` - regenerates the `-san` skill layer
- `../../skills/warp-transplant-grow/` - transplants the package into a host repo
- `../../SDLC-bench/` - manifests and holding areas for benched components