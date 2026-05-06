# Candidate Inventory

This file is a first-pass inventory of upstream Warp skill directories that may be relevant to a future APM package.

Current status:

- Inventory only
- No entries in this file are approved for extraction by themselves
- Every actual copy decision must still flow through `docs/provenance-matrix.md` and `docs/allowlist.md`

## Source

- Upstream repository: `../warp`
- Source area reviewed: `../warp/.agents/skills/`
- Review date: 2026-05-06

## Initial skill directories discovered

| Skill Directory | Notes | Current Packaging Status |
| --- | --- | --- |
| `add-feature-flag` | Warp repo automation skill | inventory only |
| `add-telemetry` | Warp repo automation skill | inventory only |
| `create-pr` | Warp repo automation skill | inventory only |
| `dedupe-issue-local` | Warp repo automation skill | inventory only |
| `diagnose-ci-failures` | Warp repo automation skill | inventory only |
| `fix-errors` | Warp repo automation skill | inventory only |
| `implement-specs` | Warp repo automation skill | inventory only |
| `promote-feature` | Warp repo automation skill | inventory only |
| `remove-feature-flag` | Warp repo automation skill | inventory only |
| `resolve-merge-conflicts` | Warp repo automation skill | inventory only |
| `review-pr` | Warp repo automation skill | inventory only |
| `review-pr-local` | Repo-specific review companion skill; deeper review completed | blocked as-is |
| `rust-unit-tests` | Warp repo automation skill | inventory only |
| `spec-driven-implementation` | Warp repo automation skill | inventory only |
| `triage-issue-local` | Warp repo automation skill | inventory only |
| `update-skill` | Warp repo automation skill | inventory only |
| `warp-integration-test` | Warp repo automation skill | inventory only |
| `warp-ui-guidelines` | Warp UI guidance skill | inventory only |
| `write-product-spec` | Warp repo automation skill | inventory only |
| `write-tech-spec` | Warp repo automation skill | inventory only |

## Working assumptions

- These directories live outside the upstream MIT-scoped UI crates described in the Warp README.
- Treat them as potentially AGPL-derived until a file-level review proves otherwise.
- Structural compatibility with an APM skill package does not imply license approval.

## Next review pass

- Select one or two candidate skills for deeper provenance review.
- Record their exact source files and any sidecar dependencies in `docs/provenance-matrix.md`.
- Approve nothing for copying until the intended package scope is explicit.

## Review notes captured so far

### `review-pr-local`

- Depends on `../warp/.agents/skills/review-pr/SKILL.md` via `specializes: review-pr`
- References repo-specific material in `../warp/WARP.md`
- References screenshot and video expectations tied to `../warp/.github/pull_request_template.md`
- Current verdict: structurally compatible with skill packaging, but blocked as a standalone package candidate