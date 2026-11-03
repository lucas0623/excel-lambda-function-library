---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

# CoorCircle function

Returns n points on a circle of radius `r` centered at `(x0, y0)`.

Example file: [[Section Properties.xlsx]]

Point k is at angle \(k \times 360/n\) degrees for k = 1 to n, measured from the positive x-axis and increasing counterclockwise. The last point lies on the positive x-axis. The first point is not repeated.

## Syntax

```
=CoorCircle(r, x0, y0, n)
```

The CoorCircle function has the following arguments:

| Argument | Description |
| --- | --- |
| `r` | Required. Radius. |
| `x0` | Required. Center x. |
| `y0` | Required. Center y. |
| `n` | Required. Number of points. |

## Remarks

- For a unit circle and `n = 4` the points are (0, 1), (−1, 0), (0, −1), and (1, 0).
- The polyline is the same as [[CoorOfCircle]].
- A non-numeric argument returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Four points on the unit circle. The last point is on the positive x-axis.

![[CoorCircle-20261103031946.jpeg]]

Formula: `=CoorCircle($B$211,$B$212,$B$213,$B$214)`.

## Tests

Excel calculated 3 CoorCircle cases. All 3 passed.

| Case | Result |
| --- | --- |
| Unit circle, n = 4 | Last point (1, 0) |
| Zero radius | Every point is the center |
| Text | `#VALUE!` |

## Related functions

- [[CoorOfCircle]] — the same polyline.
- [[CoorCircularArc]] — an arc that includes both end angles.
- [[CoorHexagon]] — six vertices by vertex-to-vertex diameter.
