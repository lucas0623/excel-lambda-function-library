---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the positive area of a simple polygon.

Example file: [[Section Properties.xlsx]]

`vertices` is an n×2 array in vertex order, column 1 x and column 2 y, with no repeated closing vertex. Clockwise and counterclockwise orders return the same area.

## Syntax

```
=Prop_Area(vertices)
```

The Prop_Area function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |

## Remarks

- The area is the absolute value of the shoelace sum

$$
\frac{1}{2}\sum_i (x_i y_{i+1}-y_i x_{i+1})
$$

- A rectangle of width \(b\) and height \(h\) has area \(bh\).
- Fewer than two columns, or a non-numeric coordinate, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The rectangle is walked clockwise and still has area 8.

![[Prop_Area-20261103031946.jpeg]]

| x | y |
| --- | --- |
| −2 | −1 |
| −2 | 1 |
| 2 | 1 |
| 2 | −1 |

Formula: `=Prop_Area(A29:B32)`. Result: 8.

## Tests

Excel calculated 4 Prop_Area cases. All 4 passed.

| Case | Result |
| --- | --- |
| 4 by 2 rectangle | 8 |
| Same vertices clockwise | 8 |
| Text coordinate | `#VALUE!` |
| One column | `#VALUE!` |

## Related functions

- [[Prop]] — area together with the centroidal moments.
- [[Prop_Cx]] — centroid x, which divides by this area.
- [[DishChannelArea]] — area of a parabolic dish, not a polygon.
