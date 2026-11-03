---
created: 2026-11-03
tags:
  - section-properties
AI Reviewed: true
example: "[[Section Properties.xlsx]]"
---

# CoorRect function

Returns the vertices of a rectangle of height `h` and width `b`, centered on the origin.

Example file: [[Section Properties.xlsx]]

Argument order is height, then width, then an optional repeat flag. Vertex order is bottom-left, bottom-right, top-right, top-left.

## Syntax

```
=CoorRect(h, b, [isRepeatFirstPoint])
```

The CoorRect function has the following arguments:

| Argument | Description |
| --- | --- |
| `h` | Required. Height. |
| `b` | Required. Width. |
| `isRepeatFirstPoint` | Optional. Default FALSE. TRUE appends the first vertex again. |

## Remarks

- The corners are \((-b/2,-h/2)\), \((b/2,-h/2)\), \((b/2,h/2)\), \((-b/2,h/2)\).
- An omitted flag or an explicit FALSE returns 4 rows. TRUE returns 5.
- A non-numeric `h` or `b` returns `#VALUE!`.

## Example

The sample data is on the `example` sheet of [[Section Properties.xlsx]]. Blue cells are inputs. Height 2 and width 4, with the first point repeated.

![[CoorRect-20261103031946.jpeg]]

| x | y |
| --- | --- |
| −2 | −1 |
| 2 | −1 |
| 2 | 1 |
| −2 | 1 |
| −2 | −1 |

Formula: `=CoorRect($B$129,$B$130,TRUE)`.

## Tests

Excel calculated 5 CoorRect cases. All 5 passed.

| Case | Result |
| --- | --- |
| Height 2, width 4 | The four corners above |
| Height 0 | The rectangle collapses onto y = 0 |
| Repeat FALSE | 4 rows |
| Repeat TRUE | 5 rows |
| Text | `#VALUE!` |

## Related functions

- [[CoorT]] — a T section on the same argument pattern.
- [[Prop_Area]] — the rectangle area is \(bh\).
- [[CoorBoltEle]] — draws the shank with `CoorRect(Length, Dia, TRUE)`.
