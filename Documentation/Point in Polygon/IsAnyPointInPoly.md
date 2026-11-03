---
description: "Returns TRUE when at least one point lies inside a polygon."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISANYPOINTINPOLY
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when at least one point lies inside a polygon.

Example file: [[Point in Polygon.xlsx]]

Both arrays are rows of `(x, y)`. The last vertex connects to the first. A point on the boundary counts as inside, because each point is passed to [[IsPointInPoly]] with the edge included.

## Syntax

```
=IsAnyPointInPoly(vertices, points)
```

The IsAnyPointInPoly function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 polygon, `(x, y)` rows in order. |
| `points` | Required. m×2 points, `(x, y)` rows. |

## Remarks

- Every point outside returns FALSE.
- A single point on the boundary is enough for TRUE.
- Fewer than two columns returns `#REF!`.
- The name stays `IsAnyPointInPoly`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. The square is (0, 0), (4, 0), (4, 4), (0, 4). (5, 2) is outside and (2, 2) is inside.

![[IsAnyPointInPoly-20261103025453.jpeg]]

| Points | Formula | Result |
| --- | --- | --- |
| (5, 2), (2, 2) | `=IsAnyPointInPoly(B77:C80,F77:G78)` | TRUE |

## Tests

The `test` sheet checks a mixed pair, an edge point paired with an outside point, two outside points, and a one-column point list. Excel calculated 4 IsAnyPointInPoly cases. All 4 passed.

| Case | Result |
| --- | --- |
| (5, 2) and (2, 2) | TRUE |
| (0, 2) and (5, 5) | TRUE |
| (5, 2) and (6, 2) | FALSE |
| One-column points | `#REF!` |

## Related functions

- [[IsPointInPoly]] — the test applied to each row.
- [[IsAllPointsInPoly]] — TRUE only when every point is inside.
- [[IsPolysIntersect]] — uses this for the vertices of each polygon.
