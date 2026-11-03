---
description: "Returns TRUE when every point lies inside a polygon."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISALLPOINTSINPOLY
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when every point lies inside a polygon.

Example file: [[Point in Polygon.xlsx]]

Both arrays are rows of `(x, y)`. The last vertex connects to the first. A point on the boundary counts as inside, because each point is passed to [[IsPointInPoly]] with the edge included.

## Syntax

```
=IsAllPointsInPoly(vertices, points)
```

The IsAllPointsInPoly function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 polygon, `(x, y)` rows in order. |
| `points` | Required. m×2 points, `(x, y)` rows. |

## Remarks

- One point outside returns FALSE.
- A point on the boundary counts as inside.
- Fewer than two columns returns `#REF!`.
- The name stays `IsAllPointsInPoly`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. The square is (0, 0), (4, 0), (4, 4), (0, 4). Both points, (2, 2) and (1, 1), are inside.

![[IsAllPointsInPoly-20261103025453.jpeg]]

| Points | Formula | Result |
| --- | --- | --- |
| (2, 2), (1, 1) | `=IsAllPointsInPoly(B65:C68,F65:G66)` | TRUE |

## Tests

The `test` sheet checks two interior points, an interior point plus an edge point, one outside point, and a one-column point list. Excel calculated 4 IsAllPointsInPoly cases. All 4 passed.

| Case | Result |
| --- | --- |
| (2, 2) and (1, 1) | TRUE |
| (2, 2) and edge (0, 2) | TRUE |
| (2, 2) and (5, 2) | FALSE |
| One-column points | `#REF!` |

## Related functions

- [[IsPointInPoly]] — the test applied to each row.
- [[IsAnyPointInPoly]] — TRUE when any one point is inside.
- [[isPolyAInPolyB]] — uses this for the vertices of polygon A.
