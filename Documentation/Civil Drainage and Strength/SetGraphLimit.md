---
created: 2026-11-03
tags:
  - plotting
aliases:
  - SETGRAPHLIMIT
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns two corners of a square axis window.

Example file: [[Civil Drainage Strength.xlsx]]

Each data limit is padded by `adjConst`. The shorter side is then expanded equally so the width equals the height. Equal width and height add nothing. The result is a 2×2 array: the lower corner `(x, y)`, then the upper corner `(x, y)`.

## Syntax

```
=SetGraphLimit(arrX, arrY, adjConst)
```

The SetGraphLimit function has the following arguments:

| Argument | Description |
| --- | --- |
| `arrX` | Required. Column or row of x values. |
| `arrY` | Required. Column or row of y values. |
| `adjConst` | Required. Padding added outside the data minimum and maximum. |

## Remarks

- Text in `adjConst` returns `#VALUE!`.
- Plot both returned points. The window is the square they define.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. X runs from 0 to 10, Y from 0 to 4, and the padding is 1. After padding, X is 12 wide and Y is 6 high, so Y grows by 3 on each side.

![[SetGraphLimit-20261103122525.jpeg]]

| Corner | x | y |
| --- | --- | --- |
| Lower | −1 | −4 |
| Upper | 11 | 8 |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| X 0 to 10, Y 0 to 4, padding 1 | `(−1, −4)` and `(11, 8)` |
| X and Y both 0 to 10, padding 0 | `(0, 0)` and `(10, 10)` |
| X 0 to 2, Y 0 to 10, padding 0 | `(−4, 0)` and `(6, 10)` |
| Text padding | `#VALUE!` |
