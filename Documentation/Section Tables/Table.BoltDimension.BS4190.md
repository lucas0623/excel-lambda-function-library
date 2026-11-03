---
AI Reviewed: true
---

# Table.BoltDimension.BS4190

This was a comment review. The function was not calculated.

Returns the BS4190 2014 bolt and nut dimension table stored in the formula. The array is 24 rows by 6 columns: a title row, a header row, then sizes M5 through M68.

## Syntax

```
=Table.BoltDimension.BS4190()
```

`Table.BoltDimension.BS4190` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.BoltDimension.BS4190()`. |

## Remarks

- The title cell is `BS4190 2014 - Table 7 Dimensions of ISO metric hexagon nuts and hexagon thin nuts + Table 16 Proof Loads for Steel Nuts`. The other five cells on that row are blank.
- The title names proof loads. The six columns are bolt size (mm), tensile stress area of the bolt (mm2), unthreaded area (mm2), diameter (mm), nut width e (mm), and nut thickness m (mm). A proof-load value is not a column.
- The 22 size rows are M5, M6, M8, M10, M12, M16, M20, M22, M24, M27, M30, M33, M36, M39, M42, M45, M48, M52, M56, M60, M64, and M68.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.BoltGrade]]
