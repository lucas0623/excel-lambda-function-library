---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - SPLITPOLYBYLINE
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# SplitPolyByLine function

Splits a closed polygon by a line segment.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. The segment is `(xp, yp)` to `(xq, yq)`. Hits come from [[PolyAndLineIntersection]], sorted by x, then by y. Two hits return two polygons from [[SplitPolyIntoTwoPolys]]. Four or more are paired in that sorted order and cut by [[SplitPolysIteration]]. Each result row is a strict `ARRAYTOTEXT` of `(x, y)` rows.

## Syntax

```
=SplitPolyByLine(vertices, xp, yp, xq, yq)
```

The SplitPolyByLine function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows. |
| `xp` | Required. X coordinate of point P. |
| `yp` | Required. Y coordinate of point P. |
| `xq` | Required. X coordinate of point Q. |
| `yq` | Required. Y coordinate of point Q. |

## Remarks

- No intersection returns `#N/A`.
- Fewer than two columns returns `#REF!`.
- The name stays `SplitPolyByLine`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The square `(0, 0)`, `(4, 0)`, `(4, 4)`, `(0, 4)` is cut by `y = 2`.

![[SplitPolyByLine-20261103120327.jpeg]]

| Piece |
| --- |
| `{4,2;4,4;0,4;0,2}` |
| `{0,0;4,0;4,2;0,2}` |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Horizontal cut `y = 2` | Top rectangle, then bottom rectangle |
| U polygon cut by `y = 2` | Three pieces: left cap, right cap, and the base |
| Segment that misses | `#N/A` |

## Related functions

- [[PolyAndLineIntersection]] — the sorted hit points.
- [[SplitPolyIntoTwoPolys]] — the two-hit split.
- [[SplitPolysIteration]] — the four-or-more split.
- [[GridMesh]] — splits an overlap of more than four vertices with this function.
