---
description: "Returns the joint-coordinate table header for a SAP2000 .s2k file."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_JTCOORHEADER
AI Reviewed: true
---

## Overview

Returns the joint-coordinate table header for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_jtCoorHeader()
```

The s2k_jtCoorHeader function has the following arguments:

| Argument | Description |
| --- | --- |
| — | This function takes no arguments. |

## Remarks

- The LAMBDA has no parameters. Its calculation is a single `CONCAT`.
- The returned text is `Table: "JOINT COORDINATES"`. The quotation marks are `CHAR(34)`.
- Place the records from [[s2k_jtCoor]] under this header.
- The formula has no error branch.

## Related functions

- [[s2k_jtCoor]] — one joint record for this table.
