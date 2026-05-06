---
name: fix-errors-san
description: Repair failing build, lint, typecheck, or test commands in the current host repo by reproducing the narrowest failure first and preserving placeholders for the host command contract.
---

# fix-errors-san

Use this skill when local or CI validation is already failing.

<!-- HOST-PLACEHOLDER: Bind HOST_BUILD_COMMAND for compile failures. -->
<!-- HOST-PLACEHOLDER: Bind HOST_LINT_COMMAND for lint or type errors. -->
<!-- HOST-PLACEHOLDER: Bind HOST_TEST_COMMAND for failing tests. -->
<!-- HOST-PLACEHOLDER: Bind HOST_ERROR_BUDGET if the host limits repair scope. -->

## Workflow

1. Reproduce the smallest failing command.
2. Fix the controlling code path rather than patching symptoms.
3. Rerun the same narrow command before widening scope.
4. Escalate when the host command contract is missing or inconsistent.