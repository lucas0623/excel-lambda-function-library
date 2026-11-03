---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - INSERTPOLYSINTERSECTION
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Inserts every intersection of polygon B into polygon A.

Example file: [[Polygon Editing.xlsx]]

Both arguments are n×2 arrays of `(x, y)` rows in order. The last vertex connects to the first. Each edge of B is passed to [[InsertPolyAndLineIntersection]]. The result is A's vertices, with intersection rows marked TRUE.

## Syntax

```
=InsertPolysIntersection(verticesA, verticesB)
```

The InsertPolysIntersection function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesA` | Required. n×2 array of `(x, y)` rows. Intersections are inserted into this ring. |
| `verticesB` | Required. n×2 array of `(x, y)` rows. Each edge is tested against A. |

## Remarks

- Polygons that do not meet return A with FALSE flags and the names `x & "," & y`.
- Fewer than two columns returns `#REF!`.
- A non-numeric coordinate returns `#VALUE!`.
- The name stays `InsertPolysIntersection`. It does not call [[PolyAndLineIntersection]].

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. A is `(0, 0)`, `(2, 0)`, `(2, 2)`, `(0, 2)`. B is `(1, 1)`, `(3, 1)`, `(3, 3)`, `(1, 3)`.

![[InsertPolysIntersection-20261103120327.jpeg]]

| x | y | Intersection | Name |
| --- | --- | --- | --- |
| 0 | 0 | FALSE | 0,0 |
| 2 | 0 | FALSE | 2,0 |
| 2 | 1 | TRUE | 2,1 |
| 2 | 2 | FALSE | 2,2 |
| 1 | 2 | TRUE | 1,2 |
| 0 | 2 | FALSE | 0,2 |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Overlapping squares | `(2, 1)` and `(1, 2)` inserted |
| Separate squares | A unchanged, flags FALSE |
| One column of vertices | `#REF!` |

## Related functions

- [[InsertPolyAndLineIntersection]] — one segment against A.
- [[CombineTwoPolygons]] — uses both rings of inserted points.
- [[OverlappedPolygons]] — the overlap of the same two rings.
