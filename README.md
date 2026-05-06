# Warp APM Package Staging Repo

This repository is a staging area for an APM package derived from selected, approved content in the upstream Warp repository.

Current status:

- Not publish-ready
- No public release or npm publish should occur until the compliance checklist passes
- Upstream source content must be copied into this repo by allowlist only

Goals:

- Produce a public GitHub repository that can be consumed with `apm install <owner>/<repo>`
- Keep a file-level provenance record for every shipped artifact
- Prevent accidental inclusion of AGPL-covered or otherwise unapproved content
- Preserve the option to publish an npm package later, but only after license review is complete

Recommended packaging model:

- Use an APM skill collection layout under `skills/<name>/SKILL.md` for approved skills
- Keep compliance and provenance records in `docs/`
- Treat the upstream `warp/` clone as read-only source material

Working layout:

- `apm.yml` - APM package manifest
- `package.json` - Private npm metadata for future packaging work
- `skills/` - Approved skill packages go here
- `templates/` - Authoring templates only; not distributed content
- `docs/` - Compliance, provenance, and extraction records
- `quality/criteria.md` - Quality gate for this package repo
- `scripts/` - Local validation helpers for staging work

Before adding any skill content, start with [EXECUTION_CHECKLIST.md](./EXECUTION_CHECKLIST.md).

Useful working docs:

- `docs/candidate-inventory.md` - first-pass list of upstream Warp skill candidates
- `docs/provenance-matrix.md` - file-level approval state
- `docs/allowlist.md` - only paths allowed to be copied
- `docs/release-readiness.md` - pre-publication gates for GitHub and npm
- `docs/local-validation.md` - local APM validation workflow using APM v0.12.2
- `docs/warp-sdlc/report.md` - full Warp SDLC transplant report and file map
- `docs/warp-sdlc/genesis-architect-review.md` - architecture gate for the transplant package