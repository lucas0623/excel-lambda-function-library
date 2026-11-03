---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# VRepeatArray function

Returns `arr` stacked vertically `NumOfRepeat` times.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=VRepeatArray(arr, NumOfRepeat)
```

The VRepeatArray function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. Array or range to repeat. |
| `NumOfRepeat` | Required. How many copies to stack. |

## Remarks

- One repeat returns `arr`.
- Zero repeats returns `#CALC!`.
- The name stays `VRepeatArray`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[VRepeatArray-20261103031605.jpeg]]

| value | times | Formula | Result |
| --- | --- | --- | --- |
| 1 | 2 | `=VRepeatArray(A67:A69,B67)` | 1 |
| 2 |  |  | 2 |
| 3 |  |  | 3 |
|  |  |  | 1 |
|  |  |  | 2 |
|  |  |  | 3 |

## Tests

The `test` sheet checks two repeats, one repeat, and zero repeats. Excel calculated 3 VRepeatArray cases. All 3 passed.

| Case | Result |
| --- | --- |
| `{1;2;3}` twice | 1, 2, 3, 1, 2, 3 |
| `{1;2;3}` once | 1, 2, 3 |
| Zero repeats | `#CALC!` |

## Related functions

- [[Reverse]] — returns one column in reverse order.
