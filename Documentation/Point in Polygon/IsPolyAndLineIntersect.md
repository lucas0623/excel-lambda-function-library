---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISPOLYANDLINEINTERSECT
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when a segment meets a polygon, including a segment that lies along an edge.

Example file: [[Point in Polygon.xlsx]]

The polygon is an n×2 array of `(x, y)` rows. The last row connects to the first. The segment runs from `(xi, yi)` to `(xj, yj)`.

## Syntax

```
=IsPolyAndLineIntersect(vertices, xi, yi, xj, yj)
```

The IsPolyAndLineIntersect function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 polygon, `(x, y)` rows in order. |
| `xi` | Required. X of the segment start. |
| `yi` | Required. Y of the segment start. |
| `xj` | Required. X of the segment end. |
| `yj` | Required. Y of the segment end. |

## Remarks

- A proper crossing is taken from [[PolyAndLineIntersection]]. That function returns `#N/A` when it finds no point. This function turns that `#N/A` into FALSE.
- A segment along an edge used to return FALSE, because a collinear pair returns `#N/A` from [[TwoLinesIntersection]]. It is now TRUE when either endpoint lies on an edge, or a vertex lies on the segment, using [[isPointOnLine]].
- A segment that misses the polygon returns FALSE.
- Non-numeric coordinates return `#VALUE!`.
- Fewer than two vertex columns returns `#REF!`.
- The name stays `IsPolyAndLineIntersect`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. The segment from (−1, 2) to (5, 2) crosses the square (0, 0), (4, 0), (4, 4), (0, 4).

![[IsPolyAndLineIntersect-20261103025453.jpeg]]

| Segment | Formula | Result |
| --- | --- | --- |
| (−1, 2) to (5, 2) | `=IsPolyAndLineIntersect(B89:C92,F89,G89,F90,G90)` | TRUE |

## Tests

The `test` sheet checks the crossing segment, a segment lying on the bottom edge, a miss, text, and a one-column vertex list. Excel calculated 5 IsPolyAndLineIntersect cases. All 5 passed.

| Case | Result |
| --- | --- |
| (−1, 2) to (5, 2) | TRUE |
| (1, 0) to (3, 0) on the bottom edge | TRUE |
| (5, 5) to (6, 6) | FALSE |
| Text coordinate | `#VALUE!` |
| One-column vertices | `#REF!` |

## Related functions

- [[PolyAndLineIntersection]] — the crossing points. Not edited in this review.
- [[isPointOnLine]] — detects a segment that lies on an edge.
- [[IsAnyEdgeIntersect]] — applies this test to every edge of polygon A.
