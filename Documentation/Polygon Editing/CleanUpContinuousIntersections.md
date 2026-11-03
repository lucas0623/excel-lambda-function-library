---
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - CLEANUPCONTINUOUSINTERSECTIONS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

# CleanUpContinuousIntersections function

Clears intersection flags that sit in the middle of a run of three or more TRUE values.

Example file: [[Polygon Editing.xlsx]]

`verticesWithIntersections` is an n×4 array of x, y, TRUE or FALSE, and a name. The ring is closed, so a run may wrap from the last row to the first. The first and last TRUE of a run stay TRUE. A run of two stays TRUE.

## Syntax

```
=CleanUpContinuousIntersections(verticesWithIntersections)
```

The CleanUpContinuousIntersections function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesWithIntersections` | Required. n×4 array. Column 3 is the intersection flag. |

## Remarks

- The test looks at the original flags, including the row before the first and the row after the last.
- Fewer than three columns returns `#REF!`.
- The name stays `CleanUpContinuousIntersections`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs. Three consecutive TRUE flags become TRUE, FALSE, TRUE.

![[CleanUpContinuousIntersections-20261103120327.jpeg]]

| x | y | Intersection | Name |
| --- | --- | --- | --- |
| 0 | 0 | FALSE | a |
| 1 | 0 | TRUE | b |
| 2 | 0 | FALSE | c |
| 3 | 0 | TRUE | d |
| 4 | 0 | FALSE | e |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Three consecutive TRUE flags | The middle flag becomes FALSE |
| Two consecutive TRUE flags | Both stay TRUE |
| Two columns | `#REF!` |

## Related functions

- [[InsertPolysIntersection]] — produces the flags this function cleans.
- [[CombineTwoPolygons]] — filters the remaining TRUE rows.
- [[OverlappedPolygons]] — uses the same cleaned flags.
