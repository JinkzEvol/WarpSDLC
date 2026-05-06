# Repo analysis

Run this analysis before selecting a transplant mode.

## Signals to collect

- project language/runtime: Rust, Node, Python, mixed
- CI provider and workflow files
- issue and PR process artifacts
- feature flag implementation and release-channel model
- telemetry/event schema system
- integration test harness and artifact strategy
- existing architecture/design discipline docs

## Minimum command set

Use host-native commands to build evidence:

- `git rev-parse --is-inside-work-tree`
- `rg --files .github docs specs .agents 2>$null`
- `rg -n "(workflow|ci|build|lint|test|playwright|cypress|nextest|pytest|vitest|cargo)" .github package.json Cargo.toml pyproject.toml 2>$null`
- `rg -n "(feature flag|rollout|channel|telemetry|event schema|codeowners|issue template|pull request template)" . 2>$null`

## Output format

Write `transplant-analysis.md` with:

1. environment summary
2. detected tooling
3. unresolved binding list
4. confidence level (high/medium/low)
5. mode recommendation inputs (from `recommendation-rules.md`)

If confidence is low, force `skills-only` by default and list what evidence is
missing.
