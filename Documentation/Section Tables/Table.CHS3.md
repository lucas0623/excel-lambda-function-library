---
AI Reviewed: true
---

# Table.CHS3

This was a comment review. The function was not calculated.

Returns the circular hollow section (CHS) property table stored in the formula. The array is 97 rows by 10 columns: three header rows, then 94 sections from `559x12` through `1219x25`.

## Syntax

```
=Table.CHS3()
```

`Table.CHS3` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.CHS3()`. |

## Remarks

- Row 1 stores the property codes: blank, mass, D, tw, I, r, Wel, Wpl, IT, A.
- Row 2 names those properties. D is described as depth of section, and tw as web thickness.
- Row 3 stores the units, and its first cell is Section Name.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.CHS1]]
- [[Table.CHS2]]
