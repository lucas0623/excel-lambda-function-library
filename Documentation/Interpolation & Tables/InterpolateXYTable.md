---
created: 2026-11-03
tags:
  - interpolation
  - excel-lambda
aliases:
  - INTERPOLATEXYTABLE
AI Reviewed: true
example: "[[Interpolation.xlsx]]"
---

## Overview

Returns the linear y at `x_value` from a sorted column of x and a matching column of y.

Example file: [[Interpolation.xlsx]]

![[InterpolateXYTable-20261103025149.jpeg]]

`x` and `y` are single columns with the same number of rows, sorted ascending or descending. The direction is the first x compared with the last x.

## Syntax

```
=InterpolateXYTable(x_value, x, y)
```

The InterpolateXYTable function has the following arguments:

| Argument | Description |
| --- | --- |
| `x_value` | Required. X at which to read y. It may lie outside the table. |
| `x` | Required. One column of x values, sorted up or down. |
| `y` | Required. One column of y values, row for row with `x`. |

## Remarks

- On an ascending column, the bracket starts at the last row whose x is less than or equal to `x_value`. On a descending column, it starts at the last row whose x is greater than or equal to `x_value`.
- If that row's x equals `x_value`, the result is that row's y. A repeated x therefore returns the y from the last of those rows.
- Otherwise the result is the straight line from that row to the next:

$$
y = y_i + \frac{x_{value} - x_i}{x_{i+1} - x_i}(y_{i+1} - y_i)
$$

- Below an ascending table, or above a descending table, the first segment is extended. Past the other end, the last segment is extended.
- A segment whose two x values are equal returns `#DIV/0!`.
- A non-numeric argument returns `#VALUE!`.
- The columns have to be sorted. An unsorted column is not a defined result.

## Example

The sample data is on the `example` sheet of [[Interpolation.xlsx]]. Blue cells are inputs. The column is (0, 0) and (10, 100). At 2.5 the line is 25.

| x_value | x | y | Formula | Result |
| --- | --- | --- | --- | --- |
| 2.5 | 0 | 0 | `=InterpolateXYTable(B28,A30:A31,B30:B31)` | 25 |
| | 10 | 100 | | |

## Tests

The `test` sheet checks that two-point line, both ends, both extensions, an interior segment of a three-point column, a descending column, a repeated x, the segment after that repeat, equal x, and text. Excel calculated 11 InterpolateXYTable cases. All 11 passed.

| Case | Result |
| --- | --- |
| x = {0; 10}, y = {0; 100}, at 2.5 | 25 |
| At the first x | 0 |
| At the last x | 100 |
| x_value 15 | 150 |
| x_value −5 | −50 |
| x = {0; 10; 20}, y = {0; 100; 50}, at 15 | 75 |
| x = {20; 10; 0}, y = {200; 100; 0}, at 15 | 150 |
| x = {0; 10; 10; 20}, y = {0; 1; 3; 10}, at 10 | 3 |
| Same columns at 15 | 6.5 |
| x = {5; 5} at 6 | `#DIV/0!` |
| Text x_value | `#VALUE!` |

## Related functions

- [[InterpolateXY]] — the same line between two points given as arguments.
- [[InterpolateXY2]] — a point at a distance along one segment.
- [[GetTableRange]] — the block of cells around a table anchor. It does not interpolate.
