---
name: promote-feature
description: Advance a host feature gate through the HOST_RELEASE_CHANNEL_MODEL and preserve placeholder comments for channel stages, release policy, and changelog expectations. Do not invoke if HOST_RELEASE_CHANNEL_MODEL is unbound.
---

# promote-feature

Use this skill after a flagged feature has proved stable.

<!-- HOST-PLACEHOLDER: Bind HOST_DEFAULT_ROLLOUT_CHANNELS to the host stages. -->
<!-- HOST-PLACEHOLDER: Bind HOST_RELEASE_CHANNEL_MODEL to the host release policy. -->
<!-- HOST-PLACEHOLDER: Bind HOST_CHANGELOG_POLICY when rollout needs release notes. -->

## Workflow

1. Confirm the feature has enough validation to move forward.
2. Update the host rollout stage without deleting the flag too early.
3. Record any release note or changelog obligations.
4. Leave a cleanup trail for `remove-feature-flag-san`.