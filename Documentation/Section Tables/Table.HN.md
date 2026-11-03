---
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the Chinese HN section property table stored in the formula. The array is 51 rows by 21 columns: three header rows, then 48 sections from `100x50x9.3` through `1000x300x344.8`.

## Syntax

```
=Table.HN()
```

`Table.HN` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.HN()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, h, b, tw, tf, r, d, Iy, Iz, ry, rz, Wel,y, Wel,z, Wpl,y, Wpl,z, u, x, Iw, IT, A.
- Row 2 names those properties, from mass per metre through area of section. Row 3 stores the units, and its first cell is Section Name.
- The units row leaves u and x empty. Iw is cm6, IT is cm4, and A is cm2.
- Every section row stores a blank for u, x, and Iw.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.HM]]
- [[Table.HW]]
