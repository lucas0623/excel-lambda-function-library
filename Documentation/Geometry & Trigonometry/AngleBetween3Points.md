---
created: 2026-04-29
tags:
  - coordinate-geometry
  - angle-between-points
---
## Description
Calculates the **angle in degrees** at vertex point J (the middle point) formed by three points I, J, and K in a 2D plane. Uses the **law of cosines**:

$$
\theta = \deg\left( \cos^{-1} \left( \frac{a^2 + b^2 - c^2}{2ab} \right) \right)
$$

Where:
- $a$ = distance between I and J
- $b$ = distance between J and K
- $c$ = distance between K and I

**Assumptions & Error Handling**:
- Points must not be collinear (would result in $\cos \theta = \pm 1$, $\theta = 0^\circ$ or $180^\circ$).
- Avoid zero distances (e.g., coincident points) to prevent division by zero.
- Input values should ensure the cosine value is in $[-1, 1]$ for valid ACOS; otherwise, Excel returns `#NUM!`.

## Parameters
| Parameter | Type   | Description                  |
|-----------|--------|------------------------------|
| `xi`, `yi` | Number | x/y coordinates of **point I** |
| `xj`, `yj` | Number | x/y coordinates of **point J** (vertex) |
| `xk`, `yk` | Number | x/y coordinates of **point K** |

## Returns
- **Number**: Angle in **degrees** (0° to 180°).

## Dependencies
- [[Dist]] – Calculates Euclidean distance between two points.

## Usage Examples

### Example 1: Right Triangle (90° angle)
Points: I(0,0), J(3,0), K(3,4)
- `=AngleBetween3Points(0,0, 3,0, 3,4)` → **90°**

### Example 2: Isosceles Triangle (~53.13°)
Points: I(0,0), J(3,0), K(0,4)
- `=AngleBetween3Points(0,0, 3,0, 0,4)` → **~53.13°**

## Related Functions
- [[Dist]] – Base distance calculator.
- Consider combining with `ATAN2` for oriented angles if direction matters.

