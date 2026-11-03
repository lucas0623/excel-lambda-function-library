---
description: "Returns n points on a circle of radius r centered at (x0, y0)."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns n points on a circle of radius `r` centered at `(x0, y0)`.

Example file: [[Section Properties.xlsx]]

This is the same polyline as [[CoorCircle]]. Point k is at angle \(k \times 360/n\) degrees for k = 1 to n, measured from the positive x-axis and increasing counterclockwise. The last point lies on the positive x-axis. The first point is not repeated.

## Syntax

```
=CoorOfCircle(r, x0, y0, n)
```

The CoorOfCircle function has the following arguments:

| Argument | Description |
| --- | --- |
| `r` | Required. Radius. |
| `x0` | Required. Center x. |
| `y0` | Required. Center y. |
| `n` | Required. Number of points. |

## Remarks

- The name stays `CoorOfCircle`. Callers outside this group already use it for a circle outline.
- A unit circle with 4 points ends at (1, 0).
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Four points on the unit circle, matching [[CoorCircle]].

![[CoorOfCircle-20261103031946.jpeg]]

## Tests

Excel calculated 3 CoorOfCircle cases. All 3 passed.

| Case | Result |
| --- | --- |
| Unit circle, n = 4 | Same points as CoorCircle, last point (1, 0) |
| Zero radius | Every point is the center |
| Text | `#VALUE!` |

## Related functions

- [[CoorCircle]] — the same polyline.
- [[CoorCircularArc]] — part of a circle, including both ends.
- [[CoorHexagon]] — six vertices from a vertex-to-vertex diameter.
