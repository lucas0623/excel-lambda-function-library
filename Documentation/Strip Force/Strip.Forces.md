---
description: "Returns one row per station, with columns s, x, y, z, weff, P, V2, V3, T, M2, and M3."
created: 2026-11-04
tags:
  - strip-force
example: "[[Shell strip force.xlsx]]"
---

## Overview

Returns one row per station, with columns s, x, y, z, weff, P, V2, V3, T, M2, and M3.

Example file: [[Shell strip force.xlsx]]

The strip runs from `point0` to `point1`. `width` is the full width, measured in the shell plane and perpendicular to the centerline. `conn` and `nodeXYZ` are the shell mesh. `nodeFM` is nodeId, Fxx, Fyy, Fzz, Mxx, Myy, Mzz, in global force per length. `nStat` defaults to 11 and `nWidth` defaults to 9. Both must be at least 2. `tol` is optional.

## Syntax

```
=Strip.Forces(point0, point1, width, conn, nodeXYZ, nodeFM, [nStat], [nWidth], [tol])
```

The Strip.Forces function has the following arguments:

| Argument | Description |
| --- | --- |
| `point0`, `point1` | Required. Centerline ends, as x, y, z. |
| `width` | Required. Full strip width. A negative width returns `#N/A`. |
| `conn` | Required. elemId, n1, n2, n3, optional n4. Blank or 0 in n4 means a triangle. |
| `nodeXYZ` | Required. nodeId, x, y, z. |
| `nodeFM` | Required. nodeId, then Fxx, Fyy, Fzz, Mxx, Myy, Mzz. |
| `nStat` | Optional. Number of stations. Default 11. Minimum 2. |
| `nWidth` | Optional. Samples across the width. Default 9. Minimum 2. |
| `tol` | Optional. Surface tolerance passed through to the shell search. |

## Remarks

- \(s\) is the distance from `point0`. The frame is \(t\) along the strip, \(e_2=\mathrm{unit}(n\times t)\) in the shell plane, and \(e_3=t\times e_2\). \(e_2\) is flipped when it would reverse the previous station.
- \(P\), \(V_2\), and \(V_3\) are the integrated force on \(t\), \(e_2\), and \(e_3\). \(T\), \(M_2\), and \(M_3\) are the integrated moment on those same axes. `weff` is the width of the strip that hits the mesh.
- A station whose centerline misses the mesh returns `weff` 0 and zero forces.
- A zero-length strip, a negative width, or `nStat` or `nWidth` below 2 returns `#N/A`.
- The library formula returns the data rows only. The defined name in [[Shell strip force.xlsx]] still stacks a header row above those columns. Test G7 passed against that workbook copy. This note is not marked AI Reviewed, because the tested formula and the library formula are not the same function.

## Example

The sample is on the `Example` sheet of [[Shell strip force.xlsx]]. Blue cells are inputs. The slab runs from \(x=0\) to \(4\) and \(y=0\) to \(2\), in the plane \(z=0\). Every node has Fxx = 10. The centerline goes from \((0.5,1,0)\) to \((3.5,1,0)\).

![[Strip.Forces-20261104235700.jpeg]]

With `nStat` 3, `nWidth` 5, and width 1, the workbook returns:

| s | x | y | z | weff | P | V2 | V3 | T | M2 | M3 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 0.5 | 1 | 0 | 1 | 10 | 0 | 0 | 0.0625 | 0.125 | 0 |
| 1.5 | 2 | 1 | 0 | 1 | 10 | 0 | 0 | 0.25 | 0.5 | 0 |
| 3 | 3.5 | 1 | 0 | 1 | 10 | 0 | 0 | 0.4375 | 0.875 | 0 |

Width 4 overhangs the slab, so `weff` is 2 and \(P\) is 20. The same three stations then have \(T\) of 0.125, 0.5, and 0.875, and \(M_2\) of 0.25, 1, and 1.75. A zero-length strip shows `#N/A`.

Formula: `=Strip.Forces(HSTACK(B19,C19,D19), HSTACK(B20,C20,D20), E19, F6:J6, A6:D9, A13:G16, 3, 5)`.

## Tests

The `Tests` sheet reports 22 passed and 0 failed for the workbook copy. The public cases are:

| Case | Result |
| --- | --- |
| \(P\) at the mid station of the covered strip | 10 |
| Covered `weff` | 1 |
| Overhang `weff` | 2 |
| \(V_2\) from Fyy | The transverse force |
| Zero-length strip | `#N/A` |
| Omitted `nStat` | The default station count is 11 |
| Header row | Present in the workbook copy only |

## Related functions

- [[Shell.FindElements]] — the element search used at each sample point.
- [[SHELL_TRI]] and [[SHELL_QUAD]] — scalar interpolation on one element. `Strip.Forces` interpolates the six force components with the same weights.
