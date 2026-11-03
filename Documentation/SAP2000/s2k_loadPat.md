---
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_LOADPAT
AI Reviewed: true
---

# s2k_loadPat function

Returns one load-pattern definition record for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_loadPat(name, [selfWtMult], [DesignType])
```

The s2k_loadPat function has the following arguments:

| Argument | Description |
| --- | --- |
| `name` | Required. Load pattern name, written after `LoadPat=`. |
| `selfWtMult` | Optional. Self-weight multiplier, written after `SelfWtMult=`. Omitted means `0`. |
| `DesignType` | Optional. Design type, written after `DesignType=`. Omitted means `Live`. |

## Remarks

- The result is one text line. The fields are joined by three spaces, in this order: `LoadPat`, `DesignType`, `SelfWtMult`. That is not the same order as the arguments. `selfWtMult` is the second argument and `DesignType` is the third.
- `ISOMITTED` supplies the defaults. A blank cell that is passed in is not omitted, so it is written as given.
- The formula does not check that `DesignType` is a SAP2000 design type.
- The line belongs under the table header from [[s2k_loadPatHeader]], `Table: "LOAD PATTERN DEFINITIONS"`.
- The formula has no error branch.

The joined text has this shape:

```
LoadPat=<name>   DesignType=Live   SelfWtMult=0
```

## Related functions

- [[s2k_loadPatHeader]] — header for the same table.
- [[s2k_staticLoadCase]] — a static case that reuses this pattern name.
