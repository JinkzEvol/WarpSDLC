# Genesis Design Packet For The Transplant Package

## Intent

Build a host-neutral SDLC package from the Warp-only SDLC primitive set without
copying repo-specific Warp guidance into the shipped package. The package must
preserve unsupported or redundant primitives under `SDLC-bench/` instead of
dropping them.

## Component diagram

```mermaid
flowchart LR
    A[docs/warp-sdlc\nanalysis packet] --> B[sanitize-warp-sdlc\nskill]
    B --> C[portable core -san skills]
    B --> D[host-adapter -san skills]
    B --> E[bench-ready -san skills]
    C --> F[warp-transplant-grow\nskill]
    D --> F
    E --> F
    F --> G[host active skills]
    F --> H[host docs and manifests]
    F --> I[host SDLC-bench]
```

## Sequence diagram

```mermaid
sequenceDiagram
    participant U as User
    participant S as sanitize-warp-sdlc
    participant M as Sanitization matrix
    participant T as warp-transplant-grow
    participant H as Host repo
    participant B as SDLC-bench

    U->>S: generate or refresh sanitized layer
    S->>M: read classification and placeholders
    S->>S: rewrite approved primitives as -san skills
    S-->>U: generated manifest
    U->>T: transplant into chosen host
    T->>T: run binding audit gate
    T->>H: install portable core skills
    T->>H: install host-adapter skills with satisfied bindings only
    T->>H: bind host placeholders and docs
    T->>B: park bench-ready or redundant components
    T-->>U: transplant report and bench manifest
```

## Required interlock

Portable-core activation is blocked until the binding audit closes every
required placeholder named by the package manifest. If the audit fails, the
operator writes `transplant-report.md` and stops without partial activation.