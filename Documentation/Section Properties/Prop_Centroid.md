---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the centroid as a 1×2 row `(Cx, Cy)`.

Example file: [[Section Properties.xlsx]]

`vertices` is an n×2 array in vertex order, column 1 x and column 2 y, with no repeated closing vertex.

## Syntax

```
=Prop_Centroid(vertices)
```

The Prop_Centroid function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |

## Remarks

- This is [[Prop_Cx]] and [[Prop_Cy]] in one row.
- A rectangle with a corner at the origin and the opposite corner at \((b, h)\) has centroid \((b/2, h/2)\).
- A zero-area polygon returns `#DIV/0!`.
- Fewer than two columns, or a non-numeric coordinate, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The shifted 4 by 2 rectangle has centroid (2, 1).

![[Prop_Centroid-20261103031946.jpeg]]

Formula: `=Prop_Centroid(A42:B45)`. Result: 2 and 1.

## Tests

Excel calculated 3 Prop_Centroid cases. All 3 passed.

| Case | Result |
| --- | --- |
| Rectangle from (0, 0) to (4, 2) | (2, 1) |
| Rectangle centered on the origin | (0, 0) |
| Collinear vertices | `#DIV/0!` |

## Related functions

- [[Prop_Cx]] — x only.
- [[Prop_Cy]] — y only.
- [[RotateShape]] — uses this centroid when the center is omitted.
