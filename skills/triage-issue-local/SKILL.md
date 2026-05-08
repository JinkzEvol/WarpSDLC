---
name: triage-issue-local
description: Apply host-specific issue-triage heuristics on top of a core issue workflow and preserve placeholder comments for the host core, HOST_LABEL_TAXONOMY, and owner-routing rules. Do not invoke if HOST_LABEL_TAXONOMY is unbound.
---

# triage-issue-local

Use this only when the host repo already has a core issue-triage process.

<!-- HOST-PLACEHOLDER: Bind HOST_TRIAGE_CORE to the host triage primitive. -->
<!-- HOST-PLACEHOLDER: Bind HOST_LABEL_TAXONOMY to the host issue labels. -->
<!-- HOST-PLACEHOLDER: Bind HOST_OWNER_ROUTING to the host owner map. -->

## Workflow

1. Confirm the host issue core exists and is stable.
2. Add only the repo-local heuristics that the generic issue core should not own.
3. Use the host label taxonomy and owner-routing source instead of guessing.
4. If the host lacks the core issue workflow, park this skill in `SDLC-bench/`.