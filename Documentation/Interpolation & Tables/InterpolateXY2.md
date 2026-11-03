---
description: "Returns the point at distance rLen from I toward J."
created: 2026-11-03
tags:
  - interpolation
  - excel-lambda
aliases:
  - INTERPOLATEXY2
AI Reviewed: true
example: "[[Interpolation.xlsx]]"
---

## Overview

Returns the point at distance `rLen` from I toward J.

Example file: [[Interpolation.xlsx]]

![[InterpolateXY2-20261103025149.jpeg]]

This is not a second form of [[InterpolateXY]]. InterpolateXY reads a y at an x. InterpolateXY2 walks a length along the segment and returns both coordinates. The result is a 1×2 row `(x, y)`.

## Syntax

```
=InterpolateXY2(xi, yi, xj, yj, rLen)
```

The InterpolateXY2 function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `rLen` | Required. Distance from I toward J, in the same units as the coordinates. It is a length, not a fraction of the segment. |

## Remarks

- Let \(d\) be [[Dist]] from I to J. The point is

$$
(x, y) = (x_i, y_i) + \frac{rLen}{d}\big((x_j - x_i),\, (y_j - y_i)\big)
$$

- `rLen` 0 returns `(xi, yi)`.
- `rLen` equal to the segment length returns `(xj, yj)`.
- A longer `rLen` continues past J. A negative `rLen` continues past I. Both stay on the same line.
- Coincident points return `#DIV/0!`, because the length of the segment is 0.
- A non-numeric argument returns `#VALUE!`.
- The segment length is a call to [[Dist]].

## Example

The sample data is on the `example` sheet of [[Interpolation.xlsx]]. Blue cells are inputs. From (0, 0) toward (3, 4), the segment length is 5, so `rLen` 2.5 is the midpoint (1.5, 2).

| xi | yi | xj | yj | rLen | Formula | x | y |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 3 | 4 | 2.5 | `=InterpolateXY2(A22,B22,C22,D22,E22)` | 1.5 | 2 |

## Tests

The `test` sheet checks the midpoint, both ends of the segment, a point past J, a vertical segment, coincident points, and text. Excel calculated 7 InterpolateXY2 cases. All 7 passed.

| Case | Result |
| --- | --- |
| (0, 0) to (3, 4), rLen 2.5 | (1.5, 2) |
| rLen 0 | (0, 0) |
| rLen 5 | (3, 4) |
| rLen 10 | (6, 8) |
| (0, 0) to (0, 10), rLen 2.5 | (0, 2.5) |
| Coincident points | `#DIV/0!` |
| Text rLen | `#VALUE!` |

## Related functions

- [[Dist]] — length of the segment. InterpolateXY2 divides by it.
- [[InterpolateXY]] — y on the line at a given x.
- [[InterpolateXYTable]] — y from a sorted table of points.
