---
created: 2026-11-03
tags:
  - coordinate-geometry
  - translation
aliases:
  - TRANSLATECOOR
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Adds a shift to every row of a coordinate array.

Example file: [[Geometry Family.xlsx]]

`pointsArr` is an n×2 array. Each row is one point `(x, y)`. The result is an n×2 array.

## Syntax

```
=TranslateCoor(pointsArr, deltaX, deltaY)
```

The TranslateCoor function has the following arguments:

| Argument | Description |
| --- | --- |
| `pointsArr` | Required. An n×2 coordinate array. |
| `deltaX` | Required. Amount added to each x. |
| `deltaY` | Required. Amount added to each y. |

## Remarks

- Each point becomes \((x+\Delta x,\ y+\Delta y)\).
- A zero shift returns the same coordinates.
- An array with fewer than two columns returns `#VALUE!`.
- The formula was already this shift. The comment was empty.
- Callers that keep this shape include [[CoorBoltEle]], [[CreateBoltCoor_4Bolts]], [[CreateBoltCoor_6Bolts_2x3]], [[CreateBoltCoor_6Bolts_3x2]], and [[CreateBoltCoor_8Bolts_3x3]].
- The name stays `TranslateCoor`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[TranslateCoor-20261103020343.jpeg]]

| x | y | deltaX | deltaY | x′ | y′ |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 3 | −1 | 3 | −1 |
| 1 | 2 |  |  | 4 | 1 |

## Tests

The `test` sheet checks the shift above, a zero shift, and a one-column array. Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| (0, 0) and (1, 2) by (3, −1) | (3, −1) and (4, 1) |
| Zero shift | unchanged |
| One column | `#VALUE!` |

## Related functions

- [[RotateCoor]] — rotation of the same n×2 shape.
- [[CoorBoltEle]] — places bolt coordinates with TranslateCoor.
