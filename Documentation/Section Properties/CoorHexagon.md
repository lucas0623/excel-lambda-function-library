---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns 6 vertices of a hexagon centered at `(x0, y0)`.

Example file: [[Section Properties.xlsx]]

`circumDiameter` is the vertex-to-vertex diameter. The first vertex is at angle 0 on the positive x-axis, then every 60° counterclockwise, so the hexagon is flat on the top and bottom. The first vertex is not repeated.

## Syntax

```
=CoorHexagon(circumDiameter, x0, y0)
```

The CoorHexagon function has the following arguments:

| Argument | Description |
| --- | --- |
| `circumDiameter` | Required. Distance from one vertex through the center to the opposite vertex. |
| `x0` | Required. Center x. |
| `y0` | Required. Center y. |

## Remarks

- The radius to a vertex is `circumDiameter/2`. For diameter 2 the first vertex is (1, 0) and the next is \((1/2, \sqrt{3}/2)\).
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Vertex-to-vertex diameter 2, centered at the origin.

![[CoorHexagon-20261103031946.jpeg]]

Formula: `=CoorHexagon($B$244,$B$245,$B$246)`.

## Tests

Excel calculated 4 CoorHexagon cases. All 4 passed.

| Case | Result |
| --- | --- |
| First vertex | (1, 0) for diameter 2 |
| Second vertex y | \(\sqrt{3}/2\) |
| Zero diameter | Every vertex is the center |
| Text | `#VALUE!` |

## Related functions

- [[CoorCircle]] — n points on a circle, last point on the positive x-axis.
- [[CoorOfCircle]] — the same circle polyline.
- [[Prop_Area]] — area of the returned hexagon.
