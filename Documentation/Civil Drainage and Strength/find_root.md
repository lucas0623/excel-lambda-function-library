---
created: 2026-11-03
tags:
  - civil
  - numeric
aliases:
  - FIND_ROOT
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

# find_root function

Returns the x values where a polyline crosses `target_y`.

Example file: [[Civil Drainage Strength.xlsx]]

`x_vals` and `y_vals` are columns of equal length, in the same order. Each crossing is linear between the vertices. A vertex that equals the target is returned once.

$$
x = x_1 - (y_1 - y_t) \frac{x_2 - x_1}{(y_2 - y_t) - (y_1 - y_t)}
$$

## Syntax

```
=find_root(target_y, x_vals, y_vals)
```

The find_root function has the following arguments:

| Argument | Description |
| --- | --- |
| `target_y` | Required. Horizontal line to cross. |
| `x_vals` | Required. Column of x coordinates. |
| `y_vals` | Required. Column of y coordinates, same order and length as `x_vals`. |

## Remarks

- No crossing returns `"No roots found"`.
- Text returns `#VALUE!`.
- A short y column is not reported as `#REF!`. With no numeric crossing the result is `"No roots found"`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. The polyline `(0, −1), (1, 1), (2, −1), (3, 1)` crosses `y = 0` at 0.5, 1.5, and 2.5.

![[find_root-20261103122525.jpeg]]

| x |
| --- |
| 0.5 |
| 1.5 |
| 2.5 |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| Crossings of `y = 0` on `(0, −1)` to `(3, 1)` | 0.5, 1.5, 2.5 |
| Vertex on the target, `(5, 0)` | 5 |
| `y` of 1 and 2, target 0 | `"No roots found"` |
| Text in `y` | `#VALUE!` |
