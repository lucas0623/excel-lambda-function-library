---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

# DishChannelArea function

Returns the cross-section area of a parabolic dish channel.

Example file: [[Section Properties.xlsx]]

Argument order is `Width`, then `Height`. The dish is the parabola through (0, 0), `(Width/2, -Height)`, and `(Width, 0)`. `Width` is the top chord and `Height` is the depth below that chord.

## Syntax

```
=DishChannelArea(Width, Height)
```

The DishChannelArea function has the following arguments:

| Argument | Description |
| --- | --- |
| `Width` | Required. Top chord length. |
| `Height` | Required. Depth below the top chord. |

## Remarks

- For positive width and height the area is

$$
\frac{2}{3} \times \mathrm{Width} \times \mathrm{Height}
$$

- Height 0 returns 0. Width 0 returns `#DIV/0!`.
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Width 6 and height 3. The area is \((2/3)\times 6\times 3 = 12\).

![[DishChannelArea-20261103031946.jpeg]]

Formula: `=DishChannelArea($B$332,$B$333)`. Result: 12.

## Tests

Excel calculated 4 DishChannelArea cases. All 4 passed.

| Case | Result |
| --- | --- |
| Width 6, height 3 | 12 |
| Height 0 | 0 |
| Width 0 | `#DIV/0!` |
| Text | `#VALUE!` |

## Related functions

- [[DishChannelWetPerimeter]] — arc length of the same parabola.
- [[Prop_Area]] — area of a polygon, not this dish.
