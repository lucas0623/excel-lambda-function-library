---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - REVERSEVERTICESDIRECTION
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Reverses the row order of a vertex list, which swaps clockwise and counterclockwise.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows. One row is returned unchanged.

## Syntax

```
=ReverseVerticesDirection(vertices)
```

The ReverseVerticesDirection function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows, in order. |

## Remarks

- The first row of the result is the last row of the input.
- Omitting `vertices` returns `#VALUE!`.
- The name stays `ReverseVerticesDirection`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The square `(0, 0)`, `(4, 0)`, `(4, 4)`, `(0, 4)` is reversed.

![[ReverseVerticesDirection-20261103120327.jpeg]]

| x | y |
| --- | --- |
| 0 | 4 |
| 4 | 4 |
| 4 | 0 |
| 0 | 0 |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Square reversed | `(0, 4)`, `(4, 4)`, `(4, 0)`, `(0, 0)` |
| One row `(5, 6)` | `(5, 6)` |
| Omitted argument | `#VALUE!` |

## Related functions

- [[isClockwise]] — TRUE when the shoelace sum is negative.
- [[CombineTwoPolygons]] — reverses a clockwise ring before the union.
- [[OverlappedPolygons]] — reverses a clockwise ring before the overlap.
