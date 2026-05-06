---
name: create-pr-san
description: Prepare or update a pull request after local validation passes and preserve placeholder comments for the host base branch, PR template, changelog policy, and validation contract.
---

# create-pr-san

Use this skill when changes are ready for review.

<!-- HOST-PLACEHOLDER: Bind HOST_BASE_BRANCH before creating the PR. -->
<!-- HOST-PLACEHOLDER: Bind HOST_PR_TEMPLATE or the required PR sections. -->
<!-- HOST-PLACEHOLDER: Bind HOST_CHANGELOG_POLICY if release notes are required. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VALIDATION_COMMAND for the final local check. -->

## Workflow

1. Confirm the host validation command passes.
2. Summarize the user-visible behavior, validation, and risk.
3. Apply the host PR structure and changelog policy.
4. Open or update the PR without inventing fields the host repo does not use.