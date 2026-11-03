---
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - PolyAndLineIntersection2
  - POLYANDLINEINTERSECTION2
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

# PolySlopeIntersection function

Returns the points where a closed polygon meets the line `y = mx + C`.

Example file: [[Lines.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. Each edge is tested with [[SegmentSlopeIntersection]]. The rows are sorted by x, then by y. The previous name was `PolyAndLineIntersection2`.

## Syntax

```
=PolySlopeIntersection(vertices, m, C)
```

The PolySlopeIntersection function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 range. Column 1 is x. Column 2 is y. Row order is the polygon order. |
| `m` | Required. Slope. `#N/A`, or an absolute value greater than 1E15, means a vertical line. |
| `C` | Required. Intercept. For a vertical line this is the x coordinate. |

## Remarks

- A hit that is exactly the first vertex of an edge is omitted, so a shared vertex is returned once.
- No intersection returns `#N/A`.
- Fewer than two columns returns `#REF!`.
- A non-numeric coordinate returns `#VALUE!`.
- The previous formula treated an x coordinate of 0 as no intersection. [[CreateHatch]] calls this function. A hatch line that returns one row is skipped by that caller; a miss is `#N/A`.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs. The line is `y = 1`.

![[PolySlopeIntersection-20261103113147.jpeg]]

| x | y |
| --- | --- |
| 0 | 1 |
| 2 | 1 |

## Tests

Excel calculated 6 cases. All 6 passed.

| Case | Result |
| --- | --- |
| `y = 1` across the square | (0, 1) and (2, 1) |
| `y = x` through the corners | (0, 0) and (2, 2) |
| Vertical line `x = 1` | (1, 0) and (1, 2) |
| `y = 3`, which misses the square | `#N/A` |
| One column of vertices | `#REF!` |
| A text coordinate | `#VALUE!` |

## Related functions

- [[SegmentSlopeIntersection]] — one edge against the line.
- [[PolyAndLineIntersection]] — the polygon against a segment.
- [[IntersectionAreaAndLine]] — the same points, under the older name.
- [[CreateHatch]] — draws hatch segments from these points.
