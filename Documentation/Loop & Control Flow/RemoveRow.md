---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns `arr` without the given row.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=RemoveRow(arr, row)
```

The RemoveRow function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. Array or range. |
| `row` | Required. 1-based row to remove. |

## Remarks

- The first row, the last row, and a middle row are each removed by stacking the parts that remain.
- A row outside 1 through `ROWS(arr)`, or a non-integer, returns `#VALUE!`.
- Removing the only row returns `#CALC!`.
- The name stays `RemoveRow`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[RemoveRow-20261103031605.jpeg]]

| c1 | c2 | row | Formula | Result |
| --- | --- | --- | --- | --- |
| 1 | 2 | 2 | `=RemoveRow(A92:B94,C92)` | 1, 2 |
| 3 | 4 |  |  |  |
| 5 | 6 |  |  | 5, 6 |

## Tests

The `test` sheet checks a middle row, the first row, a row past the end, and the last row. Excel calculated 4 RemoveRow cases. All 4 passed.

| Case | Result |
| --- | --- |
| Row 2 of `{1,2;3,4;5,6}` | 1, 2, 5, 6 |
| First row of `{1;2;3}` | 2, 3 |
| Row 4 of a 3-row array | `#VALUE!` |
| Last row of `{1;2;3}` | 1, 2 |

## Related functions

- [[Reverse]] — reverses the elements instead of dropping one row.
