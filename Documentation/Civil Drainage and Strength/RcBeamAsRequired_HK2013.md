---
created: 2026-11-03
tags:
  - strength
  - concrete
aliases:
  - RCBEAMASREQUIRED_HK2013
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns the reinforcement required for a rectangular beam by the Hong Kong Code of Practice for Structural Use of Concrete 2013, clause 6.1.2.4, equations 6.7 to 6.16. Redistribution above 10% is not applied.

Example file: [[Civil Drainage Strength.xlsx]]

Moment is in kNm, dimensions in mm, and strengths in MPa. `K` multiplies the moment by `1000²`.

$$
K = \frac{M \times 10^6}{b d^2 f_{cu}}
$$

$$
K' =
\begin{cases}
0.156 & f_{cu} \le 45 \\
0.120 & 45 < f_{cu} \le 70 \\
0.094 & 70 < f_{cu}
\end{cases}
$$

$$
z = \min\left(0.95d,\; d\left(0.5 + \sqrt{0.25 - \frac{K}{0.9}}\right)\right)
$$

When `K > K'`, the lever arm uses `K'` in place of `K`. The neutral-axis factor is 0.45, 0.40, or 0.36 for the same `fcu` bands:

$$
x = (d - z) / 0.45,\; 0.40,\; \text{or}\; 0.36
$$

Singly reinforced, `K < K'`:

$$
A_s = \frac{M \times 10^6}{0.87 f_y z}, \qquad A_s' = 0
$$

Doubly reinforced, compression steel at `0.87 fy`:

$$
A_s' = \frac{(K - K') f_{cu} b d^2}{0.87 f_y (d - d')}
$$

$$
A_s = \frac{K' f_{cu} b d^2}{0.87 f_y z} + A_s'
$$

The row is `K'`, `K`, whether `K < K'`, `z`, `x`, `As'`, and `As`. `isOutputHeader` defaults to TRUE and adds that header.

## Syntax

```
=RcBeamAsRequired_HK2013(Moment, width, eff_depth, eff_depth_to_comp, fcu, fy, [isOutputHeader])
```

The RcBeamAsRequired_HK2013 function has the following arguments:

| Argument | Description |
| --- | --- |
| `Moment` | Required. Design moment, in kNm. |
| `width` | Required. Section width `b`, in mm. |
| `eff_depth` | Required. Effective depth `d`, in mm. |
| `eff_depth_to_comp` | Required. Depth to compression steel `d'`, in mm. |
| `fcu` | Required. Concrete cube strength, in MPa. |
| `fy` | Required. Reinforcement yield strength, in MPa. |
| `isOutputHeader` | Optional. TRUE adds the header row. Default TRUE. |

## Remarks

- A zero width or effective depth returns `#DIV/0!`.
- Text returns `#VALUE!`.
- Compression steel always uses `0.87 fy`. The code reduces that stress when `d'/x` is large. The worked cases here stay inside the `0.87 fy` range.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. Moment 144 kNm, width 300 mm, `d` 400 mm, `d'` 50 mm, `fcu` 30 MPa, `fy` 500 MPa. The call passes FALSE so the header is omitted. `K = 0.1` is below `K' = 0.156`, so the beam is singly reinforced and `z` is capped by the formula, not by `0.95d`.

![[RcBeamAsRequired_HK2013-20261103122525.jpeg]]

| K' | K | K < K' | z (mm) | x (mm) | As' (mm²) | As (mm²) |
| --- | --- | --- | --- | --- | --- | --- |
| 0.156 | 0.100 | TRUE | 349.071 | 113.175 | 0 | 948.329 |

## Tests

Excel calculated 6 cases. All 6 passed.

| Case | Result |
| --- | --- |
| 144 kNm, 300 × 400, `d'` 50, `fcu` 30, `fy` 500, no header | The example row |
| 409.5 kNm, 300 × 500, `d'` 60, `fcu` 35, so `K = K'` | `As' = 0` |
| 525 kNm on that section, `K = 0.2` | Doubly reinforced, `0.87 fy` |
| Same inputs as the example, header omitted from the call | Header row, then the same values |
| Width 0 | `#DIV/0!` |
| Text moment | `#VALUE!` |
