---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - COMBINETWOPOLYGONS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# CombineTwoPolygons function

Returns the union of two polygons.

Example file: [[Polygon Editing.xlsx]]

`verticesA` and `verticesB` are n×2 arrays of `(x, y)` rows in order. The last vertex connects to the first. A clockwise ring is reversed with [[ReverseVerticesDirection]] before the union. No shared point returns two strict `ARRAYTOTEXT` rows, one polygon each. One polygon inside the other returns the outer polygon as one strict `ARRAYTOTEXT`. A partial overlap returns the union outline as one strict `ARRAYTOTEXT` of `(x, y)` rows.

## Syntax

```
=CombineTwoPolygons(verticesA, verticesB)
```

The CombineTwoPolygons function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesA` | Required. n×2 array of `(x, y)` rows. |
| `verticesB` | Required. n×2 array of `(x, y)` rows. |

## Remarks

- "Inside" uses [[IsAllPointsInPoly]], so a point on the boundary counts as inside.
- A partial overlap walks the intersection names from [[InsertPolysIntersection]] and keeps the chain that lies outside the other polygon.
- Fewer than two columns returns `#REF!`.
- The name stays `CombineTwoPolygons`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. A is `(0, 0)`, `(2, 0)`, `(2, 2)`, `(0, 2)`. B is `(1, 1)`, `(3, 1)`, `(3, 3)`, `(1, 3)`.

![[CombineTwoPolygons-20261103120327.jpeg]]

The union is `{2,1;3,1;3,3;1,3;1,2;0,2;0,0;2,0}`.

## Tests

Excel calculated 5 cases. All 5 passed.

| Case | Result |
| --- | --- |
| Partial overlap | The eight-vertex union above |
| Inner square inside a larger square | The outer square only |
| Clockwise inner square | The outer square only |
| Separate unit squares | Both polygons, one text row each |
| One column of vertices | `#REF!` |

## Related functions

- [[OverlappedPolygons]] — the intersection instead of the union.
- [[CombinePolygons]] — unions a column of polygon texts.
- [[IsPolysIntersect]] — the first test, including one polygon inside the other.
