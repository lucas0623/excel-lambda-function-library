---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the x coordinate of the plastic centroid for bending about the y-axis with no axial force.

Example file: [[Section Properties.xlsx]]

The result is the vertical line that divides the polygon into two equal areas. It is not the elastic centroid when the shape is not symmetric.

## Syntax

```
=Prop_PlasticCentroidCpx(vertices, totalArea, maxX, minX, maxY, minY)
```

The Prop_PlasticCentroidCpx function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |
| `totalArea` | Required. Positive area of the polygon. |
| `maxX` | Required. Largest x of the bounding box. |
| `minX` | Required. Smallest x of the bounding box. |
| `maxY` | Required. Largest y of the bounding box. |
| `minY` | Required. Smallest y of the bounding box. |

## Remarks

- Argument order is vertices, total area, then the bounding box `maxX, minX, maxY, minY`.
- The search splits the polygon with a vertical line and keeps the half whose centroid lies to the right of the trial axis. It stops when the area difference is under 0.0001 of half the area.
- A zero `totalArea` returns `#DIV/0!`.
- Non-numeric input returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The trapezoid (0, 0), (6, 0), (4, 2), (1, 2) has area 9. The equal-area axis is \(x=2.75\).

![[Prop_PlasticCentroidCpx-20261103031946.jpeg]]

Formula: `=Prop_PlasticCentroidCpx(A72:B75,B77,B78,B79,B80,B81)`. Result: 2.75.

## Tests

Excel calculated 3 Prop_PlasticCentroidCpx cases. All 3 passed.

| Case | Result |
| --- | --- |
| Trapezoid of area 9 | 2.75 |
| Rectangle centered on the origin | 0 |
| Zero total area | `#DIV/0!` |

## Related functions

- [[Prop_PlasticCentroidCpy]] — the horizontal equal-area axis.
- [[Prop_Area]] — the area to pass as `totalArea`.
- [[Properties]] — reports both plastic centroids and the plastic moduli.
