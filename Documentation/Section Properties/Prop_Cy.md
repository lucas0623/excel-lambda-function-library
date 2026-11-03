---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

# Prop_Cy function

Returns the y coordinate of the centroid.

Example file: [[Section Properties.xlsx]]

`vertices` is an n×2 array in vertex order, column 1 x and column 2 y, with no repeated closing vertex.

## Syntax

```
=Prop_Cy(vertices)
```

The Prop_Cy function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |

## Remarks

- The centroid uses the signed shoelace area, so winding cancels.
- A rectangle from \(y=0\) to \(y=h\) has \(C_y=h/2\).
- A zero-area polygon returns `#DIV/0!`.
- Fewer than two columns, or a non-numeric coordinate, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The same shifted rectangle used for [[Prop_Cx]] has \(C_y=1\).

![[Prop_Cy-20261103031946.jpeg]]

Formula: `=Prop_Cy(A42:B45)`. Result: 1.

## Tests

Excel calculated 3 Prop_Cy cases. All 3 passed.

| Case | Result |
| --- | --- |
| Rectangle from y = 0 to y = 2 | 1 |
| Rectangle centered on the origin | 0 |
| Collinear vertices | `#DIV/0!` |

## Related functions

- [[Prop_Cx]] — the x coordinate of the same centroid.
- [[Prop_Centroid]] — both coordinates as one row.
- [[Prop_PlasticCentroidCpy]] — the horizontal equal-area axis.
