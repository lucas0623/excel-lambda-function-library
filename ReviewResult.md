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

## Section tables

Comment review only, on 2026-11-03. Excel was not run. All 25 formulas were left unchanged. No function stopped. Notes are in `Documentation/Section Tables`.

Four previous range notes did not match the stored rows. The comments now follow the formula: `Table.RHS1` is 50x25x2.5 through 100x60x8, `Table.RHS3` is 250x150x5 through 500x300x20, `Table.UKB2` is 533x312x272 through 406x140x39, and `Table.UKBP` is 356x368x174 through 203x203x45. `Table.BoltDimension.BS4190` no longer cites proof-load tables that are not in the array.

- [[Table.BoltDimension.BS4190]] — comment updated. 24 by 6.
- [[Table.BoltGrade]] — comment updated. 15 by 7.
- [[Table.ChineseCH.GBC]] — comment updated. 44 by 21.
- [[Table.ChineseCH.YBC]] — comment updated. 25 by 21.
- [[Table.CHS1]] — comment updated. 86 by 10.
- [[Table.CHS2]] — comment updated. 103 by 10.
- [[Table.CHS3]] — comment updated. 97 by 10.
- [[Table.EA1]] — comment updated. 27 by 21. Stored order 250x250x35 through 100x100x8.
- [[Table.EA2]] — comment updated. 45 by 21. Stored order 90x90x12 through 20x20x3.
- [[Table.HM]] — comment updated. 17 by 21.
- [[Table.HN]] — comment updated. 51 by 21.
- [[Table.HW]] — comment updated. 32 by 21.
- [[Table.RHS1]] — comment updated. 59 by 18.
- [[Table.RHS2]] — comment updated. 62 by 18.
- [[Table.RHS3]] — comment updated. Range corrected.
- [[Table.RSC]] — comment updated. 432x102x65 through 76x38x7.
- [[Table.SHS1]] — comment updated. 63 by 18.
- [[Table.SHS2]] — comment updated. 50 by 18.
- [[Table.SHS3]] — comment updated. 43 by 18.
- [[Table.UKB1]] — comment updated. 356x171x67 through 127x76x13.
- [[Table.UKB2]] — comment updated. Range corrected.
- [[Table.UKB3]] — comment updated. 1016x305x487 through 610x178x82.
- [[Table.UKBP]] — comment updated. Range corrected.
- [[Table.UKC]] — comment updated. 356x406x634 through 152x152x23.
- [[Table.UKPFC]] — comment updated. 430x100x64 through 100x50x10.

## SAP2000 `.s2k`

Comment review only, on 2026-11-03. Excel was not run. Fifteen formulas were left unchanged.

### Stopped

`s2k_ProgramControl` — rounds 0. The JSON file is empty, so no formula or comment was written. The review can continue when the Program Control table contents are known.

- [[s2k_jtCoor]] — `name`, `x`, `y`, `z` for `JOINT COORDINATES`.
- [[s2k_jtCoorHeader]] — returns `Table: "JOINT COORDINATES"`.
- [[s2k_jtLoad]] — joint force and moment fields for `JOINT LOADS - FORCE`.
- [[s2k_jtLoadHeader]] — returns `Table: "JOINT LOADS - FORCE"`.
- [[s2k_loadPat]] — `name`, optional self-weight multiplier, optional design type for `LOAD PATTERN DEFINITIONS`.
- [[s2k_loadPatHeader]] — returns `Table: "LOAD PATTERN DEFINITIONS"`.
- [[s2k_loadCaseDef]] — one linear-static case name for `LOAD CASE DEFINITIONS`.
- [[s2k_loadCaseDefHeader]] — returns `Table: "LOAD CASE DEFINITIONS"`.
- [[s2k_staticLoadCase]] — assigns that case to the same-named load pattern at scale 1.
- [[s2k_staticLoadCaseHeader]] — returns `Table: "CASE - STATIC 1 - LOAD ASSIGNMENTS"`.
- [[s2k_loadCombHeader]] — returns `Table: "COMBINATION DEFINITIONS"`.
- [[s2k_createLoadComb]] — combo name and type.
- [[s2k_addLoadCaseToLoadComb]] — combo name, case name, and scale factor.
- [[s2k_FrameDistributedLoad]] — one distributed-load line per frame. `GLOBAL` is written only when `isGlobalCoor` is omitted; any supplied value writes `LOCAL`.
- [[s2k_FrameDistributedLoadHeader]] — returns `Table: "FRAME LOADS - DISTRIBUTED"`.

## InterpolateXY

