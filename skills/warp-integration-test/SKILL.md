---
name: warp-integration-test
description: Adapt the upstream Warp integration-test workflow to a host repo only when the host exposes HOST_INTEGRATION_TEST_SYSTEM with a compatible harness; otherwise preserve the sanitized module for SDLC-bench. Do not invoke if HOST_INTEGRATION_TEST_SYSTEM is unbound.
---

# warp-integration-test

Use this only when the host repo has a real integration or E2E harness.

<!-- HOST-PLACEHOLDER: Bind HOST_INTEGRATION_TEST_SYSTEM to the host harness. -->
<!-- HOST-PLACEHOLDER: Bind HOST_ARTIFACT_DIR to the host artifact path. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VISUAL_EVIDENCE_POLICY for screenshots or videos. -->

## Workflow

1. Confirm the host has a stable integration-test system.
2. Map the upstream intent to the host harness instead of recreating Warp's
   internal framework.
3. Register artifacts and assertions using the host conventions.
4. If the host lacks a usable harness, bench this skill rather than forcing it.