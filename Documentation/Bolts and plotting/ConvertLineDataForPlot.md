---
created: 2026-11-03
tags:
  - plotting
  - lines
AI Reviewed: true
example: "[[Bolts and Plotting.xlsx]]"
---

## Overview

Returns plot points for disjoint line segments.

Example file: [[Bolts and Plotting.xlsx]]

Each input row is `x1`, `y1`, `x2`, `y2`, in that order. Each segment becomes those two points, then an `#N/A` row, so one XY series does not join the end of one segment to the start of the next. A row that is not four numbers returns `#VALUE!`.

## Syntax

```
=ConvertLineDataForPlot(lineData)
```

The ConvertLineDataForPlot function has the following arguments:

| Argument | Description |
| --- | --- |
| `lineData` | Required. One segment per row: `x1`, `y1`, `x2`, `y2`. Every cell must be a number, and every row must have four columns. |

## Remarks

- One segment `(0, 0)`–`(1, 0)` becomes `(0, 0)`, `(1, 0)`, `#N/A`.
- Two segments stack as six rows: two points, `#N/A`, two points, `#N/A`.
- A zero-length segment still returns both endpoints and the `#N/A` row.
- Three columns, or any non-numeric cell, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Bolts and Plotting.xlsx]]. Blue cells are inputs. The first segment is `(0, 0)`–`(2, 0)`. The second is `(0, 1)`–`(0, 3)`.

![[ConvertLineDataForPlot-20261103120712.jpeg]]

| Row | x | y |
| --- | --- | --- |
| Start of first segment | 0 | 0 |
| End of first segment | 2 | 0 |
| Break | `#N/A` | `#N/A` |
| Start of second segment | 0 | 1 |
| End of second segment | 0 | 3 |
| Break | `#N/A` | `#N/A` |

Formula: `=ConvertLineDataForPlot(B134:E135)`.

## Tests

Excel calculated 11 cases. All 11 passed.

| Case | Result |
| --- | --- |
| `(0, 0)`–`(1, 0)` | those two points, then `#N/A` |
| Two segments | second segment starts on row 4 at (0, 1) and ends at y = 3 |
| Second break | `#N/A` |
| Zero-length `(5, 5)`–`(5, 5)` | both x values are 5 |
| Three columns | `#VALUE!` |

## Related functions

- [[PointObjToCircleCoorForPlot]] — uses the same `#N/A` break between closed shapes.
- [[PointObjToBoltEleForPlot]] — uses `#N/A` between the shank and the nuts.
