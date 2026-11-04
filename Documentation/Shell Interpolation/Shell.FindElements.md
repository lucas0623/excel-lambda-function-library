---
description: "Returns the element ids that contain a point, as one column."
created: 2026-11-04
tags:
  - shell-interpolation
example: "[[Shell interpolation.xlsx]]"
---

## Overview

Returns the element ids that contain a point, as one column.

Example file: [[Shell interpolation.xlsx]]

`point` is x, y, z. `conn` is one row per element: elemId, n1, n2, n3, and optional n4. Leave n4 blank or 0 for a triangle. `nodeXYZ` is one row per node: nodeId, x, y, z. `tol` is optional.

## Syntax

```
=Shell.FindElements(point, conn, nodeXYZ, [tol])
```

The Shell.FindElements function has the following arguments:

| Argument | Description |
| --- | --- |
| `point` | Required. x, y, z. |
| `conn` | Required. Element connectivity, one row per element. |
| `nodeXYZ` | Required. Node table, one row per node. |
| `tol` | Optional. Surface tolerance. The default is \(10^{-6}\) times the longest edge of the element being tested. |

## Remarks

- An axis-aligned box test runs first. A point outside that box is not on the element.
- A triangle then uses the same on-plane and barycentric test as [[SHELL_TRI]]. A quad uses the same planar or bilinear test as [[SHELL_QUAD]].
- A point on a shared edge returns every matching element id.
- No hit returns `#N/A`.
- The stored library comment stops at "No hit". The miss value above is the `FILTER` empty result in the formula, and it matches the Guide sheet.

## Example

The `Example` sheet of [[Shell interpolation.xlsx]] describes three cases: an ordinary hit returns element 101, a shared edge returns 101 and 102, and a miss shows Outside. The sheet starts the mesh table and does not show those result cells.

## Tests

The `Tests` sheet reports 59 passed and 0 failed for the workbook. Those rows cover the box test and the triangle and quad contains tests. They do not include a `Shell.FindElements` row, so this note is not marked AI Reviewed.

## Related functions

- [[SHELL_TRI]] — scalar interpolation on one triangle.
- [[SHELL_QUAD]] — scalar interpolation on one quad.
