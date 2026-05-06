# Layered transplant modes

The transplant operator must explain mode behavior before activation.

## `skills-only`

- activates: portable core + host-adapter skills whose required bindings resolve
- skips: policy scaffold generation, workflow automation generation
- always performs: binding audit, bench routing, transplant report
- best for: repos with unknown process maturity or partial tooling

## `skills-plus-policy`

- includes all `skills-only` behavior
- additionally activates: `transplant-policy-pack`
- adds: PR/issue/review policy scaffold and operating docs
- best for: repos that have coding/build tooling but inconsistent process docs

## `full-core`

- includes all `skills-plus-policy` behavior
- additionally activates: `transplant-workflow-pack`
- optionally enables: `genesis` for architecture tuning and continuous SDLC
  improvement
- adds: policy + workflow automation plan with explicit owner handoff points
- best for: repos with mature CI and clear ownership that want SDLC automation

## Preview requirement

Before making changes, write `transplant-preview.md` that includes all three
modes in a table:

- activation scope
- skipped components
- new files expected
- risk profile

Then mark one mode as recommended and explain why.
