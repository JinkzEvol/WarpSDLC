# Binding audit

Run this audit before any activation.

Authoritative source:

- `transplant-package-manifest.json`

Audit process:

1. Read every skill entry from `transplant-package-manifest.json`.
2. For each portable-core skill, require every `requiredBindings` entry before
	activation.
3. For each host-adapter skill, activate only if its `requiredBindings` are
	satisfied; otherwise defer or bench it.
4. For each bench-ready skill, default to bench unless the required bindings are
	satisfied and the host opts in.

Audit rule:

- unresolved portable-core binding: stop and write blocked `transplant-report.md`
- unresolved host-adapter binding: do not activate the affected skill
- unresolved bench-ready binding: keep the skill in `SDLC-bench/`