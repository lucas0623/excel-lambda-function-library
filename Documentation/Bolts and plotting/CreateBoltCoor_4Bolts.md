---
description: "Returns the centers of four bolts on a 2 by 2 grid."
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns the centers of four bolts on a 2 by 2 grid.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `spacingX`, `spacingY`, then optional `CenterX` and `CenterY`. The bolts are listed top-left, top-right, bottom-left, bottom-right. Adjacent bolts are `spacingX` apart horizontally and `spacingY` apart vertically. An omitted center coordinate is 0.

## Syntax

```
=CreateBoltCoor_4Bolts(spacingX, spacingY, [CenterX], [CenterY])
```

The CreateBoltCoor_4Bolts function has the following arguments:

| Argument | Description |
| --- | --- |
| `spacingX` | Required. Horizontal pitch. |
| `spacingY` | Required. Vertical pitch. |
| `CenterX` | Optional. X of the pattern center. Omitted means 0. |
| `CenterY` | Optional. Y of the pattern center. Omitted means 0. |

## Remarks

- Before the center is added, the four points are

$$
\left(-\frac{s_x}{2},\frac{s_y}{2}\right),\ 
\left(\frac{s_x}{2},\frac{s_y}{2}\right),\ 
\left(-\frac{s_x}{2},-\frac{s_y}{2}\right),\ 
\left(\frac{s_x}{2},-\frac{s_y}{2}\right)
$$

- [[TranslateCoor]] adds `(CenterX, CenterY)`.
- A zero pitch places every bolt on the center.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Pitch 4 by 2, center (10, 3).

![[CreateBoltCoor_4Bolts-20261103120712.jpeg]]

| Bolt | x | y |
| --- | --- | --- |
| 1, top-left | 8 | 4 |
| 2, top-right | 12 | 4 |
| 3, bottom-left | 8 | 2 |
| 4, bottom-right | 12 | 2 |

Formula: `=CreateBoltCoor_4Bolts(B8,C8,D8,E8)`.

## Tests

Excel calculated 7 cases. All 7 passed.

| Case | Result |
| --- | --- |
| Top-left at center (10, 3) | (8, 4) |
| Bottom-right | (12, 2) |
| Omitted center, pitch 4 by 2 | top-left x is −2 |
| Zero pitch at (5, 6) | first x is 5 |
| Text spacing | `#VALUE!` |

## Related functions

- [[TranslateCoor]] — shifts the finished pattern.
- [[CreateBoltCoor_6Bolts_2x3]] — two columns and three rows.
- [[CreateBoltCoor_6Bolts_3x2]] — three columns and two rows.
- [[CreateBoltCoor_8Bolts_3x3]] — a 3 by 3 grid with the center omitted.
