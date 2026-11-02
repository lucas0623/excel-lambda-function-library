---
created: 2026-05-02
tags:
  - coordinate-geometry
  - nearest-point
aliases:
  - FINDNEARESTPOINT
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

# FindNearestPoint function

Returns the name of the point closest to a query.

Example file: [[Geometry Family.xlsx]]

`xCoords`, `yCoords`, and `pointNames` are columns of the same length. Distance is Euclidean, from [[Dist]]. A tie returns the first name in the list. A point sitting on the query is a valid nearest point.

## Syntax

```
=FindNearestPoint(queryX, queryY, xCoords, yCoords, pointNames)
```

The FindNearestPoint function has the following arguments:

| Argument | Description |
| --- | --- |
| `queryX` | Required. X coordinate of the query. |
| `queryY` | Required. Y coordinate of the query. |
| `xCoords` | Required. Column of x coordinates. |
| `yCoords` | Required. Column of y coordinates. |
| `pointNames` | Required. Column of names, one per point. |

## Remarks

- The function maps [[Dist]] over the columns, then uses `XMATCH` on the minimum distance.
- Unequal column lengths return `#N/A`.
- The formula also returns `#N/A` when `ROWS` of the list is 0. A worksheet formula such as `TAKE(range, 0)` is `#CALC!` before this function runs, so that input is not the empty-list branch.
- The name stays `FindNearestPoint`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[FindNearestPoint-20261103020343.jpeg]]

| name | x | y | queryX | queryY | Nearest |
| --- | --- | --- | --- | --- | --- |
| A | 0 | 0 | 1 | 0 | A |
| B | 3 | 4 |  |  |  |

## Tests

The `test` sheet checks a nearer name, a query that sits on a point, a tie, and unequal lengths. Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| Query (1, 0) among A(0, 0), B(0, 2), C(5, 0) | A |
| Query on C | C |
| Query halfway between A and B | A, the first of the tie |
| Unequal lengths | `#N/A` |

## Related functions

- [[Dist]] — distance used for each candidate.
- [[DistToNearestPoint]] — the distance, without the name.
