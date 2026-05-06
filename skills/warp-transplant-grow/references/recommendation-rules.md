# Recommendation rules

Use these rules to select the transplant mode from repository signals.

## Rule set

1. If any portable-core binding is unresolved, stop and mark transplant blocked.
2. If portable-core bindings resolve but policy/process signals are weak,
   recommend `skills-only`.
3. If policy/process signals are weak but host wants structure, recommend
   `skills-plus-policy`.
4. If CI plus ownership plus release process signals are strong, recommend
   `full-core`.
5. If confidence is low or evidence conflicts, recommend the safer lower mode.

## Signal scoring

- process maturity signal (0-3): PR template, issue taxonomy, review format
- automation maturity signal (0-3): CI workflows, build/lint/test gates
- operations maturity signal (0-3): release channels, feature flags, telemetry

Recommendation mapping:

- total 0-3: `skills-only`
- total 4-6: `skills-plus-policy`
- total 7-9: `full-core`

## Required output

Write `transplant-recommendation.md` containing:

- selected mode
- score summary and evidence links
- why higher modes were accepted or rejected
- what files and skills will activate
