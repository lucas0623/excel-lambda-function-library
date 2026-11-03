---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - GETVERTICESBETWEENINTERSECTIONS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# GetVerticesBetweenIntersections function

Returns the vertices strictly between two named rows of an intersection list.

Example file: [[Polygon Editing.xlsx]]

`vertices` is an n×4 array: x, y, an intersection flag, and the name `x & "," & y`. The walk goes forward from the row after `verticeName1` to the row before `verticeName2`, and wraps past the last row.

## Syntax

```
=GetVerticesBetweenIntersections(vertices, verticeName1, verticeName2)
```

The GetVerticesBetweenIntersections function has the following arguments:

| Argument | Description |
| --- | --- |
| `vertices` | Required. n×4 array. Column 4 is the name. |
| `verticeName1` | Required. Name of the start row. The start row itself is not returned. |
| `verticeName2` | Required. Name of the end row. The end row itself is not returned. |

## Remarks

- Adjacent names, with nothing between them, return `#N/A`.
- An unknown name returns `#N/A`.
- Fewer than four columns returns `#REF!`.
- The name stays `GetVerticesBetweenIntersections`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. The walk is from `0,0` to `4,2`.

![[GetVerticesBetweenIntersections-20261103120327.jpeg]]

| x | y | Intersection | Name |
| --- | --- | --- | --- |
| 4 | 0 | FALSE | 4,0 |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Between `0,0` and `4,2` | The row `(4, 0)` |
| Wrap from the last name `0,2` to `4,0` | The row `(0, 0)` |
| Unknown name | `#N/A` |

## Related functions

- [[InsertPolyAndLineIntersection]] — builds the names this function matches.
- [[CombineTwoPolygons]] — chooses a chain between two intersection names.
- [[CleanUpContinuousIntersections]] — clears flags before those names are filtered.
