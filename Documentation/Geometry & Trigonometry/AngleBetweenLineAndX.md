---
description: "Returns the angle, in degrees, between the line through two points and the x-axis."
created: 2026-11-03
tags:
  - coordinate-geometry
  - angle
aliases:
  - ANGLEBETWEENLINEANDX
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Returns the angle, in degrees, between the line through two points and the x-axis.

Example file: [[Geometry Family.xlsx]]

The result is the slope angle from −90 to 90, not a heading. Reversing the two points does not change a non-vertical result. A vertical line returns 90 whether it points up or down.

## Syntax

```
=AngleBetweenLineAndX(xi, yi, xj, yj)
```

The AngleBetweenLineAndX function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |

## Remarks

- For a non-vertical segment,

$$
\theta = \operatorname{DEGREES}\!\left(\arctan\frac{\Delta y}{\Delta x}\right)
$$

  Excel `ATAN` returns a value in (−90, 90).

- A vertical line, \(\Delta x = 0\) and \(\Delta y \neq 0\), returns 90.
- A zero-length segment returns `#DIV/0!`. The previous formula turned that division into 90 through `IFERROR`.
- A non-numeric argument returns `#VALUE!`.
- The name stays `AngleBetweenLineAndX`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[AngleBetweenLineAndX-20261103020530.jpeg]]

| xi | yi | xj | yj | Formula | Result |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1 | 1 | `=AngleBetweenLineAndX(A14,B14,C14,D14)` | 45 |

## Tests

The `test` sheet checks 45°, −45°, both vertical directions, a zero-length segment, and text. Excel calculated 6 cases. All 6 passed.

| Case | Result |
| --- | --- |
| (0, 0) to (1, 1) | 45 |
| (0, 0) to (1, −1) | −45 |
| Vertical up or down | 90 |
| Zero-length segment | `#DIV/0!` |
| Text | `#VALUE!` |

## Related functions

- [[AdjustPolarAngle]] — wraps a heading into [0, 360). This function does not.
- [[AngleBetween3Points]] — interior angle at the middle of three points.
