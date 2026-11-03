---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - SPLITPOLYINTOTWOPOLYS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# SplitPolyIntoTwoPolys function

Splits one polygon at the intersections of a segment.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. The segment is `(xp, yp)` to `(xq, yq)`. The result is one or two rows. Each row is a strict `ARRAYTOTEXT` of one piece as `(x, y)` rows. The first piece runs from the first intersection flag to the last. The second piece is the wrap from the start of the ring back to the first intersection, then on from the last intersection.

## Syntax

```
=SplitPolyIntoTwoPolys(vertices, xp, yp, xq, yq)
```

The SplitPolyIntoTwoPolys function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows. |
| `xp` | Required. X coordinate of point P. |
| `yp` | Required. Y coordinate of point P. |
| `xq` | Required. X coordinate of point Q. |
| `yq` | Required. Y coordinate of point Q. |

## Remarks

- Intersection flags come from [[InsertPolyAndLineIntersection]]. The returned text keeps x and y only.
- A piece is kept when it has more than two rows.
- A segment that misses the polygon returns `#N/A`.
- Fewer than two columns returns `#REF!`.
- The name stays `SplitPolyIntoTwoPolys`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The square is cut by `y = 2`.

![[SplitPolyIntoTwoPolys-20261103120327.jpeg]]

| Piece |
| --- |
| `{4,2;4,4;0,4;0,2}` |
| `{0,0;4,0;4,2;0,2}` |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Horizontal cut `y = 2` | The top rectangle, then the bottom rectangle |
| Diagonal through the corners | `{0,0;4,0;4,4}` and `{0,0;4,4;0,4}` |
| Segment that misses | `#N/A` |

## Related functions

- [[InsertPolyAndLineIntersection]] — inserts the cut points.
- [[SplitPolyByLine]] — calls this when the segment meets the polygon twice.
- [[SplitPolysIteration]] — repeats this split for each pair of points.
