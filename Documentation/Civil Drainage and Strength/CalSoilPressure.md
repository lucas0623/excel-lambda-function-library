---
created: 2026-11-03
tags:
  - civil
  - soil
aliases:
  - CALSOILPRESSURE
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns the effective vertical soil stress and the force on a wall of length `Length`.

Example file: [[Civil Drainage Strength.xlsx]]

`waterH` is measured from the bottom and is clamped to the closed interval from 0 to `soilH`. `K` is accepted and is not applied. Stress at the water table is the dry soil above that level. Stress at the bottom adds the buoyant unit weight through the water. Forces are the areas of that stress diagram times `Length`.

$$
h_w = \operatorname{median}(0, \text{waterH}, \text{soilH})
$$

$$
\sigma_1 = \gamma_s (\text{soilH} - h_w)
$$

$$
\sigma_2 = \sigma_1 + (\gamma_s - \gamma_w) h_w
$$

$$
F_1 = \sigma_1 (\text{soilH} - h_w) L / 2
$$

$$
F_2 = (\sigma_1 + \sigma_2) h_w L / 2
$$

The result is five rows, label then value: stress at the water table, stress at the bottom, force above the water table, force below the water table, and total force.

## Syntax

```
=CalSoilPressure(soilH, waterH, K, [Length], [SoilDensity], [WaterDensity])
```

The CalSoilPressure function has the following arguments:

| Argument | Description |
| --- | --- |
| `soilH` | Required. Soil height, in metres. |
| `waterH` | Required. Water height from the bottom, in metres. |
| `K` | Required. Accepted and not applied. |
| `Length` | Optional. Wall length in metres. Default 1. |
| `SoilDensity` | Optional. Soil unit weight in kN/m³. Default 19. |
| `WaterDensity` | Optional. Water unit weight in kN/m³. Default 10. |

## Remarks

- Text returns `#VALUE!`.
- `K` is left unused because the comment does not define a lateral pressure `Kσ`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs.

![[CalSoilPressure-20261103122525.jpeg]]

Soil 5 m, water 2 m, `K` 0.5, and the defaults `L = 1`, `γs = 19`, `γw = 10`.

| Label | Value |
| --- | --- |
| Soil stress at the water table | 57 |
| Soil stress at the bottom | 75 |
| Force above the water table | 85.5 |
| Force below the water table | 132 |
| Total force | 217.5 |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| Soil 5 m, water 2 m, defaults | 57, 75, 85.5, 132, 217.5 |
| Dry soil, length 2 m, `γs` 18, height 4 m | 72, 72, 288, 0, 288 |
| Water above the soil, height 3 m | 0, 27, 0, 40.5, 40.5 |
| Text soil height | `#VALUE!` |
