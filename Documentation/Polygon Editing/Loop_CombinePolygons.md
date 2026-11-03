---
description: "Tries to union one polygon with each polygon in a column."
created: 2026-11-03
tags:
  - coordinate-geometry
  - polygon
aliases:
  - LOOP_COMBINEPOLYGONS
AI Reviewed: true
example: "[[Polygon Editing.xlsx]]"
---

## Overview

Tries to union one polygon with each polygon in a column.

Example file: [[Polygon Editing.xlsx]]

`verticesText` is one strict `ARRAYTOTEXT` of `(x, y)` rows. `verticesArrText` is a column of the same kind of string. `count` is optional and is the 1-based row to try. Omit it to start at 1. A union replaces that row with the combined polygon. No union appends `verticesText`.

## Syntax

```
=Loop_CombinePolygons(verticesText, verticesArrText, [count])
```

The Loop_CombinePolygons function has the following arguments:

| Argument | Description |
| --- | --- |
| `verticesText` | Required. One strict `ARRAYTOTEXT` of `(x, y)` rows. |
| `verticesArrText` | Required. A column of strict `ARRAYTOTEXT` strings. |
| `count` | Optional. 1-based row to try. The default is 1. |

## Remarks

- A union is one row from [[CombineTwoPolygons]]. Two rows mean the polygons stayed separate.
- The next row is tried by calling `{ref}Loop_CombinePolygons(`.
- A string shorter than 2 characters returns `#VALUE!`.
- The name stays `Loop_CombinePolygons`.

## Example

The sample data is on the `example` sheet of [[Polygon Editing.xlsx]]. Blue cells are inputs.

![[Loop_CombinePolygons-20261103120327.jpeg]]

The result is `{2,1;3,1;3,3;1,3;1,2;0,2;0,0;2,0}`.

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| Union with the only polygon | The eight-vertex union |
| The first polygon misses and the second overlaps | The union, then the polygon that missed |
| `verticesText` is `"x"` | `#VALUE!` |

## Related functions

- [[CombinePolygons]] — repeats this walk across a column.
- [[CombineTwoPolygons]] — one pair.
- [[TextToArray]] — reads each strict string back into coordinates.
