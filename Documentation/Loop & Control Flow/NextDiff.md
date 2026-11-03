---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# NextDiff function

Returns each non-blank run and the row of its first cell.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=NextDiff(arr)
```

The NextDiff function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. A column, or an array read down one column. |

## Remarks

- A blank is `ISBLANK` or text whose `TRIM` is empty.
- Result columns are the run value and its row number inside `arr`. Row 1 is the first cell.
- One non-blank value is one run.
- All blanks return `#CALC!`.
- The name stays `NextDiff`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[NextDiff-20261103031605.jpeg]]

| value | Formula | Result |
| --- | --- | --- |
| A | `=NextDiff(A200:A206)` | A, 1 |
|  |  |  |
|  |  |  |
| B |  | B, 4 |
|  |  |  |
|  |  |  |
| A |  | A, 7 |

## Tests

The `test` sheet checks A, blanks, B, blanks, A, a column of the same value, and all blanks. Excel calculated 3 NextDiff cases. All 3 passed.

| Case | Result |
| --- | --- |
| A, blanks, B, blanks, A | A and 1, B and 4, A and 7 |
| A, A, A | A and 1 |
| All blanks | `#CALC!` |

## Related functions

- [[FillEmpty]] — copies the previous value into blanks.
- [[GroupByAddress]] — uses these run rows as group boundaries.
