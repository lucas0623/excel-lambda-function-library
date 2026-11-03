---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polar
aliases:
  - POLARTOXYCOOR
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Converts a polar radius and angle into Cartesian coordinates.

Example file: [[Geometry Family.xlsx]]

Angle 0 lies on the positive x-axis. The angle increases counterclockwise. The result is a 1×2 row `(x, y)`.

## Syntax

```
=PolarToXYCoor(r, theta_deg)
```

The PolarToXYCoor function has the following arguments:

| Argument | Description |
| --- | --- |
| `r` | Required. Radius. A negative radius points the opposite way. |
| `theta_deg` | Required. Angle, in degrees. |

## Remarks

- With \(\theta\) in radians,

$$
x = r\cos\theta, \quad y = r\sin\theta
$$

- `theta_deg` may be an array. Each angle returns its own `(x, y)` row when the call is inside a function that passes an angle column, as [[CoorCircularArc]] does.
- A non-numeric argument returns `#VALUE!`.
- The name stays `PolarToXYCoor`. `Coor` is the library's spelling for a coordinate array.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[PolarToXYCoor-20261103020343.jpeg]]

| r | theta_deg | Formula | x | y |
| --- | --- | --- | --- | --- |
| 1 | 90 | `=PolarToXYCoor(A10,B10)` | 0 | 1 |

## Tests

The `test` sheet checks the positive x-axis, the positive y-axis, the negative x-axis, and text. Excel calculated 4 PolarToXYCoor cases. All 4 passed.

| Case | r | theta_deg | x | y |
| --- | --- | --- | --- | --- |
| Positive x | 2 | 0 | 2 | 0 |
| Positive y | 1 | 90 | 0 | 1 |
| Negative x | 1 | 180 | −1 | 0 |
| Text | 1 | north | `#VALUE!` | |

## Related functions

- [[AdjustPolarAngle]] — wraps degrees into [0, 360) before a polar conversion.
- [[CoorCircularArc]] — builds an arc by calling PolarToXYCoor on an angle array.
