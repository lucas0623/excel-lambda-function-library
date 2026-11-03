---
AI Reviewed: true
---

# Table.RHS3

This was a comment review. The function was not calculated.

Returns the rectangular hollow section (RHS) property table stored in the formula. The array is 51 rows by 18 columns: three header rows, then 48 sections from `250x150x5` through `500x300x20`.

## Syntax

```
=Table.RHS3()
```

`Table.RHS3` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.RHS3()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, h, b, tw, tf, r, d, Iy, Iz, ry, rz, Wel,y, Wel,z, Wpl,y, Wpl,z, IT, A.
- Row 2 names those properties, from mass per metre through area of section. Row 3 stores the units, and its first cell is Section Name.
- The columns end at IT and A.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.RHS1]]
- [[Table.RHS2]]
