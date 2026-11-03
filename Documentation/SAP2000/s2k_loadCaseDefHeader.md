---
description: "Returns the load-case definition table header for a SAP2000 .s2k file."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_LOADCASEDEFHEADER
AI Reviewed: true
---

## Overview

Returns the load-case definition table header for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_loadCaseDefHeader()
```

The s2k_loadCaseDefHeader function has the following arguments:

| Argument | Description |
| --- | --- |
| — | This function takes no arguments. |

## Remarks

- The LAMBDA has no parameters. Its calculation is a single `CONCAT`.
- The returned text is `Table: "LOAD CASE DEFINITIONS"`. The quotation marks are `CHAR(34)`.
- Place the records from [[s2k_loadCaseDef]] under this header.
- The formula has no error branch.

## Related functions

- [[s2k_loadCaseDef]] — one load-case definition for this table.
