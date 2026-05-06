# Transplant order

1. Read the host repo contract.
2. Run repo analysis and write `transplant-analysis.md`.
3. Apply recommendation rules and write `transplant-recommendation.md`.
4. Write `transplant-preview.md` covering all mode behaviors and the selected
    mode.
5. Bind global placeholders: spec root, validation commands, PR process,
    review output contract, issue taxonomy, feature-gate model.
6. Run the binding audit. If any portable-core binding is unresolved, stop and
    write a blocked `transplant-report.md`.
7. Install portable core skills.
8. Install host-adapter skills whose bindings are satisfied.
9. If mode includes policy layer, run `transplant-policy-pack`.
10. If mode includes workflow layer, run `transplant-workflow-pack`.
11. Move conditional or unsupported modules into `SDLC-bench/`.
12. Write `transplant-report.md` and `SDLC-bench/manifests/<host>-transplant.md`.