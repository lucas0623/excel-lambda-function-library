---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

# CoorPFC function

Returns the vertices of a parallel flange channel.

Example file: [[Section Properties.xlsx]]

The web lies on x = 0 and the flanges extend to x = b. The section is centered on y = 0. Vertex order starts at the top of the web and runs around the profile.

## Syntax

```
=CoorPFC(h, b, tf, tw, [isRepeatFirstPoint])
```

The CoorPFC function has the following arguments:

| Argument | Description |
| --- | --- |
| `h` | Required. Overall height. |
| `b` | Required. Flange width. |
| `tf` | Required. Flange thickness. |
| `tw` | Required. Web thickness. |
| `isRepeatFirstPoint` | Optional. Default FALSE. TRUE appends the first vertex again. |

## Remarks

- This is a channel, not an I section. The web is the line x = 0.
- An explicit FALSE stays FALSE.
- A non-numeric size returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Height 10, flange width 6, flange thickness 1, web thickness 2.

![[CoorPFC-20261103031946.jpeg]]

## Tests

Excel calculated 3 CoorPFC cases. All 3 passed.

| Case | Result |
| --- | --- |
| Ordinary channel | Web on x = 0, flanges toward positive x |
| Explicit FALSE | No repeated first point |
| Text height | `#VALUE!` |

## Related functions

- [[CoorI]] — an I section centered on the origin.
- [[CoorAngle]] — an angle with the heel at the origin.
- [[Prop_Cx]] — the channel centroid is not at x = 0.
