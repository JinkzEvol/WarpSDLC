---
name: remove-feature-flag-san
description: Remove a stabilized host feature gate and the dead branches behind it while preserving placeholder comments for the host flag system and validation command.
---

# remove-feature-flag-san

Use this skill when the rollout is complete and the host no longer needs the
gate.

<!-- HOST-PLACEHOLDER: Bind HOST_FEATURE_FLAG_SYSTEM to the host gate model. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VALIDATION_COMMAND for the cleanup verification. -->

## Workflow

1. Confirm the host no longer needs the fallback or staged rollout.
2. Remove the flag definition and dead branches.
3. Run the host validation command.
4. Update any rollout or release notes that still mention the flag.