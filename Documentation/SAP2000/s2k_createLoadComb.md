---
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_CREATELOADCOMB
AI Reviewed: true
---

## Overview

Returns the name and type line for one load combination in a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_createLoadComb(loadCombName, comboType)
```

The s2k_createLoadComb function has the following arguments:

| Argument | Description |
| --- | --- |
| `loadCombName` | Required. Combination name, written inside quotes after `ComboName=`. |
| `comboType` | Required. Combination type, written inside quotes after `ComboType=`. |

## Remarks

- The result is one text line. The fields are joined by three spaces: `ComboName`, then `ComboType`.
- Both values are wrapped in quotation marks from `CHAR(34)`.
- The formula writes `comboType` as given. It does not check the text.
- The line belongs under the table header from [[s2k_loadCombHeader]], `Table: "COMBINATION DEFINITIONS"`.
- The formula has no error branch.

The joined text has this shape:

```
ComboName="<loadCombName>"   ComboType="<comboType>"
```

## Related functions

- [[s2k_loadCombHeader]] — header for the same table.
- [[s2k_addLoadCaseToLoadComb]] — adds a case to the combination named here.
