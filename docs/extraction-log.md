# Extraction Log

Record each extraction pass here.

## Template

- Date:
- Source commit or branch:
- Files copied:
- Files rejected:
- Open questions:
- Reviewer:

## 2026-05-06 - Initial staging baseline

- Date: 2026-05-06
- Source commit or branch: local scaffold only
- Files copied: none from upstream Warp
- Files rejected: none yet; upstream candidates remain unapproved
- Open questions:
	- Which upstream skills, if any, are intended for the first public package?
	- Will the first public release stay GitHub-only for `apm install`?
	- Does the first release need to include any AGPL-derived content at all?
- Reviewer: GitHub Copilot

## 2026-05-06 - First upstream candidate recorded

- Date: 2026-05-06
- Source commit or branch: upstream `../warp`
- Files copied: none
- Files rejected: none
- Open questions:
	- `../warp/.agents/skills/review-pr-local/SKILL.md` appears structurally compatible with a skill package, but remains unapproved due to license scope
	- APM CLI is not installed locally, so end-to-end `apm install` validation is deferred until the tool is available
- Reviewer: GitHub Copilot

## 2026-05-06 - Deeper review of `review-pr-local`

- Date: 2026-05-06
- Source commit or branch: upstream `../warp`
- Files copied: none
- Files rejected: none
- Open questions:
	- If this skill were ever extracted, should `review-pr` be packaged with it as a multi-skill bundle or should the specialization be removed?
	- If the repo-specific references are rewritten, does the resulting skill remain derived enough to require AGPL treatment?
- Reviewer: GitHub Copilot
- Notes:
	- `review-pr-local` is blocked as a standalone extraction candidate because it depends on `review-pr` and references repository-local guidance files.
