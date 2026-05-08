# Placeholder Catalog

The sanitized package uses stable placeholder ids so the transplant layer can
bind host-specific details without reintroducing Warp-specific text.

| Placeholder id | Meaning | Typical binding |
| --- | --- | --- |
| `HOST_SPEC_ROOT` | Where product and tech specs live | `specs/<ticket>/` or `docs/specs/<ticket>/` |
| `HOST_TASK_SYSTEM` | Ticket or work-item system | GitHub issues, Jira, Linear, plain feature slug |
| `HOST_DESIGN_EVIDENCE` | Where UX evidence lives | Figma link, screenshot folder, ADR link |
| `HOST_VALIDATION_COMMAND` | Narrow validation command | `npm test`, `cargo nextest`, `pnpm lint` |
| `HOST_ARCH_REVIEW` | Architecture review ritual | ADR link, architecture doc, reviewer tag |
| `HOST_BASE_BRANCH` | Default merge base | `main`, `master`, release branch |
| `HOST_PR_TEMPLATE` | PR structure and required sections | local PR template path or generated text |
| `HOST_CHANGELOG_POLICY` | How release notes are captured | changelog section, release notes label, none |
| `HOST_REPO_CONVENTIONS` | Repo-local rules referenced by overlays | docs file, handbook, AGENTS file |
| `HOST_PR_MEDIA_POLICY` | Screenshot or video requirements for review | template section, reviewer checklist, none |
| `HOST_REVIEW_OUTPUT` | Review artifact path or schema | `review.json`, GitHub comment body, Markdown |
| `HOST_REVIEW_SEVERITY` | Severity vocabulary | critical/important/suggestion, P0/P1/P2 |
| `HOST_REVIEW_AUTOMATION` | How review artifacts get published | workflow, bot, manual copy |
| `HOST_BUILD_COMMAND` | Build or compile command | `cargo build`, `npm run build` |
| `HOST_LINT_COMMAND` | Lint or typecheck command | `cargo clippy`, `eslint`, `tsc -b` |
| `HOST_TEST_COMMAND` | Test command | `cargo nextest`, `pytest`, `vitest` |
| `HOST_ERROR_BUDGET` | Allowed repair or retry scope | one failing command, whole presubmit, none |
| `HOST_CI_PROVIDER` | CI system | GitHub Actions, GitLab, Buildkite |
| `HOST_LOG_ARTIFACTS` | Where CI logs live | workflow artifacts, job URLs, text files |
| `HOST_PLAN_DESTINATION` | Where repair plans are written | issue comment, Markdown plan, JSON report |
| `HOST_CONFLICT_EXTRACTOR` | Optional helper for merge-conflict context | custom script, none |
| `HOST_SKILL_ROOT` | Where host skills live | `.agents/skills/`, `skills/` |
| `HOST_SKILL_VALIDATOR` | Skill validation command | local script, schema validator, none |
| `HOST_REVIEW_LOOP` | Feedback mechanism for skills | code review, issue backlog, scheduled workflow |
| `HOST_RUST_TEST_ROOT` | Canonical Rust crate or test root | `crates/<name>/`, `src/`, `tests/` |
| `HOST_TEST_CONVENTIONS` | Naming and placement rules for tests | file suffix, folder, framework rules |
| `HOST_FEATURE_FLAG_SYSTEM` | Feature gating implementation | enum, config file, flags service, none |
| `HOST_FLAG_REGISTRY` | Canonical flag registry path | source file, YAML, admin tool |
| `HOST_DEFAULT_ROLLOUT_CHANNELS` | Default rollout stages | dev, preview, stable |
| `HOST_RELEASE_CHANNEL_MODEL` | How releases move across channels | config file, release train, none |
| `HOST_TELEMETRY_SYSTEM` | Event pipeline | analytics SDK, logging layer, event bus |
| `HOST_EVENT_SCHEMA` | Event schema source | typed event map, JSON schema, docs |
| `HOST_PRIVACY_POLICY` | Privacy and data handling rules | internal policy link, public doc |
| `HOST_TRIAGE_CORE` | Core issue-triage primitive | host skill, workflow, manual process |
| `HOST_DEDUPE_CORE` | Core issue-deduplication primitive | host skill, workflow, manual process |
| `HOST_LABEL_TAXONOMY` | Labels used for issues or review | `area:*`, team labels, severity labels |
| `HOST_OWNER_ROUTING` | Owner or stakeholder routing source | CODEOWNERS, stakeholder map, labels |
| `HOST_DUPLICATE_POLICY` | Duplicate issue decision rule | close, link, group, leave open |
| `HOST_INTEGRATION_TEST_SYSTEM` | Integration/E2E harness | Playwright, Cypress, custom runner |
| `HOST_ARTIFACT_DIR` | Artifact output folder | `artifacts/`, CI temp dir |
| `HOST_VISUAL_EVIDENCE_POLICY` | Screenshots/video requirements | required, optional, disabled |
| `HOST_VIDEO_CAPTURE` | Video capture mechanism | Playwright trace/video, ffmpeg, none |
| `HOST_UI_FRAMEWORK` | UI technology | React, SwiftUI, Qt, none |
| `HOST_DESIGN_SYSTEM` | Shared UI primitives | component library, theme tokens, none |
| `HOST_UI_REVIEW_RULES` | UI review expectations | accessibility checklist, screenshot rules |
| `HOST_CHANGE_MANAGEMENT` | How spec drift is recorded | ADR, decisions log, PR notes |
| `HOST_RESEARCH_SOURCES` | Authoritative internal source roots for research brief | internal wiki, design library, vendor docs root |
| `HOST_SOP_OWNER` | Owner responsible for SOP review of AI-authored policy drafts | team name, person, role |

## Comment syntax

Use HTML comments so the placeholder remains visible in Markdown without breaking
rendering:

```md
<!-- HOST-PLACEHOLDER: Bind HOST_SPEC_ROOT before creating PRODUCT.md. -->
```