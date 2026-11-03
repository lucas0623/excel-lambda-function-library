---
description: "Rotates every row of a coordinate array counterclockwise about a center."
created: 2026-11-03
tags:
  - coordinate-geometry
  - rotation
aliases:
  - ROTATECOOR
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Rotates every row of a coordinate array counterclockwise about a center.

Example file: [[Geometry Family.xlsx]]

`arr` is an n×2 array. Each row is one point `(x, y)`. `deg` is the angle in degrees. The center is `(rx, ry)`. The result is an n×2 array. Positive degrees match [[RotatePoint]].

## Syntax

```
=RotateCoor(arr, rx, ry, deg)
```

The RotateCoor function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. An n×2 coordinate array. |
| `rx` | Required. X coordinate of the center. |
| `ry` | Required. Y coordinate of the center. |
| `deg` | Required. Rotation, in degrees, counterclockwise. |

## Remarks

- Each point uses the same matrix as [[RotatePoint]]:

$$
\begin{bmatrix} x' \\ y' \end{bmatrix}
=
\begin{bmatrix} r_x \\ r_y \end{bmatrix}
+
\begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}
\begin{bmatrix} x-r_x \\ y-r_y \end{bmatrix}
$$

- The previous formula rotated clockwise. Positive `deg` now agrees with RotatePoint. [[PointObjToBoltEleForPlot]] calls RotateCoor when its degree is not 0, so a positive degree on that plot turns the other way from before.
- A row that is not two numbers returns `#REF!`.
- The name stays `RotateCoor`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[RotateCoor-20261103020343.jpeg]]

| x | y | rx | ry | deg | x′ | y′ |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 0 | 90 | 0 | 1 |
| 0 | 1 |  |  |  | −1 | 0 |

## Tests

The `test` sheet checks a 90° turn of two points, a 0° turn, and a one-column array. Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| (1, 0) and (0, 1) by 90° | (0, 1) and (−1, 0) |
| Same points by 0° | unchanged |
| One column | `#REF!` |

## Related functions

- [[RotatePoint]] — one point, same direction.
- [[PointObjToBoltEleForPlot]] — rotates bolt coordinates when a degree is supplied.
