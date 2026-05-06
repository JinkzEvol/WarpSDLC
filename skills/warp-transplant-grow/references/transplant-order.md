# Transplant order

1. Read the host repo contract.
2. Bind global placeholders: spec root, validation commands, PR process,
   review output contract, issue taxonomy, feature-gate model.
3. Run the binding audit. If any portable-core binding is unresolved, stop and
    write a blocked `transplant-report.md`.
4. Install portable core skills.
5. Install host-adapter skills whose bindings are satisfied.
6. Move conditional or unsupported modules into `SDLC-bench/`.
7. Write `transplant-report.md` and `SDLC-bench/manifests/<host>-transplant.md`.