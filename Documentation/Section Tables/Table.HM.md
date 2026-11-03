---
description: "Returns the Chinese HM section property table stored in the formula, from 150x100x20.7 through 600x300x170.4."
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the Chinese HM section property table stored in the formula. The array is 17 rows by 21 columns: three header rows, then 14 sections from `150x100x20.7` through `600x300x170.4`.

## Syntax

```
=Table.HM()
```

`Table.HM` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.HM()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, h, b, tw, tf, r, d, Iy, Iz, ry, rz, Wel,y, Wel,z, Wpl,y, Wpl,z, u, x, Iw, IT, A.
- Row 2 names those properties, from mass per metre through area of section. Row 3 stores the units, and its first cell is Section Name.
- The units row leaves u and x empty. Iw is cm6, IT is cm4, and A is cm2.
- Every section row stores a blank for u, x, and Iw.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.HN]]
- [[Table.HW]]
