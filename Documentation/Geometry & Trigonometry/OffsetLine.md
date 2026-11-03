---
created: 2026-11-03
tags:
  - coordinate-geometry
  - offset
aliases:
  - OFFSETLINE
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Returns a parallel copy of a segment, shifted to the left of its direction.

Example file: [[Geometry Family.xlsx]]

The result is a 1×4 row `(x1, y1, x2, y2)`. Point 1 is I shifted by `oLen`. Point 2 is J shifted by the same amount. Positive `oLen` is left of I→J.

## Syntax

```
=OffsetLine(xi, yi, xj, yj, oLen)
```

The OffsetLine function has the following arguments:

| Argument | Description |
| --- | --- |
| `xi` | Required. X coordinate of point I. |
| `yi` | Required. Y coordinate of point I. |
| `xj` | Required. X coordinate of point J. |
| `yj` | Required. Y coordinate of point J. |
| `oLen` | Required. Signed offset. Positive is left of I→J. |

## Remarks

- Both ends are [[OffsetPoint]] calls. The first uses `rLen = 0`. The second uses `rLen` equal to the length from [[Dist]].
- `oLen = 0` returns the original segment.
- A zero-length segment returns `#DIV/0!`.
- The previous comment called the result a new point. It is the full segment.
- The name stays `OffsetLine`.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[OffsetLine-20261103020343.jpeg]]

| xi | yi | xj | yj | oLen | x1 | y1 | x2 | y2 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0 | 2 | 0 | 1 | 0 | 1 | 2 | 1 |

## Tests

The `test` sheet checks a left offset, a zero offset, and a zero-length segment. Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Left of (0, 0)→(2, 0) by 1 | (0, 1, 2, 1) |
| Zero offset | (0, 0, 2, 0) |
| Zero-length segment | `#DIV/0!` |

## Related functions

- [[OffsetPoint]] — one end of the offset segment.
- [[Dist]] — length used as `rLen` for the second end.
