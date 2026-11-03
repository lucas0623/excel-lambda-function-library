---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Rotates each vertex of an n×2 shape counterclockwise by `deg` degrees.

Example file: [[Section Properties.xlsx]]

`shapeArr` is column 1 x and column 2 y, in row order. `center` is an optional 1×2 row `(x, y)`.

## Syntax

```
=RotateShape(shapeArr, deg, [center])
```

The RotateShape function has the following arguments:

| Argument | Description |
| --- | --- |
| `shapeArr` | Required. n×2 vertices, x then y. |
| `deg` | Required. Rotation in degrees, counterclockwise. |
| `center` | Optional. 1×2 center. If omitted, the shape rotates about its centroid. |

## Remarks

- Each vertex is rotated by [[RotatePoint]]. Positive degrees are counterclockwise: (1, 0) about the origin by 90° is (0, 1).
- If `center` is omitted, a zero-area shape has no centroid and returns `#DIV/0!`.
- A row that is not two numbers returns `#VALUE!` or `#REF!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. (1, 0) rotated 90° about the origin lands on (0, 1).

![[RotateShape-20261103031946.jpeg]]

Formula: `=RotateShape(HSTACK(B115,B116),B117,HSTACK(B118,B119))`.

## Tests

Excel calculated 5 RotateShape cases. All 5 passed.

| Case | Result |
| --- | --- |
| (1, 0) by 90° about the origin | (0, 1) |
| (1, 0) by −90° about the origin | (0, −1) |
| 0° | The point is unchanged |
| Square rotated 180° about its centroid | Opposite corner |
| One column | `#REF!` |

## Related functions

- [[RotatePoint]] — one point, same counterclockwise sense.
- [[Prop_Centroid]] — the center used when `center` is omitted.
- [[CoorRect]] — a rectangle this function can rotate.
