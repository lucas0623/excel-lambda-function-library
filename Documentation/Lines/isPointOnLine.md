---
description: "Returns TRUE when a point lies on a line segment."
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - ISPOINTONLINE
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

## Overview

Returns TRUE when a point lies on a line segment.

Example file: [[Lines.xlsx]]

The segment runs from I `(xi, yi)` to J `(xj, yj)`. The point is `(x, y)`. Either endpoint counts.

## Syntax

```
=isPointOnLine(xi, yi, xj, yj, x, y)
```

The isPointOnLine function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `x` | Required. X coordinate of the point. |
| `y` | Required. Y coordinate of the point. |

## Remarks

- A vertical segment uses `x = x_i` and `y` between the endpoints. A horizontal segment uses `y = y_i` and `x` between the endpoints.
- Any other segment uses the slope through I and J. The point is on the segment when its residual is under 1E-10 and it lies inside the segment bounds, expanded by that same tolerance.
- A point on the infinite line but outside the segment returns FALSE.
- A zero-length segment returns TRUE only at that point.
- A non-numeric argument returns `#VALUE!`.
- The name stays `isPointOnLine`. The formula was already this test. The comment now states the order, the tolerance, and the errors.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs. The point `(2, 1)` is the midpoint of `(0, 0)` to `(4, 2)`.

![[isPointOnLine-20261103113147.jpeg]]

| xi | yi | xj | yj | x | y | Result |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 4 | 2 | 2 | 1 | TRUE |

## Tests

Excel calculated 7 cases. All 7 passed.

| Case | Result |
| --- | --- |
| Midpoint of (0, 0)→(4, 2) | TRUE |
| Endpoint (4, 2) | TRUE |
| (6, 3), on the line and past J | FALSE |
| (2, 0), off the line | FALSE |
| Horizontal midpoint | TRUE |
| Vertical midpoint | TRUE |
| Text | `#VALUE!` |

## Related functions

- [[IsPointOnPolyEdge]] — the same test around a polygon. That function is outside this review.
- [[TwoLinesIntersection]] — the point where two segments meet, rather than a yes or no for one point.
