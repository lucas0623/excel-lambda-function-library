---
description: "Returns the UKPFC section property table stored in the formula, from 430x100x64 through 100x50x10."
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the UKPFC section property table stored in the formula. The array is 19 rows by 21 columns: three header rows, then 16 sections from `430x100x64` through `100x50x10`.

## Syntax

```
=Table.UKPFC()
```

`Table.UKPFC` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.UKPFC()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, h, b, tw, tf, r, d, Iy, Iz, ry, rz, Wel,y, Wel,z, Wpl,y, Wpl,z, u, x, Iw, IT, A.
- Row 2 names those properties, from mass per metre through area of section. Row 3 stores the units, and its first cell is Section Name.
- The units row leaves u and x empty. Iw is cm6, IT is cm4, and A is cm2.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.RSC]]
- [[Table.UKC]]
