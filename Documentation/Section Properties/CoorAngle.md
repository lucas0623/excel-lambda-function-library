---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the vertices of an angle section.

Example file: [[Section Properties.xlsx]]

The name is the section, not an angle in degrees. The heel is at the origin, the vertical leg lies on x = 0, and the outstanding leg runs along the top to x = b. Vertex order starts at the top of the heel and runs around the profile.

## Syntax

```
=CoorAngle(h, b, tf, tw, [isRepeatFirstPoint])
```

The CoorAngle function has the following arguments:

| Argument | Description |
| --- | --- |
| `h` | Required. Vertical leg length. |
| `b` | Required. Outstanding leg length. |
| `tf` | Required. Outstanding-leg thickness. |
| `tw` | Required. Vertical-leg thickness. |
| `isRepeatFirstPoint` | Optional. Default FALSE. TRUE appends the first vertex again. |

## Remarks

- Argument order is vertical leg, outstanding leg, outstanding-leg thickness, vertical-leg thickness, then the repeat flag.
- For h = 10, b = 8, tf = 2, and tw = 1 the outline starts at (0, 10), goes down the heel to (0, 0), steps to (1, 0), and returns along the top of the outstanding leg.
- An explicit FALSE stays FALSE.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The chart is an L, with the heel at the origin.

![[CoorAngle-20261103031946.jpeg]]

Formula: `=CoorAngle($B$296,$B$297,$B$298,$B$299,TRUE)`.

## Tests

Excel calculated 3 CoorAngle cases. All 3 passed.

| Case | Result |
| --- | --- |
| h = 10, b = 8, tf = 2, tw = 1 | The L outline above |
| Repeat FALSE | No repeated first point |
| Text | `#VALUE!` |

## Related functions

- [[CoorPFC]] — a channel with the web on x = 0.
- [[CoorI]] — an I section centered on the origin.
- [[Prop_Area]] — area of the returned angle.
