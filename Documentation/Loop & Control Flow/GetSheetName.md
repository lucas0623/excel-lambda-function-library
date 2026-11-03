---
description: "Returns the sheet name of refCell."
created: 2026-11-03
tags:
  - excel-lambda
  - sheets
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the sheet name of `refCell`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=GetSheetName(refCell)
```

The GetSheetName function has the following arguments:

| Argument | Description |
| --- | --- |
| `refCell` | Required. A cell on the sheet whose name is required. |

## Remarks

- The name is the text after `]` in `CELL("filename", refCell)`.
- The workbook must be saved. An unsaved workbook has no file name for `CELL` to read.
- A value that is not a cell reference returns `#VALUE!`.
- The name stays `GetSheetName`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]].

![[GetSheetName-20261103031605.jpeg]]

| Formula | Result |
| --- | --- |
| `=GetSheetName(A211)` | example |

## Tests

The `test` sheet checks a cell on `test`, a cell on `example`, and a value that is not a reference. Excel calculated 3 GetSheetName cases. All 3 passed.

| Case | Result |
| --- | --- |
| A cell on `test` | test |
| `example!A1` | example |
| `{1}` | `#VALUE!` |

## Related functions

- [[GroupByAddress]] — puts this sheet name on each group address.
