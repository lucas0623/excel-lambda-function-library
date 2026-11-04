---
description: "Returns the scalar at a point on a 4-node shell quad."
created: 2026-11-04
tags:
  - shell-interpolation
AI Reviewed: true
example: "[[Shell interpolation.xlsx]]"
---

## Overview

Returns the scalar at a point on a 4-node shell quad.

Example file: [[Shell interpolation.xlsx]]

`nodes` is 4 rows of x, y, z, counterclockwise as seen along the shell normal. `values` is one number per node, in that same order. `point` is x, y, z, as a row or a column.

Node 1 is \((-1,-1)\), node 2 is \((1,-1)\), node 3 is \((1,1)\), and node 4 is \((-1,1)\).

## Syntax

```
=SHELL_QUAD(nodes, values, point)
```

The SHELL_QUAD function has the following arguments:

| Argument | Description |
| --- | --- |
| `nodes` | Required. 4 rows of x, y, z. |
| `values` | Required. One scalar per node, in node order. |
| `point` | Required. x, y, z. |

## Remarks

- The value is the sum of the bilinear weights times the nodal values. At natural coordinates \(\xi\) and \(\eta\),

$$
\begin{aligned}
N_1&=\tfrac14(1-\xi)(1-\eta),&
N_2&=\tfrac14(1+\xi)(1-\eta),\\
N_3&=\tfrac14(1+\xi)(1+\eta),&
N_4&=\tfrac14(1-\xi)(1+\eta).
\end{aligned}
$$

- A planar quad must lie on the plane of nodes 1, 2, and 3. A warped quad is sampled on the bilinear surface, so the point does not have to lie on that plane.
- Natural coordinates outside \(-1\) to \(1\), a point farther from the surface than \(10^{-6}\) times the longest edge, or a collapsed quad returns `#N/A`.
- The surface tolerance is \(10^{-6}\) times the longest boundary edge.

## Example

The sample data is on the `Example` sheet of [[Shell interpolation.xlsx]]. Blue cells are inputs. The quad is the rectangle \((0,0,0)\), \((2,0,0)\), \((2,1,0)\), \((0,1,0)\), with nodal S11 of 10, 20, 30, and 40.

The sheet labels \((1,1,0)\) as Center. That point is the midpoint of the edge from node 4 to node 3, so \(\xi=0\) and \(\eta=1\). The weights are \(0\), \(0\), \(0.5\), \(0.5\), and S11 is 35. The point \((3,0.5,0)\) is past the edge. The result cell shows Outside, and the natural coordinates are \(\xi=2\), \(\eta=0\).

Formula: `=SHELL_QUAD(B6:D9, E6:E9, B13:D13)`.

## Tests

The `Tests` sheet reports 59 passed and 0 failed. The quad block includes:

| Case | Result |
| --- | --- |
| Rectangle center | Value 1.5, recovered coordinates \((0,0)\) |
| Rectangle node and edge | Nodal value, or the average of the two edge nodes |
| Trapezoid at \(\xi=0\), \(\eta=0.5\) | Value and recovered coordinates |
| Tilted planar quad | Center value |
| Warped quad center, and at \(\xi=0.5\), \(\eta=-0.5\) | Surface value |
| Outside, off the surface, outside tolerance | `#N/A` |
| Collapsed quad | `#N/A` |

## Related functions

- [[SHELL_TRI]] — the same scalar on a triangle.
- [[Shell.FindElements]] — element ids whose shell contains a point.
