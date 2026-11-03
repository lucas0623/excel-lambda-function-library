---
created: 2026-11-03
tags:
  - interpolation
  - excel-lambda
aliases:
  - CREATESTEPRANGE
AI Reviewed: true
example: "[[Interpolation.xlsx]]"
---

# CreateStepRange function

Returns a column of evenly spaced numbers from `start` through `end`, both ends included.

Example file: [[Interpolation.xlsx]]

![[CreateStepRange-20261103025149.jpeg]]

`count` is how many numbers to return. It is not the gap between them. Five numbers from 0 through 10 are 0, 2.5, 5, 7.5, and 10.

## Syntax

```
=CreateStepRange(start, end, [count])
```

The CreateStepRange function has the following arguments:

| Argument | Description |
| --- | --- |
| `start` | Required. First value. |
| `end` | Required. Last value. |
| `count` | Optional. How many values, including both ends. A fraction is rounded down. If the argument is omitted, the count is `end - start + 1`, then rounded down. |

## Remarks

- With `count` of \(n\), and \(n \ge 2\), row \(i\) (counting from 1) is

$$
v_i = start + (i - 1)\frac{end - start}{n - 1}
$$

- `count` 2 returns `start` and `end` only.
- A count that rounds down below 2 returns `#DIV/0!`.
- To omit `count`, leave the argument out with a trailing comma: `=CreateStepRange(1,4,)`. That call returns 1, 2, 3, and 4. A call with no comma, `=CreateStepRange(1,4)`, is `#VALUE!` because the third parameter was not omitted; it was never passed.
- Text returns `#VALUE!`.
- The result is one column. On the `test` sheet each case is shown with `TRANSPOSE` so the values stay on one row.

## Example

The sample data is on the `example` sheet of [[Interpolation.xlsx]]. Blue cells are inputs.

| start | end | count | Formula | Values |
| --- | --- | --- | --- | --- |
| 0 | 10 | 5 | `=CreateStepRange(A40,B40,C40)` | 0, 2.5, 5, 7.5, 10 |

## Tests

The `test` sheet checks five values, the two ends, an omitted count, a count of 4.9, a descending column, a count of 1, and text. Excel calculated 7 CreateStepRange cases. All 7 passed.

| Case | Result |
| --- | --- |
| 0 through 10, count 5 | 0, 2.5, 5, 7.5, 10 |
| count 2 | 0, 10 |
| `=CreateStepRange(1,4,)` | 1, 2, 3, 4 |
| count 4.9 | 0, 10/3, 20/3, 10 |
| 10 through 0, count 5 | 10, 7.5, 5, 2.5, 0 |
| count 1 | `#DIV/0!` |
| Text start | `#VALUE!` |

## Related functions

- [[InterpolateXY]] — y on the line through two points.
- [[InterpolateXYTable]] — y from a sorted column that a step range can feed.
