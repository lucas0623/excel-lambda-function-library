---
description: "Returns the interior angle, in degrees, at the middle point."
created: 2026-04-29
tags:
  - coordinate-geometry
  - angle-between-points
aliases:
  - ANGLEBETWEEN3POINTS
AI Reviewed: true
example: "[[Angle Functions.xlsx]]"
---

## Overview

Returns the interior angle, in degrees, at the middle point.

Example file: [[Angle Functions.xlsx]]

For points I, J, and K, the vertex is J. The result is the smaller angle between the rays J→I and J→K, from 0 to 180.

$$
\theta = \deg\left(\cos^{-1}\left(\frac{a^2 + b^2 - c^2}{2ab}\right)\right)
$$

- $a$ is the distance from I to J
- $b$ is the distance from J to K
- $c$ is the distance from K to I

Side lengths come from [[Dist]].

## Syntax

```
=AngleBetween3Points(xi, yi, xj, yj, xk, yk)
```

The AngleBetween3Points function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi`, `yi` | Required. Coordinates of point I. |
| `xj`, `yj` | Required. Coordinates of point J, the vertex. |
| `xk`, `yk` | Required. Coordinates of point K. |

## Remarks

- The result is in degrees, from 0 to 180. This is not a signed direction. Use `ATAN2` when the clockwise or counterclockwise sense matters.
- Collinear points are valid. The angle is 0 when I and K lie on the same ray from J, and 180 when J lies between I and K.
- The cosine is clamped to `[-1, 1]` with `MAX(-1, MIN(1, ratio))` before `ACOS`. A value that falls just outside that interval because of binary rounding would otherwise return `#NUM!`.
- If the side from J to I or from J to K has length 0, the function returns `#DIV/0!`.
- A non-numeric coordinate returns `#VALUE!`.
- The previous formula assigned `(xi, yi, xj, yj)` to the side length. In Excel that is a four-cell array, not a distance, so the function did not return the angle at J. It now calls `{ref}Dist`.

## Example 1 — right angle at J

Points I(0, 0), J(3, 0), and K(3, 4). The right angle is at J.

![[AngleBetween3Points-20261103011500.jpeg]]

| Point | x | y |
| --- | --- | --- |
| I | 0 | 0 |
| J | 3 | 0 |
| K | 3 | 4 |

```
=AngleBetween3Points(B19,C19,B20,C20,B21,C21)
```

Result: **90**.

## Example 2 — 3-4-5 triangle, angle at J

Points I(0, 0), J(3, 0), and K(0, 4). The right angle of this triangle is at I. The angle at J is $\cos^{-1}(0.6)$.

```
=AngleBetween3Points(0, 0, 3, 0, 0, 4)
```

Result: **53.130102** degrees, displayed as 53.13 on the example sheet.

## Tests

The `test` sheet of [[Angle Functions.xlsx]] compares the function with known angles. Excel calculated 16 cases. All 16 passed.

| Case | Points I, J, K | Result |
| --- | --- | --- |
| Right angle at J | (0, 0), (3, 0), (3, 4) | 90 |
| Vertical right angle | (0, 0), (0, 2), (3, 2) | 90 |
| Straight line | (0, 0), (1, 0), (2, 0) | 180 |
| K between I and J | (0, 0), (2, 0), (1, 0) | 0 |
| I and K are the same point | (1, 1), (4, 2), (1, 1) | 0 |
| Equilateral | (0, 0), (1, 0), (0.5, √3/2) | 60 |
| 135 degrees | (-1, 0), (0, 0), (1, 1) | 135 |
| Large coordinates | (1000, 1000), (1003, 1000), (1003, 1004) | 90 |
| Coincident I and J | (2, 2), (2, 2), (5, 1) | `#DIV/0!` |
| Non-numeric coordinate | x of I is `abc` | `#VALUE!` |

## Related functions

- [[Dist]] — Euclidean distance. AngleBetween3Points calls it for each side.
- [[AdjustPolarAngle]] — wraps a degree angle into [0, 360).
- [[AngleBetweenLineAndX]] — angle of a line against the x-axis, from -90 to 90.
