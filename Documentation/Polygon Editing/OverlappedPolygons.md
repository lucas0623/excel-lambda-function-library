---
description: "Returns the overlap of two polygons as one strict ARRAYTOTEXT of (x, y) rows."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - OVERLAPPEDPOLYGONS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Returns the overlap of two polygons as one strict `ARRAYTOTEXT` of `(x, y)` rows.

Example file: [[Polygon Editing.xlsx]]

`verticesA` and `verticesB` are n×2 arrays of `(x, y)` rows in order. The last vertex connects to the first. A clockwise ring is reversed first. One polygon inside the other returns the inner polygon. A partial overlap returns the intersection outline. Polygons that do not meet return `#N/A`.

## Syntax

```
=OverlappedPolygons(verticesA, verticesB)
```

The OverlappedPolygons function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesA` | Required. n×2 array of `(x, y)` rows. |
| `verticesB` | Required. n×2 array of `(x, y)` rows. |

## Remarks

- The partial-overlap walk uses the same intersection names as [[CombineTwoPolygons]], and keeps the chain that lies inside the other polygon. A boundary point does not count as inside on that walk.
- Fewer than two columns returns `#REF!`.
- The name stays `OverlappedPolygons`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. A is `(0, 0)`, `(2, 0)`, `(2, 2)`, `(0, 2)`. B is `(1, 1)`, `(3, 1)`, `(3, 3)`, `(1, 3)`.

![[OverlappedPolygons-20261103120327.jpeg]]

The overlap is `{2,1;2,2;1,2;1,1}`.

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| Partial overlap | `{2,1;2,2;1,2;1,1}` |
| Inner square | `{1,1;2,1;2,2;1,2}` |
| Clockwise inner square | `{2,1;2,2;1,2;1,1}` |
| Separate squares | `#N/A` |

## Related functions

- [[CombineTwoPolygons]] — the union of the same two polygons.
- [[IsAllPointsInPoly]] — decides which polygon is inside the other.
- [[GridMesh]] — replaces a partial grid cell with this overlap.
