---
name: diagnose-ci-failures-san
description: Read CI failure evidence, categorize the failing slice, and emit a focused repair plan using host-bound CI, log, and plan-destination placeholders.
---

# diagnose-ci-failures-san

Use this skill when CI failed and the next step is analysis rather than code.

<!-- HOST-PLACEHOLDER: Bind HOST_CI_PROVIDER to the host CI system. -->
<!-- HOST-PLACEHOLDER: Bind HOST_LOG_ARTIFACTS to the host log source. -->
<!-- HOST-PLACEHOLDER: Bind HOST_PLAN_DESTINATION to the repair-plan output path. -->

## Workflow

1. Gather the smallest useful failing logs.
2. Group failures by root cause instead of by every repeated symptom.
3. Point to `fix-errors-san` when the next step is local repair.
4. Write the repair plan to the host destination.