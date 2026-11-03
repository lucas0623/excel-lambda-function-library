---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - ISCLOCKWISE
AI Reviewed: true
example: "[[Point in Polygon.xlsx]]"
---

## Overview

Returns TRUE when the vertices of a polygon run clockwise.

Example file: [[Point in Polygon.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last row connects to the first. Y increases upward.

## Syntax

```
=isClockwise(vertices)
```

The isClockwise function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows, in order. |

## Remarks

- The sign is the shoelace sum. Clockwise is negative:

$$
\sum_i \left(x_i y_{i+1} - y_i x_{i+1}\right) < 0
$$

- The square (0, 0), (0, 4), (4, 4), (4, 0) has sum −32, so it is clockwise.
- The square (0, 0), (4, 0), (4, 4), (0, 4) has sum 32, so it is not clockwise.
- A zero-area ring, such as (0, 0), (2, 0), (4, 0), has sum 0 and returns FALSE.
- Fewer than two columns returns `#VALUE!`.
- The name stays `isClockwise`.

## Example

The sample data is on the `example` sheet of [[Point in Polygon.xlsx]]. Blue cells are inputs.

![[isClockwise-20261103025453.jpeg]]

| Order | Vertices | Result |
| --- | --- | --- |
| Clockwise | (0, 0), (0, 4), (4, 4), (4, 0) | TRUE |
| Counterclockwise | (0, 0), (4, 0), (4, 4), (0, 4) | FALSE |

## Tests

The `test` sheet checks the clockwise square, the collinear ring, the counterclockwise square, and a one-column list. Excel calculated 4 isClockwise cases. All 4 passed.

| Case | Result |
| --- | --- |
| Clockwise square, sum −32 | TRUE |
| Collinear points, sum 0 | FALSE |
| Counterclockwise square, sum 32 | FALSE |
| One-column vertices | `#VALUE!` |

## Related functions

- [[IsPointInPoly]] — does not use the winding direction.
- [[isPolyAInPolyB]] — containment of one polygon in another.
