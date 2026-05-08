---
name: review-pr
description: Review a checked-out pull request diff from local artifacts and produce structured review output using HOST_REVIEW_OUTPUT and HOST_REVIEW_SEVERITY instead of repo-specific review rules. Do not invoke if either binding is unbound.
---

# review-pr

Use this skill when the diff and PR description are already available locally.

<!-- HOST-PLACEHOLDER: Bind HOST_REVIEW_OUTPUT to the review artifact path or schema. -->
<!-- HOST-PLACEHOLDER: Bind HOST_REVIEW_SEVERITY to the host severity vocabulary. -->
<!-- HOST-PLACEHOLDER: Bind HOST_REVIEW_AUTOMATION if a workflow publishes the review. -->

## Workflow

1. Review only the changed files and lines visible in the diff artifact.
2. Prioritize correctness, security, error handling, and meaningful regressions.
3. Emit structured review output in the host-bound format.
4. Validate the artifact before finishing.