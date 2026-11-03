---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - INSERTPOLYANDLINEINTERSECTION
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Inserts the points where a line segment meets a closed polygon into the vertex list.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order, or an n×4 array that already carries an intersection flag and a name. The last vertex connects to the first. The segment is P `(xp, yp)` to Q `(xq, yq)`. Each result row is x, y, TRUE at an intersection or FALSE at an original vertex, and the name `x & "," & y`. Each hit comes from [[TwoLinesIntersection]].

## Syntax

```
=InsertPolyAndLineIntersection(vertices, xp, yp, xq, yq)
```

The InsertPolyAndLineIntersection function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 `(x, y)` rows, or n×4 rows that already have a flag and a name. |
| `xp` | Required. X coordinate of point P. |
| `yp` | Required. Y coordinate of point P. |
| `xq` | Required. X coordinate of point Q. |
| `yq` | Required. Y coordinate of point Q. |

## Remarks

- A hit on the first vertex of an edge replaces that vertex and marks it TRUE. A hit on the last vertex of an edge is left for the next edge, so a shared vertex is stored once.
- A segment that misses the polygon returns the vertices with FALSE flags.
- Fewer than two columns returns `#REF!`.
- A non-numeric coordinate returns `#VALUE!`.
- The name stays `InsertPolyAndLineIntersection`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The square is `(0, 0)`, `(4, 0)`, `(4, 4)`, `(0, 4)`. The segment is `(-1, 2)` to `(5, 2)`.

![[InsertPolyAndLineIntersection-20261103120327.jpeg]]

| x | y | Intersection | Name |
| --- | --- | --- | --- |
| 0 | 0 | FALSE | 0,0 |
| 4 | 0 | FALSE | 4,0 |
| 4 | 2 | TRUE | 4,2 |
| 4 | 4 | FALSE | 4,4 |
| 0 | 4 | FALSE | 0,4 |
| 0 | 2 | TRUE | 0,2 |

## Tests

Excel calculated 5 cases. All 5 passed.

| Case | Result |
| --- | --- |
| Horizontal cut `y = 2` | The two edge points above |
| Diagonal through the corners | `(0, 0)` and `(4, 4)` marked TRUE, with no extra rows |
| Segment `(5, 5)` to `(6, 6)` | The four vertices, all FALSE |
| One column of vertices | `#REF!` |
| A text coordinate | `#VALUE!` |

## Related functions

- [[TwoLinesIntersection]] — one edge against the segment.
- [[InsertPolysIntersection]] — every edge of a second polygon.
- [[SplitPolyIntoTwoPolys]] — splits the polygon at these flags.
