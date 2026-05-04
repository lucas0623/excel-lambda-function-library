---
created: 2026-05-02
tags:
  - coordinate-geometry
  - line-plotting
---
## Description
Converts a table of line segments (one per row in format $[x_1, y_1, x_2, y_2]$) into a stacked 2-column array of points $[x, y]$ suitable for plotting multiple disjoint lines as a single Excel chart series. 
![[ConvertLineDataForPlot-20260802080507.jpeg]]
For each line segment, it outputs:
- Row 1: $[x_1, y_1]$
- Row 2: $[x_2, y_2]$
- Row 3: $[\#N/A, \#N/A]$ (breaks the line connection to the next segment)

This prevents Excel from connecting the end of one line to the start of the next.


**Assumptions & Error Handling**:
- `lineData` must be a horizontal array or table with rows containing exactly 4 numeric values per line segment.
- Invalid row lengths or non-numeric values may cause Excel errors (e.g., CHOOSEROWS, WRAPROWS failures).

## Parameters
| Parameter | Type   | Description                          |
|-----------|--------|--------------------------------------|
| `lineData` | Array | Table of line segments: rows $[x_1, y_1, x_2, y_2]$ |

## Returns
- **Array**: Vertical stack of 2-column points with NA break rows between segments (3 rows per segment).

## Dependencies
- None (uses built-in Excel functions: LET, MAKEARRAY, ROWS, DROP, REDUCE, SEQUENCE, CHOOSEROWS, VSTACK, WRAPROWS, NA).

## Usage Examples

### Example 1: Single Line Segment
Input `lineData`:
```
[0, 0,  1,  0]
```
Output:
```
x    y
0    0
1    0
#N/A #N/A
```

Formula: `=ConvertLineDataForPlot({0,0,1,0})` → Array above.

### Example 2: Two Disjoint Lines
Input `lineData`:
| x1 | y1 | x2 | y2 |
|----|----|----|----|
| 0  | 0  | 2  | 0  |
| 0  | 1  | 0  | 3  |

Formula: `=ConvertLineDataForPlot(A1:D3)` (assuming table in A1:D3)

Output:
```
x    y
0    0
2    0
#N/A #N/A
0    1
0    3
#N/A #N/A
```
Plot as XY scatter: draws two separate vertical/horizontal lines without connecting them.

## Related Functions
- N/A

## Examples
- [[ConvertLineDataForPlot.xlsx]]
