---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISPOLYSINTERSECT
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

# IsPolysIntersect function

Returns TRUE when two polygons meet or one lies inside the other.

Example file: [[Point in Polygon.xlsx]]

Both arguments are n×2 arrays of `(x, y)` rows. The last row of each connects to the first. A shared boundary counts. Separate polygons return FALSE.

## Syntax

```
=IsPolysIntersect(verticesA, verticesB)
```

The IsPolysIntersect function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesA` | Required. Polygon A, `(x, y)` rows in order. |
| `verticesB` | Required. Polygon B, `(x, y)` rows in order. |

## Remarks

- TRUE when [[IsAnyEdgeIntersect]] is TRUE, or any vertex of either polygon lies inside the other through [[IsAnyPointInPoly]].
- A polygon fully inside the other is TRUE even when the edges do not meet.
- A point on the boundary counts as inside.
- Fewer than two columns returns `#REF!`.
- The name stays `IsPolysIntersect`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. Polygon B is the inner square (1, 1), (3, 1), (3, 3), (1, 3) inside (0, 0), (4, 0), (4, 4), (0, 4).

![[IsPolysIntersect-20261103025453.jpeg]]

| Polygons | Formula | Result |
| --- | --- | --- |
| Inner square | `=IsPolysIntersect(B131:C134,F131:G134)` | TRUE |

## Tests

The `test` sheet checks overlapping squares, containment, separate squares, and a one-column vertex list. Excel calculated 4 IsPolysIntersect cases. All 4 passed.

| Case | Result |
| --- | --- |
| Squares overlap | TRUE |
| One square inside the other | TRUE |
| Separate squares | FALSE |
| One-column vertices | `#REF!` |

## Related functions

- [[IsAnyEdgeIntersect]] — edges only. A strict interior returns FALSE there.
- [[IsAnyPointInPoly]] — vertex-in-polygon half of this test.
- [[isPolyAInPolyB]] — A inside B, which is narrower than intersection.
