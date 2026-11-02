# Review result

Excel is the pass/fail oracle. OfficeCLI builds the workbook and the figures. The `lfm` MCP server writes the library and imports names into the workbook.

## AdjustPolarAngle

- Date: 2026-11-03
- Note: [[AdjustPolarAngle]]
- Example file: [[Angle Functions.xlsx]]
- Library: updated
- Excel: 16 passed, 0 failed

The name stays. The function wraps degrees into [0, 360). The previous `INT` form matches `MOD` for negative angles as well, so the formula is now `=LAMBDA(deg,MOD(deg,360))`. `360` and `-360` return 0. `-10` returns 350. A blank cell is 0. Text returns `#VALUE!`.

## AngleBetween3Points

- Date: 2026-11-03
- Note: [[AngleBetween3Points]]
- Example file: [[Angle Functions.xlsx]]
- Library: updated. `children` and `allChildren` are `Dist`.
- Excel: 16 passed, 0 failed

The name stays. The vertex is the middle point, J. The result is the interior angle from 0 to 180, not a signed direction. The previous formula stored `(xi, yi, xj, yj)` as a four-value array and never called `Dist`, so it did not return that angle. It now calls `Dist` and the law of cosines. The cosine is clamped to [-1, 1]. A zero-length side at J returns `#DIV/0!`. Collinear points return 0 or 180.

Checked results include 90, 180, 0, 60, 135, and 53.130102 for the 3-4-5 triangle at J.

## Batch

[[Angle Functions.xlsx]] sheets `example` and `test`: 32 passed, 0 failed.

## Dist

- Date: 2026-11-03
- Note: [[Dist]]
- Example file: [[Geometry Family.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. Distance from (0, 0) to (3, 4) is 5. The same point twice returns 0. Text returns `#VALUE!`.

## PolarToXYCoor

- Date: 2026-11-03
- Note: [[PolarToXYCoor]]
- Example file: [[Geometry Family.xlsx]]
- Library: comment updated. Formula unchanged, so an angle array still converts element by element for [[CoorCircularArc]].
- Excel: 4 passed, 0 failed

The name stays. Radius 1 at 90° returns (0, 1). Radius 1 at 180° returns (−1, 0). Text returns `#VALUE!`.

## AngleBetweenLineAndX

- Date: 2026-11-03
- Note: [[AngleBetweenLineAndX]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated
- Excel: 6 passed, 0 failed

The name stays. This is the undirected slope angle from −90 to 90. (0, 0) to (1, 1) is 45. (0, 0) to (1, −1) is −45. A vertical line is 90 in either direction. A zero-length segment used to return 90 through `IFERROR`. It now returns `#DIV/0!`.

## SolveTriangle

- Date: 2026-11-03
- Note: [[SolveTriangle]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated
- Excel: 6 passed, 0 failed

The name stays. The function is SAS only: sides a and b and included angle C. Side c was already the law of cosines. Angles A and B used `ASIN`, which cannot return an obtuse angle. They now use `ACOS`. For a = 5, b = 1, and C = 20°, angle A is about 155.19°. An unknown output name still returns `Cannot Identify '<output>' output.` A zero side on a requested angle returns `#DIV/0!`.

## OffsetPoint

- Date: 2026-11-03
- Note: [[OffsetPoint]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated. `children` is `Dist`.
- Excel: 4 passed, 0 failed

The name stays. Positive `oLen` is left of directed segment I→J. From (0, 0) toward (1, 0), `rLen` 0.5 and `oLen` 1 returns (0.5, 1). Left of an upward segment is the negative x direction. The previous `ATAN` offset changed side with the direction of the segment. A zero-length segment returns `#DIV/0!`.

## OffsetLine

- Date: 2026-11-03
- Note: [[OffsetLine]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated. `children` are `OffsetPoint` and `Dist`.
- Excel: 3 passed, 0 failed

The name stays. The result is the parallel segment `(x1, y1, x2, y2)`, not a single point. (0, 0)→(2, 0) with `oLen` 1 returns (0, 1, 2, 1). `oLen` 0 returns the original segment. A zero-length segment returns `#DIV/0!`. Excel rejects a defined name that stores the two `OffsetPoint` rows in `LET` and then `HSTACK`s them, so the formula calls `HSTACK` on the two calls directly.

## RotatePoint

- Date: 2026-11-03
- Note: [[RotatePoint]]
- Example file: [[Geometry Family.xlsx]]
- Library: comment corrected. The rotation matrix is unchanged.
- Excel: 5 passed, 0 failed

The name stays. The old comment described six arguments and an `"x"` or `"y"` flag. The signature is a 1×2 point, degrees, and a center. (1, 0) rotated 90° about the origin returns (0, 1). −90° returns (0, −1). (2, 0) rotated 180° about (1, 0) returns (0, 0). [[RotateShape]] still passes a 1×2 point.

## RotateCoor

- Date: 2026-11-03
- Note: [[RotateCoor]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated
- Excel: 3 passed, 0 failed

The name stays. Positive degrees were clockwise, the opposite of RotatePoint. They are now counterclockwise. (1, 0) and (0, 1) rotated 90° about the origin return (0, 1) and (−1, 0). A one-column array returns `#REF!`. [[PointObjToBoltEleForPlot]] calls this when its degree is not 0, so a positive degree on that plot turns the other way. That caller was not part of this review.

## TranslateCoor

- Date: 2026-11-03
- Note: [[TranslateCoor]]
- Example file: [[Geometry Family.xlsx]]
- Library: comment added. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. (0, 0) and (1, 2) shifted by (3, −1) return (3, −1) and (4, 1). A zero shift returns the same points. An array with fewer than two columns returns `#VALUE!`.

## FindNearestPoint

- Date: 2026-11-03
- Note: [[FindNearestPoint]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated. `children` is `Dist`.
- Excel: 4 passed, 0 failed

The name stays. Query (1, 0) among A(0, 0), B(0, 2), and C(5, 0) returns A. A query on C returns C. A tie returns the first name. Unequal column lengths return `#N/A`. The comment already promised `#N/A` for an empty or mismatched list, and the formula did not. `TAKE(range, 0)` is `#CALC!` before the function runs, so that input was not scored. The `ROWS = 0` branch still returns `#N/A`.

## DistToNearestPoint

- Date: 2026-11-03
- Note: [[DistToNearestPoint]]
- Example file: [[Geometry Family.xlsx]]
- Library: updated. `children` is `Dist`.
- Excel: 3 passed, 0 failed

The name stays. The formula called Dist through `'Soil Spring input.xlsx'!` and dropped every distance of 0, so a point on the query was not the nearest. Query (0, 0) with a listed point (3, 4) returns 5. A query sitting on a listed point returns 0. Unequal lengths return `#N/A`. `TAKE(range, 0)` is `#CALC!` before the function runs and was not scored.

## Batch

[[Geometry Family.xlsx]] sheets `example` and `test`: 44 passed, 0 failed. No function in this group was stopped.
