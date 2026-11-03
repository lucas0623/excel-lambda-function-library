---
description: "Returns the centers of six bolts in 3 columns and 2 rows."
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns the centers of six bolts in 3 columns and 2 rows.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `spacingX`, `spacingY`, then optional `CenterX` and `CenterY`. Order is left to right: top row, then bottom row. Columns are `spacingX` apart and rows are `spacingY` apart. An omitted center coordinate is 0.

## Syntax

```
=CreateBoltCoor_6Bolts_3x2(spacingX, spacingY, [CenterX], [CenterY])
```

The CreateBoltCoor_6Bolts_3x2 function has the following arguments:

| Argument | Description |
| --- | --- |
| `spacingX` | Required. Horizontal pitch between adjacent columns. |
| `spacingY` | Required. Vertical pitch. |
| `CenterX` | Optional. X of the pattern center. Omitted means 0. |
| `CenterY` | Optional. Y of the pattern center. Omitted means 0. |

## Remarks

- The columns sit at \(C_x-s_x\), \(C_x\), and \(C_x+s_x\). The rows sit at \(C_y \pm s_y/2\).
- With the center at the origin and pitch 4 by 2, bolt 1 is (−4, 1), bolt 3 is (4, 1), and bolt 4 is (−4, −1).
- [[TranslateCoor]] adds the center.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Pitch 4 by 2, center at the origin.

![[CreateBoltCoor_6Bolts_3x2-20261103120712.jpeg]]

| Bolt | x | y |
| --- | --- | --- |
| 1 | −4 | 1 |
| 2 | 0 | 1 |
| 3 | 4 | 1 |
| 4 | −4 | −1 |
| 5 | 0 | −1 |
| 6 | 4 | −1 |

Formula: `=CreateBoltCoor_6Bolts_3x2(B38,C38,D38,E38)`.

## Tests

Excel calculated 6 cases. All 6 passed.

| Case | Result |
| --- | --- |
| Bolt 1 | (−4, 1) |
| Bolt 3 x | 4 |
| Bolt 4 y | −1 |
| Center (10, 0), bolt 1 x | 6 |
| Text spacing | `#VALUE!` |

## Related functions

- [[CreateBoltCoor_6Bolts_2x3]] — two columns and three rows.
- [[CreateBoltCoor_4Bolts]] — the 2 by 2 pattern.
- [[TranslateCoor]] — shifts the finished pattern.
