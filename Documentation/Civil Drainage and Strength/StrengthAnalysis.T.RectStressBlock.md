---
created: 2026-11-03
tags:
  - strength
  - concrete
aliases:
  - StrengthAnaylsis.T.RectStressBlock
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns the ultimate moment and axial force of a polygon section under a rectangular stress block.

Example file: [[Civil Drainage Strength.xlsx]]

Formerly `StrengthAnaylsis.T.RectStressBlock`.

`sectionCoor` is an n×2 array, x then y, with y upward and no repeated closing vertex. Units match [[StrengthAnalysis.RectSection.RectStressBlock]]. Depths are from the top. The result is a 1×2 row, moment in kNm then axial force in kN, compression positive.

Hogging rotates the section 180 degrees with [[RotateShape]] and returns a negative moment. The compression block is the piece from the top down to `λx`. [[SplitPolyIntoTwoPolys]] cuts the section on that line. The piece whose centroid is higher is the block. If neither piece can be read, the block is the whole section.

Steel strain is `εcu (x − d) / x`, and the stress is `Es` times that strain, limited to `±fyd`. Moment is about the transformed centroid.

## Syntax

```
=StrengthAnalysis.T.RectStressBlock(sectionCoor, fcd, εcu, Ec, rebarAreaArr, rebarDepthArr, fyd, Es, λ, neutralAxisDepth, isSaggingCapacity)
```

The StrengthAnalysis.T.RectStressBlock function has the following arguments:

| Argument | Description |
| --- | --- |
| `sectionCoor` | Required. n×2 coordinates, x then y, y upward, no repeated closing vertex. |
| `fcd` | Required. Concrete design strength, in MPa. |
| `εcu` | Required. Ultimate concrete strain. |
| `Ec` | Required. Concrete modulus, in MPa. |
| `rebarAreaArr` | Required. Column of bar areas, in mm². |
| `rebarDepthArr` | Required. Column of bar depths from the top, in mm. |
| `fyd` | Required. Design yield strength, in MPa. |
| `Es` | Required. Steel modulus, in MPa. |
| `λ` | Required. Stress-block depth factor. |
| `neutralAxisDepth` | Required. Neutral-axis depth from the top, in mm. |
| `isSaggingCapacity` | Required. TRUE for sagging. FALSE rotates the section and negates the moment. |

## Remarks

- A neutral-axis depth of 0 returns `#DIV/0!`.
- Text, or a polygon with fewer than two columns, returns `#VALUE!`.
- The cut uses `{ref}SplitPolyIntoTwoPolys(`, `{ref}Prop_Area(`, `{ref}Prop_Centroid(`, and `{ref}TextToArray(`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. The T is 600 mm wide and 500 mm deep, with a 100 mm flange and a 200 mm web. One bar of 1000 mm² sits 450 mm down. `fcd` 20, `εcu` 0.0035, `Ec` 30000, `fyd` 400, `Es` 200000, `λ` 1, `x` 150, sagging. The block is 150 mm deep and has area 70000 mm². Concrete force is 1400 kN and the bar is at −400 kN, so the axial force is 1000 kN.

![[StrengthAnalysis.T.RectStressBlock-20261103122525.jpeg]]

| Moment (kNm) | Axial (kN) |
| --- | --- |
| 299.545 | 1000 |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| The T, sagging, `x` 150 | 299.545 kNm, 1000 kN |
| A 200 × 400 rectangle with the cut below the section | 0 kNm, 845 kN, matching the capped rectangular block |
| A 300 × 600 rectangle, hogging, same bars as the rectangular example | −419.2 kNm, 1440 kN |
| `x = 0` | `#DIV/0!` |

## Related functions

- [[StrengthAnalysis.RectSection.RectStressBlock]] — the same block on a rectangle.
- [[SplitPolyIntoTwoPolys]] — cuts the polygon at `λx`.
- [[RotateShape]] — turns a hogging section upright.
- [[Prop_Area]] and [[Prop_Centroid]] — area and centroid of the compression piece.
