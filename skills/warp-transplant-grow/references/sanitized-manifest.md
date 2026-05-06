# Sanitized manifest used by warp-transplant-grow

Always process these groups in order.

Portable core:

- `write-product-spec-san`
- `write-tech-spec-san`
- `spec-driven-implementation-san`
- `implement-specs-san`
- `create-pr-san`
- `review-pr-san`
- `fix-errors-san`
- `diagnose-ci-failures-san`
- `resolve-merge-conflicts-san`
- `update-skill-san`

Host-adapter:

- `review-pr-local-san`
- `add-feature-flag-san`
- `promote-feature-san`
- `remove-feature-flag-san`
- `add-telemetry-san`
- `triage-issue-local-san`
- `dedupe-issue-local-san`

Bench-ready or conditional:

- `rust-unit-tests-san`
- `warp-integration-test-san`
- `integration-test-video-san`
- `warp-ui-guidelines-san`