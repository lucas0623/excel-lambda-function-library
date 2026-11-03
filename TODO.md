# Library review tracker

152 functions in `Functions/`. 111 are AI Reviewed. The order below is the suggested review order: shared leaves first, then the functions that call them. Finish a group before starting the next.

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

- [x] IsPointOnPolyEdge
- [x] IsPointInPoly
- [x] IsAllPointsInPoly
- [x] IsAnyPointInPoly
- [x] IsAnyEdgeIntersect
- [x] IsPolyAndLineIntersect
- [x] IsPolysIntersect
- [x] isPolyAInPolyB
- [x] isClockwise

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

- [x] Prop
- [x] Prop_Area
- [x] Prop_Cx
- [x] Prop_Cy
- [x] Prop_Centroid
- [x] Prop_PlasticCentroidCpx
- [x] Prop_PlasticCentroidCpy
- [x] Properties
- [x] RotateShape
- [x] CoorRect
- [x] CoorT
- [x] CoorI
- [x] CoorPFC
- [x] CoorCircle
- [x] CoorCircularArc
- [x] CoorHexagon
- [x] CoorOfCircle
- [x] CoorNut
- [x] CoorBoltEle
- [x] CoorAngle
- [x] DishChannelArea
- [x] DishChannelWetPerimeter

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

- [x] ForLoop
- [x] WhileLoop
- [x] ForEachRow
- [x] ForEachColumn
- [x] TextToArray
- [x] MultipleTextToArray
- [x] VRepeatArray
- [x] Reverse
- [x] RemoveRow
- [x] Except
- [x] FillEmpty
- [x] Inner
- [x] InnerMerge
- [x] NumberToLetter
- [x] MaxChar
- [x] MinChar
- [x] ReplaceErrInRange
- [x] ExpandToLastRow
- [x] NextDiff
- [x] GetSheetName
- [x] GroupByAddress
- [x] GetTableRange
- [x] SaveTableAsFormula

## 8. Interpolation

- [x] InterpolateXY
- [x] InterpolateXY2
- [x] InterpolateXYTable
- [x] CreateStepRange

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

Comment review only. Formulas were not changed, and Excel was not run.

- [ ] s2k_ProgramControl — stopped: the JSON file is empty.
- [x] s2k_jtCoor
- [x] s2k_jtCoorHeader
- [x] s2k_jtLoad
- [x] s2k_jtLoadHeader
- [x] s2k_loadPat
- [x] s2k_loadPatHeader
- [x] s2k_loadCaseDef
- [x] s2k_loadCaseDefHeader
- [x] s2k_staticLoadCase
- [x] s2k_staticLoadCaseHeader
- [x] s2k_loadCombHeader
- [x] s2k_createLoadComb
- [x] s2k_addLoadCaseToLoadComb
- [x] s2k_FrameDistributedLoad
- [x] s2k_FrameDistributedLoadHeader

## 11. Section tables

Lookup data. Comment review only: the comment states the table and the array shape. Formulas were not changed, and Excel was not run.

- [x] Table.BoltDimension.BS4190
- [x] Table.BoltGrade
- [x] Table.ChineseCH.GBC
- [x] Table.ChineseCH.YBC
- [x] Table.CHS1
- [x] Table.CHS2
- [x] Table.CHS3
- [x] Table.EA1
- [x] Table.EA2
- [x] Table.HM
- [x] Table.HN
- [x] Table.HW
- [x] Table.RHS1
- [x] Table.RHS2
- [x] Table.RHS3
- [x] Table.RSC
- [x] Table.SHS1
- [x] Table.SHS2
- [x] Table.SHS3
- [x] Table.UKB1
- [x] Table.UKB2
- [x] Table.UKB3
- [x] Table.UKBP
- [x] Table.UKC
- [x] Table.UKPFC
