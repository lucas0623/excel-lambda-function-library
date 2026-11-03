---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the y coordinate of the plastic centroid for bending about the x-axis with no axial force.

Example file: [[Section Properties.xlsx]]

The result is the horizontal line that divides the polygon into two equal areas.

## Syntax

```
=Prop_PlasticCentroidCpy(vertices, totalArea, maxX, minX, maxY, minY)
```

The Prop_PlasticCentroidCpy function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |
| `totalArea` | Required. Positive area of the polygon. |
| `maxX` | Required. Largest x of the bounding box. |
| `minX` | Required. Smallest x of the bounding box. |
| `maxY` | Required. Largest y of the bounding box. |
| `minY` | Required. Smallest y of the bounding box. |

## Remarks

- Argument order matches [[Prop_PlasticCentroidCpx]]: vertices, total area, then `maxX, minX, maxY, minY`.
- The search splits the polygon with a horizontal line. The area above the trial axis is the part whose centroid y is greater than the trial value.
- On a rectangle the plastic axis is the mid-height, the same place as the elastic centroid.
- A zero `totalArea` returns `#DIV/0!`.
- Non-numeric input returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The rectangle from (0, 0) to (4, 2) has area 8, so the axis is \(y=1\).

![[Prop_PlasticCentroidCpy-20261103031946.jpeg]]

Formula: `=Prop_PlasticCentroidCpy(A42:B45,8,4,0,2,0)`. Result: 1.

## Tests

Excel calculated 3 Prop_PlasticCentroidCpy cases. All 3 passed.

| Case | Result |
| --- | --- |
| Rectangle of height 2 | 1 |
| T section whose flange is half the area | −2 |
| Zero total area | `#DIV/0!` |

## Related functions

- [[Prop_PlasticCentroidCpx]] — the vertical equal-area axis.
- [[Prop_Cy]] — the elastic centroid y.
- [[Properties]] — plastic moduli about both axes.
