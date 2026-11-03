---
description: "Returns one bolt elevation per point, stacked for an XY scatter."
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns one bolt elevation per point, stacked for an XY scatter.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `xCoorArr`, `yCoorArr`, `dia`, `length`, `NutNum_Top`, `NutNum_Bot`, `NutWidth`, `NutThick`, then optional `Deg`. Each elevation is [[CoorBoltEle]] centered at that point. Positive `Deg` rotates it counterclockwise about the bolt center, the same direction as [[RotatePoint]]. That reverses the old clockwise plot. Omitted `Deg` or 0 leaves the elevation unrotated. Rows of `#N/A` separate the shank, the nuts, and the bolts.

## Syntax

```
=PointObjToBoltEleForPlot(xCoorArr, yCoorArr, dia, length, NutNum_Top, NutNum_Bot, NutWidth, NutThick, [Deg])
```

The PointObjToBoltEleForPlot function has the following arguments:

| Argument | Description |
| --- | --- |
| `xCoorArr` | Required. X of each bolt center. |
| `yCoorArr` | Required. Y of each bolt center. |
| `dia` | Required. Shank width. |
| `length` | Required. Shank height. |
| `NutNum_Top` | Required. 1 or 2 draws that many nuts at the top. Any other count draws none. |
| `NutNum_Bot` | Required. 1 or 2 draws that many nuts at the bottom. Any other count draws none. |
| `NutWidth` | Required. Nut width. |
| `NutThick` | Required. Nut thickness. |
| `Deg` | Optional. Rotation in degrees, counterclockwise about the bolt center. Omitted means 0. |

## Remarks

- [[RotateCoor]] supplies the rotation. A positive angle is counterclockwise. The previous plot rotated clockwise.
- For diameter 2 and length 10, the shank's first corner is (−1, −5). At 90° that corner is (5, −1). At −90° it is (−5, 1).
- One top nut of width 4 and thickness 1 starts at (−1.5, 5). At 90° that corner is (−5, −1.5), so the nut that sat on the top moves to the left.
- A `#N/A` separator stays `#N/A` after rotation. It does not become `#REF!`.
- A second bolt with no nuts, diameter 2, and length 10 begins on row 11.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Diameter 2, length 10, one top nut, and 90°.

![[PointObjToBoltEleForPlot-20261103120712.jpeg]]

| Point | x | y |
| --- | --- | --- |
| Shank, first corner, 90° | 5 | −1 |
| Top nut, first corner, 90° | −5 | −1.5 |

Formula: `=PointObjToBoltEleForPlot(H72,I72,B72,C72,D72,E72,F72,G72,J72)`.

## Tests

Excel calculated 15 cases. All 15 passed.

| Case | Result |
| --- | --- |
| Omitted degree, shank | (−1, −5) |
| Omitted degree, nut | (−1.5, 5) |
| 90° counterclockwise, shank | (5, −1) |
| 90° counterclockwise, nut | (−5, −1.5) |
| −90°, shank | (−5, 1) |
| Degree 0 | (−1, −5) |
| Separator after 90° | `#N/A` |
| Second bolt, first x | 9 |
| Text diameter | `#VALUE!` |

## Related functions

- [[CoorBoltEle]] — one elevation, unrotated.
- [[RotateCoor]] — counterclockwise rotation of the elevation.
- [[RotatePoint]] — the same direction for one point.
