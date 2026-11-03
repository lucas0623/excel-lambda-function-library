---
created: 2026-11-03
tags:
  - interpolation
  - excel-lambda
aliases:
  - INTERPOLATEXY
AI Reviewed: true
example: "[[Interpolation.xlsx]]"
---

# InterpolateXY function

Returns the y on the straight line through two points at a given x.

Example file: [[Interpolation.xlsx]]

![[InterpolateXY-20261103025149.jpeg]]

The points are I `(xi, yi)` and J `(xj, yj)`. The result is the y of the point on that line whose x is the fifth argument.

## Syntax

```
=InterpolateXY(xi, yi, xj, yj, x)
```

The InterpolateXY function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `x` | Required. X at which to read y. It may lie outside the segment. |

## Remarks

- The value is

$$
y = y_i + \frac{x - x_i}{x_j - x_i}(y_j - y_i)
$$

- At `xi` the result is `yi`. At `xj` the result is `yj`.
- An x outside the segment stays on the same line.
- `xi = xj` returns `#DIV/0!`.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Interpolation.xlsx]]. Blue cells are inputs. The chart is the line through (0, 0) and (10, 100). At x = 2.5 the line is y = 25.

| xi | yi | xj | yj | x | Formula | y |
| --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 10 | 100 | 2.5 | `=InterpolateXY(A9,B9,C9,D9,E9)` | 25 |

## Tests

The `test` sheet checks the line, both endpoints, the extension past 10, equal x, and text. Excel calculated 6 InterpolateXY cases. All 6 passed.

| Case | Result |
| --- | --- |
| (0, 0) to (10, 100) at x = 2.5 | 25 |
| x = 0 | 0 |
| x = 10 | 100 |
| x = 15 | 150 |
| Both x values are 5 | `#DIV/0!` |
| Text x | `#VALUE!` |

## Related functions

- [[InterpolateXYTable]] — the same line, read from a sorted column of points.
- [[InterpolateXY2]] — a point at a distance along the segment, not a y at x.
- [[CreateStepRange]] — an evenly spaced column of x values.
