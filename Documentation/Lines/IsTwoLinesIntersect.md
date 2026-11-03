---
created: 2026-11-03
tags:
  - coordinate-geometry
  - lines
aliases:
  - ISTWOLINESINTERSECT
AI Reviewed: true
example: "[[Lines.xlsx]]"
---

## Overview

Returns TRUE when two line segments meet.

Example file: [[Lines.xlsx]]

The segments are I `(xi, yi)` to J `(xj, yj)` and P `(xp, yp)` to Q `(xq, yq)`. An endpoint counts. The test is [[TwoLinesIntersection]]: a numeric point means TRUE, and `#N/A` means FALSE.

## Syntax

```
=IsTwoLinesIntersect(xi, yi, xj, yj, xp, yp, xq, yq)
```

The IsTwoLinesIntersect function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `xp` | Required. X coordinate of point P. |
| `yp` | Required. Y coordinate of point P. |
| `xq` | Required. X coordinate of point Q. |
| `yq` | Required. Y coordinate of point Q. |

## Remarks

- Parallel segments, collinear segments, and a miss return FALSE. That is the same rule as `#N/A` from [[TwoLinesIntersection]].
- A non-numeric argument returns `#VALUE!`.
- The previous formula used `ISERR`. `ISERR` does not see `#N/A`, so a miss was reported as TRUE. It now returns FALSE for `#N/A` and passes any other error through.
- The name stays `IsTwoLinesIntersect`.

## Example

The sample data is on the `example` sheet of [[Lines.xlsx]]. Blue cells are inputs.

![[IsTwoLinesIntersect-20261103113147.jpeg]]

| xi | yi | xj | yj | xp | yp | xq | yq | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 2 | 2 | 0 | 2 | 2 | 0 | TRUE |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| (0, 0)→(2, 2) and (0, 2)→(2, 0) | TRUE |
| Touch at an endpoint | TRUE |
| Parallel segments | FALSE |
| Text | `#VALUE!` |

## Related functions

- [[TwoLinesIntersection]] — the point itself, or `#N/A`.
- [[PolyAndLineIntersection]] — intersection points of a polygon and a segment.
