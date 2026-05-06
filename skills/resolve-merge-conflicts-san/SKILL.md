---
name: resolve-merge-conflicts-san
description: Resolve merge conflicts without losing either side's intent and preserve placeholder comments for any host-specific conflict extraction or validation command.
---

# resolve-merge-conflicts-san

Use this skill when files are already conflicted.

<!-- HOST-PLACEHOLDER: Bind HOST_CONFLICT_EXTRACTOR if the host provides a helper script. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VALIDATION_COMMAND for the post-merge check. -->

## Workflow

1. Read both sides and identify the behavior each side is trying to preserve.
2. Merge the minimum required logic.
3. Run the host validation command after the merge.
4. If the host provides no safe validation command, record that explicitly.