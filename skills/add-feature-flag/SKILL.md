---
name: add-feature-flag
description: Add a host-bound feature gate for risky or staged work and preserve placeholder comments for the host flag registry, rollout stages, and HOST_FEATURE_FLAG_SYSTEM. Do not invoke if HOST_FEATURE_FLAG_SYSTEM is unbound.
---

# add-feature-flag

Use this skill only when the host repo has a real feature-gate model.

<!-- HOST-PLACEHOLDER: Bind HOST_FEATURE_FLAG_SYSTEM to the host gating mechanism. -->
<!-- HOST-PLACEHOLDER: Bind HOST_FLAG_REGISTRY to the canonical flag definition path. -->
<!-- HOST-PLACEHOLDER: Bind HOST_DEFAULT_ROLLOUT_CHANNELS to the host rollout stages. -->

## Workflow

1. Confirm the host has a durable way to define and remove flags.
2. Add a flag in the host registry.
3. Gate the minimum risky surface behind the flag.
4. Link the rollout and cleanup path to `promote-feature-san` and
   `remove-feature-flag-san`.