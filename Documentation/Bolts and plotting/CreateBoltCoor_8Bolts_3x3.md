---
description: "Returns eight bolt centers on a 3 by 3 grid."
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns eight bolt centers on a 3 by 3 grid. The center bolt is omitted.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `spacingX`, `spacingY`, then optional `CenterX` and `CenterY`. Order is left to right: the top row, the middle row without the center, then the bottom row. Columns are `spacingX` apart and rows are `spacingY` apart. An omitted center coordinate is 0.

## Syntax

```
=CreateBoltCoor_8Bolts_3x3(spacingX, spacingY, [CenterX], [CenterY])
```

The CreateBoltCoor_8Bolts_3x3 function has the following arguments:

| Argument | Description |
| --- | --- |
| `spacingX` | Required. Horizontal pitch. |
| `spacingY` | Required. Vertical pitch. |
| `CenterX` | Optional. X of the grid center. Omitted means 0. |
| `CenterY` | Optional. Y of the grid center. Omitted means 0. |

## Remarks

- The middle row is the left bolt and the right bolt. Nothing is returned at \((C_x, C_y)\).
- With the center at the origin and pitch 4 by 2, bolt 4 is (−4, 0), bolt 5 is (4, 0), and the result has 8 rows.
- A zero pitch places every bolt on the center.
- [[TranslateCoor]] adds the center.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Pitch 4 by 2, center at the origin.

![[CreateBoltCoor_8Bolts_3x3-20261103120712.jpeg]]

| Bolt | x | y |
| --- | --- | --- |
| 1 | −4 | 2 |
| 2 | 0 | 2 |
| 3 | 4 | 2 |
| 4 | −4 | 0 |
| 5 | 4 | 0 |
| 6 | −4 | −2 |
| 7 | 0 | −2 |
| 8 | 4 | −2 |

Formula: `=CreateBoltCoor_8Bolts_3x3(B54,C54,D54,E54)`.

## Tests

Excel calculated 9 cases. All 9 passed.

| Case | Result |
| --- | --- |
| Bolt 1 | (−4, 2) |
| Bolt 4, middle left | (−4, 0) |
| Bolt 5, middle right | x is 4 |
| Bolt 8 y | −2 |
| Row count | 8 |
| Zero pitch, first x | 0 |
| Text spacing | `#VALUE!` |

## Related functions

- [[CreateBoltCoor_6Bolts_3x2]] — three columns and two rows, including the middle column.
- [[TranslateCoor]] — shifts the finished pattern.
