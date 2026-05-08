---
name: add-telemetry
description: Add host-neutral telemetry or instrumentation and preserve placeholder comments for the host event schema, HOST_TELEMETRY_SYSTEM, and privacy rules. Do not invoke if HOST_TELEMETRY_SYSTEM is unbound.
---

# add-telemetry

Use this skill when a host flow needs better observability.

<!-- HOST-PLACEHOLDER: Bind HOST_TELEMETRY_SYSTEM to the event pipeline. -->
<!-- HOST-PLACEHOLDER: Bind HOST_EVENT_SCHEMA to the event naming contract. -->
<!-- HOST-PLACEHOLDER: Bind HOST_PRIVACY_POLICY before capturing sensitive data. -->

## Workflow

1. Decide what decision or behavior the event should explain.
2. Bind the event name and schema to the host telemetry contract.
3. Add the smallest instrumentation point that proves the behavior.
4. Respect host privacy and data-retention rules.