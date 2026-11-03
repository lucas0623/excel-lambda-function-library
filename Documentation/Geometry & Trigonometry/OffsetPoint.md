---
created: 2026-11-03
tags:
  - coordinate-geometry
  - offset
aliases:
  - OFFSETPOINT
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Returns a point reached by walking along a segment and then stepping to its left.

Example file: [[Geometry Family.xlsx]]

Start at I `(xi, yi)`. Walk distance `rLen` toward J `(xj, yj)`. Then step distance `oLen` to the left of the directed segment I→J. The result is a 1×2 row `(x, y)`.

## Syntax

```
=OffsetPoint(xi, yi, xj, yj, rLen, oLen)
```

The OffsetPoint function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `rLen` | Required. Distance from I toward J. It may pass J. |
| `oLen` | Required. Signed offset. Positive is left of I→J. Negative is right. |

## Remarks

- Let \(\mathbf{u}\) be the unit vector from I to J. The point is

$$
(x_i, y_i) + r\,\mathbf{u} + o\,(-u_y,\ u_x)
$$

- `oLen = 0` stays on the line through I and J.
- A zero-length segment returns `#DIV/0!`.
- A non-numeric argument returns `#VALUE!`.
- Positive `oLen` is left of the direction I→J. The previous formula used `ATAN` of the slope, so the side flipped with the direction of the segment. [[OffsetLine]] is the only library caller, and it uses this same left-hand rule.
- The name stays `OffsetPoint`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[OffsetPoint-20261103020343.jpeg]]

| xi | yi | xj | yj | rLen | oLen | x | y |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 0 | 0.5 | 1 | 0.50 | 1.00 |

## Tests

The `test` sheet checks a left offset of a rightward segment, a point that stays on the line, a left offset of an upward segment, and a zero-length segment. Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| Left of the +x direction | (0.5, 1) |
| On the line, `oLen = 0` | (2, 0) |
| Left of the +y direction | (−1, 0) |
| Zero-length segment | `#DIV/0!` |

## Related functions

- [[Dist]] — length of I→J, used as the unit-vector divisor.
- [[OffsetLine]] — the same left-hand offset, applied to both ends of a segment.
