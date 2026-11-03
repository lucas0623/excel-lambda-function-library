---
description: "Returns the elevation of a bolt and its nuts as an n×2 array."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the elevation of a bolt and its nuts as an n×2 array.

Example file: [[Section Properties.xlsx]]

The shank is a rectangle of height `Length` and width `Dia`, centered on the origin. Nuts sit against the shank ends. Rows of `#N/A` separate the shank from the nuts.

## Syntax

```
=CoorBoltEle(Dia, Length, NutNum_Top, NutNum_Bot, NutWidth, NutThick, [x], [y])
```

The CoorBoltEle function has the following arguments:

| Argument | Description |
| --- | --- |
| `Dia` | Required. Shank width. |
| `Length` | Required. Shank height. |
| `NutNum_Top` | Required. 1 or 2 draws that many nuts at the top end. Any other count draws none. |
| `NutNum_Bot` | Required. 1 or 2 draws that many nuts at the bottom end. Any other count draws none. |
| `NutWidth` | Required. Nut width. |
| `NutThick` | Required. Nut thickness. |
| `x` | Optional. Translation in x. Supply both `x` and `y`, or neither. |
| `y` | Optional. Translation in y. |

## Remarks

- The shank is [[CoorRect]] with height `Length` and width `Dia`. For diameter 2 and length 10 the first point is (−1, −5).
- One top nut of width 4 and thickness 1 starts at (−1.5, 5), against the top of the shank.
- Optional `x` and `y` are applied by [[TranslateCoor]]. Supplying only one of them returns `#VALUE!`.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Diameter 2, length 10, one top nut, no bottom nut.

![[CoorBoltEle-20261103031946.jpeg]]

| Point | x | y |
| --- | --- | --- |
| Shank, first vertex | −1 | −5 |
| Top nut, first vertex | −1.5 | 5 |

Formula: `=CoorBoltEle(B315,B316,B317,B318,B319,B320)`.

## Tests

Excel calculated 7 CoorBoltEle cases. All 7 passed.

| Case | Result |
| --- | --- |
| Shank x, y | −1, −5 |
| Top nut x, y | −1.5, 5 |
| No nuts | `#N/A` separator where a nut would start |
| Translate by (3, 4) | First x is 2 |
| Only x supplied | `#VALUE!` |

## Related functions

- [[CoorRect]] — the shank outline.
- [[CoorNut]] — the nut outline placed at each end.
- [[TranslateCoor]] — moves the finished elevation.
