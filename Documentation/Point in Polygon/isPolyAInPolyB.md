---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISPOLYAINPOLYB
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

# isPolyAInPolyB function

Returns TRUE when polygon A lies inside polygon B, including the boundary.

Example file: [[Point in Polygon.xlsx]]

Both arguments are n×2 arrays of `(x, y)` rows. The last row of each connects to the first. A may touch the boundary of B, and A may equal B.

## Syntax

```
=isPolyAInPolyB(verticesA, verticesB)
```

The isPolyAInPolyB function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesA` | Required. Polygon A, the candidate interior, `(x, y)` rows in order. |
| `verticesB` | Required. Polygon B, the container, `(x, y)` rows in order. |

## Remarks

- Every vertex of A, and the midpoint of every edge of A, must lie inside or on B. The midpoint of the edge from vertex \(i\) to the next vertex is

$$
\left(\frac{x_i+x_{i+1}}{2},\ \frac{y_i+y_{i+1}}{2}\right)
$$

- The boundary counts, because [[IsAllPointsInPoly]] includes it.
- The previous formula required no edge intersection, so a triangle that only touched the boundary returned FALSE. Touching the boundary now returns TRUE.
- A vertex of A outside B returns FALSE.
- Fewer than two columns returns `#REF!`.
- The name stays `isPolyAInPolyB`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. Polygon A is (1, 1), (3, 1), (3, 3), (1, 3). Polygon B is (0, 0), (4, 0), (4, 4), (0, 4).

![[isPolyAInPolyB-20261103025453.jpeg]]

| A | B | Formula | Result |
| --- | --- | --- | --- |
| Inner square | Outer square | `=isPolyAInPolyB(F143:G146,B143:C146)` | TRUE |

## Tests

The `test` sheet checks a strict interior, a triangle that touches (2, 0), equal polygons, an overlap that leaves A, and a one-column vertex list. Excel calculated 5 isPolyAInPolyB cases. All 5 passed.

| Case | Result |
| --- | --- |
| Inner square | TRUE |
| Triangle touches (2, 0) | TRUE |
| A equals B | TRUE |
| Overlapping squares | FALSE |
| One-column vertices | `#REF!` |

## Related functions

- [[IsAllPointsInPoly]] — the vertex and midpoint tests.
- [[IsPolysIntersect]] — TRUE for overlap as well as containment.
- [[IsPointInPoly]] — one point, with the boundary included by default.
