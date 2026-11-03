---
description: "Returns the vertices of an I section centered on the origin."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the vertices of an I section centered on the origin.

Example file: [[Section Properties.xlsx]]

Vertex order starts at the top-left and runs clockwise around the profile. The outline has 12 unique vertices.

## Syntax

```
=CoorI(h, b, tf, tw, [isRepeatFirstPoint])
```

The CoorI function has the following arguments:

| Argument | Description |
| --- | --- |
| `h` | Required. Overall height. |
| `b` | Required. Flange width. |
| `tf` | Required. Flange thickness. |
| `tw` | Required. Web thickness. |
| `isRepeatFirstPoint` | Optional. Default FALSE. TRUE appends the first vertex again. |

## Remarks

- The section is symmetric about both axes. Overall height `h`, flange width `b`.
- An explicit FALSE returns 12 rows. TRUE returns 13.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Height 10, flange width 8, flange thickness 1, web thickness 2. The first point is repeated for the chart.

![[CoorI-20261103031946.jpeg]]

Formula: `=CoorI($B$165,$B$166,$B$167,$B$168,TRUE)`.

## Tests

Excel calculated 3 CoorI cases. All 3 passed.

| Case | Result |
| --- | --- |
| h = 10, b = 8, tf = 1, tw = 2 | 12 unique corners, top-left at (−4, 5) |
| Explicit FALSE | 12 rows |
| Text height | `#VALUE!` |

## Related functions

- [[CoorT]] — a T with the flange on y = 0.
- [[CoorPFC]] — a channel with the web on x = 0.
- [[Prop]] — centroidal properties of this outline.
