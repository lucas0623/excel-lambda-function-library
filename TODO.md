# Library review tracker

152 functions in `Functions/`. 13 are AI Reviewed. The order below is the suggested review order: shared leaves first, then the functions that call them. Finish a group before starting the next.

Method: `.cursor/skills/lfm-function-review/SKILL.md`. A tick here matches `AI Reviewed: true` on the note and a section in [[ReviewResult]]. A line marked `stopped:` is an open question, not a tick. The review moves on after three failed rounds, after the same failure survives two formula edits, or when asked to stop review.

`s2k_ProgramControl.json` is an empty file. The library contract fails on it. Fix it when the SAP2000 group is reviewed.

A note that already exists, without `AI Reviewed`, is marked "draft".

## 1. Geometry family

Continue the batch that produced [[Angle Functions.xlsx]].

- [x] AdjustPolarAngle
- [x] AngleBetween3Points
- [x] Dist
- [x] PolarToXYCoor
- [x] AngleBetweenLineAndX
- [x] SolveTriangle
- [x] OffsetPoint
- [x] OffsetLine
- [x] RotatePoint
- [x] RotateCoor
- [x] TranslateCoor
- [x] FindNearestPoint
- [x] DistToNearestPoint

## 2. Lines

- [ ] TwoLinesIntersection
- [ ] TwoLinesIntersection2
- [ ] IntersectionOfTwoLines
- [ ] isPointOnLine
- [ ] IsTwoLinesIntersect
- [ ] PolyAndLineIntersection
- [ ] PolyAndLineIntersection2
- [ ] IntersectionAreaAndLine

## 3. Point in polygon

- [ ] IsPointOnPolyEdge
- [ ] IsPointInPoly
- [ ] IsAllPointsInPoly
- [ ] IsAnyPointInPoly
- [ ] IsAnyEdgeIntersect
- [ ] IsPolyAndLineIntersect
- [ ] IsPolysIntersect
- [ ] isPolyAInPolyB
- [ ] isClockwise

## 4. Polygon editing

These call the line and polygon tests above, plus `TextToArray` and `RemoveRow` from group 7. Review group 7's leaves `TextToArray` and `RemoveRow` before this group if a failure is ambiguous.

- [ ] InsertPolyAndLineIntersection
- [ ] InsertPolysIntersection
- [ ] GetVerticesBetweenIntersections
- [ ] CleanUpContinuousIntersections
- [ ] ReverseVerticesDirection
- [ ] SplitPolyIntoTwoPolys
- [ ] SplitPolysIteration
- [ ] SplitPolyByLine
- [ ] CombineTwoPolygons
- [ ] CombinePolygons
- [ ] Loop_CombinePolygons
- [ ] OverlappedPolygons
- [ ] CreateHatch
- [ ] GridMesh

## 5. Section properties and shapes

`CoorAngle` is named like an angle and its comment describes I-section vertices. Decide the name in this group.

- [ ] Prop
- [ ] Prop_Area
- [ ] Prop_Cx
- [ ] Prop_Cy
- [ ] Prop_Centroid
- [ ] Prop_PlasticCentroidCpx
- [ ] Prop_PlasticCentroidCpy
- [ ] Properties
- [ ] RotateShape
- [ ] CoorRect
- [ ] CoorT
- [ ] CoorI
- [ ] CoorPFC
- [ ] CoorCircle
- [ ] CoorCircularArc
- [ ] CoorHexagon
- [ ] CoorOfCircle
- [ ] CoorNut
- [ ] CoorBoltEle
- [ ] CoorAngle
- [ ] DishChannelArea
- [ ] DishChannelWetPerimeter

## 6. Bolts and plotting

- [ ] CreateBoltCoor_4Bolts
- [ ] CreateBoltCoor_6Bolts_2x3
- [ ] CreateBoltCoor_6Bolts_3x2
- [ ] CreateBoltCoor_8Bolts_3x3
- [ ] PointObjToBoltEleForPlot
- [ ] PointObjToCircleCoorForPlot
- [ ] PointObjToHexagonCoorForPlot
- [ ] ConvertLineDataForPlot — draft

## 7. Loops, arrays, and sheets

- [ ] ForLoop — draft
- [ ] WhileLoop
- [ ] ForEachRow
- [ ] ForEachColumn
- [ ] TextToArray
- [ ] MultipleTextToArray
- [ ] VRepeatArray
- [ ] Reverse
- [ ] RemoveRow
- [ ] Except
- [ ] FillEmpty
- [ ] Inner
- [ ] InnerMerge
- [ ] NumberToLetter
- [ ] MaxChar
- [ ] MinChar
- [ ] ReplaceErrInRange
- [ ] ExpandToLastRow
- [ ] NextDiff
- [ ] GetSheetName
- [ ] GroupByAddress
- [ ] GetTableRange — draft
- [ ] SaveTableAsFormula

## 8. Interpolation

- [ ] InterpolateXY
- [ ] InterpolateXY2
- [ ] InterpolateXYTable
- [ ] CreateStepRange

## 9. Civil, drainage, and strength

- [ ] CalSoilPressure
- [ ] SolveLevels
- [ ] PipeToMHSchedule
- [ ] GetMHInfoFromPipeSch
- [ ] find_root
- [ ] RcBeamAsRequired_HK2013
- [ ] StrengthAnaylsis.RectSection.RectStressBlock
- [ ] StrengthAnaylsis.T.RectStressBlock
- [ ] ConvertRebarDataToDesignSectionFormat
- [ ] SetGraphLimit

## 10. SAP2000 `.s2k`

- [ ] s2k_ProgramControl — file is empty
- [ ] s2k_jtCoor
- [ ] s2k_jtCoorHeader
- [ ] s2k_jtLoad
- [ ] s2k_jtLoadHeader
- [ ] s2k_loadPat
- [ ] s2k_loadPatHeader
- [ ] s2k_loadCaseDef
- [ ] s2k_loadCaseDefHeader
- [ ] s2k_staticLoadCase
- [ ] s2k_staticLoadCaseHeader
- [ ] s2k_loadCombHeader
- [ ] s2k_createLoadComb
- [ ] s2k_addLoadCaseToLoadComb
- [ ] s2k_FrameDistributedLoad
- [ ] s2k_FrameDistributedLoadHeader

## 11. Section tables

Lookup data. Review the comment, the shape of the returned array, and one sample lookup per table. Do not treat each table as a new algorithm.

- [ ] Table.BoltDimension.BS4190
- [ ] Table.BoltGrade
- [ ] Table.ChineseCH.GBC
- [ ] Table.ChineseCH.YBC
- [ ] Table.CHS1
- [ ] Table.CHS2
- [ ] Table.CHS3
- [ ] Table.EA1
- [ ] Table.EA2
- [ ] Table.HM
- [ ] Table.HN
- [ ] Table.HW
- [ ] Table.RHS1
- [ ] Table.RHS2
- [ ] Table.RHS3
- [ ] Table.RSC
- [ ] Table.SHS1
- [ ] Table.SHS2
- [ ] Table.SHS3
- [ ] Table.UKB1
- [ ] Table.UKB2
- [ ] Table.UKB3
- [ ] Table.UKBP
- [ ] Table.UKC
- [ ] Table.UKPFC
