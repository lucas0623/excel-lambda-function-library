---
description: "Returns one combination item: a case name and a scale factor, for a SAP2000 .s2k file."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_ADDLOADCASETOLOADCOMB
AI Reviewed: true
---

## Overview

Returns one combination item: a case name and a scale factor, for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_addLoadCaseToLoadComb(loadCombName, caseName, scaleFactor)
```

The s2k_addLoadCaseToLoadComb function has the following arguments:

| Argument | Description |
| --- | --- |
| `loadCombName` | Required. Combination name, written inside quotes after `ComboName=`. |
| `caseName` | Required. Case or combination name, written inside quotes after `CaseName=`. |
| `scaleFactor` | Required. Scale factor, written after `ScaleFactor=` with no quotes. |

## Remarks

- The result is one text line. The fields are joined by three spaces, in this order: `ComboName`, `CaseName`, `ScaleFactor`.
- `ComboName` and `CaseName` are wrapped in quotation marks from `CHAR(34)`. `ScaleFactor` is not quoted.
- The formula writes `caseName` into the `CaseName` field. It does not distinguish a load case from another combination.
- The line belongs under the table header from [[s2k_loadCombHeader]], `Table: "COMBINATION DEFINITIONS"`, after the [[s2k_createLoadComb]] line for the same combination.
- The formula has no error branch.

The joined text has this shape:

```
ComboName="<loadCombName>"   CaseName="<caseName>"   ScaleFactor=<scaleFactor>
```

## Related functions

- [[s2k_loadCombHeader]] — header for the same table.
- [[s2k_createLoadComb]] — the combination this case is added to.
