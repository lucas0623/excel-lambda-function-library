---
description: "Returns a VSTACK and HSTACK formula that rebuilds array."
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns a `VSTACK` and `HSTACK` formula that rebuilds `array`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=SaveTableAsFormula(array)
```

The SaveTableAsFormula function has the following arguments:

| Argument | Description |
| --- | --- |
| `array` | Required. Values to write back as a formula. |

## Remarks

- Each row becomes `HSTACK(...)`, and the rows are joined by `VSTACK`.
- Numbers and logicals stay bare. `TRUE` and `FALSE` are written as those words.
- Other text is quoted, and a quote inside the text is doubled.
- An error in `array` returns that error.
- The name stays `SaveTableAsFormula`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[SaveTableAsFormula-20261103031605.jpeg]]

| c1 | c2 | Formula | Result |
| --- | --- | --- | --- |
| 1 | 2 | `=SaveTableAsFormula(A247:B248)` | `=VSTACK(HSTACK(1,2),HSTACK(3,4))` |
| 3 | 4 |  |  |

## Tests

The `test` sheet checks numbers, text, an error, a quote inside text, and logicals. Excel calculated 5 SaveTableAsFormula cases. All 5 passed.

| Case | Result |
| --- | --- |
| `{1,2;3,4}` | `=VSTACK(HSTACK(1,2),HSTACK(3,4))` |
| `{"a","b"}` | `=VSTACK(HSTACK("a","b"))` |
| A `#DIV/0!` in the array | `#DIV/0!` |
| Text `a"b` | `=VSTACK(HSTACK("a""b"))` |
| TRUE, FALSE | `=VSTACK(HSTACK(TRUE,FALSE))` |

## Related functions

- [[TextToArray]] — reads a strict array string back into cells.
