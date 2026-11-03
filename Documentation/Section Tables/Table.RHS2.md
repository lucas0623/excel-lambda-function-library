---
description: "Returns the rectangular hollow section (RHS) property table stored in the formula, from 120x60x3.6 through 200x120x12.5."
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the rectangular hollow section (RHS) property table stored in the formula. The array is 62 rows by 18 columns: three header rows, then 59 sections from `120x60x3.6` through `200x120x12.5`.

## Syntax

```
=Table.RHS2()
```

`Table.RHS2` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.RHS2()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, h, b, tw, tf, r, d, Iy, Iz, ry, rz, Wel,y, Wel,z, Wpl,y, Wpl,z, IT, A.
- Row 2 names those properties, from mass per metre through area of section. Row 3 stores the units, and its first cell is Section Name.
- The columns end at IT and A.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.RHS1]]
- [[Table.RHS3]]
