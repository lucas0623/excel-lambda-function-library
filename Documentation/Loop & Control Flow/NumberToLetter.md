---
description: "Returns the Excel column letter for column number n."
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the Excel column letter for column number `n`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=NumberToLetter(n)
```

The NumberToLetter function has the following arguments:

| Argument | Description |
| --- | --- |
| `n` | Required. Column number. 1 is column A. |

## Remarks

- 1 is A and 26 is Z. 27 is AA. 16384, the last Excel column, is XFD.
- `n` below 1 returns the text `INVALID INPUT`.
- `n` above 18278 returns the text `Exceeds limit`.
- Text returns `#VALUE!`.
- The name stays `NumberToLetter`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[NumberToLetter-20261103031605.jpeg]]

| n | Formula | Result |
| --- | --- | --- |
| 1 | `=NumberToLetter(A155)` | A |

## Tests

The `test` sheet checks 1, 26, text, 27, 16384, 0, and 18279. Excel calculated 7 NumberToLetter cases. All 7 passed.

| Case | Result |
| --- | --- |
| 1 | A |
| 26 | Z |
| `"a"` | `#VALUE!` |
| 27 | AA |
| 16384 | XFD |
| 0 | INVALID INPUT |
| 18279 | Exceeds limit |

## Related functions

- [[MaxChar]] — the character with the largest Unicode code in a range.
