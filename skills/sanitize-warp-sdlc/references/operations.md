# sanitize-warp-sdlc operations

## Regeneration contract

- Source of truth is the analysis in `docs/warp-sdlc/`.
- Target set is the sanitized skill directories under `skills/` whose names end
  in `-san`.
- Placeholder comments must use the ids from `docs/warp-sdlc/placeholder-catalog.md`.

## Output groups

- Portable core skills: activate in most hosts after binding placeholders.
- Host-adapter skills: activate only after host-specific policy binding.
- Bench-ready skills: preserve for later use, but expect the transplant step to
  park them in `SDLC-bench/` unless the host provides a matching runtime.