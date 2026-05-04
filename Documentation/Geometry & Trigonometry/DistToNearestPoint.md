---
created: 2026-05-02
tags:
  - coordinate-geometry
  - distance-to-nearest-point
---
## Description
Calculates the **minimum Euclidean distance** from a query point $(queryX, queryY)$ to the nearest point in a set of points given by coordinate arrays `xCoords` and `yCoords`.

$$
d_{\min} = \min_i \sqrt{(queryX - x_i)^2 + (queryY - y_i)^2}
$$

Uses `MIN(BYROW(...))` with [[Dist]] for each point.

**Assumptions & Error Handling**:
- `xCoords` and `yCoords` must have the **same number of rows** (vertical arrays).
- Returns `NA()` for empty or mismatched arrays.
- Non-numeric inputs result in Excel errors from [[Dist]].

## Parameters
| Parameter   | Type          | Description                                      |
|-------------|---------------|--------------------------------------------------|
| `queryX`, `queryY` | Number   | x/y coordinates of the **query point**           |
| `xCoords`   | Array         | Vertical array of **x-coordinates** of points    |
| `yCoords`   | Array         | Vertical array of **y-coordinates** of points (same length as `xCoords`) |

## Returns
- **Number**: Minimum distance $(\geq 0)$.
- **NA()**: Invalid input arrays.

## Dependencies
- [[Dist]] – Calculates distance to each point.

## Usage Examples
- [[Nearest Point.xlsx]]
![[DistToNearestPoint-20260902090506.jpeg]]

## Related Functions
- [[Dist]] – Distance between two points.
- [[FindNearestPoint]] – Returns index of nearest point (companion function).

## Example
- 
