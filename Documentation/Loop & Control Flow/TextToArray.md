---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the array inside an `ARRAYTOTEXT` strict string.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=TextToArray(text)
```

The TextToArray function has the following arguments:

| Argument | Description |
| --- | --- |
| `text` | Required. A strict `ARRAYTOTEXT` string, including the braces. |

## Remarks

- The outer braces are removed. Commas split columns and semicolons split rows.
- A numeric strict string round-trips to numbers. Text quotes produced by `ARRAYTOTEXT` stay in the cells.
- A string shorter than 2 characters returns `#VALUE!`.
- The name stays `TextToArray`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[TextToArray-20261103031605.jpeg]]

| c1 | c2 | Formula | Result |
| --- | --- | --- | --- |
| 1 | 2 | `=TextToArray(ARRAYTOTEXT(A44:B45,1))` | 1, 2 |
| 3 | 4 |  | 3, 4 |

## Tests

The `test` sheet checks the strict text of `{1,2;3,4}`, the strict text of 5, and a one-character string. Excel calculated 3 TextToArray cases. All 3 passed.

| Case | Result |
| --- | --- |
| `ARRAYTOTEXT({1,2;3,4},1)` | 1, 2, 3, 4 |
| `ARRAYTOTEXT(5,1)` | 5 |
| `"x"` | `#VALUE!` |

## Related functions

- [[MultipleTextToArray]] — stacks several strict strings, with a blank row between blocks.
