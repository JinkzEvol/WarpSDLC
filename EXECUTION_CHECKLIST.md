# Execution Checklist

## Phase 1: Freeze source and define package intent

- [x] Keep `../warp` unchanged as the upstream source repository
- [x] Confirm the target output is a dedicated public GitHub repo, not a pruned copy of the upstream repo
- [ ] Confirm whether the first release will be GitHub-only for APM or GitHub plus npm
- [x] Keep this repo private or unpublished until all compliance gates pass

## Phase 1.5: Validate packaging assumptions early

- [x] Confirm the intended APM layout for the first release: skill collection, single skill bundle, or `.apm/` package
- [x] Test the intended layout against a minimal local example before copying real upstream content
- [ ] Document any required `apm.yml` metadata beyond the current scaffold
- [x] Record the exact local validation commands in `docs/local-validation.md`
- [x] Run the preliminary smoke tests documented in `docs/local-validation.md` before any upstream extraction

## Phase 2: Build the candidate inventory

- [x] List every candidate file or directory from the upstream repo that may belong in the package
- [ ] Limit candidates to agent-facing artifacts first, such as skills, references, prompts, and instructions
- [ ] Exclude Rust application code, binaries, build files, and unrelated assets unless proven necessary
- [ ] Record each candidate in `docs/provenance-matrix.md`

## Phase 3: Classify provenance and license status

- [ ] For each candidate, record its upstream path, intended destination path, and whether it is copied verbatim or modified
- [ ] Classify each candidate as one of: `original/new`, `MIT-covered`, `AGPL-derived`, `third-party`, or `unknown`
- [ ] Record required notices or attribution obligations for each shipped item
- [ ] Block any item that remains `unknown`

## Phase 4: Make the go/no-go license decision

- [ ] Approve a permissive package only if every shipped file is `original/new` or clearly `MIT-covered`
- [ ] If any shipped file is `AGPL-derived`, keep the package license and notices consistent with that reality
- [ ] Do not create a misleading top-level `LICENSE` file until the license decision is complete
- [ ] Do not publish npm metadata that contradicts shipped content

## Phase 5: Extract by allowlist

- [ ] Copy approved content into this repo only through an explicit allowlist
- [ ] Do not delete files from the upstream clone as part of extraction
- [ ] Keep every copied file paired with a provenance entry
- [ ] Store extraction notes and unresolved questions in `docs/extraction-log.md`

## Phase 6: Shape the APM package

- [ ] Place approved skills under `skills/<skill-name>/SKILL.md`
- [ ] Keep skill-local references, assets, and helper files within the same skill directory when they are part of the contract
- [ ] Update `apm.yml` metadata to reflect the actual package scope
- [ ] Update `README.md` with install instructions and scope boundaries

## Phase 7: Validate final release candidate before any publish step

- [ ] Verify every shipped file appears in `docs/provenance-matrix.md`
- [ ] Verify every referenced sidecar file is present in this repo
- [ ] Verify no unapproved upstream directories were copied accidentally
- [ ] Run a dry-run package review against `quality/criteria.md`
- [ ] Run `npm run validate:skills` against the final release candidate contents
- [ ] Run the local consumer validation flow from `docs/local-validation.md` against the final release candidate contents
- [ ] If npm remains in scope, verify `package.json` uses `private: true` until the final license decision

## Phase 8: Release preparation

- [ ] Create the public GitHub repo only after the package content is approved
- [ ] Remove or relocate `templates/` before the first public GitHub publish unless you explicitly want to expose authoring templates
- [ ] Test the exact intended install path with `apm install <owner>/<repo>` or a subdirectory form if needed
- [ ] If publishing to npm later, switch `private` off only after final legal review and tarball inspection
- [ ] Complete `docs/release-readiness.md` and keep the recorded evidence with the release candidate
- [ ] Tag a release only after install validation succeeds from a fresh clone

## Go/No-Go Gates

- [ ] No file with `unknown` provenance remains
- [ ] No file is labeled permissively if it is actually AGPL-derived
- [ ] No placeholder template content is being shipped as real package content
- [ ] The repo layout matches the intended APM package type
- [ ] The published install command has been tested end-to-end