# Policy layer mapping

Use this mapping to convert host bindings into policy artifacts.

| Host signal | Artifact target | Notes |
| --- | --- | --- |
| `HOST_PR_TEMPLATE` | `review-contract.md` | Define required PR sections and evidence requirements. |
| `HOST_LABEL_TAXONOMY` | `intake-and-triage.md` | Document routing and severity labels. |
| `HOST_REVIEW_OUTPUT` + `HOST_REVIEW_SEVERITY` | `review-contract.md` | Keep review schema and severity vocabulary explicit. |
| `HOST_TASK_SYSTEM` | `transplant-policy-summary.md` | Align planning and execution state transitions. |
| `HOST_REPO_CONVENTIONS` | `transplant-policy-summary.md` | Anchor policy to existing repo governance. |

If no signal exists for a row, record a TODO and keep the output as draft-state.
