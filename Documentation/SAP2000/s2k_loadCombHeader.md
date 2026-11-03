---
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_LOADCOMBHEADER
AI Reviewed: true
---

## Overview

Returns the load-combination table header for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_loadCombHeader()
```

The s2k_loadCombHeader function has the following arguments:

| Argument | Description |
| --- | --- |
| — | This function takes no arguments. |

## Remarks

- The LAMBDA has no parameters. Its calculation is a single `CONCAT`.
- The returned text is `Table: "COMBINATION DEFINITIONS"`. The quotation marks are `CHAR(34)`.
- Place a [[s2k_createLoadComb]] line under this header, then one [[s2k_addLoadCaseToLoadComb]] line for each case in the combination.
- The formula has no error branch.

## Related functions

- [[s2k_createLoadComb]] — combination name and type.
- [[s2k_addLoadCaseToLoadComb]] — one case and its scale factor.
