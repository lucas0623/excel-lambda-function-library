---
created: 2026-05-02
tags:
  - coordinate-geometry
  - nearest-point
aliases:
  - DISTTONEARESTPOINT
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

# DistToNearestPoint function

Returns the Euclidean distance from a query to the nearest point in a list.

Example file: [[Geometry Family.xlsx]]

`xCoords` and `yCoords` are columns of the same length. A point sitting on the query returns 0.

## Syntax

```
=DistToNearestPoint(queryX, queryY, xCoords, yCoords)
```

The DistToNearestPoint function has the following arguments:

| Argument | Description |
| --- | --- |
| `queryX` | Required. X coordinate of the query. |
| `queryY` | Required. Y coordinate of the query. |
| `xCoords` | Required. Column of x coordinates. |
| `yCoords` | Required. Column of y coordinates. |

## Remarks

- The distance to each point is [[Dist]]. The result is the minimum.
- The previous formula called Dist through a `'Soil Spring input.xlsx'!` prefix, and it ignored every distance of 0. A point on the query therefore did not count as the nearest. Both of those behaviors are gone.
- Unequal column lengths return `#N/A`.
- The formula also returns `#N/A` when `ROWS` of the list is 0. A worksheet formula such as `TAKE(range, 0)` is `#CALC!` before this function runs, so that input is not the empty-list branch.
- The name stays `DistToNearestPoint`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs. The points are the name/x/y table in the [[FindNearestPoint]] example: A(0, 0) and B(3, 4).

![[DistToNearestPoint-20261103020343.jpeg]]

| queryX | queryY | Distance |
| --- | --- | --- |
| 6 | 8 | 5 |

The nearest point is B. \(\sqrt{(6-3)^2+(8-4)^2} = 5\).

## Tests

The `test` sheet checks a distance of 5, a query that sits on a point, and unequal lengths. Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| (0, 0) to the point (3, 4) | 5 |
| Query sitting on a listed point | 0 |
| Unequal lengths | `#N/A` |

## Related functions

- [[Dist]] — distance used for each candidate.
- [[FindNearestPoint]] — the name of that nearest point.
