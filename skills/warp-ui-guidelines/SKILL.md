---
name: warp-ui-guidelines
description: Preserve the idea of repo-local UI guardrails as a sanitized host adapter and bind it only when the host repo has a real HOST_UI_FRAMEWORK and HOST_DESIGN_SYSTEM. Do not invoke if either binding is unbound.
---

# warp-ui-guidelines

Use this only for hosts that ship a UI and maintain shared UI rules.

<!-- HOST-PLACEHOLDER: Bind HOST_UI_FRAMEWORK to the host UI technology. -->
<!-- HOST-PLACEHOLDER: Bind HOST_DESIGN_SYSTEM to the host shared primitives. -->
<!-- HOST-PLACEHOLDER: Bind HOST_UI_REVIEW_RULES to the host UI review checklist. -->

## Workflow

1. Confirm the host has a UI stack worth documenting.
2. Rewrite Warp-specific component names into host-native categories.
3. Store only the reusable UI guardrails that the host team endorses.
4. If the host is not UI-heavy, bench this skill.