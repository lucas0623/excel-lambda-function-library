---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - CREATEHATCH
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# CreateHatch function

Returns hatch segments for a closed polygon, with a blank row between segments so a scatter chart breaks the line.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×2 array of `(x, y)` rows in order. The last vertex connects to the first. `numberOfLines` defaults to 10. `angleInDegree` defaults to 45. Lines are spaced strictly between the extreme intercepts, so each line meets a convex polygon twice. Each segment is two `(x, y)` rows followed by `#N/A`.

## Syntax

```
=CreateHatch(vertices, [numberOfLines], [angleInDegree])
```

The CreateHatch function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×2 array of `(x, y)` rows. |
| `numberOfLines` | Optional. How many hatch lines. The default is 10. |
| `angleInDegree` | Optional. Hatch angle in degrees. The default is 45. |

## Remarks

- For a non-vertical angle the line is \(y = mx + C\), with \(m = \tan(\text{angle})\). The intercepts are \(C = y - mx\) at the vertices. Line \(i\) uses

$$
C_i = C_{\min} + i \frac{C_{\max} - C_{\min}}{n + 1}
$$

- A vertical angle, where \(\lvert \cos(\text{angle}) \rvert < 10^{-9}\), passes `m` as `#N/A` to [[PolySlopeIntersection]]. `C` is then the x coordinate.
- Each hit pair comes from [[PolySlopeIntersection]]. A one-row result from that function is skipped.
- Fewer than two columns returns `#REF!`.
- A non-numeric coordinate returns `#VALUE!`.
- The name stays `CreateHatch`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. One horizontal line crosses the square `(0, 0)`, `(2, 0)`, `(2, 2)`, `(0, 2)`.

![[CreateHatch-20261103120327.jpeg]]

| x | y |
| --- | --- |
| 0 | 1 |
| 2 | 1 |
| `#N/A` | `#N/A` |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| One horizontal line | `(0, 1)`, `(2, 1)`, then `#N/A` |
| One vertical line | `(1, 0)`, `(1, 2)`, then `#N/A` |
| One column of vertices | `#REF!` |

## Related functions

- [[PolySlopeIntersection]] — the polygon against one hatch line.
- [[SegmentSlopeIntersection]] — one edge against that line.
