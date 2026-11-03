---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# ReplaceErrInRange function

Returns `arr` with every Excel error replaced.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=ReplaceErrInRange(arr, [FillStr])
```

The ReplaceErrInRange function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. Array or range. |
| `FillStr` | Optional. Value written in place of each error. Defaults to an empty string. |

## Remarks

- Non-errors are unchanged.
- Omitting `arr` returns `#VALUE!`.
- Pass a range, or an array that already contains the error. `HSTACK` of `NA()` collapses to one `#N/A` before this function sees it.
- The name stays `ReplaceErrInRange`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[ReplaceErrInRange-20261103031605.jpeg]]

| v1 | v2 | v3 | fill | Formula | Result |
| --- | --- | --- | --- | --- | --- |
| 1 | `#N/A` | 3 | x | `=ReplaceErrInRange(A179:C179,D179)` | 1, x, 3 |

## Tests

The `test` sheet checks an array that contains `#N/A`, a range with no errors, an omitted `arr`, and the default fill. Excel calculated 4 ReplaceErrInRange cases. All 4 passed.

| Case | Result |
| --- | --- |
| `{1,#N/A,3}` filled with x | 1, x, 3 |
| `{1,2}` | 1, 2 |
| `arr` omitted | `#VALUE!` |
| Default fill | 1, blank |

## Related functions

- [[FillEmpty]] — fills blanks, and returns an error unchanged.
