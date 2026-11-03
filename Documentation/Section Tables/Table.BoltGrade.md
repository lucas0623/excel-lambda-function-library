---
AI Reviewed: true
---

## Overview

This was a comment review. The function was not calculated.

Returns the bolt grade and strength table stored in the formula. The array is 15 rows by 7 columns: one header row plus 14 grade rows.

## Syntax

```
=Table.BoltGrade()
```

`Table.BoltGrade` has no arguments.

| Argument | Description |
| --- | --- |
| (none) | The call is `=Table.BoltGrade()`. |

## Remarks

- The header is Code, Bolt grade, Design shear strength ps (N/mm²), Design bearing strength, pub (N/mm²), Design tensile strength pt (N/mm²), Min. Tensile Strength, Ub, and Min. yield strength, Yb.
- The grade rows are ISO 4.6, 8.8, and 10.9; ISO3506-1 A2-50, A2-70, A4-70, and A4-80; CS2:2012 500B and 500C; ASTM A307, A325, and A490; GB50017 8.8 and 10.9.
- ISO 4.6, 8.8, and 10.9 leave Yb blank. ASTM A307, A325, and A490, and GB50017 8.8 and 10.9, leave both Ub and Yb blank.
- The formula is a `VSTACK` of `HSTACK` rows. It returns that array and does not raise a lookup error.
- Last Update at 2026-11-03. The formula was left unchanged.

## Related functions

- [[Table.BoltDimension.BS4190]]
