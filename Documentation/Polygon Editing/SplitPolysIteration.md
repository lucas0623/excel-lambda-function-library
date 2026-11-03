---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - SPLITPOLYSITERATION
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Splits a polygon once for each pair of intersection points.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows. `intersections` is a 2k×2 array of `(x, y)` rows, paired as rows `(1, 2)`, `(3, 4)`, and so on. Each result row is a strict `ARRAYTOTEXT` of one piece. A pair that does not cut a piece, or that cannot be read, leaves that piece unchanged.

## Syntax

```
=SplitPolysIteration(vertices, intersections)
```

The SplitPolysIteration function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows. |
| `intersections` | Required. 2k×2 array. Each pair is one cut. |

## Remarks

- The number of cuts is `ROWS(intersections) / 2`.
- Each piece is read back with [[TextToArray]] and cut with [[SplitPolyIntoTwoPolys]].
- Omitting `intersections` returns `#VALUE!`.
- The name stays `SplitPolysIteration`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The U is `(0, 0)`, `(3, 0)`, `(3, 3)`, `(2, 3)`, `(2, 1)`, `(1, 1)`, `(1, 3)`, `(0, 3)`. The pairs are `(0, 2)`–`(1, 2)` and `(2, 2)`–`(3, 2)`.

![[SplitPolysIteration-20261103120327.jpeg]]

| Piece |
| --- |
| `{1,2;1,3;0,3;0,2}` |
| `{3,2;3,3;2,3;2,2}` |
| `{0,0;3,0;3,2;2,2;2,1;1,1;1,2;0,2}` |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| U polygon, two pairs | The three pieces above |
| One pair on the square, `(0, 2)` to `(4, 2)` | The same two rectangles as [[SplitPolyIntoTwoPolys]] |
| Omitted intersections | `#VALUE!` |

## Related functions

- [[SplitPolyIntoTwoPolys]] — one cut.
- [[SplitPolyByLine]] — builds the pairs from [[PolyAndLineIntersection]] when there are more than two hits.
- [[TextToArray]] — reads each piece back into coordinates.
