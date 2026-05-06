---
name: integration-test-video-san
description: Capture visual evidence for host integration tests only when the host provides a compatible test harness and video pipeline; otherwise keep the sanitized module available for SDLC-bench.
---

# integration-test-video-san

Use this only when the host repo already supports visual test capture.

<!-- HOST-PLACEHOLDER: Bind HOST_INTEGRATION_TEST_SYSTEM to the host harness. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VIDEO_CAPTURE to the host video or trace mechanism. -->
<!-- HOST-PLACEHOLDER: Bind HOST_ARTIFACT_DIR to the host artifact path. -->

## Workflow

1. Confirm the host can capture visual artifacts without inventing a new test
   runtime.
2. Bind screenshot, video, or trace output to the host artifact system.
3. Keep the host policy for when visual evidence is required.
4. Bench this skill when visual capture is unavailable.