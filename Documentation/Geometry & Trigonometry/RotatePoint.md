---
created: 2026-11-03
tags:
  - coordinate-geometry
  - rotation
aliases:
  - ROTATEPOINT
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Rotates one point counterclockwise about a center.

Example file: [[Geometry Family.xlsx]]

`point` is a 1×2 row `(x, y)`. `deg` is the angle in degrees. The center is `(x_center, y_center)`. The result is a 1×2 row.

## Syntax

```
=RotatePoint(point, deg, x_center, y_center)
```

The RotatePoint function has the following arguments:

| Argument | Description |
| --- | --- |
| `point` | Required. A 1×2 row `(x, y)`. |
| `deg` | Required. Rotation, in degrees, counterclockwise. |
| `x_center` | Required. X coordinate of the center. |
| `y_center` | Required. Y coordinate of the center. |

## Remarks

- The rotation matrix about the origin is

$$
\begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}
$$

  The point is shifted to the center, multiplied, and shifted back.

- `0` and `360` leave the point where it is. A negative angle rotates clockwise.
- A value that is not one row of two numbers returns `#VALUE!` or `#REF!`.
- The stored comment used to describe six separate arguments and an optional `"x"` or `"y"` flag. The function does not have that signature. [[RotateShape]] still passes a 1×2 point, a degree, and a center.
- The name stays `RotatePoint`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[RotatePoint-20261103020343.jpeg]]

| x | y | deg | x_center | y_center | x′ | y′ |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 90 | 0 | 0 | 0 | 1 |

## Tests

The `test` sheet checks 90°, 0°, −90°, a 180° turn about `(1, 0)`, and a value that is not a point. Excel calculated 5 cases. All 5 passed.

| Case | Result |
| --- | --- |
| (1, 0) by 90° about the origin | (0, 1) |
| (1, 0) by 0° | (1, 0) |
| (1, 0) by −90° | (0, −1) |
| (2, 0) by 180° about (1, 0) | (0, 0) |
| A single number | `#REF!` |

## Related functions

- [[RotateCoor]] — the same counterclockwise rule, applied to every row of an array.
- [[RotateShape]] — calls RotatePoint once per vertex.
