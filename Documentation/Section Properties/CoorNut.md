---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

# CoorNut function

Returns the side elevation of a nut centered on the origin.

Example file: [[Section Properties.xlsx]]

Each corner is chamfered by `width/8` horizontally and at 30°. Vertex order starts at the upper-left end of the top flat and runs clockwise.

## Syntax

```
=CoorNut(width, thickness, [isRepeatFirstPoint])
```

The CoorNut function has the following arguments:

| Argument | Description |
| --- | --- |
| `width` | Required. Width across the flats in this elevation. |
| `thickness` | Required. Thickness. |
| `isRepeatFirstPoint` | Optional. Default FALSE. TRUE appends the first vertex again. |

## Remarks

- For width 16 and thickness 8 the first point is (−6, 4). The chamfer drops by \((width/8)\tan 30^\circ\).
- An omitted flag returns 8 rows. TRUE returns 9.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Width 16, thickness 8, first point repeated.

![[CoorNut-20261103031946.jpeg]]

Formula: `=CoorNut($B$277,$B$278,TRUE)`.

## Tests

Excel calculated 6 CoorNut cases. All 6 passed.

| Case | Result |
| --- | --- |
| Width 16, thickness 8 | First point (−6, 4) |
| Chamfer y | \(4 - 2\tan 30^\circ\) |
| Omitted repeat flag | 8 rows |
| TRUE | 9 rows |
| Text width | `#VALUE!` |

## Related functions

- [[CoorBoltEle]] — places this nut against a bolt shank.
- [[CoorHexagon]] — the plan view of a hexagon, not this elevation.
- [[CoorRect]] — the shank rectangle used beside the nut.
