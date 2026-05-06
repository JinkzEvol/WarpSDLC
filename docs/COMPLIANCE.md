# Compliance Notes

This repo exists to separate packaging work from the upstream Warp source tree.

Rules:

1. Do not copy content from the upstream repo unless it has a provenance entry.
2. Do not publish this repo until every shipped file has a license classification.
3. Do not assume content from the upstream Warp repo can be relicensed.
4. Do not add a final top-level `LICENSE` file until the shipped content license is decided.
5. Treat `package.json` as staging metadata only while `private` is `true`.

Known upstream fact to verify against future selections:

- Warp README states the `warpui_core` and `warpui` crates are MIT licensed.
- Warp README states the rest of the repository is AGPL v3.

Implication:

- Any package content copied from outside the MIT-scoped portion of the upstream repo must be treated as potentially AGPL-derived until proven otherwise.

Open decisions:

- Final package license
- Whether npm publication is needed at all
- Whether the first release is a skill collection, a single skill bundle, or a broader `.apm/` package