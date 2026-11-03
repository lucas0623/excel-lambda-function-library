---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the elements of `array` in reverse order as one column.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=Reverse(array)
```

The Reverse function has the following arguments:

| Argument | Description |
| --- | --- |
| `array` | Required. Values to reverse. A row is read from left to right before it is reversed. |

## Remarks

- Reverse of `{1,2,3}` is `{3;2;1}`.
- One value is unchanged.
- An error value returns that error.
- The name stays `Reverse`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[Reverse-20261103031605.jpeg]]

| v1 | v2 | v3 | Formula | Result |
| --- | --- | --- | --- | --- |
| 1 | 2 | 3 | `=Reverse(A82:C82)` | 3 |
|  |  |  |  | 2 |
|  |  |  |  | 1 |

## Tests

The `test` sheet checks `{1,2,3}`, a single value, and an error. Excel calculated 3 Reverse cases. All 3 passed.

| Case | Result |
| --- | --- |
| `{1,2,3}` | 3, 2, 1 |
| `{7}` | 7 |
| `1/0` | `#DIV/0!` |

## Related functions

- [[RemoveRow]] — drops one row and keeps the rest in order.
