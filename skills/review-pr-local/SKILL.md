---
name: review-pr-local
description: Add host-specific review heuristics on top of review-pr and keep placeholder comments for HOST_REPO_CONVENTIONS, media expectations, and label or routing rules. Do not invoke if HOST_REPO_CONVENTIONS is unbound.
---

# review-pr-local

Use this only when the host repo already has `review-pr-san` active.

<!-- HOST-PLACEHOLDER: Bind HOST_REPO_CONVENTIONS to the host repo's review rules. -->
<!-- HOST-PLACEHOLDER: Bind HOST_PR_MEDIA_POLICY if screenshots or videos are required. -->
<!-- HOST-PLACEHOLDER: Bind HOST_LABEL_TAXONOMY if review labels or tags influence decisions. -->

## Workflow

1. Load the core review contract from `review-pr-san`.
2. Add only the host-specific heuristics that the generic core should not own.
3. Keep media, terminology, and repo-rule expectations explicit through
   placeholder comments until the host bindings exist.
4. If the host lacks a stable review core, keep this skill inactive.