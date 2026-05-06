---
name: package-compliance-review
description: Review an APM package candidate for provenance, allowlist discipline, and publication safety. Use when extracting, approving, or preparing Warp-derived package content.
---

# package-compliance-review

## Purpose

This skill reviews whether package content is ready to move from staging toward publication.

It is intentionally focused on package hygiene rather than product behavior. Use it to verify that a candidate extraction is documented, scoped, and safe to publish.

## When to use

- When new files are proposed for copying from the upstream Warp repo
- When `docs/provenance-matrix.md` or `docs/allowlist.md` changes
- Before changing package metadata such as `apm.yml`, `package.json`, notices, or README install instructions
- Before creating a public GitHub repository or enabling npm publication

## Required inputs

- The current `docs/provenance-matrix.md`
- The current `docs/allowlist.md`
- The current `docs/license-decision-log.md`
- The files proposed for inclusion in `skills/` or other shipped paths

## Review workflow

1. Confirm every proposed shipped file has a provenance entry with a non-empty license classification.
2. Confirm every proposed copied file is explicitly allowed by `docs/allowlist.md`.
3. Confirm no file marked `unknown` is being treated as approved.
4. Confirm package metadata does not imply broader rights than the recorded provenance supports.
5. Call out any staging-only content that would need to be removed or relocated before public publication.

## Output

Produce a short review with these sections:

- `Status`: `ready`, `needs-work`, or `blocked`
- `Findings`: concrete issues tied to files or docs
- `Missing evidence`: anything still required before publication
- `Next safe action`: the smallest compliant next step

## Guardrails

- Do not approve content that lacks provenance.
- Do not assume upstream Warp content is permissively licensed.
- Do not recommend publication while `package.json` remains staging-only unless the recommendation explicitly says to keep it private.