---
created: 2026-11-03
tags:
  - strength
  - concrete
aliases:
  - StrengthAnaylsis.RectSection.RectStressBlock
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

# StrengthAnalysis.RectSection.RectStressBlock function

Returns the ultimate moment and axial force of a rectangular section under a rectangular stress block.

Example file: [[Civil Drainage Strength.xlsx]]

Formerly `StrengthAnaylsis.RectSection.RectStressBlock`.

Section and bar depths are in mm, areas in mm², stresses and moduli in MPa. Depths are from the top. Compression is positive. The result is a 1×2 row, moment in kNm then axial force in kN.

The stress-block depth is capped at the section height:

$$
a = \min(\lambda x, H)
$$

$$
F_c = B a f_{cd} / 1000
$$

Steel strain is `εcu (x − d) / x`, and the stress is `Es` times that strain, limited to `±fyd`. Moment is about the transformed centroid. Hogging measures the bar depths from the bottom and returns a negative moment.

## Syntax

```
=StrengthAnalysis.RectSection.RectStressBlock(sectionH, sectionB, fcd, εcu, Ec, rebarAreaArr, rebarDepthArr, fyd, Es, λ, neutralAxisDepth, isSaggingCapacity)
```

The StrengthAnalysis.RectSection.RectStressBlock function has the following arguments:

| Argument | Description |
| --- | --- |
| `sectionH` | Required. Section height, in mm. |
| `sectionB` | Required. Section width, in mm. |
| `fcd` | Required. Concrete design strength, in MPa. |
| `εcu` | Required. Ultimate concrete strain. |
| `Ec` | Required. Concrete modulus, in MPa. |
| `rebarAreaArr` | Required. Column of bar areas, in mm². |
| `rebarDepthArr` | Required. Column of bar depths from the top, in mm. |
| `fyd` | Required. Design yield strength, in MPa. |
| `Es` | Required. Steel modulus, in MPa. |
| `λ` | Required. Stress-block depth factor. |
| `neutralAxisDepth` | Required. Neutral-axis depth `x` from the top, in mm. |
| `isSaggingCapacity` | Required. TRUE for sagging. FALSE flips the depths and the moment sign. |

## Remarks

- A neutral-axis depth of 0 returns `#DIV/0!`.
- Text returns `#VALUE!`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. Height 600 mm, width 300 mm, `fcd` 20, `εcu` 0.003, `Ec` 30000, bars 1000 mm² at 100 mm and 1000 mm² at 500 mm, `fyd` 500, `Es` 200000, `λ` 0.8, `x` 300, sagging. The block depth is 240 mm. The bars are symmetric and unyielded, so the moment is the couple of the concrete block.

![[StrengthAnalysis.RectSection.RectStressBlock-20261103122525.jpeg]]

| Moment (kNm) | Axial (kN) |
| --- | --- |
| 419.2 | 1440 |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| The example, sagging | 419.2 kNm, 1440 kN |
| Height 400, width 200, `x` 800, so the block is capped at the height | 0 kNm, 845 kN |
| The example, hogging | −419.2 kNm, 1440 kN |
| `x = 0` | `#DIV/0!` |
