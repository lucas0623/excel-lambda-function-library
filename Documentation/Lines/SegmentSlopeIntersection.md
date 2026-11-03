---
description: "Returns the point where a segment meets the infinite line y = mx + C."
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - TwoLinesIntersection2
  - TWOLINESINTERSECTION2
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

## Overview

Returns the point where a segment meets the infinite line `y = mx + C`.

Example file: [[Lines.xlsx]]

The segment runs from I `(xi, yi)` to J `(xj, yj)`. The result is a 1×2 row `(x, y)`. The previous name was `TwoLinesIntersection2`.

## Syntax

```
=SegmentSlopeIntersection(xi, yi, xj, yj, m, C)
```

The SegmentSlopeIntersection function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `m` | Required. Slope of the infinite line. `#N/A`, or an absolute value greater than 1E15, means a vertical line. |
| `C` | Required. Intercept. For `y = mx + C` this is the y-intercept. For a vertical line it is the x coordinate. |

## Remarks

- Write `dx = x_j - x_i` and `dy = y_j - y_i`. The segment is `I + t (J - I)` with `t` from 0 to 1.
- A vertical line `x = C` uses `t = (C - x_i) / dx`. Any other line uses

$$
t = \frac{m x_i + C - y_i}{dy - m\, dx}
$$

- The point is returned when `t` is inside `[-1E-10, 1 + 1E-10]`.
- Parallel and collinear inputs return `#N/A`. A line that misses the segment returns `#N/A`.
- A non-numeric argument returns `#VALUE!`.
- The old formula never reached its general intersection, and it treated an x coordinate of 0 as no hit. Both are fixed. [[PolySlopeIntersection]] and [[CreateHatch]] use this result.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs. The segment is `(0, 0)` to `(2, 2)` and the line is `y = -x + 2`.

![[SegmentSlopeIntersection-20261103113147.jpeg]]

| xi | yi | xj | yj | m | C | x | y |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 2 | 2 | -1 | 2 | 1 | 1 |

## Tests

Excel calculated 6 cases. All 6 passed.

| Case | Result |
| --- | --- |
| `(0, 0)→(2, 2)` and `y = -x + 2` | (1, 1) |
| Hit at the first endpoint | (0, 0) |
| Vertical line `x = 1` | (1, 0) |
| Hit on the line `x = 0` | (0, 1) |
| Parallel line | `#N/A` |
| Text | `#VALUE!` |

## Related functions

- [[IntersectionOfTwoLines]] — the same arguments with exact arithmetic and no vertical line.
- [[PolySlopeIntersection]] — this test against every edge of a polygon.
- [[TwoLinesIntersection]] — two segments, with no slope argument.
