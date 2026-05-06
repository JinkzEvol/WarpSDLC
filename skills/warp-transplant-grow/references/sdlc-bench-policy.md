# SDLC-bench policy

`SDLC-bench/` is the holding area for primitives that are sanitized but not yet
activated in the host repo.

Bench a primitive when any of the following is true:

- the host lacks a required core dependency
- the host lacks a matching runtime or harness
- the host already has a stronger native alternative and keeping both active
  would create redundant guidance
- the placeholder contract is unresolved and activation would require guessing