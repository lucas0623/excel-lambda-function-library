---
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the circular hollow section (CHS) property table stored in the formula. The array is 86 rows by 10 columns: three header rows, then 83 sections from `21.3x2.3` through `168.3x12.5`.

## Syntax

```
=Table.CHS1()
```

`Table.CHS1` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.CHS1()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, D, tw, I, r, Wel, Wpl, IT, A.
- Row 2 names those properties. D is described as depth of section, and tw as web thickness.
- Row 3 stores the units, and its first cell is Section Name.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.CHS2]]
- [[Table.CHS3]]
