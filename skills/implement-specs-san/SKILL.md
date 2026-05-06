---
name: implement-specs-san
description: Implement an approved PRODUCT.md and TECH.md pair while keeping specs, code, and validation evidence aligned in the same host-repo change set.
---

# implement-specs-san

Use this skill after the spec pair is approved.

<!-- HOST-PLACEHOLDER: Bind HOST_VALIDATION_COMMAND for the narrowest useful check. -->
<!-- HOST-PLACEHOLDER: Bind HOST_CHANGE_MANAGEMENT if the host tracks decisions separately. -->

## Workflow

1. Use `PRODUCT.md` as the behavior contract and `TECH.md` as the build plan.
2. Implement the smallest vertical slice first.
3. Keep specs current when behavior or design shifts.
4. Run the host validation command before opening or updating review.