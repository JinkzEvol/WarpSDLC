---
name: write-product-spec-san
description: Write a host-neutral PRODUCT.md for a substantial feature and keep explicit placeholder comments wherever the host repo must bind spec paths, task ids, or design evidence.
---

# write-product-spec-san

Use this skill for user-facing behavior specs.

<!-- HOST-PLACEHOLDER: Bind HOST_SPEC_ROOT before creating PRODUCT.md. -->
<!-- HOST-PLACEHOLDER: Bind HOST_TASK_SYSTEM for the spec id strategy. -->
<!-- HOST-PLACEHOLDER: Bind HOST_DESIGN_EVIDENCE when design mocks or screenshots are required. -->

## Workflow

1. Confirm the request is large or ambiguous enough to justify a product spec.
2. Create `PRODUCT.md` in the host spec root using the host task id strategy.
3. Describe behavior, invariants, edge cases, and success conditions without
   implementation detail.
4. Keep placeholder comments until the host repo fills them with real paths or
   policies.