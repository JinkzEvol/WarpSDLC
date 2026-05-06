---
name: update-skill-san
description: Update sanitized skills, prompts, or rules in the transplanted SDLC package and preserve placeholders for the host skill root, validator, and review loop.
---

# update-skill-san

Use this skill when the transplanted SDLC package itself needs maintenance.

<!-- HOST-PLACEHOLDER: Bind HOST_SKILL_ROOT to the host skill directory. -->
<!-- HOST-PLACEHOLDER: Bind HOST_SKILL_VALIDATOR to the host validation command or tool. -->
<!-- HOST-PLACEHOLDER: Bind HOST_REVIEW_LOOP to the host feedback process. -->

## Workflow

1. Identify whether the change belongs in the generic core, a host adapter, or
   the bench policy.
2. Update the target skill without removing placeholder comments that are still
   unresolved.
3. Validate the skill using the host validator when one exists.
4. Record follow-up work in the host review loop if the package needs broader
   restructuring.