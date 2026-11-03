---
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - INTERSECTIONOFTWOLINES
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

## Overview

Returns the point where a segment meets the infinite line `y = mx + C`.

Example file: [[Lines.xlsx]]

The segment runs from I `(xi, yi)` to J `(xj, yj)`. The result is a 1×2 row `(x, y)`. `m` is a finite slope. A vertical line has no slope; use [[SegmentSlopeIntersection]] for that line.

## Syntax

```
=IntersectionOfTwoLines(xi, yi, xj, yj, m, C)
```

The IntersectionOfTwoLines function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `m` | Required. Finite slope of the line `y = mx + C`. |
| `C` | Required. Y-intercept of that line. |

## Remarks

- Write `dx = x_j - x_i` and `dy = y_j - y_i`. When `x_i = x_j` the segment is vertical, `x = x_i`, and `y = m x + C`. Otherwise

$$
t = \frac{m x_i + C - y_i}{dy - m\, dx}
$$

and the point is `(x_i + t\, dx,\ m x + C)`.

- The comparison is exact. There is no tolerance.
- Parallel and collinear inputs return `#N/A`. A line that misses the segment returns `#N/A`. The previous formula divided by zero and returned `#DIV/0!`, and it returned the text `x,y` instead of coordinates.
- A non-numeric argument returns `#VALUE!`.
- The name stays `IntersectionOfTwoLines`.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs.

![[IntersectionOfTwoLines-20261103113147.jpeg]]

| xi | yi | xj | yj | m | C | x | y |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 2 | 2 | -1 | 2 | 1 | 1 |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| `(0, 0)→(2, 2)` and `y = -x + 2` | (1, 1) |
| Vertical segment, hit at the endpoint | (1, 0) |
| Parallel line | `#N/A` |
| Text | `#VALUE!` |

## Related functions

- [[SegmentSlopeIntersection]] — adds a tolerance and a vertical line, where `m` is `#N/A` and `C` is x.
- [[IntersectionAreaAndLine]] — this line against every edge of a polygon, through [[PolySlopeIntersection]].
