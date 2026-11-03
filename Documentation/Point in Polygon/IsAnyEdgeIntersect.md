---
description: "Returns TRUE when an edge of polygon A meets an edge of polygon B."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISANYEDGEINTERSECT
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when an edge of polygon A meets an edge of polygon B.

Example file: [[Point in Polygon.xlsx]]

Both arguments are n×2 arrays of `(x, y)` rows. The last row of each connects to the first. A shared vertex and a shared edge count. A polygon strictly inside the other, with no boundary contact, returns FALSE.

## Syntax

```
=IsAnyEdgeIntersect(verticesA, verticesB)
```

The IsAnyEdgeIntersect function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesA` | Required. Polygon A, `(x, y)` rows in order. |
| `verticesB` | Required. Polygon B, `(x, y)` rows in order. |

## Remarks

- Each edge of A is passed to [[IsPolyAndLineIntersect]] against B.
- Squares that only meet at a corner return TRUE.
- Fewer than two columns returns `#REF!`.
- The name stays `IsAnyEdgeIntersect`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs. Polygon A is (0, 0), (4, 0), (4, 4), (0, 4). Polygon B is (3, 3), (6, 3), (6, 6), (3, 6). Their edges cross.

![[IsAnyEdgeIntersect-20261103025453.jpeg]]

| Polygons | Formula | Result |
| --- | --- | --- |
| Overlapping squares | `=IsAnyEdgeIntersect(B119:C122,F119:G122)` | TRUE |

## Tests

The `test` sheet checks overlapping squares, an inner square that does not touch the boundary, squares that meet only at (4, 4), and a one-column vertex list. Excel calculated 4 IsAnyEdgeIntersect cases. All 4 passed.

| Case | Result |
| --- | --- |
| Squares overlap | TRUE |
| Inner square, no boundary contact | FALSE |
| Meet only at (4, 4) | TRUE |
| One-column vertices | `#REF!` |

## Related functions

- [[IsPolyAndLineIntersect]] — one polygon against one segment.
- [[IsPolysIntersect]] — also TRUE when one polygon lies inside the other.
- [[isPolyAInPolyB]] — containment, including the boundary.
