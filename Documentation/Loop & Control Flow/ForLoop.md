---
created: 2026-11-03
tags:
  - excel-lambda
  - loops
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# ForLoop function

Returns `func` at each step from `start` through the last value not past `end`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=ForLoop(start, end, func, [step])
```

The ForLoop function has the following arguments:

| Argument | Description |
| --- | --- |
| `start` | Required. First value passed to `func`. |
| `end` | Required. Last value that may be passed to `func`. |
| `func` | Required. `LAMBDA` that receives the current value. |
| `step` | Optional. Added after each value. Defaults to 1. |

## Remarks

- The values are `start`, `start + step`, and so on, while the value is not past `end`.
- The number of calls is

$$
n = \operatorname{INT}\left(\frac{end - start}{step}\right) + 1
$$

- A step of 0 returns `#DIV/0!`.
- A step that does not move toward `end` returns `#NUM!`.
- The name stays `ForLoop`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[ForLoop-20261103031605.jpeg]]

| start | end | step | Formula | Result |
| --- | --- | --- | --- | --- |
| 1 | 3 | 1 | `=ForLoop(A6,B6,LAMBDA(i,i),C6)` | 1 |
|  |  |  |  | 2 |
|  |  |  |  | 3 |

## Tests

The `test` sheet checks a step of 1, a step of 2, a step of 0, and a start past the end. Excel calculated 4 ForLoop cases. All 4 passed.

| Case | Result |
| --- | --- |
| 1 through 3 | 1, 2, 3 |
| 1 through 5, step 2 | 1, 3, 5 |
| Step 0 | `#DIV/0!` |
| Start 5, end 1 | `#NUM!` |

## Related functions

- [[WhileLoop]] — repeats until a condition is TRUE.
- [[ForEachRow]] — calls a `LAMBDA` once per row.
