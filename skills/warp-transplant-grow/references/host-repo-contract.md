# Host repo contract

The transplant step expects the host repo to provide, or deliberately decline,
the following bindings:

- spec root and task id strategy
- validation commands for build, lint, and tests
- PR template or required PR sections
- review output contract and publication path
- issue taxonomy and owner-routing source if issue overlays should activate
- feature-gate model if rollout skills should activate
- integration-test harness if bench-ready test skills should activate

Portable-core bindings are blocking. If they are unresolved, the transplant must
stop and record the gap in `transplant-report.md`.