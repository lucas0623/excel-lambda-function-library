---
description: "Returns TRUE when a point lies inside a polygon."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISPOINTINPOLY
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when a point lies inside a polygon.

Example file: [[Point in Polygon.xlsx]]

The polygon is an n×2 array of `(x, y)` rows. The last row connects to the first. The point is x then y. A point on the boundary counts as inside unless `isEdgeInclusive` is FALSE.

## Syntax

```
=IsPointInPoly(vertices, point, [isEdgeInclusive])
```

The IsPointInPoly function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows, in order. |
| `point` | Required. X then y, as a 1×2 row or a 2×1 column. |
| `isEdgeInclusive` | Optional. TRUE, the default, counts the boundary as inside. FALSE returns FALSE for a boundary point. |

## Remarks

- A boundary point is decided by [[IsPointOnPolyEdge]] before the interior test.
- Otherwise the function casts a ray toward +x and counts crossings. An odd count is inside.
- An omitted `isEdgeInclusive` is TRUE. Passing TRUE now keeps the boundary. The previous formula treated every supplied argument as FALSE.
- Fewer than two columns returns `#REF!`.
- The name stays `IsPointInPoly`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. The square is (0, 0), (4, 0), (4, 4), (0, 4).

![[IsPointInPoly-20261103025453.jpeg]]

| Point | Where | Result |
| --- | --- | --- |
| (2, 2) | Interior | TRUE |
| (5, 2) | Outside | FALSE |
| (0, 2) | Left edge | TRUE |

## Tests

The `test` sheet checks the interior, the edge with the default and with both explicit flags, an outside point, and a one-column vertex list. Excel calculated 6 IsPointInPoly cases. All 6 passed.

| Case | Result |
| --- | --- |
| (2, 2) | TRUE |
| (0, 2), boundary included | TRUE |
| (0, 2) with FALSE | FALSE |
| (0, 2) with TRUE | TRUE |
| (5, 2) | FALSE |
| One-column vertices | `#REF!` |

## Related functions

- [[IsPointOnPolyEdge]] — the boundary test used when the edge flag is on.
- [[IsAllPointsInPoly]] — TRUE only when every point is inside.
- [[IsAnyPointInPoly]] — TRUE when at least one point is inside.
