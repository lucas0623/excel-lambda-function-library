---
created: 2026-11-03
tags:
  - excel-lambda
  - sheets
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns rows from `refCell` down to the blank in its first column.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=GetTableRange(refCell, [maxRows], [fixedRows], [valueIfError])
```

The GetTableRange function has the following arguments:

| Argument | Description |
| --- | --- |
| `refCell` | Required. Top-left cell. The result keeps this width. |
| `maxRows` | Optional. How far the blank scan may look. Defaults to the last Excel row. |
| `fixedRows` | Optional. When supplied, this many rows are returned and the blank scan is skipped. |
| `valueIfError` | Optional. Returned when the first cell is blank or the range cannot be built. Defaults to an empty string. |

## Remarks

- The end of the block is the first blank in the first column.
- If `maxRows` contains no blank, that cap is returned.
- A blank first cell returns `valueIfError`.
- [[ExpandToLastRow]] returns `valueIfError` for a cap that contains no blank.
- The name stays `GetTableRange`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs. The next cell is 3, and the cap of 2 stops before it.

![[GetTableRange-20261103031605.jpeg]]

| value | Formula | Result |
| --- | --- | --- |
| 1 | `=GetTableRange(A236,2)` | 1 |
| 2 |  | 2 |
| 3 |  |  |

## Tests

The `test` sheet checks a block that ends on a blank, a cap with no blank, and a blank first cell. Excel calculated 3 GetTableRange cases. All 3 passed.

| Case | Result |
| --- | --- |
| Down to the blank | 10, 100, 20, 200, 30, 300 |
| Cap of 2 with no blank | 1, 2 |
| Blank first cell | empty |

## Related functions

- [[ExpandToLastRow]] — returns the error value when a cap contains no blank.
