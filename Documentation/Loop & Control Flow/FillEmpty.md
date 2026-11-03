---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# FillEmpty function

Forward-fills blanks in `arr`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=FillEmpty(arr)
```

The FillEmpty function has the following arguments:

| Argument | Description |
| --- | --- |
| `arr` | Required. Array or range, read in row-major order. |

## Remarks

- A blank is `ISBLANK` or text whose `TRIM` is empty.
- Leading blanks stay empty.
- An error value is returned unchanged.
- The name stays `FillEmpty`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[FillEmpty-20261103031605.jpeg]]

| value | Formula | Result |
| --- | --- | --- |
| A | `=FillEmpty(A114:A119)` | A |
|  |  | A |
|  |  | A |
| B |  | B |
|  |  | B |
|  |  | B |

## Tests

The `test` sheet checks a fill from A to B, a leading blank, an error, and a space. Excel calculated 4 FillEmpty cases. All 4 passed.

| Case | Result |
| --- | --- |
| A, three blanks, B, two blanks | A, A, A, B, B, B |
| Leading blank, then A | blank, A |
| Error value | `#DIV/0!` |
| A, then a space | A, A |

## Related functions

- [[NextDiff]] — reports each non-blank run and the row where it starts.
