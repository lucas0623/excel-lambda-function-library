---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Stacks strict `ARRAYTOTEXT` strings and places a row of `#N/A` between the blocks.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=MultipleTextToArray(textArr, [isRepeatFirstRow], [numOfColumns])
```

The MultipleTextToArray function has the following arguments:

| Argument | Description |
| --- | --- |
| `textArr` | Required. A column of strict `ARRAYTOTEXT` strings. |
| `isRepeatFirstRow` | Optional. When TRUE, the first row of each block is repeated before the separator. Defaults to FALSE. |
| `numOfColumns` | Optional. Width of each block. Defaults to the width of the first string. |

## Remarks

- Each string is parsed with [[TextToArray]]. Only the first `numOfColumns` columns are kept.
- A row of `#N/A` separates the blocks. The last separator is dropped.
- `isRepeatFirstRow` uses the value that was supplied. FALSE stays FALSE.
- A string shorter than 2 characters returns `#VALUE!` from [[TextToArray]].
- The name stays `MultipleTextToArray`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[MultipleTextToArray-20261103031605.jpeg]]

| text | Formula | Result |
| --- | --- | --- |
| `{1,2;3,4}` | `=MultipleTextToArray(A54:A55,FALSE)` | 1, 2 |
| `{5,6;7,8}` |  | 3, 4 |
|  |  | `#N/A`, `#N/A` |
|  |  | 5, 6 |
|  |  | 7, 8 |

## Tests

The `test` sheet checks two blocks, a one-column block, a short string, and a repeated first row. Excel calculated 4 MultipleTextToArray cases. All 4 passed.

| Case | Result |
| --- | --- |
| Two blocks, repeat FALSE | 1, 2, 3, 4, `#N/A`, `#N/A`, 5, 6, 7, 8 |
| One column | 1, 2, `#N/A`, 3 |
| `"x"` | `#VALUE!` |
| Repeat the first row | 1, 2, 3, 4, 1, 2 |

## Related functions

- [[TextToArray]] — parses one strict string.
