# Workflow tooling matrix

Use detected host tooling to select workflow templates.

| Signal | Condition | Action |
| --- | --- | --- |
| `HOST_CI_PROVIDER` | `github-actions` or workflow files detected | emit GitHub workflow skeleton |
| `HOST_CI_PROVIDER` | other provider | emit provider-agnostic checklist + bench entry |
| `HOST_BUILD_COMMAND` + `HOST_LINT_COMMAND` + `HOST_TEST_COMMAND` | all present | wire full validation gate |
| Missing one or more gate commands | partial | emit partial workflow with explicit TODO gates |
| `HOST_LOG_ARTIFACTS` | present | add failure log capture + retention notes |
| `HOST_PLAN_DESTINATION` | present | publish triage and action plan to destination |

If confidence is low, do not auto-wire destructive or deployment jobs.
