---
description: "Returns one static load-case assignment for a SAP2000 .s2k file."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_STATICLOADCASE
AI Reviewed: true
---

## Overview

Returns one static load-case assignment for a SAP2000 `.s2k` file. The case name and the load pattern name are the same text.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_staticLoadCase(name)
```

The s2k_staticLoadCase function has the following arguments:

| Argument | Description |
| --- | --- |
| `name` | Required. Written after both `Case=` and `LoadName=`. |

## Remarks

- The result is one text line. The fields are joined by three spaces, in this order: `Case`, `LoadType`, `LoadName`, `LoadSF`.
- `LoadType` is always `"Load pattern"`, with quotation marks from `CHAR(34)`.
- `LoadName` is the same value as `Case`. The formula has no separate pattern-name argument.
- `LoadSF` is always `1`.
- The line belongs under the table header from [[s2k_staticLoadCaseHeader]], `Table: "CASE - STATIC 1 - LOAD ASSIGNMENTS"`.
- The formula has no error branch.

The joined text has this shape:

```
Case=<name>   LoadType="Load pattern"   LoadName=<name>   LoadSF=1
```

## Related functions

- [[s2k_staticLoadCaseHeader]] — header for the same table.
- [[s2k_loadCaseDef]] — the `LinStatic` case definition for this name.
- [[s2k_loadPat]] — the load pattern of the same name.
