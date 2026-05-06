## Category: License compliance
## Criteria:
- Every approved or shipped file appears in `docs/provenance-matrix.md`
- No shipped file has `unknown` license class
- Top-level license metadata matches the actual shipped content
## Severity: blocking
## Source: Warp packaging compliance plan
## Last triggered: never

## Category: Package structure
## Criteria:
- Real package content exists only under supported APM layout paths
- Template content is not mistaken for shipped package content
- `README.md` describes the exact intended install surface
## Severity: blocking
## Source: APM package type and installability requirements
## Last triggered: never

## Category: Publication safety
## Criteria:
- `package.json` remains `private: true` until publication approval is documented
- No publish command or release workflow is added before compliance approval
- The intended `apm install` path has been tested before release
## Severity: warning
## Source: staged scaffold workflow
## Last triggered: never