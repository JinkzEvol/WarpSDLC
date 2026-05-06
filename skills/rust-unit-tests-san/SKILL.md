---
name: rust-unit-tests-san
description: Add or improve Rust unit tests in a host repository and keep placeholder comments for the Rust test root and local test conventions; if the host is not a Rust repo, move this skill to SDLC-bench.
---

# rust-unit-tests-san

Use this only when the host repository is Rust-based.

<!-- HOST-PLACEHOLDER: Bind HOST_RUST_TEST_ROOT to the host crate or source layout. -->
<!-- HOST-PLACEHOLDER: Bind HOST_TEST_CONVENTIONS to the host Rust test naming rules. -->

## Workflow

1. Confirm the host repo actually uses Rust.
2. Add focused unit coverage for the touched behavior.
3. Match the host's test-file and module layout.
4. If the host is not Rust, bench this skill instead of adapting it blindly.