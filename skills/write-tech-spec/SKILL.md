---
name: write-tech-spec
description: Write a host-neutral TECH.md from an approved product spec and preserve placeholder comments for HOST_SPEC_ROOT, HOST_VALIDATION_COMMAND, and architecture review expectations. Do not invoke if either binding is unbound.
---

# write-tech-spec

Use this skill after the product behavior is clear enough to plan implementation.

<!-- HOST-PLACEHOLDER: Bind HOST_SPEC_ROOT before creating TECH.md. -->
<!-- HOST-PLACEHOLDER: Bind HOST_VALIDATION_COMMAND for the narrow validation step. -->
<!-- HOST-PLACEHOLDER: Bind HOST_ARCH_REVIEW if the host repo requires an ADR or architecture gate. -->

## Workflow

1. Read the approved `PRODUCT.md`.
2. Identify the smallest code paths and data flows that control the behavior.
3. Write `TECH.md` with implementation shape, sequencing, risks, and validation.
4. Reference host review or ADR rules through the placeholder comments rather
   than inventing new process.