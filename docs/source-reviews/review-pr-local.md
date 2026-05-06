# Source Review: review-pr-local

## Source reviewed

- `../warp/.agents/skills/review-pr-local/SKILL.md`
- `../warp/.agents/skills/review-pr/SKILL.md`
- `../warp/WARP.md`
- `../warp/.github/pull_request_template.md`

## Review date

- 2026-05-06

## Summary

`review-pr-local` is structurally compatible with a skill package but is not a clean standalone extraction candidate.

## Findings

1. It declares `specializes: review-pr`, so it depends on the upstream `review-pr` skill for its base behavior.
2. It references repository conventions from `WARP.md`, which is a repo-scoped guidance file rather than a skill-local reference.
3. It references screenshot and video expectations tied to `.github/pull_request_template.md`, which is also repo-specific.
4. Both the local skill and its core dependency live outside the MIT-scoped UI crate area described in the upstream Warp README, so they should be treated as AGPL-derived unless proven otherwise.

## Current decision

- Status: blocked as a standalone extraction candidate
- Reason: semantic dependency on another skill plus repo-specific references

## Possible future paths

1. Exclude this skill from the first package release.
2. Create an original replacement skill that captures only the desired review workflow without copying upstream text.
3. Reassess as an AGPL-governed multi-skill package only if that license outcome is acceptable.