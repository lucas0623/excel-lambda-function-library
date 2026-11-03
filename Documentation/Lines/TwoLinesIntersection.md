---
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - TWOLINESINTERSECTION
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

# TwoLinesIntersection function

Returns the point where two line segments meet.

Example file: [[Lines.xlsx]]

The segments are I `(xi, yi)` to J `(xj, yj)` and P `(xp, yp)` to Q `(xq, yq)`. The result is a 1×2 row `(x, y)`.

## Syntax

```
=TwoLinesIntersection(xi, yi, xj, yj, xp, yp, xq, yq)
```

The TwoLinesIntersection function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `xp` | Required. X coordinate of point P. |
| `yp` | Required. Y coordinate of point P. |
| `xq` | Required. X coordinate of point Q. |
| `yq` | Required. Y coordinate of point Q. |

## Remarks

- Each segment is the infinite line `a x + b y = c`, with `a = y_j - y_i`, `b = x_i - x_j`, and `c = a x_i + b y_i`. The same coefficients are built for P to Q. The lines meet at

$$
x = \frac{b_2 c_1 - b_1 c_2}{a_1 b_2 - a_2 b_1}, \quad y = \frac{a_1 c_2 - a_2 c_1}{a_1 b_2 - a_2 b_1}
$$

- The point is returned only when it lies inside both segment bounding boxes, so an endpoint counts.
- Parallel segments, collinear segments, and a crossing that misses either segment return `#N/A`. Overlapping collinear segments do not have one intersection point, so they return `#N/A` as well.
- A non-numeric argument returns `#VALUE!`.
- The name stays `TwoLinesIntersection`.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs.

![[TwoLinesIntersection-20261103113147.jpeg]]

| xi | yi | xj | yj | xp | yp | xq | yq | x | y |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 2 | 2 | 0 | 2 | 2 | 0 | 1 | 1 |

## Tests

The `test` sheet checks a crossing, an endpoint, a parallel pair, a miss, and text. Excel calculated 5 cases. All 5 passed.

| Case | Result |
| --- | --- |
| (0, 0)→(2, 2) and (0, 2)→(2, 0) | (1, 1) |
| Touch at an endpoint | (1, 0) |
| Parallel segments | `#N/A` |
| Crossing outside a segment | `#N/A` |
| Text | `#VALUE!` |

## Related functions

- [[IsTwoLinesIntersect]] — TRUE or FALSE for the same two segments.
- [[PolyAndLineIntersection]] — the same test against every edge of a polygon.
- [[SegmentSlopeIntersection]] — a segment against the line `y = mx + C`.
