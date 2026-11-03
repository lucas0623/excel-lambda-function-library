---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - COMBINEPOLYGONS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# CombinePolygons function

Combines a column of polygons into as few outlines as their overlaps allow.

Example file: [[Polygon Editing.xlsx]]

`verticesArrText` is a column of strict `ARRAYTOTEXT` strings. Each string is an n×2 list of `(x, y)` rows. `count` is optional and is the 1-based polygon to try next. Omit it to start at 1. Overlapping polygons become one union string. Separate polygons stay on their own rows.

## Syntax

```
=CombinePolygons(verticesArrText, [count])
```

The CombinePolygons function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesArrText` | Required. A column of strict `ARRAYTOTEXT` polygon strings. |
| `count` | Optional. 1-based polygon to try next. The default is 1. |

## Remarks

- Each try goes through [[Loop_CombinePolygons]]. A shorter column means a union happened, and the walk starts again at the first row.
- The function calls itself as `{ref}CombinePolygons(`.
- A string shorter than 2 characters returns `#VALUE!`.
- The name stays `CombinePolygons`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The two strings are the overlapping squares from [[CombineTwoPolygons]].

![[CombinePolygons-20261103120327.jpeg]]

The result is `{2,1;3,1;3,3;1,3;1,2;0,2;0,0;2,0}`.

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Two overlapping polygons | The union string |
| Those two, plus a square at x = 10 | The union, then the separate square |
| A one-character string in the column | `#VALUE!` |

## Related functions

- [[Loop_CombinePolygons]] — unions one text with the rest of the column.
- [[CombineTwoPolygons]] — the union of one pair.
- [[RemoveRow]] — drops the polygon that was just tried.
