---
name: resolve-merge-conflicts
description: Resolve merge conflicts without losing either side's intent and preserve placeholder comments for HOST_VALIDATION_COMMAND to verify correctness. Do not invoke if HOST_VALIDATION_COMMAND is unbound.
---

# resolve-merge-conflicts

Use this skill when files are already conflicted.

<!-- HOST-PLACEHOLDER: Bind HOST_CONFLICT_EXTRACTOR if the host provides a helper script. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VALIDATION_COMMAND for the post-merge check. -->

## Workflow

1. Read both sides and identify the behavior each side is trying to preserve.
2. Merge the minimum required logic.
3. Run the host validation command after the merge.
4. If the host provides no safe validation command, record that explicitly.