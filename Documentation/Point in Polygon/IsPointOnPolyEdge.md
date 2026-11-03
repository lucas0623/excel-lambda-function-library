---
description: "Returns TRUE when a point lies on an edge of a polygon, including a vertex."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISPOINTONPOLYEDGE
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when a point lies on an edge of a polygon, including a vertex.

Example file: [[Point in Polygon.xlsx]]

The polygon is an n×2 array of `(x, y)` rows. The last row connects to the first. The point is x then y, as a 1×2 row or a 2×1 column.

## Syntax

```
=IsPointOnPolyEdge(Vertices, Point, [count])
```

The IsPointOnPolyEdge function has the following arguments:

| Argument | Description |
| --- | --- |
| `Vertices` | Required. n×2 array of `(x, y)` rows, in order. |
| `Point` | Required. X then y. |
| `count` | Optional. Row to start the walk. Omit it to start at the first row. |

## Remarks

- Each edge is tested with [[isPointOnLine]], including the edge from the last vertex back to the first.
- A vertex returns TRUE. A point in the interior or outside the boundary returns FALSE.
- Fewer than two columns returns `#REF!`.
- The walk calls `{ref}IsPointOnPolyEdge(` so the library name is explicit.
- The name stays `IsPointOnPolyEdge`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. The square is (0, 0), (4, 0), (4, 4), (0, 4).

![[IsPointOnPolyEdge-20261103025453.jpeg]]

| Point | Formula | Result |
| --- | --- | --- |
| (0, 2) | `=IsPointOnPolyEdge(B8:C11,F8:G8)` | TRUE |

## Tests

The `test` sheet checks the left edge, a vertex, an interior point, and a one-column vertex list. Excel calculated 4 IsPointOnPolyEdge cases. All 4 passed.

| Case | Result |
| --- | --- |
| (0, 2) on the left edge | TRUE |
| Vertex (4, 4) | TRUE |
| Interior (2, 2) | FALSE |
| One-column vertices | `#REF!` |

## Related functions

- [[isPointOnLine]] — one segment, including its endpoints.
- [[IsPointInPoly]] — interior test. The boundary is optional there.
