---
created: 2026-05-02
tags:
  - coordinate-geometry
  - distance-between-points
---
## Description
Calculates the **Euclidean distance** between two points I($x_i, y_i$) and J($x_j, y_j$) in a 2D plane:

$$
d = \sqrt{(x_j - x_i)^2 + (y_j - y_i)^2}
$$

**Assumptions & Error Handling**:
- Returns 0 if points are coincident.
- Non-numeric inputs result in Excel #VALUE! error.
- No division by zero or invalid math issues.

## Parameters
| Parameter | Type   | Description                  |
|-----------|--------|------------------------------|
| `xi`, `yi` | Number | x/y coordinates of **point I** |
| `xj`, `yj` | Number | x/y coordinates of **point J** |

## Returns
- **Number**: Distance (≥ 0).

## Dependencies
None.

## Usage Examples

### Example 1: Classic 3-4-5 right triangle leg
Points: I(0,0), J(3,4)
- `=Dist(0,0, 3,4)` → **5**

### Example 2: Horizontal distance
Points: I(0,0), J(5,0)
- `=Dist(0,0, 5,0)` → **5**

### Example 3: Coincident points
Points: I(1,1), J(1,1)
- `=Dist(1,1, 1,1)` → **0**

## Related Functions
- [[AngleBetween3Points]] – Uses Dist to compute side lengths for angle calculation.
