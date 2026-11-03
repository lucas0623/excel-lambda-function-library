---
created: 2026-11-03
tags:
  - excel-lambda
  - loops
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# ForEachRow function

Stacks `func` for each row of `arr`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=ForEachRow(arr, func)
```

The ForEachRow function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. Array or range whose rows are visited from top to bottom. |
| `func` | Required. `LAMBDA(row)`. It may return several cells, which `BYROW` cannot. |

## Remarks

- Each row is passed to `func`, and the returned arrays are stacked.
- An error in `arr`, or an error from `func`, is returned.
- The restored formula is unchanged.
- The name stays `ForEachRow`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[ForEachRow-20261103031605.jpeg]]

| c1 | c2 | Formula | Result |
| --- | --- | --- | --- |
| 1 | 2 | `=ForEachRow(A24:B25,LAMBDA(row,HSTACK(SUM(row),MAX(row))))` | 3, 2 |
| 3 | 4 |  | 7, 4 |

## Tests

The `test` sheet checks two row sums, one row, an error input, and two outputs per row. Excel calculated 4 ForEachRow cases. All 4 passed.

| Case | Result |
| --- | --- |
| Sum of `{1,2;3,4}` | 3, 7 |
| One row `{8,1}` | 9 |
| Error input | `#DIV/0!` |
| Sum and max of each row | 3, 2, 7, 4 |

## Related functions

- [[ForEachColumn]] — the same pattern down each column.
- [[ForLoop]] — calls a `LAMBDA` on a numeric sequence.
