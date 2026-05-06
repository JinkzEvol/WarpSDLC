---
name: spec-driven-implementation-san
description: Orchestrate a host-neutral spec-first workflow by creating PRODUCT.md before TECH.md when needed and then handing implementation to the matching sanitized skills.
---

# spec-driven-implementation-san

Use this skill when a feature needs checked-in specs before implementation.

<!-- HOST-PLACEHOLDER: Bind HOST_SPEC_ROOT for spec storage. -->
<!-- HOST-PLACEHOLDER: Bind HOST_TASK_SYSTEM so feature ids are consistent. -->

## Workflow

1. Decide whether the work is large or risky enough to need specs.
2. Invoke `write-product-spec-san` first.
3. Invoke `write-tech-spec-san` when architecture, sequencing, or validation
   warrants a technical plan.
4. Hand the approved spec pair to `implement-specs-san`.