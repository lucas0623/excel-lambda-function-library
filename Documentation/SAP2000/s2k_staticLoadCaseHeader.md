---
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_STATICLOADCASEHEADER
AI Reviewed: true
---

## Overview

Returns the static load-assignment table header for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_staticLoadCaseHeader()
```

The s2k_staticLoadCaseHeader function has the following arguments:

| Argument | Description |
| --- | --- |
| — | This function takes no arguments. |

## Remarks

- The LAMBDA has no parameters. Its calculation is a single `CONCAT`.
- The returned text is `Table: "CASE - STATIC 1 - LOAD ASSIGNMENTS"`. The quotation marks are `CHAR(34)`.
- Place the records from [[s2k_staticLoadCase]] under this header.
- The formula has no error branch.

## Related functions

- [[s2k_staticLoadCase]] — one static assignment for this table.
