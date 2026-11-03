---
description: "Returns elastic and plastic section properties of a simple polygon as a 27×3 array of name, value, and unit."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns elastic and plastic section properties of a simple polygon as a 27×3 array of name, value, and unit.

Example file: [[Section Properties.xlsx]]

`vertices` is an n×2 array in vertex order, column 1 x and column 2 y, with no repeated closing vertex. `unit` defaults to mm and only labels the units.

## Syntax

```
=Properties(vertices, [unit])
```

The Properties function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 vertices, x then y, without repeating the first vertex. |
| `unit` | Optional. Unit text for the labels. Default is `mm`. |

## Remarks

- \(I_{xx}\) and \(I_{yy}\) are centroidal second moments. \(I_{xy}\) is the centroidal product of inertia and keeps its sign.
- \(I_{uu}\) is the major principal moment. The reported angle is that axis measured from the x-axis, in degrees. \(r_u\) uses the major moment and \(r_v\) uses the minor moment.
- \(Z_{xx}\) and \(Z_{yy}\) are the smaller elastic moduli. \(S_{xx}\) and \(S_{yy}\) are the plastic moduli about the equal-area axes from [[Prop_PlasticCentroidCpy]] and [[Prop_PlasticCentroidCpx]].
- For a rectangle of width \(b\) and height \(h\), \(S_{xx}=b h^2/4\).
- A zero-area polygon returns `#DIV/0!`.
- Fewer than two columns, or a non-numeric coordinate, returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The 4 by 2 rectangle has \(S_{xx}=4\) and a major principal axis at 90°.

![[Properties-20261103031946.jpeg]]

| Result | Value |
| --- | --- |
| Area | 8 |
| Ixx | 8/3 |
| Iyy | 32/3 |
| Ixy | 0 |
| Iuu | 32/3 |
| Principal angle | 90° |
| ru | \(\sqrt{4/3}\) |
| Zyy | 16/3 |
| Sxx | 4 |
| Syy | 8 |

Formula: `=Properties(A8:B11)`.

## Tests

Excel calculated 27 Properties cases. All 27 passed. They cover the rectangle values above, the shifted rectangle, the triangle product of inertia, the plastic moduli, both radii of gyration, and the promised errors.

| Case | Result |
| --- | --- |
| 4 by 2 rectangle | Sxx = 4, Syy = 8, principal angle 90° |
| Collinear vertices | `#DIV/0!` |
| One column | `#VALUE!` |

## Related functions

- [[Prop]] — the elastic block only.
- [[Prop_PlasticCentroidCpx]] — vertical equal-area axis used for \(S_{yy}\).
- [[Prop_PlasticCentroidCpy]] — horizontal equal-area axis used for \(S_{xx}\).
