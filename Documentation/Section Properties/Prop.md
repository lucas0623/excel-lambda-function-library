---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns elastic section properties of a simple polygon about its centroid, as a 16×3 array of name, value, and unit.

Example file: [[Section Properties.xlsx]]

`points` is an n×2 array in vertex order, column 1 x and column 2 y, with no repeated closing vertex. Area is positive. `unit` defaults to mm and only labels the units.

## Syntax

```
=Prop(points, [unit])
```

The Prop function has the following arguments:

| Argument | Description |
| --- | --- |
| `points` | Required. n×2 vertices, x then y, without repeating the first vertex. |
| `unit` | Optional. Unit text for the labels. Default is `mm`. |

## Remarks

- Area is the absolute shoelace area. Clockwise and counterclockwise vertices return the same area.
- \(I_{xx}\), \(I_{yy}\), \(I_{xy}\), and the section moduli are about the centroid. For a rectangle of width \(b\) and height \(h\),

$$
I_{xx}=\frac{b h^3}{12},\qquad I_{yy}=\frac{h b^3}{12}
$$

- \(I_{xy}\) is the centroidal product of inertia and keeps its sign.
- \(Z_{xx}\) is the smaller of the top and bottom elastic moduli. \(Z_{yy}\) is the smaller of the left and right elastic moduli.
- A zero-area polygon returns `#DIV/0!`.
- Fewer than two columns, or a non-numeric coordinate, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The rectangle runs from (−2, −1) to (2, 1), so \(b=4\) and \(h=2\).

![[Prop-20261103031946.jpeg]]

| Result | Value |
| --- | --- |
| Area | 8 |
| Cx, Cy | 0, 0 |
| Ixx | 8/3 |
| Iyy | 32/3 |
| Ixy | 0 |
| Zxx | 8/3 |
| Zyy | 16/3 |

Formula: `=Prop(A8:B11)`.

## Tests

The `test` sheet checks that rectangle, a shifted copy of it, a right triangle, and the promised errors. Excel calculated 16 Prop cases. All 16 passed.

| Case | Result |
| --- | --- |
| 4 by 2 rectangle about the origin | Area 8, Ixx = 8/3, Iyy = 32/3, Ixy = 0 |
| Same rectangle with a corner at the origin | Centroid (2, 1), same centroidal moments |
| Right triangle (0, 0), (3, 0), (0, 3) | Area 4.5, Ixy = −9/8 |
| Collinear vertices | `#DIV/0!` |
| One column | `#VALUE!` |

## Related functions

- [[Prop_Area]] — area only.
- [[Prop_Centroid]] — the centroid as one row.
- [[Properties]] — elastic and plastic properties together.
- [[RotateShape]] — rotates the same vertex list.
