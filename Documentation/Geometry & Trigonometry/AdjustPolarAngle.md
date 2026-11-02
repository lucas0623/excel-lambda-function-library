---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polar-angle
aliases:
  - ADJUSTPOLARANGLE
AI Reviewed: true
example: "[[Angle Functions.xlsx]]"
---

# AdjustPolarAngle function

Wraps an angle in degrees into the half-open range **[0, 360)**.

Example file: [[Angle Functions.xlsx]]

Use it to normalize a polar angle before plotting or before passing it to [[PolarToXYCoor]]. A full turn returns 0. A negative angle wraps forward.

## Syntax

```
=AdjustPolarAngle(deg)
```

The AdjustPolarAngle function has the following argument:

| Argument | Description |
| --- | --- |
| `deg` | Required. The angle, in degrees. A blank cell is treated as 0. |

## Remarks

- The result is greater than or equal to 0 and less than 360. `360`, `-360`, and `720` all return `0`.
- Negative angles wrap forward. `-10` returns `350`. `-370` returns `350`.
- The stored formula is `=LAMBDA(deg,MOD(deg,360))`. That is the same value as `deg - 360 * INT(deg / 360)` for every real `deg`, including negatives, because Excel `INT` rounds toward negative infinity. `MOD` is the form Excel already uses for this wrap.
- The name stays `AdjustPolarAngle`. It is the degree normalizer for this library's polar helpers. It does not fold the angle into `(-180, 180]`.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Angle Functions.xlsx]]. Blue cells are inputs.

![[AdjustPolarAngle-20261103011500.jpeg]]

| deg | Formula | Result |
| --- | --- | --- |
| 45 | `=AdjustPolarAngle(A6)` | 45 |
| 370 | `=AdjustPolarAngle(A7)` | 10 |
| 720 | `=AdjustPolarAngle(A8)` | 0 |
| -10 | `=AdjustPolarAngle(A9)` | 350 |
| -370 | `=AdjustPolarAngle(A10)` | 350 |
| 359.5 | `=AdjustPolarAngle(A11)` | 359.5 |

## Tests

The `test` sheet of [[Angle Functions.xlsx]] checks full turns, negative angles, a blank cell, and text. Excel calculated 16 AdjustPolarAngle cases. All 16 passed, together with the 16 AngleBetween3Points cases (32 passed, 0 failed).

| Case | deg | Result |
| --- | --- | --- |
| Full turn | 360 | 0 |
| Two turns plus a fraction | 725.25 | 5.25 |
| Negative fraction | -720.5 | 359.5 |
| Many turns | 36015 | 15 |
| Blank cell | *(blank)* | 0 |
| Text | north | `#VALUE!` |

## Related functions

- [[PolarToXYCoor]] — polar `(r, theta)` to Cartesian coordinates. `theta` is in degrees.
- [[AngleBetween3Points]] — interior angle at the middle of three points.
