---
description: "Returns the character with the smallest Unicode code in cell_range."
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the character with the smallest Unicode code in `cell_range`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=MinChar(cell_range)
```

The MinChar function has the following arguments:

| Argument | Description |
| --- | --- |
| `cell_range` | Required. Cells or an array. Only the first character of each value is read. |

## Remarks

- The code is `UNICODE`, and the character is `UNICHAR` of the smallest code.
- Unreadable values are ignored.
- If none remain, the result is `#VALUE!`.
- The name stays `MinChar`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[MinChar-20261103031605.jpeg]]

| c1 | c2 | c3 | Formula | Result |
| --- | --- | --- | --- | --- |
| b | a | c | `=MinChar(A171:C171)` | a |

## Tests

The `test` sheet checks b, a, c, one character, empty text, and A beside 你. Excel calculated 4 MinChar cases. All 4 passed.

| Case | Result |
| --- | --- |
| b, a, c | a |
| M | M |
| Empty text | `#VALUE!` |
| A and 你 | A |

## Related functions

- [[MaxChar]] — the character with the largest Unicode code.
