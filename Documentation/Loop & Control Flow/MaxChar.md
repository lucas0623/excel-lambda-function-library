---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the character with the largest Unicode code in `cell_range`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=MaxChar(cell_range)
```

The MaxChar function has the following arguments:

| Argument | Description |
| --- | --- |
| `cell_range` | Required. Cells or an array. Only the first character of each value is read. |

## Remarks

- The code is `UNICODE`, and the character is `UNICHAR` of the largest code.
- Unreadable values are ignored.
- If none remain, the result is `#VALUE!`.
- The name stays `MaxChar`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[MaxChar-20261103031605.jpeg]]

| c1 | c2 | c3 | Formula | Result |
| --- | --- | --- | --- | --- |
| a | b | c | `=MaxChar(A163:C163)` | c |

## Tests

The `test` sheet checks a, b, c, one character, empty text, and A beside 你. Excel calculated 4 MaxChar cases. All 4 passed.

| Case | Result |
| --- | --- |
| a, b, c | c |
| M | M |
| Empty text | `#VALUE!` |
| A and 你 | 你 |

## Related functions

- [[MinChar]] — the character with the smallest Unicode code.
