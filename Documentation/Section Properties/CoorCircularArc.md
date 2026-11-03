---
description: "Returns n points on a circular arc centered at (x0, y0) with radius r."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns n points on a circular arc centered at `(x0, y0)` with radius `r`.

Example file: [[Section Properties.xlsx]]

Angles are in degrees from the positive x-axis, increasing counterclockwise. The points run from `startAngle` to `endAngle` and include both ends.

## Syntax

```
=CoorCircularArc(x0, y0, r, startAngle, endAngle, n)
```

The CoorCircularArc function has the following arguments:

| Argument | Description |
| --- | --- |
| `x0` | Required. Center x. |
| `y0` | Required. Center y. |
| `r` | Required. Radius. |
| `startAngle` | Required. Start angle in degrees. |
| `endAngle` | Required. End angle in degrees. |
| `n` | Required. Number of points, including both ends. |

## Remarks

- If `endAngle` is below `startAngle`, multiples of 360 are added so the sweep stays counterclockwise.
- `n` must be at least 2. `n` below 2 returns `#DIV/0!`.
- Each point is placed by [[PolarToXYCoor]].
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. A quarter circle from 0° to 90° with 3 points. The ends are (1, 0) and (0, 1). The middle point is at 45°.

![[CoorCircularArc-20261103031946.jpeg]]

Formula: `=CoorCircularArc($B$227,$B$228,$B$229,$B$230,$B$231,$B$232)`.

## Tests

Excel calculated 5 CoorCircularArc cases. All 5 passed.

| Case | Result |
| --- | --- |
| Quarter circle, n = 2 | The ends (1, 0) and (0, 1) |
| Mid point at 45° | \((\sqrt{2}/2, \sqrt{2}/2)\) |
| Zero sweep | Both points stay at the start angle |
| Wrap across 0° | The sweep still runs counterclockwise |
| n below 2 | `#DIV/0!` |

## Related functions

- [[PolarToXYCoor]] — one polar point.
- [[CoorCircle]] — a full circle, last point on the positive x-axis.
- [[CoorHexagon]] — a closed six-sided outline.
