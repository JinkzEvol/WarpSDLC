# Non-AI SDLC Primitives Coupled To The AI System

These artifacts are not AI skills themselves, but the Warp AI SDLC system
depends on them or mentions them directly.

| Primitive | Source path | Why it matters | Coupled AI primitives | Portability |
| --- | --- | --- | --- | --- |
| Repo guidance | `../warp/WARP.md` | Defines commands, coding constraints, PR expectations, and feature flag rules | `create-pr`, `fix-errors`, `review-pr-local`, spec lane | host-adapter |
| PR template | `../warp/.github/pull_request_template.md` | Shapes PR descriptions, changelog fields, and media expectations | `create-pr`, `review-pr`, `review-pr-local` | host-adapter |
| Issue triage taxonomy | `../warp/.github/issue-triage/config.json` | Declares labels and routing vocabulary | `triage-issue-local`, `dedupe-issue-local` | host-adapter |
| Stakeholder routing | `../warp/.github/STAKEHOLDERS` | Provides path or area ownership hints | `triage-issue-local` | host-adapter |
| CI workflow | `../warp/.github/workflows/ci.yml` | Supplies failing checks and validation substrate | `create-pr`, `fix-errors`, `diagnose-ci-failures` | host-adapter |
| Approval workflow | `../warp/.github/workflows/check_approvals.yml` | Defines review gate semantics | `review-pr`, `create-pr` | host-adapter |
| Local review refresher | `../warp/.github/workflows/update-pr-review-local.yml` | Teaches how local review overlays are refreshed | `review-pr-local` | bench-ready |
| Local triage refresher | `../warp/.github/workflows/update-triage-local.yml` | Teaches how local triage overlays are refreshed | `triage-issue-local` | bench-ready |
| Local dedupe refresher | `../warp/.github/workflows/update-dedupe-local.yml` | Teaches how local dedupe overlays are refreshed | `dedupe-issue-local` | bench-ready |
| Presubmit script | `../warp/script/presubmit` | Single-command local validation contract | `create-pr`, `fix-errors` | host-adapter |
| Workspace manifest | `../warp/Cargo.toml` | Declares workspace members and build graph | Rust repair and test skills | conditional portable |
| App manifest | `../warp/app/Cargo.toml` | Stores feature flag and app feature wiring | feature flag skills | host-adapter |
| Toolchain pin | `../warp/rust-toolchain.toml` | Pins compiler and toolchain behavior | Rust test and fix lanes | conditional portable |
| Feature registry | `../warp/crates/warp_core/src/features.rs` | Holds `FeatureFlag` enum and rollout defaults | `add-feature-flag`, `promote-feature`, `remove-feature-flag` | host-adapter |

## Coupling notes

- `review-pr-local` is not standalone. It depends on both the core review skill
  and repo media/review expectations.
- `triage-issue-local` and `dedupe-issue-local` are local overlays that assume
  a core triage or dedupe skill exists outside the `warp` folder.
- The `.github/workflows/update-*.yml` files are useful evidence about how Warp
  maintains local overlays, but they are not portable runtime primitives for a
  generic host repo.