---
description: "Stacks func for each column of arr."
created: 2026-11-03
tags:
  - excel-lambda
  - loops
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Stacks `func` for each column of `arr`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=ForEachColumn(arr, func)
```

The ForEachColumn function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. Array or range whose columns are visited from left to right. |
| `func` | Required. `LAMBDA(column)`. It may return several cells, which `BYCOL` cannot. |

## Remarks

- Each column is passed to `func`, and the returned arrays are placed side by side.
- An error in `arr`, or an error from `func`, is returned.
- The restored formula is unchanged.
- The name stays `ForEachColumn`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[ForEachColumn-20261103031605.jpeg]]

| c1 | c2 | Formula | Result |
| --- | --- | --- | --- |
| 1 | 2 | `=ForEachColumn(A34:B35,LAMBDA(col,VSTACK(SUM(col),MAX(col))))` | 4, 6 |
| 3 | 4 |  | 3, 4 |

## Tests

The `test` sheet checks two column sums, one column, an error input, and two outputs per column. Excel calculated 4 ForEachColumn cases. All 4 passed.

| Case | Result |
| --- | --- |
| Sum of `{1,2;3,4}` | 4, 6 |
| One column `{8;1}` | 9 |
| Error input | `#DIV/0!` |
| Sum and max of each column | 4, 6, 3, 4 |

## Related functions

- [[ForEachRow]] — the same pattern across each row.
