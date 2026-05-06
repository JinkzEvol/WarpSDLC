# Release Readiness

This document is the final gate before creating a public GitHub repository or enabling npm publication.

Current state: not ready.

Known completed evidence:

- Local APM install validation passed against `..\warp-apm-package` using `--target agent-skills`
- The staged package deploys `package-compliance-review` into `.agents/skills/` in a clean consumer
- The staged package deploys 24 skill directories and preserves the `warp-transplant-grow` agent sidecar inside the installed skill bundle
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

- Candidate version:
- Date:
- Reviewer:

### GitHub readiness

- Ready for public GitHub repo: yes/no
- Intended install command:
- Validation evidence location:

### npm readiness

- Ready for npm publish: yes/no
- Tarball reviewed: yes/no
- Final package license:

### Notes

- 