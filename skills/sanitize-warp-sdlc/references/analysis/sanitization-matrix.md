# Sanitization Matrix

Classification legend:

- `portable core` (`portableCore` in `transplant-package-manifest.json`) - can activate in most repos after placeholder binding
- `host-adapter` (`hostAdapter` in `transplant-package-manifest.json`) - useful only after host-specific rules are supplied
- `bench-ready` (`benchReady` in `transplant-package-manifest.json`) - sanitized and preserved, but usually parked until the host
  grows a matching runtime or workflow
- `blocked` - not suitable for direct transplant

| Source primitive | Class | Sanitized target | Placeholder ids | Notes |
| --- | --- | --- | --- | --- |
| `../warp/.agents/skills/write-product-spec/SKILL.md` | portable core | `skills/write-product-spec-san/SKILL.md` | `HOST_SPEC_ROOT`, `HOST_TASK_SYSTEM`, `HOST_DESIGN_EVIDENCE` | safe spine skill |
| `../warp/.agents/skills/write-tech-spec/SKILL.md` | portable core | `skills/write-tech-spec-san/SKILL.md` | `HOST_SPEC_ROOT`, `HOST_VALIDATION_COMMAND`, `HOST_ARCH_REVIEW` | safe spine skill |
| `../warp/.agents/skills/spec-driven-implementation/SKILL.md` | portable core | `skills/spec-driven-implementation-san/SKILL.md` | `HOST_SPEC_ROOT`, `HOST_TASK_SYSTEM` | orchestrator skill |
| `../warp/.agents/skills/implement-specs/SKILL.md` | portable core | `skills/implement-specs-san/SKILL.md` | `HOST_VALIDATION_COMMAND`, `HOST_CHANGE_MANAGEMENT` | implementation spine |
| `../warp/.agents/skills/create-pr/SKILL.md` | portable core | `skills/create-pr-san/SKILL.md` | `HOST_BASE_BRANCH`, `HOST_PR_TEMPLATE`, `HOST_CHANGELOG_POLICY`, `HOST_VALIDATION_COMMAND` | review lane |
| `../warp/.agents/skills/review-pr/SKILL.md` | portable core | `skills/review-pr-san/SKILL.md` | `HOST_REVIEW_OUTPUT`, `HOST_REVIEW_SEVERITY`, `HOST_REVIEW_AUTOMATION` | review lane |
| `../warp/.agents/skills/review-pr-local/SKILL.md` | host-adapter | `skills/review-pr-local-san/SKILL.md` | `HOST_REPO_CONVENTIONS`, `HOST_PR_MEDIA_POLICY`, `HOST_LABEL_TAXONOMY` | depends on `review-pr-san` |
| `../warp/.agents/skills/fix-errors/SKILL.md` | portable core | `skills/fix-errors-san/SKILL.md` | `HOST_BUILD_COMMAND`, `HOST_LINT_COMMAND`, `HOST_TEST_COMMAND`, `HOST_ERROR_BUDGET` | repair lane |
| `../warp/.agents/skills/diagnose-ci-failures/SKILL.md` | portable core | `skills/diagnose-ci-failures-san/SKILL.md` | `HOST_CI_PROVIDER`, `HOST_LOG_ARTIFACTS`, `HOST_PLAN_DESTINATION` | CI analysis lane |
| `../warp/.agents/skills/resolve-merge-conflicts/SKILL.md` | portable core | `skills/resolve-merge-conflicts-san/SKILL.md` | `HOST_CONFLICT_EXTRACTOR`, `HOST_VALIDATION_COMMAND` | merge lane |
| `../warp/.agents/skills/update-skill/SKILL.md` | portable core | `skills/update-skill-san/SKILL.md` | `HOST_SKILL_ROOT`, `HOST_SKILL_VALIDATOR`, `HOST_REVIEW_LOOP` | maintains transplanted pack |
| `../warp/.agents/skills/rust-unit-tests/SKILL.md` | bench-ready | `skills/rust-unit-tests-san/SKILL.md` | `HOST_RUST_TEST_ROOT`, `HOST_TEST_CONVENTIONS` | activate only in Rust repos |
| `../warp/.agents/skills/add-feature-flag/SKILL.md` | host-adapter | `skills/add-feature-flag-san/SKILL.md` | `HOST_FEATURE_FLAG_SYSTEM`, `HOST_DEFAULT_ROLLOUT_CHANNELS`, `HOST_FLAG_REGISTRY` | requires host gate model |
| `../warp/.agents/skills/promote-feature/SKILL.md` | host-adapter | `skills/promote-feature-san/SKILL.md` | `HOST_DEFAULT_ROLLOUT_CHANNELS`, `HOST_RELEASE_CHANNEL_MODEL`, `HOST_CHANGELOG_POLICY` | rollout policy binding |
| `../warp/.agents/skills/remove-feature-flag/SKILL.md` | host-adapter | `skills/remove-feature-flag-san/SKILL.md` | `HOST_FEATURE_FLAG_SYSTEM`, `HOST_VALIDATION_COMMAND` | cleanup policy binding |
| `../warp/.agents/skills/add-telemetry/SKILL.md` | host-adapter | `skills/add-telemetry-san/SKILL.md` | `HOST_TELEMETRY_SYSTEM`, `HOST_EVENT_SCHEMA`, `HOST_PRIVACY_POLICY` | telemetry binding required |
| `../warp/.agents/skills/triage-issue-local/SKILL.md` | host-adapter | `skills/triage-issue-local-san/SKILL.md` | `HOST_TRIAGE_CORE`, `HOST_LABEL_TAXONOMY`, `HOST_OWNER_ROUTING` | upstream core missing from `warp/` |
| `../warp/.agents/skills/dedupe-issue-local/SKILL.md` | host-adapter | `skills/dedupe-issue-local-san/SKILL.md` | `HOST_DEDUPE_CORE`, `HOST_LABEL_TAXONOMY`, `HOST_DUPLICATE_POLICY` | upstream core missing from `warp/` |
| `../warp/.agents/skills/warp-integration-test/SKILL.md` | bench-ready | `skills/warp-integration-test-san/SKILL.md` | `HOST_INTEGRATION_TEST_SYSTEM`, `HOST_ARTIFACT_DIR`, `HOST_VISUAL_EVIDENCE_POLICY` | activate only with matching harness |
| `../warp/.warp/skills/integration-test-video/SKILL.md` | bench-ready | `skills/integration-test-video-san/SKILL.md` | `HOST_INTEGRATION_TEST_SYSTEM`, `HOST_VIDEO_CAPTURE`, `HOST_ARTIFACT_DIR` | usually benched |
| `../warp/.agents/skills/warp-ui-guidelines/SKILL.md` | bench-ready | `skills/warp-ui-guidelines-san/SKILL.md` | `HOST_UI_FRAMEWORK`, `HOST_DESIGN_SYSTEM`, `HOST_UI_REVIEW_RULES` | UI stack specific |

## Dependency gaps that change classification

- `triage-issue-local` depends on a core `triage-issue` skill not present in
  `../warp/`.
- `dedupe-issue-local` depends on a core `dedupe-issue` skill not present in
  `../warp/`.
- `review-pr-local` has a satisfiable dependency because `review-pr` is present
  in `../warp/` and is also sanitized in this package.

## Canonical transplant artifacts

- Host activation report: `transplant-report.md`
- Host bench manifest: `SDLC-bench/manifests/<host>-transplant.md`