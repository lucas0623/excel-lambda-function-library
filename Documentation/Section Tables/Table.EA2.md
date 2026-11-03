---
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the equal angle (EA) section property table stored in the formula. The array is 45 rows by 21 columns: three header rows, then 42 sections from `90x90x12` through `20x20x3`.

## Syntax

```
=Table.EA2()
```

`Table.EA2` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.EA2()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, h, b, tw, tf, r, d, Iy, Iz, ry, rz, Wel,y, Wel,z, Wpl,y, Wpl,z, u, x, Iw, IT, A.
- Row 2 names those properties, from mass per metre through area of section. Row 3 stores the units, and its first cell is Section Name.
- The units row leaves u and x empty. Iw is cm6, IT is cm4, and A is cm2.
- Every section row stores the text "-" for Wpl,y, Wpl,z, u, x, Iw, and IT.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.EA1]]
