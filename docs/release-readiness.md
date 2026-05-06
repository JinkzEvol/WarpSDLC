# Release Readiness

This document is the final gate before creating a public GitHub repository or enabling npm publication.

Current state: **v0.2.0 released to GitHub. Public install validated.**

Known completed evidence:

- Local APM install validation passed against `..\warp-apm-package` using `--target agent-skills`
- The staged package deploys `package-compliance-review` into `.agents/skills/` in a clean consumer
- The package deploys 27 skill directories and preserves both `warp-transplant-grow` and `genesis-architect` sidecars inside the installed skill bundle
- One upstream Warp skill (`review-pr-local`) has a documented blocked-as-is provenance review

## Publication targets

### GitHub for `apm install`

Required before public publication:

- The package scope is explicit and documented in `README.md`
- Every shipped file is present in `docs/provenance-matrix.md`
- Every copied upstream file is present in `docs/allowlist.md`
- No shipped file has `unknown` provenance
- Local validation from `docs/local-validation.md` passes
- The exact intended install command is known

Recommended evidence to keep with the release candidate:

- Validator output from `npm run validate:skills`
- Dry-run or real `apm install` output from a clean local consumer
- Final provenance review notes for every upstream file included in the release

### npm publication

Do not enable npm publication until all of the following are true:

- A final license decision has been recorded in `docs/license-decision-log.md`
- `package.json` has been updated away from staging-only values
- `.npmignore` and `files` both match the intended tarball surface
- A tarball inspection confirms no staging-only docs or templates would ship
- GitHub publication requirements are already satisfied

## Blocking questions

- Will the first public release contain any upstream Warp-derived content at all?
- If yes, is the first public release GitHub-only, or does it also need npm packaging?
- If upstream content is included, what top-level license and notice files are required?

## Final sign-off template

### Release candidate

- Candidate version: 0.2.0
- Date: 2026-05-06
- Reviewer: JinkzEvol

### GitHub readiness

- Ready for public GitHub repo: yes
- Intended install command: `apm install JinkzEvol/WarpSDLC`
- Public install validated: yes — 27 skills, layered references and agent sidecars confirmed, commit fc172c7
- Tag: v0.2.0 at https://github.com/JinkzEvol/WarpSDLC/releases/tag/v0.2.0
- Validation evidence location:

### npm readiness

- Ready for npm publish: yes/no
- Tarball reviewed: yes/no
- Final package license: Apache-2.0

### Notes

- 