- Date: 2026-11-03
- Note: [[InterpolateXY]]
- Example file: [[Interpolation.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 6 passed, 0 failed

The name stays. y on the line through (0, 0) and (10, 100) at x = 2.5 is 25. The endpoints return 0 and 100. x = 15 extends the same line to 150. Equal x returns `#DIV/0!`. Text returns `#VALUE!`.

## InterpolateXY2

- Date: 2026-11-03
- Note: [[InterpolateXY2]]
- Example file: [[Interpolation.xlsx]]
- Library: updated. `children` is `Dist`.
- Excel: 7 passed, 0 failed

The name stays. The result is the point at distance `rLen` from I toward J. The length is `Dist`. From (0, 0) toward (3, 4), `rLen` 2.5 returns (1.5, 2). Coincident points return `#DIV/0!`.

## InterpolateXYTable

- Date: 2026-11-03
- Note: [[InterpolateXYTable]]
- Example file: [[Interpolation.xlsx]]
- Library: updated. A repeated x uses the last of those rows.
- Excel: 11 passed, 0 failed

The name stays. On {0; 10} and {0; 100}, 2.5 returns 25. The middle of {0; 10; 20} and {0; 100; 50} at 15 returns 75. Equal x returns `#DIV/0!`.

## CreateStepRange

- Date: 2026-11-03
- Note: [[CreateStepRange]]
- Example file: [[Interpolation.xlsx]]
- Library: updated. `count` is how many values, including both ends.
- Excel: 7 passed, 0 failed

The name stays. The third argument is not the gap. Five values from 0 through 10 are 0, 2.5, 5, 7.5, 10. A count below 2 returns `#DIV/0!`. Omitting the count needs the trailing comma: `=CreateStepRange(1,4,)`.

## Batch

[[Interpolation.xlsx]] sheets `example` and `test`: 31 passed, 0 failed. No function in this group was stopped.

## IsPointOnPolyEdge

- Date: 2026-11-03
- Note: [[IsPointOnPolyEdge]]
- Example file: [[Point in Polygon.xlsx]]
- Library: updated. The recursive call is `{ref}IsPointOnPolyEdge(`. `children` stays `isPointOnLine`.
- Excel: 4 passed, 0 failed

The name stays. On the square (0, 0), (4, 0), (4, 4), (0, 4), the point (0, 2) and the vertex (4, 4) are on the boundary. (2, 2) is not. A one-column vertex list returns `#REF!`.

## IsPointInPoly

- Date: 2026-11-03
- Note: [[IsPointInPoly]]
- Example file: [[Point in Polygon.xlsx]]
- Library: updated. `children` stays `IsPointOnPolyEdge`.
- Excel: 6 passed, 0 failed

The name stays. (2, 2) is inside that square and (5, 2) is outside. The boundary is included when `isEdgeInclusive` is omitted or TRUE. The previous formula turned every supplied argument into FALSE, so an explicit TRUE rejected the edge.

## IsAllPointsInPoly

- Date: 2026-11-03
- Note: [[IsAllPointsInPoly]]
- Example file: [[Point in Polygon.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. (2, 2) and (1, 1) are inside. Adding (5, 2) returns FALSE. A one-column point list returns `#REF!`.

## IsAnyPointInPoly

- Date: 2026-11-03
- Note: [[IsAnyPointInPoly]]
- Example file: [[Point in Polygon.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. (5, 2) together with (2, 2) returns TRUE. (5, 2) and (6, 2) return FALSE. A one-column point list returns `#REF!`.

## IsAnyEdgeIntersect

- Date: 2026-11-03
- Note: [[IsAnyEdgeIntersect]]
- Example file: [[Point in Polygon.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. Overlapping squares return TRUE. An inner square that does not touch the boundary returns FALSE. Squares that meet only at a corner return TRUE. A one-column vertex list returns `#REF!`.

## IsPolyAndLineIntersect

- Date: 2026-11-03
- Note: [[IsPolyAndLineIntersect]]
- Example file: [[Point in Polygon.xlsx]]
- Library: updated. `children` are `isPointOnLine` and `PolyAndLineIntersection`.
- Excel: 5 passed, 0 failed

The name stays. A segment that lies on an edge is a hit. That case used to return FALSE, because `TwoLinesIntersection` returns `#N/A` for a collinear pair. Those line functions were not edited.

## IsPolysIntersect

- Date: 2026-11-03
- Note: [[IsPolysIntersect]]
- Example file: [[Point in Polygon.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. Overlapping squares return TRUE. One square inside the other returns TRUE even when the edges do not meet. Separate squares return FALSE.

## isPolyAInPolyB

- Date: 2026-11-03
- Note: [[isPolyAInPolyB]]
- Example file: [[Point in Polygon.xlsx]]
- Library: updated. `children` is `IsAllPointsInPoly`. It no longer calls `IsAnyEdgeIntersect`.
- Excel: 5 passed, 0 failed

The name stays. A is inside B when every vertex of A and the midpoint of every edge of A lies inside or on B. Equal polygons and a triangle that only touches the boundary are TRUE. The previous formula required no edge intersection, so both of those were FALSE.

## isClockwise

- Date: 2026-11-03
- Note: [[isClockwise]]
- Example file: [[Point in Polygon.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. The square (0, 0), (0, 4), (4, 4), (4, 0) is clockwise. The opposite order returns FALSE. Collinear points return FALSE.

## Batch

[[Point in Polygon.xlsx]] sheets `example` and `test`: 40 passed, 0 failed. No function in this group was stopped.

## ForLoop

- Date: 2026-11-03
- Note: [[ForLoop]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 4 passed, 0 failed

The name stays. `step` defaults to 1. A step of 0 returns `#DIV/0!`. A step that does not move toward `end` used to recurse without a bound. It now returns `#NUM!`. 1 through 3 returns 1, 2, 3. 1 through 5 with step 2 returns 1, 3, 5.

## WhileLoop

- Date: 2026-11-03
- Note: [[WhileLoop]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated. The self-call is `{ref}WhileLoop(`. `children` stays empty.
- Excel: 3 passed, 0 failed

The name stays. The loop stops when `conditionFunc` is TRUE. Counting from 1 with `x >= 3` returns 3. A value that is already TRUE is returned unchanged. A next step of `1/0` returns `#DIV/0!`.

## ForEachRow

- Date: 2026-11-03
- Note: [[ForEachRow]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. The restored formula is unchanged.
- Excel: 4 passed, 0 failed

The name stays. `func` is `LAMBDA(row)` and may return several cells. Sums of `{1,2;3,4}` are 3 and 7. An error in `arr` is returned.

## ForEachColumn

- Date: 2026-11-03
- Note: [[ForEachColumn]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. The restored formula is unchanged. The comment names `BYCOL`.
- Excel: 4 passed, 0 failed

The name stays. Sums of the two columns of `{1,2;3,4}` are 4 and 6. An error in `arr` is returned.

## TextToArray

- Date: 2026-11-03
- Note: [[TextToArray]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. Strict `ARRAYTOTEXT` of `{1,2;3,4}` returns that array. Strict text of 5 returns 5. A string shorter than 2 characters returns `#VALUE!`.

## MultipleTextToArray

- Date: 2026-11-03
- Note: [[MultipleTextToArray]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated. `children` is `TextToArray`.
- Excel: 4 passed, 0 failed

The name stays. A supplied FALSE used to be treated as TRUE, and the seed row was always two columns wide. FALSE now stays FALSE, and the seed width follows the block. Two blocks return 1, 2, 3, 4, then a row of `#N/A`, then 5, 6, 7, 8. A string shorter than 2 characters returns `#VALUE!`.

## VRepeatArray

- Date: 2026-11-03
- Note: [[VRepeatArray]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. `{1;2;3}` twice is 1, 2, 3, 1, 2, 3. One repeat returns the array. Zero repeats returns `#CALC!`.

## Reverse

- Date: 2026-11-03
- Note: [[Reverse]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 3 passed, 0 failed

The name stays. `{1,2,3}` returns 3, 2, 1 as one column. One value is unchanged. An error value returns that error.

## RemoveRow

- Date: 2026-11-03
- Note: [[RemoveRow]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 4 passed, 0 failed

The name stays. `row` is 1-based. Row 2 of `{1,2;3,4;5,6}` leaves 1, 2 and 5, 6. A row outside 1 through `ROWS(arr)`, or a non-integer, returns `#VALUE!`. Removing the only row returns `#CALC!`.

## Except

- Date: 2026-11-03
- Note: [[Except]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged. The message text stays `All Items in list1 exists in list2`.
- Excel: 3 passed, 0 failed

The name stays. `{1;2;3}` except `{2;4}` returns 1 and 3. Match is exact and case-insensitive. An error in `list1` is returned.

## FillEmpty

- Date: 2026-11-03
- Note: [[FillEmpty]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. A, blanks, B, blanks becomes A, A, A, B, B, B. A leading blank stays empty. A space is blank. An error is returned unchanged.

## Inner

- Date: 2026-11-03
- Note: [[Inner]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. `{1;2;3}` against `{3;2;9}` returns 2 and 3, in `list1` order. No shared value returns `#CALC!`.

## InnerMerge

- Date: 2026-11-03
- Note: [[InnerMerge]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated. `children` is `Inner`.
- Excel: 4 passed, 0 failed

The name stays. The right-hand side used the left key column when that key was column 1, and the header width used the right data body. Both now use the right table. Columns are the key, the other left columns, then the other right columns. A missing header returns `#N/A`. No shared key returns `#CALC!`.

## NumberToLetter

- Date: 2026-11-03
- Note: [[NumberToLetter]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 7 passed, 0 failed

The name stays. 1 is A, 26 is Z, 27 is AA, and 16384 is XFD. Text used to fall through to `Exceeds limit`. Text now returns `#VALUE!`. 0 returns `INVALID INPUT`. 18279 returns `Exceeds limit`.

## MaxChar

- Date: 2026-11-03
- Note: [[MaxChar]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 4 passed, 0 failed

The name stays. The character is `UNICHAR` of the largest `UNICODE` code, so codes above 255 are kept. a, b, c returns c. A and 你 returns 你. Empty text returns `#VALUE!`.

## MinChar

- Date: 2026-11-03
- Note: [[MinChar]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 4 passed, 0 failed

The name stays. The character is `UNICHAR` of the smallest `UNICODE` code. b, a, c returns a. A and 你 returns A. Empty text returns `#VALUE!`.

## ReplaceErrInRange

- Date: 2026-11-03
- Note: [[ReplaceErrInRange]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 4 passed, 0 failed

The name stays. `IF(ISERROR(a), fill, a)` still returned `#N/A` from `MAP`. `IFERROR` replaces each error. `{1,#N/A,3}` filled with x returns 1, x, 3. The default fill leaves a blank. Omitting `arr` returns `#VALUE!`. `HSTACK` of `NA()` is a single `#N/A` before this function runs, so the test builds the error array with `IF`.

`GetMHInfoFromPipeSch` still calls this function with a workbook-file prefix. That file is outside this group and was not edited.

## ExpandToLastRow

- Date: 2026-11-03
- Note: [[ExpandToLastRow]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. The block ends at the blank in the first column. A fixed row count skips the scan. A blank first cell returns the error value, default empty. A cap that contains no blank also returns that error value.

## NextDiff

- Date: 2026-11-03
- Note: [[NextDiff]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 3 passed, 0 failed

The name stays. `DROP` of the only value used to return `#CALC!`, so one non-blank value was not a run. It now returns that value and row 1. A, blanks, B, blanks, A returns A at row 1, B at row 4, and A at row 7. All blanks return `#CALC!`.

## GetSheetName

- Date: 2026-11-03
- Note: [[GetSheetName]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. The sheet name is the text after `]` in `CELL("filename", refCell)`. A cell on `test` returns test. `example!A1` returns example. A value that is not a reference returns `#VALUE!`.

## GroupByAddress

- Date: 2026-11-03
- Note: [[GroupByAddress]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated. `children` are `ExpandToLastRow`, `NextDiff`, and `GetSheetName`.
- Excel: 3 passed, 0 failed

The name stays. A blank key arrives as 0 from [[ExpandToLastRow]], and that 0 is a blank. A numeric key of 0 is also blank. One group no longer drops its only boundary row. Two groups on `test` are K1 in rows 30–31 and K2 in rows 32–33. All-blank keys return `#CALC!`.

## GetTableRange

- Date: 2026-11-03
- Note: [[GetTableRange]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: comment updated. The returned range is unchanged.
- Excel: 3 passed, 0 failed

The name stays. The block ends at the blank in the first column. If `maxRows` contains no blank, that cap is returned: a cap of 2 on 1, 2, 3 returns 1 and 2. A blank first cell returns the error value, default empty. The note replaces the draft under Interpolation & Tables. There is one note, in Loop & Control Flow.

## SaveTableAsFormula

- Date: 2026-11-03
- Note: [[SaveTableAsFormula]]
- Example file: [[Loops Arrays Sheets.xlsx]]
- Library: formula and comment updated
- Excel: 5 passed, 0 failed

The name stays. `{1,2;3,4}` returns `=VSTACK(HSTACK(1,2),HSTACK(3,4))`. Numbers and logicals stay bare. Text is quoted, and a quote inside the text is doubled. An error in the array returns that error.

## Batch

[[Loops Arrays Sheets.xlsx]] sheets `example` and `test`: 86 passed, 0 failed. No function in this group was stopped.

## Prop

- Date: 2026-11-03
- Note: [[Prop]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 16 passed, 0 failed

Moments and moduli are about the centroid. The product of inertia keeps its sign, and its shoelace term is \(x y_{next}+2xy+2x_{next}y_{next}+x_{next}y\). A 4 by 2 rectangle has area 8, \(I_{xx}=8/3\), \(I_{yy}=32/3\), \(I_{xy}=0\), \(Z_{xx}=8/3\), \(Z_{yy}=16/3\). The same rectangle with a corner at the origin has centroid (2, 1) and the same centroidal moments. A right triangle (0, 0), (3, 0), (0, 3) has area 4.5 and \(I_{xy}=-9/8\). A zero-area polygon returns `#DIV/0!`. Fewer than two columns returns `#VALUE!`.

## Prop_Area

- Date: 2026-11-03
- Note: [[Prop_Area]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Area formula unchanged.
- Excel: 4 passed, 0 failed

Positive shoelace area. A 4 by 2 rectangle is 8 clockwise and counterclockwise. Text and a one-column array return `#VALUE!`.

## Prop_Cx

- Date: 2026-11-03
- Note: [[Prop_Cx]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Centroid formula unchanged.
- Excel: 3 passed, 0 failed

A rectangle from x = 0 to x = 4 has \(C_x=2\). A centered rectangle has \(C_x=0\). Zero area returns `#DIV/0!`.

## Prop_Cy

- Date: 2026-11-03
- Note: [[Prop_Cy]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Centroid formula unchanged.
- Excel: 3 passed, 0 failed

A rectangle from y = 0 to y = 2 has \(C_y=1\). A centered rectangle has \(C_y=0\). Zero area returns `#DIV/0!`.

## Prop_Centroid

- Date: 2026-11-03
- Note: [[Prop_Centroid]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

Returns one row `(Cx, Cy)`. The shifted 4 by 2 rectangle is (2, 1). The centered rectangle is (0, 0). Zero area returns `#DIV/0!`.

## Prop_PlasticCentroidCpx

- Date: 2026-11-03
- Note: [[Prop_PlasticCentroidCpx]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 3 passed, 0 failed

Vertical equal-area axis. Argument order is vertices, total area, then `maxX, minX, maxY, minY`. A zero total area now returns `#DIV/0!` before the polygon split. The trapezoid (0, 0), (6, 0), (4, 2), (1, 2) has area 9 and axis \(x=2.75\). A centered rectangle returns 0.

## Prop_PlasticCentroidCpy

- Date: 2026-11-03
- Note: [[Prop_PlasticCentroidCpy]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 3 passed, 0 failed

Horizontal equal-area axis, same argument order as `Prop_PlasticCentroidCpx`. A rectangle of height 2 returns the mid-height, y = 1. A T whose flange is half the area returns −2. A zero total area returns `#DIV/0!`.

## Properties

- Date: 2026-11-03
- Note: [[Properties]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 27 passed, 0 failed

Centroidal \(I_{xx}\), \(I_{yy}\), and signed \(I_{xy}\). \(I_{uu}\) is the major principal moment and the angle is that axis from the x-axis. \(r_u\) and \(r_v\) use the major and minor moments. \(Z\) is the smaller elastic modulus. \(S_{xx}\) and \(S_{yy}\) are the plastic moduli about the equal-area axes. For the 4 by 2 rectangle, \(S_{xx}=4\), \(S_{yy}=8\), and the major principal angle is 90°. Labels say product of inertia, elastic modulus about the y-axis, radius about the y-axis, and principal. Zero area returns `#DIV/0!`. One column returns `#VALUE!`.

## RotateShape

- Date: 2026-11-03
- Note: [[RotateShape]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged. `RotatePoint` was not changed.
- Excel: 5 passed, 0 failed

Counterclockwise. (1, 0) about the origin by 90° is (0, 1). −90° is (0, −1). 0° leaves the point. A square rotated 180° about its centroid goes to the opposite corner. An omitted center on a zero-area shape returns `#DIV/0!`. A one-column row returns `#REF!`.

## CoorRect

- Date: 2026-11-03
- Note: [[CoorRect]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 5 passed, 0 failed

Argument order is height, then width. Centered on the origin, counterclockwise from the bottom-left. Height 2 and width 4 is (−2, −1), (2, −1), (2, 1), (−2, 1). An explicit FALSE used to be treated as TRUE; the flag now passes through. FALSE is 4 rows, TRUE is 5. Height 0 collapses onto y = 0. Text returns `#VALUE!`.

## CoorT

- Date: 2026-11-03
- Note: [[CoorT]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 3 passed, 0 failed

Flange top on y = 0, stem down to y = −h, counterclockwise from the top-left. The repeat flag passes through. Text returns `#VALUE!`.

## CoorI

- Date: 2026-11-03
- Note: [[CoorI]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 3 passed, 0 failed

I section centered on the origin, clockwise from the top-left. A duplicated vertex was removed, so the outline is 12 unique corners. Height 10, flange width 8, flange thickness 1, web thickness 2 starts at (−4, 5). FALSE is 12 rows. Text returns `#VALUE!`.

## CoorPFC

- Date: 2026-11-03
- Note: [[CoorPFC]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 3 passed, 0 failed

Parallel flange channel. The web is on x = 0 and the flanges run to x = b, centered on y = 0. The comment no longer calls it an I section. The repeat flag passes through. Text returns `#VALUE!`.

## CoorCircle

- Date: 2026-11-03
- Note: [[CoorCircle]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

Point k is at \(k \times 360/n\) degrees, k = 1 to n, counterclockwise from the positive x-axis. The last point is on the positive x-axis. A unit circle with n = 4 ends at (1, 0). Zero radius puts every point at the center. Text returns `#VALUE!`.

## CoorCircularArc

- Date: 2026-11-03
- Note: [[CoorCircularArc]]
- Example file: [[Section Properties.xlsx]]
- Library: updated. `PolarToXYCoor` was not changed.
- Excel: 5 passed, 0 failed

Includes both ends. A quarter circle from 0° to 90° with n = 2 is (1, 0) and (0, 1). The middle of three points is at 45°. If the end is below the start, 360° is added so the sweep stays counterclockwise. n below 2 returns `#DIV/0!`. The numeric columns are no longer wrapped in `VALUE`.

## CoorHexagon

- Date: 2026-11-03
- Note: [[CoorHexagon]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

`circumDiameter` is the vertex-to-vertex diameter. The first vertex is at angle 0, then every 60°, so the hexagon is flat on the top and bottom. Diameter 2 starts at (1, 0); the next y is \(\sqrt{3}/2\). Zero diameter puts every vertex at the center. Text returns `#VALUE!`.

## CoorOfCircle

- Date: 2026-11-03
- Note: [[CoorOfCircle]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. The polyline matches `CoorCircle`: last point on the positive x-axis, first point not repeated. A unit circle with n = 4 ends at (1, 0). Zero radius is the center. Text returns `#VALUE!`.

## CoorNut

- Date: 2026-11-03
- Note: [[CoorNut]]
- Example file: [[Section Properties.xlsx]]
- Library: updated
- Excel: 6 passed, 0 failed

Side elevation, clockwise from the upper-left of the top flat. Each corner is chamfered by width/8 at 30°. Width 16 and thickness 8 starts at (−6, 4). The chamfer y is \(4-2\tan 30^\circ\). An omitted flag is FALSE (8 rows); TRUE is 9 rows. Text returns `#VALUE!`.

## CoorBoltEle

- Date: 2026-11-03
- Note: [[CoorBoltEle]]
- Example file: [[Section Properties.xlsx]]
- Library: updated. `TranslateCoor` was not changed.
- Excel: 7 passed, 0 failed

Shank height `Length`, width `Dia`, centered on the origin. Nut counts of 1 or 2 draw nuts against the ends; any other count draws none, leaving an `#N/A` separator. Diameter 2, length 10, one top nut of width 4 and thickness 1: shank first point (−1, −5), nut first point (−1.5, 5). Translating by (3, 4) makes the first x equal 2. Supplying x without y returns `#VALUE!`.

## CoorAngle

- Date: 2026-11-03
- Note: [[CoorAngle]]
- Example file: [[Section Properties.xlsx]]
- Library: updated. Name unchanged.
- Excel: 3 passed, 0 failed

Angle section, not an angle in degrees and not an I section. Heel at the origin, vertical leg on x = 0, outstanding leg along the top. h = 10, b = 8, tf = 2, tw = 1 starts at (0, 10). The repeat flag passes through. Text returns `#VALUE!`.

## DishChannelArea

- Date: 2026-11-03
- Note: [[DishChannelArea]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

Parabola through (0, 0), `(Width/2, -Height)`, and `(Width, 0)`. Positive width and height give \((2/3)\times Width\times Height\). Width 6 and height 3 return 12. Height 0 returns 0. Width 0 returns `#DIV/0!`. Text returns `#VALUE!`.

## DishChannelWetPerimeter

- Date: 2026-11-03
- Note: [[DishChannelWetPerimeter]]
- Example file: [[Section Properties.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

Arc length of the same parabola. The expected value is the worksheet antiderivative, not this LAMBDA. Width 6 and height 3 return 8.873657. Width 2 and height 2 match that antiderivative. Height 0 returns `#DIV/0!`. Text returns `#VALUE!`.

## Batch

[[Section Properties.xlsx]] sheets `example` and `test`: 120 passed, 0 failed. No function in this group was stopped. `CoorAngle` stays an angle section. `CoorOfCircle` stays the same polyline as `CoorCircle`.

## TwoLinesIntersection

- Date: 2026-11-03
- Note: [[TwoLinesIntersection]]
- Example file: [[Lines.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 5 passed, 0 failed

The name stays. The result is the point where segment I `(xi, yi)` to J `(xj, yj)` meets segment P `(xp, yp)` to Q `(xq, yq)`, including an endpoint. Parallel segments, collinear segments, and a crossing that misses either segment return `#N/A`. Text returns `#VALUE!`. `(0, 0)→(2, 2)` and `(0, 2)→(2, 0)` return `(1, 1)`.

## SegmentSlopeIntersection

- Date: 2026-11-03
- Note: [[SegmentSlopeIntersection]]
- Example file: [[Lines.xlsx]]
- Library: updated. Renamed from `TwoLinesIntersection2`.
- Excel: 6 passed, 0 failed

`TwoLinesIntersection2` → `SegmentSlopeIntersection`. The old name is an alias on the note. The "2" did not say that the second line is `y = mx + C`. A vertical line is `m = #N/A`, or an absolute slope greater than 1E15, and `C` is that line's x coordinate.

The old formula never reached its general intersection, and it treated an x coordinate of 0 as no hit. `(0, 0)→(2, 2)` and `y = -x + 2` return `(1, 1)`. A hit on `x = 0` returns `(0, 1)`. A vertical line `x = 1` returns `(1, 0)`. Parallel lines return `#N/A`. Text returns `#VALUE!`.

## IntersectionOfTwoLines

- Date: 2026-11-03
- Note: [[IntersectionOfTwoLines]]
- Example file: [[Lines.xlsx]]
- Library: updated
- Excel: 4 passed, 0 failed

The name stays. This is a segment against `y = mx + C` with a finite slope and exact arithmetic. It used to return the text `x,y` and `#DIV/0!` when the slopes matched. It now returns a 1×2 point, and parallel or collinear input returns `#N/A`. A vertical segment uses `x = xi`. `(0, 0)→(2, 2)` and `y = -x + 2` return `(1, 1)`. The vertical segment `(1, 0)→(1, 2)` and `y = 0` return `(1, 0)`. Text returns `#VALUE!`.

## isPointOnLine

- Date: 2026-11-03
- Note: [[isPointOnLine]]
- Example file: [[Lines.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 7 passed, 0 failed

The name stays. TRUE when `(x, y)` lies on segment I to J, including either endpoint. The tolerance is 1E-10. A point on the infinite line but past the segment is FALSE. `(2, 1)` on `(0, 0)→(4, 2)` is TRUE. `(6, 3)` is FALSE. `(2, 0)` is FALSE. Horizontal and vertical midpoints are TRUE. Text returns `#VALUE!`.

## IsTwoLinesIntersect

- Date: 2026-11-03
- Note: [[IsTwoLinesIntersect]]
- Example file: [[Lines.xlsx]]
- Library: updated. `children` is `TwoLinesIntersection`.
- Excel: 4 passed, 0 failed

The name stays. The previous formula used `ISERR`. `ISERR` does not see `#N/A`, so a miss was reported as TRUE. It now returns FALSE when [[TwoLinesIntersection]] returns `#N/A`, and it passes `#VALUE!` through. The crossing pair is TRUE. An endpoint touch is TRUE. Parallel segments are FALSE. Text returns `#VALUE!`.

## PolyAndLineIntersection

- Date: 2026-11-03
- Note: [[PolyAndLineIntersection]]
- Example file: [[Lines.xlsx]]
- Library: updated. `children` is `TwoLinesIntersection`.
- Excel: 5 passed, 0 failed

The name stays. `vertices` is an n×2 range in order, and the last vertex connects to the first. Hits are sorted by x, then by y. A hit exactly at the first vertex of an edge is omitted, so a shared vertex is returned once. The square `(0, 0), (2, 0), (2, 2), (0, 2)` and the segment `(-1, 1)→(3, 1)` return `(0, 1)` and `(2, 1)`. The segment through the corners returns `(0, 0)` and `(2, 2)`. A miss returns `#N/A`. One column returns `#REF!`. Text returns `#VALUE!`.

## PolySlopeIntersection

- Date: 2026-11-03
- Note: [[PolySlopeIntersection]]
- Example file: [[Lines.xlsx]]
- Library: updated. Renamed from `PolyAndLineIntersection2`. `children` is `SegmentSlopeIntersection`.
- Excel: 6 passed, 0 failed

`PolyAndLineIntersection2` → `PolySlopeIntersection`. The old name is an alias on the note. The "2" did not say that the line is `y = mx + C`. The previous formula treated an x coordinate of 0 as no intersection. [[CreateHatch]] now calls `PolySlopeIntersection`. That was the only library formula that called the old name. The same square and `y = 1` return `(0, 1)` and `(2, 1)`. `y = x` returns `(0, 0)` and `(2, 2)`. The vertical line `x = 1` returns `(1, 0)` and `(1, 2)`. A miss returns `#N/A`. One column returns `#REF!`. Text returns `#VALUE!`.

## IntersectionAreaAndLine

- Date: 2026-11-03
- Note: [[IntersectionAreaAndLine]]
- Example file: [[Lines.xlsx]]
- Library: updated. `children` is `PolySlopeIntersection`.
- Excel: 5 passed, 0 failed

The name stays. "Area" means the polygon region, and the result is the intersection points, not a numeric area. The previous formula mapped each edge through the text form of `IntersectionOfTwoLines`. It now calls [[PolySlopeIntersection]], so the points are numeric and a shared vertex is returned once. The square and `y = 1` return `(0, 1)` and `(2, 1)`. `y = x` returns `(0, 0)` and `(2, 2)`. A miss returns `#N/A`. One column returns `#REF!`. Text returns `#VALUE!`.

## Batch

[[Lines.xlsx]] sheets `example` and `test`: 42 passed, 0 failed. No function in this group was stopped. `TwoLinesIntersection2` → `SegmentSlopeIntersection`. `PolyAndLineIntersection2` → `PolySlopeIntersection`.

## InsertPolyAndLineIntersection

- Date: 2026-11-03
- Note: [[InsertPolyAndLineIntersection]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. Names are `x & "," & y`. Fewer than two columns returns `#REF!`. `children` stays `TwoLinesIntersection`.
- Excel: 5 passed, 0 failed

The name stays. On the square (0, 0), (4, 0), (4, 4), (0, 4), the segment (−1, 2) to (5, 2) inserts (4, 2) and (0, 2). The diagonal through the corners marks (0, 0) and (4, 4) and does not add a row. A segment that misses returns the four vertices with FALSE flags. A one-column list returns `#REF!`. Text returns `#VALUE!`.

## InsertPolysIntersection

- Date: 2026-11-03
- Note: [[InsertPolysIntersection]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. The unused `PolyAndLineIntersection` child is gone. `children` is `InsertPolyAndLineIntersection`.
- Excel: 3 passed, 0 failed

The name stays. Square A (0, 0), (2, 0), (2, 2), (0, 2) and square B (1, 1), (3, 1), (3, 3), (1, 3) insert (2, 1) and (1, 2) into A. A separate square leaves A unchanged. A one-column list returns `#REF!`.

## GetVerticesBetweenIntersections

- Date: 2026-11-03
- Note: [[GetVerticesBetweenIntersections]]
- Example file: [[Polygon Editing.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. Between the names `0,0` and `4,2` the only row is (4, 0). The walk from the last name `0,2` to `4,0` wraps and returns (0, 0). An unknown name returns `#N/A`.

## CleanUpContinuousIntersections

- Date: 2026-11-03
- Note: [[CleanUpContinuousIntersections]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. Fewer than three columns returns `#REF!`.
- Excel: 3 passed, 0 failed

The name stays. FALSE, TRUE, TRUE, TRUE, FALSE becomes FALSE, TRUE, FALSE, TRUE, FALSE. Two consecutive TRUE flags stay TRUE. Two columns used to return `#CALC!`. They now return `#REF!`.

## ReverseVerticesDirection

- Date: 2026-11-03
- Note: [[ReverseVerticesDirection]]
- Example file: [[Polygon Editing.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The name stays. (0, 0), (4, 0), (4, 4), (0, 4) reverses to (0, 4), (4, 4), (4, 0), (0, 0). One row is unchanged. Omitting the argument returns `#VALUE!`.

## SplitPolyIntoTwoPolys

- Date: 2026-11-03
- Note: [[SplitPolyIntoTwoPolys]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. Each piece is `(x, y)` only. The intersection flag and the name are dropped.
- Excel: 3 passed, 0 failed

The name stays. The cut `y = 2` returns `{4,2;4,4;0,4;0,2}` and `{0,0;4,0;4,2;0,2}`. The diagonal through the corners returns the two triangles `{0,0;4,0;4,4}` and `{0,0;4,4;0,4}`. A miss returns `#N/A`.

## SplitPolysIteration

- Date: 2026-11-03
- Note: [[SplitPolysIteration]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. The cut count is `ROWS(intersections) / 2`. The previous expression `ROWS(intersections / 2)` counted rows, not pairs.
- Excel: 3 passed, 0 failed

The name stays. The U (0, 0), (3, 0), (3, 3), (2, 3), (2, 1), (1, 1), (1, 3), (0, 3), cut by the pairs (0, 2)–(1, 2) and (2, 2)–(3, 2), returns the left cap, the right cap, and the base. One pair on the square matches [[SplitPolyIntoTwoPolys]]. A pair that cannot be read leaves the piece unchanged. Omitting `intersections` returns `#VALUE!`.

## SplitPolyByLine

- Date: 2026-11-03
- Note: [[SplitPolyByLine]]
- Example file: [[Polygon Editing.xlsx]]
- Library: comment updated. Formula unchanged. Two hits still call [[SplitPolyIntoTwoPolys]]. Four hits call the corrected [[SplitPolysIteration]].
- Excel: 3 passed, 0 failed

The name stays. The square cut by `y = 2` returns the same two rectangles. The U cut by `y = 2` returns the same three pieces, with [[PolyAndLineIntersection]] supplying the pairs in x order. A miss returns `#N/A`.

## CombineTwoPolygons

- Date: 2026-11-03
- Note: [[CombineTwoPolygons]]
- Example file: [[Polygon Editing.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 5 passed, 0 failed

The name stays. The squares (0, 0), (2, 0), (2, 2), (0, 2) and (1, 1), (3, 1), (3, 3), (1, 3) union to `{2,1;3,1;3,3;1,3;1,2;0,2;0,0;2,0}`. An inner square, clockwise or not, returns the outer square. Separate squares return two text rows. A one-column list returns `#REF!`.

## CombinePolygons

- Date: 2026-11-03
- Note: [[CombinePolygons]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. The recursive calls are `{ref}CombinePolygons(`.
- Excel: 3 passed, 0 failed

The name stays. The two overlapping squares become the same union string. Adding a square at x = 10 leaves that square on its own row. A one-character string returns `#VALUE!`.

## Loop_CombinePolygons

- Date: 2026-11-03
- Note: [[Loop_CombinePolygons]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. The recursive call is `{ref}Loop_CombinePolygons(`. `children` no longer lists `CombinePolygons`.
- Excel: 3 passed, 0 failed

The name stays. One overlapping polygon returns the union. When the first polygon misses and the second overlaps, the result is the union and then the polygon that missed. The string `"x"` returns `#VALUE!`.

## OverlappedPolygons

- Date: 2026-11-03
- Note: [[OverlappedPolygons]]
- Example file: [[Polygon Editing.xlsx]]
- Library: comment updated. The previous comment described the union. The formula still returns the overlap. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. The same overlapping squares overlap as `{2,1;2,2;1,2;1,1}`. An inner square is returned as itself. A clockwise inner square is reversed to `{2,1;2,2;1,2;1,1}`. Separate squares return `#N/A`.

## CreateHatch

- Date: 2026-11-03
- Note: [[CreateHatch]]
- Example file: [[Polygon Editing.xlsx]]
- Library: updated. A vertical angle passes `#N/A` as the slope to [[PolySlopeIntersection]]. `children` stays `PolySlopeIntersection`.
- Excel: 3 passed, 0 failed

The name stays. One horizontal line on the square (0, 0), (2, 0), (2, 2), (0, 2) is (0, 1), (2, 1), then `#N/A`. One vertical line is (1, 0), (1, 2), then `#N/A`. A one-column list returns `#REF!`.

## GridMesh

- Date: 2026-11-03
- Note: [[GridMesh]]
- Example file: [[Polygon Editing.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

The name stays. The square (0, 0), (4, 0), (4, 4), (0, 4) with spacing 4 is the one cell `{0,0;4,0;4,4;0,4}`. Custom lines x = 0, 2, 4 and y = 0, 4 return two rectangles. The triangle (0, 0), (4, 0), (2, 4) is clipped to `{0,0;4,0;2,4}`. Spacing 0 returns `#DIV/0!`.

## Batch

[[Polygon Editing.xlsx]] sheets `example` and `test`: 48 passed, 0 failed. No function in this group was stopped. No renames.

## CreateBoltCoor_4Bolts

- Date: 2026-11-03
- Note: [[CreateBoltCoor_4Bolts]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 7 passed, 0 failed

Four centers, top-left, top-right, bottom-left, bottom-right. Pitch 4 by 2 at center (10, 3) is (8, 4), (12, 4), (8, 2), (12, 2). An omitted center is the origin. Zero pitch sits on the center. Text returns `#VALUE!`.

## CreateBoltCoor_6Bolts_2x3

- Date: 2026-11-03
- Note: [[CreateBoltCoor_6Bolts_2x3]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 7 passed, 0 failed

Two columns and three rows, left to right from the top. Pitch 4 by 2 at the origin starts at (−2, 2). The middle row is y = 0. Bolt 6 is (2, −2). Center (1, 1) moves bolt 1 to y = 3. Text returns `#VALUE!`.

## CreateBoltCoor_6Bolts_3x2

- Date: 2026-11-03
- Note: [[CreateBoltCoor_6Bolts_3x2]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 6 passed, 0 failed

Three columns and two rows. Pitch 4 by 2 at the origin starts at (−4, 1). Bolt 3 is the top-right. Bolt 4 is the bottom-left. Center (10, 0) makes the first x 6. Text returns `#VALUE!`.

## CreateBoltCoor_8Bolts_3x3

- Date: 2026-11-03
- Note: [[CreateBoltCoor_8Bolts_3x3]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 9 passed, 0 failed

A 3 by 3 grid with the center omitted. Pitch 4 by 2 at the origin: bolt 4 is (−4, 0), bolt 5 is (4, 0), and the result has 8 rows. Zero pitch returns the center. Text returns `#VALUE!`.

## PointObjToBoltEleForPlot

- Date: 2026-11-03
- Note: [[PointObjToBoltEleForPlot]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: updated. `RotateCoor` was not changed.
- Excel: 15 passed, 0 failed

Positive `Deg` rotates each elevation counterclockwise about the bolt center, matching `RotatePoint`. That reverses the old clockwise plot. An omitted degree used to return `#VALUE!`; it now means no rotation, the same as 0. Diameter 2 and length 10 start at (−1, −5). At 90° that corner is (5, −1) and the top nut moves from (−1.5, 5) to (−5, −1.5). At −90° the first corner is (−5, 1). The `#N/A` separator stays `#N/A`. A second bolt's first x is 9. Text returns `#VALUE!`.

## PointObjToCircleCoorForPlot

- Date: 2026-11-03
- Note: [[PointObjToCircleCoorForPlot]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: updated. `CoorOfCircle` was not changed.
- Excel: 10 passed, 0 failed

`diaArr` is the diameter. Four points on diameter 2 are (0, 1), (−1, 0), (0, −1), (1, 0), then the first point again, then `#N/A`. The old break was a blank that `VALUE` turned into `#VALUE!`. Zero diameter stays on the center. A second circle's first y is 1. Text returns `#VALUE!`.

## PointObjToHexagonCoorForPlot

- Date: 2026-11-03
- Note: [[PointObjToHexagonCoorForPlot]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: updated. `CoorHexagon` was not changed.
- Excel: 10 passed, 0 failed

`diaArr` is the vertex-to-vertex diameter. Diameter 2 starts at (1, 0); the next y is \(\sqrt{3}/2\). The first vertex is repeated, then `#N/A`. The old break was a blank that `VALUE` turned into `#VALUE!`. Zero diameter at (3, 4) stays at x = 3. Diameter 2 there starts at x = 4. Text returns `#VALUE!`.

## ConvertLineDataForPlot

- Date: 2026-11-03
- Note: [[ConvertLineDataForPlot]]
- Example file: [[Bolts and Plotting.xlsx]]
- Library: updated
- Excel: 11 passed, 0 failed

Each row `x1, y1, x2, y2` becomes those two points and an `#N/A` row. `(0, 0)`–`(1, 0)` is those points plus `#N/A`. A second segment starts on row 4. A zero-length segment still emits both endpoints. A row that is not four numbers now returns `#VALUE!`.

## Batch

[[Bolts and Plotting.xlsx]] sheets `example` and `test`: 75 passed, 0 failed. No function in this group was stopped. No renames. Positive degrees on `PointObjToBoltEleForPlot` rotate counterclockwise. `RotateCoor` was not changed.

## CalSoilPressure

- Date: 2026-11-03
- Note: [[CalSoilPressure]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. The bottom stress uses the water height after it is clamped to the soil height. `K` is accepted and is not applied.
- Excel: 4 passed, 0 failed

Soil 5 m and water 2 m, with the defaults, returns stresses 57 and 75 and forces 85.5, 132, and 217.5. A dry wall of length 2 m returns 288 and no force below the water table. Water above the soil returns stress 0 at the top. Text returns `#VALUE!`.

## SolveLevels

- Date: 2026-11-03
- Note: [[SolveLevels]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. Equal levels return `"-"` for the fall. Text is no longer turned into `"-"`.
- Excel: 7 passed, 0 failed

Length 40 m from 10.5 to 10 is fall 80. Supplying the other pair of the three inputs returns the same levels. Three inputs, or length alone, returns `"Please Input 2 out of 3 Items"`. Text returns `#VALUE!`.

## GetMHInfoFromPipeSch

- Date: 2026-11-03
- Note: [[GetMHInfoFromPipeSch]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. The pad call is `{ref}ReplaceErrInRange(`.
- Excel: 4 passed, 0 failed

`MH2` returns two inlet rows and one outlet. A missing side is `"-"`. An unknown manhole is one dashed row. Omitting the manhole returns `#VALUE!`.

## PipeToMHSchedule

- Date: 2026-11-03
- Note: [[PipeToMHSchedule]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. The call is `{ref}GetMHInfoFromPipeSch(`. The outlet header is `Outlet I.L.`.
- Excel: 3 passed, 0 failed

`MH1`, `MH2`, and `MH3` return a header and four data rows. A manhole that is not in the pipe table is a dashed row under the header. Omitting the manhole list returns `#VALUE!`.

## find_root

- Date: 2026-11-03
- Note: [[find_root]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. Text returns `#VALUE!` instead of `"No roots found"`.
- Excel: 4 passed, 0 failed

The polyline through `(0, −1)`, `(1, 1)`, `(2, −1)`, and `(3, 1)` crosses 0 at 0.5, 1.5, and 2.5. A vertex on the target is returned once. No crossing returns `"No roots found"`. Text returns `#VALUE!`.

## RcBeamAsRequired_HK2013

- Date: 2026-11-03
- Note: [[RcBeamAsRequired_HK2013]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 6 passed, 0 failed

Clause 6.1.2.4, equations 6.7 to 6.16, with redistribution not above 10%. Moment 144 kNm on a 300 by 400 section, `fcu` 30 and `fy` 500, is singly reinforced: `K'` 0.156, `K` 0.100, `z` 349.071 mm, `As` 948.329 mm². `K = K'` gives no compression steel. `K = 0.2` is doubly reinforced at `0.87 fy`. A zero width returns `#DIV/0!`. Text returns `#VALUE!`.

## StrengthAnalysis.RectSection.RectStressBlock

- Date: 2026-11-03
- Note: [[StrengthAnalysis.RectSection.RectStressBlock]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. The stress-block depth is `MIN(λx, sectionH)`, and the concrete force uses that depth times the width.
- Excel: 4 passed, 0 failed

`StrengthAnaylsis.RectSection.RectStressBlock` → `StrengthAnalysis.RectSection.RectStressBlock`. No library caller used the old name.

The 600 by 300 example, `x` 300 and `λ` 0.8, returns 419.2 kNm and 1440 kN. A neutral axis below the section is capped at the section height and returns 0 kNm and 845 kN. Hogging returns −419.2 kNm. `x = 0` returns `#DIV/0!`.

## StrengthAnalysis.T.RectStressBlock

- Date: 2026-11-03
- Note: [[StrengthAnalysis.T.RectStressBlock]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: updated. The compression piece is the polygon fragment with the higher centroid. The centroid names are `polyCy1` and `polyCy2`, because `cy1` and `cy2` are cell addresses and Excel rejected the defined name.
- Excel: 4 passed, 0 failed

`StrengthAnaylsis.T.RectStressBlock` → `StrengthAnalysis.T.RectStressBlock`. No library caller used the old name.

The sample T, block depth 150 mm, returns 299.545 kNm and 1000 kN. A rectangle cut below its base matches the capped rectangular result, 0 kNm and 845 kN. Hogging on the 300 by 600 rectangle returns −419.2 kNm and 1440 kN. `x = 0` returns `#DIV/0!`.

## ConvertRebarDataToDesignSectionFormat

- Date: 2026-11-03
- Note: [[ConvertRebarDataToDesignSectionFormat]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 3 passed, 0 failed

The first station is dropped. A bar is active on `(start, end]`. Top names use a comma and the other lists use a plus. Torsion is omitted. The example stations 3 and 6 return `3T20` with `3T16`, then `2T25` with `3T16` and `T10-150`. Omitting the layers returns `#VALUE!`.

## SetGraphLimit

- Date: 2026-11-03
- Note: [[SetGraphLimit]]
- Example file: [[Civil Drainage Strength.xlsx]]
- Library: comment updated. Formula unchanged.
- Excel: 4 passed, 0 failed

X from 0 to 10 and Y from 0 to 4, padded by 1, returns `(−1, −4)` and `(11, 8)`. Equal extents stay square. The short side is expanded equally. Text padding returns `#VALUE!`.

## Batch

[[Civil Drainage Strength.xlsx]] sheets `example` and `test`: 43 passed, 0 failed. No function in this group was stopped. `StrengthAnaylsis.RectSection.RectStressBlock` → `StrengthAnalysis.RectSection.RectStressBlock`. `StrengthAnaylsis.T.RectStressBlock` → `StrengthAnalysis.T.RectStressBlock`.
