---
description: "Returns the centers of six bolts in 2 columns and 3 rows."
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns the centers of six bolts in 2 columns and 3 rows.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `spacingX`, `spacingY`, then optional `CenterX` and `CenterY`. Order is left to right: top row, middle row, then bottom row. Columns are `spacingX` apart and rows are `spacingY` apart. An omitted center coordinate is 0.

## Syntax

```
=CreateBoltCoor_6Bolts_2x3(spacingX, spacingY, [CenterX], [CenterY])
```

The CreateBoltCoor_6Bolts_2x3 function has the following arguments:

| Argument | Description |
| --- | --- |
| `spacingX` | Required. Horizontal pitch. |
| `spacingY` | Required. Vertical pitch between adjacent rows. |
| `CenterX` | Optional. X of the pattern center. Omitted means 0. |
| `CenterY` | Optional. Y of the pattern center. Omitted means 0. |

## Remarks

- The columns sit at \(C_x \pm s_x/2\). The rows sit at \(C_y+s_y\), \(C_y\), and \(C_y-s_y\).
- With the center at the origin and pitch 4 by 2, bolt 1 is (−2, 2), bolt 3 is (−2, 0), and bolt 6 is (2, −2).
- [[TranslateCoor]] adds the center.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Pitch 4 by 2, center at the origin.

![[CreateBoltCoor_6Bolts_2x3-20261103120712.jpeg]]

| Bolt | x | y |
| --- | --- | --- |
| 1 | −2 | 2 |
| 2 | 2 | 2 |
| 3 | −2 | 0 |
| 4 | 2 | 0 |
| 5 | −2 | −2 |
| 6 | 2 | −2 |

Formula: `=CreateBoltCoor_6Bolts_2x3(B22,C22,D22,E22)`.

## Tests

Excel calculated 7 cases. All 7 passed.

| Case | Result |
| --- | --- |
| Bolt 1 | (−2, 2) |
| Bolt 3 y | 0 |
| Bolt 6 | (2, −2) |
| Center (1, 1), bolt 1 y | 3 |
| Text spacing | `#VALUE!` |

## Related functions

- [[CreateBoltCoor_6Bolts_3x2]] — the same six bolts turned the other way.
- [[CreateBoltCoor_4Bolts]] — the 2 by 2 pattern.
- [[TranslateCoor]] — shifts the finished pattern.
