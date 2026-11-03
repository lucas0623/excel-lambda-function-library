---
created: 2026-11-03
tags:
  - bolts
  - plotting
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

# PointObjToHexagonCoorForPlot function

Returns one closed hexagon per point, stacked for an XY scatter.

Example file: [[Bolts and Plotting.xlsx]]

Argument order is `xCoorArr`, `yCoorArr`, `diaArr`. `diaArr` is the vertex-to-vertex diameter, the same meaning as in [[CoorHexagon]]. The first vertex is at angle 0 on the positive x-axis, then every 60° counterclockwise, so the hexagon is flat on the top and bottom. The first vertex is repeated to close the shape. An `#N/A` row separates hexagons.

## Syntax

```
=PointObjToHexagonCoorForPlot(xCoorArr, yCoorArr, diaArr)
```

The PointObjToHexagonCoorForPlot function has the following arguments:

| Argument | Description |
| --- | --- |
| `xCoorArr` | Required. X of each hexagon center. |
| `yCoorArr` | Required. Y of each hexagon center. |
| `diaArr` | Required. Vertex-to-vertex diameter, one row per center. |

## Remarks

- For diameter 2 at the origin, the first vertex is (1, 0) and the second is \(\left(1/2,\ \sqrt{3}/2\right)\).
- Row 7 repeats the first vertex. Row 8 is `#N/A`.
- A zero diameter leaves the vertex at the center. Diameter 2 centered at (3, 4) starts at (4, 4).
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. Vertex-to-vertex diameter 2, centered at the origin.

![[PointObjToHexagonCoorForPlot-20261103120712.jpeg]]

| Vertex | x | y |
| --- | --- | --- |
| 1 | 1 | 0 |
| 2 | 0.5 | \(\sqrt{3}/2\) |
| 4 | −1 | 0 |
| Close | 1 | 0 |
| Break | `#N/A` | `#N/A` |

Formula: `=PointObjToHexagonCoorForPlot(B116,C116,D116)`.

## Tests

Excel calculated 10 cases. All 10 passed.

| Case | Result |
| --- | --- |
| First vertex | (1, 0) |
| Second vertex y | \(\sqrt{3}/2\) |
| Fourth vertex x | −1 |
| Close vertex x | 1 |
| Break row | `#N/A` |
| Zero diameter at (3, 4) | first x is 3 |
| Center (3, 4), diameter 2 | first x is 4 |
| Text diameter | `#VALUE!` |

## Related functions

- [[CoorHexagon]] — the six vertices, without the repeated close or the `#N/A` row.
- [[PointObjToCircleCoorForPlot]] — the same stack, for a circle.
