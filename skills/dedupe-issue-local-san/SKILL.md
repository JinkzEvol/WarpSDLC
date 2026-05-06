---
name: dedupe-issue-local-san
description: Apply host-specific duplicate-issue heuristics on top of a core issue workflow and preserve placeholder comments for the host core, labels, and duplicate policy.
---

# dedupe-issue-local-san

Use this only when the host repo already has a core dedupe or issue-triage
process.

<!-- HOST-PLACEHOLDER: Bind HOST_DEDUPE_CORE to the host dedupe primitive. -->
<!-- HOST-PLACEHOLDER: Bind HOST_LABEL_TAXONOMY to the host issue labels. -->
<!-- HOST-PLACEHOLDER: Bind HOST_DUPLICATE_POLICY to the host duplicate rule. -->

## Workflow

1. Confirm the host has a stable core issue workflow.
2. Compare user-visible symptom, trigger path, evidence, and requested outcome.
3. Apply the host duplicate policy without inventing new labels or flows.
4. If the host lacks the core workflow, bench this skill.