---
description: "Returns the Euclidean distance between two points."
created: 2026-05-02
tags:
  - coordinate-geometry
  - distance
aliases:
  - DIST
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Returns the Euclidean distance between two points.

Example file: [[Geometry Family.xlsx]]

Use it anywhere a library function needs the length of a segment. The points are named I `(xi, yi)` and J `(xj, yj)`.

## Syntax

```
=Dist(xi, yi, xj, yj)
```

The Dist function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |

## Remarks

- The distance is

$$
\sqrt{(x_j-x_i)^2+(y_j-y_i)^2}
$$

- The same point twice returns 0.
- A non-numeric argument returns `#VALUE!`.
- The name stays `Dist`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[Dist-20261103020343.jpeg]]

| xi | yi | xj | yj | Formula | Result |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 3 | 4 | `=Dist(A6,B6,C6,D6)` | 5 |

## Tests

The `test` sheet checks the 3-4-5 segment, a coincident pair, and text. Excel calculated 3 Dist cases. All 3 passed.

| Case | Result |
| --- | --- |
| (0, 0) to (3, 4) | 5 |
| Coincident points | 0 |
| Text | `#VALUE!` |

## Related functions

- [[AngleBetween3Points]] — interior angle at the middle point, using three calls to Dist.
- [[OffsetPoint]] — walks a directed segment, then steps to the left.
- [[DistToNearestPoint]] — distance to the nearest point in a list.
