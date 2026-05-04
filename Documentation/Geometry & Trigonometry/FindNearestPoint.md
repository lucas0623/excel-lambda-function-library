---
created: 2026-05-02
tags:
  - coordinate-geometry
  - find-nearest-point
---
## Description
Returns the **name** of the nearest point (from `pointNames`) to the query point $(queryX, queryY)$ among points defined by coordinate arrays `xCoords` and `yCoords`.

$$
\text{nearest} = \text{pointNames}[\arg\min_i \sqrt{(queryX - x_i)^2 + (queryY - y_i)^2}]
$$

Uses `LET` with `MAP` to compute distances via [[Dist]], `MIN` for minimum distance, `XMATCH` for index, and `CHOOSEROWS` for name.

**Assumptions & Error Handling**:
- `xCoords`, `yCoords`, `pointNames` must have the **same number of rows** (vertical arrays).
- Returns `NA()` for empty or mismatched arrays.
- If multiple points tie for minimum distance, returns the **first** one (XMATCH match_mode=0).
- Non-numeric inputs propagate Excel errors from [[Dist]].

## Parameters
| Parameter   | Type          | Description                                      |
|-------------|---------------|--------------------------------------------------|
| `queryX`, `queryY` | Number   | x/y coordinates of the **query point**           |
| `xCoords`   | Array         | Vertical array of **x-coordinates** of points    |
| `yCoords`   | Array         | Vertical array of **y-coordinates** of points (same length as `xCoords`) |
| `pointNames`| Array         | Vertical array of **point names** (same length as `xCoords`) |

## Returns
- **String**: Name of the **nearest point**.
- **NA()**: Invalid input arrays.

## Dependencies
- [[Dist]] – Calculates distance to each point.

## Example
- [[Nearest Point.xlsx]]
![[DistToNearestPoint-20260902090506.jpeg]]

## Related Functions
- [[Dist]] – Base distance calculator.
- [[DistToNearestPoint]] – Returns minimum distance (companion function).

