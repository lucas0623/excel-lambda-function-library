---
description: "Returns the x coordinate of the centroid."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the x coordinate of the centroid.

Example file: [[Section Properties.xlsx]]

`vertices` is an n×2 array in vertex order, column 1 x and column 2 y, with no repeated closing vertex.

## Syntax

```
=Prop_Cx(vertices)
```

The Prop_Cx function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |

## Remarks

- The centroid uses the signed shoelace area, so winding cancels.
- A rectangle from \(x=0\) to \(x=b\) has \(C_x=b/2\).
- A zero-area polygon returns `#DIV/0!`.
- Fewer than two columns, or a non-numeric coordinate, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The 4 by 2 rectangle has one corner at the origin, so the closed form is \(C_x=2\).

![[Prop_Cx-20261103031946.jpeg]]

Formula: `=Prop_Cx(A42:B45)`. Result: 2.

## Tests

Excel calculated 3 Prop_Cx cases. All 3 passed.

| Case | Result |
| --- | --- |
| Rectangle from x = 0 to x = 4 | 2 |
| Rectangle centered on the origin | 0 |
| Collinear vertices | `#DIV/0!` |

## Related functions

- [[Prop_Cy]] — the y coordinate of the same centroid.
- [[Prop_Centroid]] — both coordinates as one row.
- [[Prop_PlasticCentroidCpx]] — the equal-area axis, which is not this centroid.
