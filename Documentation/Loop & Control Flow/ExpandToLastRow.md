---
created: 2026-11-03
tags:
  - excel-lambda
  - sheets
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# ExpandToLastRow function

Returns rows from `refCell` down to the blank in its first column.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=ExpandToLastRow(refCell, [MaxNumOfRows], [FixNumOfRows], [valueIfError])
```

The ExpandToLastRow function has the following arguments:

| Argument | Description |
| --- | --- |
| `refCell` | Required. Top-left cell. The result keeps this width. |
| `MaxNumOfRows` | Optional. How far the blank scan may look. Defaults to the last Excel row. |
| `FixNumOfRows` | Optional. When supplied, this many rows are returned and the blank scan is skipped. |
| `valueIfError` | Optional. Returned when the scan fails. Defaults to an empty string. |

## Remarks

- The end of the block is the first blank in the first column.
- `FixNumOfRows` skips the scan.
- No blank inside the cap, or a blank first cell, returns `valueIfError`.
- [[GetTableRange]] returns the cap itself when that cap contains no blank.
- The name stays `ExpandToLastRow`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs. The cell beside the blank row is ignored.

![[ExpandToLastRow-20261103031605.jpeg]]

| c1 | c2 | Formula | Result |
| --- | --- | --- | --- |
| 10 | 100 | `=ExpandToLastRow(A187:B187)` | 10, 100 |
| 20 | 200 |  | 20, 200 |
| 30 | 300 |  | 30, 300 |
|  | 999 |  |  |

## Tests

The `test` sheet checks a block that ends on a blank, a fixed one-row height, a blank first cell, and a cap with no blank. Excel calculated 4 ExpandToLastRow cases. All 4 passed.

| Case | Result |
| --- | --- |
| Down to the blank | 10, 100, 20, 200, 30, 300 |
| Fixed one row | 10, 100 |
| Blank first cell | empty |
| Cap of 2 with no blank | empty |

## Related functions

- [[GetTableRange]] — same scan, but a cap with no blank returns that cap.
- [[GroupByAddress]] — uses this height to bound each group.
