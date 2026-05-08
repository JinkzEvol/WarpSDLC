---
name: warp-transplant-undo
description: Reverse a prior warp-transplant-grow activation using the uninstall manifest written during activation. Reads .warpsdlc/uninstall-manifest.json, restores modified files from backups, removes created files and directories, and emits untransplant-report.md.
---

# warp-transplant-undo

Use this skill to reverse a prior transplant. Requires `.warpsdlc/uninstall-manifest.json`.

## Inputs

- `.warpsdlc/uninstall-manifest.json` — written by `warp-transplant-grow` at activation time

## Flags

- `--dry-run` — report what would happen; write nothing
- `--force` — delete user-modified created files (default: skip and warn)
- `--keep-backups` — do not remove `.warpsdlc/backups/` after undo

## Workflow

1. Validate `.warpsdlc/uninstall-manifest.json` exists and parses.
2. For each `filesModified`: restore from backup at `.warpsdlc/backups/`; verify checksum after.
3. For each `filesCreated`: if current sha matches manifest record, delete; if sha differs, skip with warning unless `--force` is set.
4. For each `directoriesCreated` (deepest first): rmdir if empty.
5. Move `.warpsdlc/uninstall-manifest.json` to `.warpsdlc/history/<timestamp>-undone.json`.
6. Write `untransplant-report.md`.

## Behavior on user-modified files

A file in `filesCreated` whose sha differs from the manifest record is NOT deleted by default — reported as "user-modified, skipped." Use `--force` to override.

## Outputs

- `untransplant-report.md` — reversed files, skipped files (with reasons), backup restorations
- Restored state of `filesModified` entries
- Manifest record moved to `.warpsdlc/history/`
