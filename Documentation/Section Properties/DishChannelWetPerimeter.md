---
description: "Returns the wetted perimeter of a parabolic dish channel, the arc length of the parabola through (0, 0), (Width/2, -Height), and (Width, 0)."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the wetted perimeter of a parabolic dish channel, the arc length of the parabola through (0, 0), `(Width/2, -Height)`, and `(Width, 0)`.

Example file: [[Section Properties.xlsx]]

Argument order is `Width`, then `Height`. `Width` is the top chord and `Height` is the depth below that chord.

## Syntax

```
=DishChannelWetPerimeter(Width, Height)
```

The DishChannelWetPerimeter function has the following arguments:

| Argument | Description |
| --- | --- |
| `Width` | Required. Top chord length. |
| `Height` | Required. Depth below the top chord. |

## Remarks

- The length is the arc-length antiderivative of that parabola, with `LN` and `SQRT`.
- Width 0 or height 0 returns `#DIV/0!`.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Width 6 and height 3, the same dish as [[DishChannelArea]].

![[DishChannelWetPerimeter-20261103031946.jpeg]]

Formula: `=DishChannelWetPerimeter($B$351,$B$352)`. Result: 8.873657.

## Tests

Excel calculated 4 DishChannelWetPerimeter cases. All 4 passed. The expected length is a worksheet formula for the same antiderivative, not this function.

| Case | Result |
| --- | --- |
| Width 6, height 3 | 8.873657 |
| Width 2, height 2 | Matches the antiderivative |
| Height 0 | `#DIV/0!` |
| Text | `#VALUE!` |

## Related functions

- [[DishChannelArea]] — area of the same parabola, \((2/3)\times\mathrm{Width}\times\mathrm{Height}\).
- [[CoorCircularArc]] — points on a circular arc, not this parabola.
