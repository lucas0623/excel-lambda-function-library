---
created: 2026-11-03
tags:
  - excel-lambda
  - loops
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# WhileLoop function

Returns the first value for which `conditionFunc` is TRUE.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=WhileLoop(currentParams, conditionFunc, nextValFunc)
```

The WhileLoop function has the following arguments:

| Argument | Description |
| --- | --- |
| `currentParams` | Required. Value tested on the first call. |
| `conditionFunc` | Required. `LAMBDA` that returns TRUE when the loop should stop. |
| `nextValFunc` | Required. `LAMBDA` that produces the next value while the test is FALSE. |

## Remarks

- `nextValFunc` runs only while `conditionFunc` is FALSE.
- A value that already passes the test is returned unchanged.
- An error from the next step is returned when that next test is TRUE.
- The function calls itself. The library formula uses `{ref}WhileLoop(`.
- The name stays `WhileLoop`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[WhileLoop-20261103031605.jpeg]]

| start | Formula | Result |
| --- | --- | --- |
| 1 | `=WhileLoop(A16,LAMBDA(x,x>=3),LAMBDA(x,x+1))` | 3 |

## Tests

The `test` sheet checks a count to 3, a value that is already TRUE, and a next step that divides by zero. Excel calculated 3 WhileLoop cases. All 3 passed.

| Case | Result |
| --- | --- |
| Count from 1 until `x >= 3` | 3 |
| 5, with a test that is already TRUE | 5 |
| Next step is `1/0` | `#DIV/0!` |

## Related functions

- [[ForLoop]] — steps from a start value to an end value.
