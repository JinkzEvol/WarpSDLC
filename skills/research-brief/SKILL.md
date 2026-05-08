---
name: research-brief
description: Produce a cited research brief from an approved tech spec at HOST_SPEC_ROOT and write research-brief.md to HOST_PLAN_DESTINATION with claims+citations and an explicit unknowns list. Invoke between write-tech-spec and implement-specs. Do not invoke if HOST_SPEC_ROOT or HOST_PLAN_DESTINATION are unbound.
---

# research-brief

Use this skill after write-tech-spec and before implement-specs.

<!-- HOST-PLACEHOLDER: Bind HOST_SPEC_ROOT to the directory holding approved PRODUCT.md and TECH.md. -->
<!-- HOST-PLACEHOLDER: Bind HOST_PLAN_DESTINATION to where research-brief.md should be written. -->
<!-- HOST-PLACEHOLDER: Bind HOST_RESEARCH_SOURCES to authoritative internal source roots if available (optional). -->

## Hard rule

No uncited factual claim may appear in `claims` or `recommended-approach`. If you cannot cite it, it goes in `unknowns`.

## Workflow

1. Read the approved spec from `HOST_SPEC_ROOT`.
2. Extract every statement asserting a fact about an external system, library version, API shape, or project convention.
3. Fetch authoritative evidence for each claim (vendor docs, RFCs, repo source).
4. Move cited claims to `claims`; uncited claims move to `unknowns` with a "resolves when" note.
5. Synthesize `recommended-approach` from cited claims only; flag dependencies on unknowns explicitly.

## Output

Write `research-brief.md` to `HOST_PLAN_DESTINATION`:
- `claims` — each with at least one citation
- `citations` — bibliography (source type: vendor-docs, repo, rfc, paper, wiki)
- `unknowns` — questions unresolvable from sources; each has a "resolves when" statement
- `recommended-approach` — synthesis for `implement-specs` to consume

## Caller contract

`implement-specs` reads `research-brief.md` from `HOST_PLAN_DESTINATION` when present and treats `recommended-approach` as authoritative over inference. Unresolved unknowns block implementation of the dependent area until resolved by a human or another skill.

## Anti-patterns

- Citing the spec as evidence for the spec (self-reference).
- Citing the model's own prose ("As stated above").
- Burying unknowns — the unknowns section is the most valuable output.
