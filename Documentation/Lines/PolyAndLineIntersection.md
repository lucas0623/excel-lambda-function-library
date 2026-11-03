---
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - POLYANDLINEINTERSECTION
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

## Overview

Returns the points where a closed polygon meets a line segment.

Example file: [[Lines.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. The segment is P `(xp, yp)` to Q `(xq, yq)`. Each hit comes from [[TwoLinesIntersection]]. The rows are sorted by x, then by y.

## Syntax

```
=PolyAndLineIntersection(vertices, xp, yp, xq, yq)
```

The PolyAndLineIntersection function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 range. Column 1 is x. Column 2 is y. Row order is the polygon order. |
| `xp` | Required. X coordinate of point P. |
| `yp` | Required. Y coordinate of point P. |
| `xq` | Required. X coordinate of point Q. |
| `yq` | Required. Y coordinate of point Q. |

## Remarks

- A hit that is exactly the first vertex of an edge is omitted. The edge that ends at that vertex reports it, so a shared vertex is returned once.
- No intersection returns `#N/A`.
- Fewer than two columns returns `#REF!`.
- A non-numeric coordinate returns `#VALUE!`.
- The name stays `PolyAndLineIntersection`.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs. The square is `(0, 0)`, `(2, 0)`, `(2, 2)`, `(0, 2)`. The segment is `(-1, 1)` to `(3, 1)`.

![[PolyAndLineIntersection-20261103113147.jpeg]]

| x | y |
| --- | --- |
| 0 | 1 |
| 2 | 1 |

## Tests

Excel calculated 5 cases. All 5 passed.

| Case | Result |
| --- | --- |
| Horizontal cut `y = 1` | (0, 1) and (2, 1) |
| Segment through the corners (0, 0) and (2, 2) | (0, 0) and (2, 2) |
| Segment `y = 3`, which misses the square | `#N/A` |
| One column of vertices | `#REF!` |
| A text coordinate | `#VALUE!` |

## Related functions

- [[TwoLinesIntersection]] — one edge against the segment.
- [[IsTwoLinesIntersect]] — TRUE or FALSE for two segments.
- [[PolySlopeIntersection]] — the polygon against `y = mx + C`.
