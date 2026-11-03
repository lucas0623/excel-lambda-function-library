---
description: "Returns one closed circle per point, stacked for an XY scatter."
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns one closed circle per point, stacked for an XY scatter.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `xCoorArr`, `yCoorArr`, `diaArr`, `numOfPointsPerCircle`. `diaArr` is the diameter, so the radius passed to [[CoorOfCircle]] is `dia/2`. Point k is at \(k \times 360/n\) degrees, k = 1 to n, counterclockwise from the positive x-axis. The last unique point lies on the positive x-axis, then the first point is repeated to close the circle. An `#N/A` row separates circles.

## Syntax

```
=PointObjToCircleCoorForPlot(xCoorArr, yCoorArr, diaArr, numOfPointsPerCircle)
```

The PointObjToCircleCoorForPlot function has the following arguments:

| Argument | Description |
| --- | --- |
| `xCoorArr` | Required. X of each circle center. |
| `yCoorArr` | Required. Y of each circle center. |
| `diaArr` | Required. Diameter of each circle, one row per center. |
| `numOfPointsPerCircle` | Required. Number of unique points on every circle. |

## Remarks

- A diameter of 2 and `n = 4` gives (0, 1), (−1, 0), (0, −1), (1, 0), then (0, 1) again, then `#N/A`.
- A zero diameter places every point on the center.
- A second circle begins on the next row after that `#N/A` break.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Diameter 2, four points, center at the origin.

![[PointObjToCircleCoorForPlot-20261103120712.jpeg]]

| Point | x | y |
| --- | --- | --- |
| 1, at 90° | 0 | 1 |
| 4, on the positive x-axis | 1 | 0 |
| Close | 0 | 1 |
| Break | `#N/A` | `#N/A` |

Formula: `=PointObjToCircleCoorForPlot(B100,C100,D100,E100)`.

## Tests

Excel calculated 10 cases. All 10 passed.

| Case | Result |
| --- | --- |
| First point | (0, 1) |
| Last unique point | (1, 0) |
| Close point | (0, 1) |
| Break row | `#N/A` |
| Zero diameter, last unique x | 0 |
| Second circle, first y | 1 |
| Text diameter | `#VALUE!` |

## Related functions

- [[CoorOfCircle]] — the open polyline. This function repeats the first point and inserts `#N/A`.
- [[CoorCircle]] — the same open polyline as CoorOfCircle.
- [[PointObjToHexagonCoorForPlot]] — the same stack, for a hexagon.
