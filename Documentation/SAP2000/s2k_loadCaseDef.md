---
description: "Returns one linear-static load-case definition for a SAP2000 .s2k file."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_LOADCASEDEF
AI Reviewed: true
---

## Overview

Returns one linear-static load-case definition for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_loadCaseDef(name)
```

The s2k_loadCaseDef function has the following arguments:

| Argument | Description |
| --- | --- |
| `name` | Required. Load case name, written after `Case=`. |

## Remarks

- The result is one text line. The fields are joined by three spaces: `Case`, then `Type`.
- `Type` is always `LinStatic`.
- The line belongs under the table header from [[s2k_loadCaseDefHeader]], `Table: "LOAD CASE DEFINITIONS"`.
- The formula has no error branch.

The joined text has this shape:

```
Case=<name>   Type=LinStatic
```

## Related functions

- [[s2k_loadCaseDefHeader]] — header for the same table.
- [[s2k_staticLoadCase]] — the static assignment that uses the same case name.
