---
description: "Returns the scalar at a point on a 3-node shell triangle."
created: 2026-11-04
tags:
  - shell-interpolation
AI Reviewed: true
example: "[[Shell interpolation.xlsx]]"
---

## Overview

Returns the scalar at a point on a 3-node shell triangle.

Example file: [[Shell interpolation.xlsx]]

`nodes` is 3 rows of x, y, z. `values` is one number per node, in that same order. `point` is x, y, z, as a row or a column. The weights are the barycentric coordinates on the plane through the three nodes, and they sum to 1.

## Syntax

```
=SHELL_TRI(nodes, values, point)
```

The SHELL_TRI function has the following arguments:

| Argument | Description |
| --- | --- |
| `nodes` | Required. 3 rows of x, y, z. |
| `values` | Required. One scalar per node, in node order. |
| `point` | Required. x, y, z. |

## Remarks

- The point must lie on the plane of the three nodes, within \(10^{-6}\) times the longest edge.
- A negative barycentric weight means the point is outside an edge. That point returns `#N/A`.
- A collapsed triangle returns `#N/A`.
- The weights are the in-plane coordinates. They do not, by themselves, test the plane. `SHELL_TRI` does that test before it uses them.

## Example

The sample data is on the `Example` sheet of [[Shell interpolation.xlsx]]. Blue cells are inputs. The nodes are \((0,0,0)\), \((2,0,0)\), and \((0,2,0)\), with nodal S11 of 10, 20, and 30. The query point \((1,0,0)\) is the midpoint of the first edge. The weights are \(0.5\), \(0.5\), and \(0\), and S11 is 15.

Formula: `=SHELL_TRI(B22:D24, E22:E24, B28:D28)`.

## Tests

The `Tests` sheet reports 59 passed and 0 failed. The triangle block includes:

| Case | Result |
| --- | --- |
| Centroid of a triangle in the xy plane | Average of the three nodal values |
| Edge midpoint and node 3 | Edge average, and the nodal value |
| Tilted triangle centroid | The in-plane interpolation |
| Centroid weights | \(w_1\), \(w_2\), and \(w_3\) |
| Outside the edges, off the plane, or collapsed | `#N/A` |

## Related functions

- [[SHELL_QUAD]] — the same scalar on a quad.
- [[Shell.FindElements]] — element ids whose shell contains a point.
