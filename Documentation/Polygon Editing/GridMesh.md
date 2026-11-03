---
description: "Meshes a polygon into grid cells."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - GRIDMESH
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Meshes a polygon into grid cells.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. `spacingX` and `spacingY` set the step. The grid runs from the minimum coordinate to the maximum. `customSequenceX` and `customSequenceY` are optional columns of exact grid coordinates. A cell inside the polygon is kept. A partial overlap is replaced by [[OverlappedPolygons]]. An overlap of more than four vertices is split from its first vertex to its fourth with [[SplitPolyByLine]]. Each result row is a strict `ARRAYTOTEXT` of `(x, y)` rows.

## Syntax

```
=GridMesh(vertices, spacingX, spacingY, [customSequenceX], [customSequenceY])
```

The GridMesh function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows. |
| `spacingX` | Required. Target step in x. Ignored when `customSequenceX` is supplied. |
| `spacingY` | Required. Target step in y. Ignored when `customSequenceY` is supplied. |
| `customSequenceX` | Optional. Column of exact x grid coordinates. |
| `customSequenceY` | Optional. Column of exact y grid coordinates. |

## Remarks

- Without a custom sequence, the line count is \(\operatorname{INT}((\max - \min) / \text{spacing}) + 1\), and the lines are spaced evenly from the minimum to the maximum.
- A cell is inside when [[isPolyAInPolyB]] is TRUE, including a cell that touches the boundary.
- A spacing of 0 returns `#DIV/0!`.
- Fewer than two columns returns `#REF!`.
- The name stays `GridMesh`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The square `(0, 0)`, `(4, 0)`, `(4, 4)`, `(0, 4)` with spacing 4 is one cell.

![[GridMesh-20261103120327.jpeg]]

The cell is `{0,0;4,0;4,4;0,4}`.

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| Square, spacing 4 | `{0,0;4,0;4,4;0,4}` |
| Custom lines x = 0, 2, 4 and y = 0, 4 | Two rectangles |
| Triangle `(0, 0)`, `(4, 0)`, `(2, 4)` | `{0,0;4,0;2,4}` |
| Spacing 0 | `#DIV/0!` |

## Related functions

- [[isPolyAInPolyB]] — TRUE when the whole cell is inside.
- [[OverlappedPolygons]] — the part of a cell that overlaps the polygon.
- [[SplitPolyByLine]] — splits an overlap that has more than four vertices.
