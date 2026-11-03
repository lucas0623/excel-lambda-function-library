---
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - INTERSECTIONAREAANDLINE
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

# IntersectionAreaAndLine function

Returns the points where a closed polygon meets the line `y = mx + c`.

Example file: [[Lines.xlsx]]

`points` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. The result is the same array [[PolySlopeIntersection]] returns: rows sorted by x, then by y.

## Syntax

```
=IntersectionAreaAndLine(points, m, c)
```

The IntersectionAreaAndLine function has the following arguments:

| Argument | Description |
| --- | --- |
| `points` | Required. n×2 range. Column 1 is x. Column 2 is y. Row order is the polygon order. |
| `m` | Required. Finite slope of `y = mx + c`. |
| `c` | Required. Y-intercept. |

## Remarks

- A hit that is exactly the first vertex of an edge is omitted, so a shared vertex is returned once.
- No intersection returns `#N/A`.
- Fewer than two columns returns `#REF!`.
- A non-numeric coordinate returns `#VALUE!`.
- The previous formula asked [[IntersectionOfTwoLines]] for the text `x,y` and filtered with `MAP`. `MAP` cannot return the 1×2 point, which is why the text existed. The points are numeric now.
- `m` is a finite slope. A vertical line is not represented here.
- The name stays `IntersectionAreaAndLine`. It means the polygon region, not a numeric area.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs. The line is `y = 1`.

![[IntersectionAreaAndLine-20261103113147.jpeg]]

| x | y |
| --- | --- |
| 0 | 1 |
| 2 | 1 |

## Tests

Excel calculated 5 cases. All 5 passed.

| Case | Result |
| --- | --- |
| `y = 1` across the square | (0, 1) and (2, 1) |
| `y = x` through the corners | (0, 0) and (2, 2) |
| `y = 3`, which misses the square | `#N/A` |
| One column of vertices | `#REF!` |
| A text coordinate | `#VALUE!` |

## Related functions

- [[PolySlopeIntersection]] — the function this one calls.
- [[IntersectionOfTwoLines]] — one segment against `y = mx + C`.
- [[PolyAndLineIntersection]] — the polygon against a segment.
