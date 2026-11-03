---
description: "Returns the vertices of a T section."
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

## Overview

Returns the vertices of a T section.

Example file: [[Section Properties.xlsx]]

The flange top lies on y = 0 and the stem extends down to y = −h. Vertex order starts at the top-left and runs counterclockwise.

## Syntax

```
=CoorT(h, b, tf, tw, [isRepeatFirstPoint])
```

The CoorT function has the following arguments:

| Argument | Description |
| --- | --- |
| `h` | Required. Overall height. |
| `b` | Required. Flange width. |
| `tf` | Required. Flange thickness. |
| `tw` | Required. Stem thickness. |
| `isRepeatFirstPoint` | Optional. Default FALSE. TRUE appends the first vertex again. |

## Remarks

- Argument order is overall height, flange width, flange thickness, stem thickness, then the repeat flag.
- An explicit FALSE stays FALSE. TRUE adds one closing vertex.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. The chart shows the flange on y = 0 and the stem downward.

![[CoorT-20261103031946.jpeg]]

## Tests

Excel calculated 3 CoorT cases. All 3 passed.

| Case | Result |
| --- | --- |
| Ordinary T | Vertices match the flange-on-top order |
| Explicit FALSE | No repeated first point |
| Text height | `#VALUE!` |

## Related functions

- [[CoorI]] — an I section centered on the origin.
- [[CoorRect]] — the same height-then-width argument order.
- [[Prop]] — section properties of the returned polygon.
