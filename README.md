## What is this?

[Excel's LAMBDA functions](https://support.microsoft.com/en-us/office/lambda-function-bd212d27-1cd1-4321-a34a-ccbf254b8b67) unlock powerful spreadsheet development, enabling complex formulas for advanced calculations like geometry, data processing, and simulations—without VBA or external scripts.

However, Excel lacks native tools for managing, reusing, and versioning these functions across workbooks. This repository solves that:

- Acts as the single source of truth for a growing library of reusable LAMBDA functions (stored as .json files).
- Leverages GitHub for easy tracking of changes, collaboration, and releases.
- Integrates seamlessly with the [Lambda Function Manager Excel web add-in](https://github.com/lucas0623/excel-lambda-function-library/releases/tag/v1.0.0.1): simply sideload the add-in, browse to the Functions/ folder, and import/export functions directly into your worksheets/workbooks.

Current coverage includes geometry (e.g., Dist, AngleBetween3Points, FindNearestPoint), plotting utilities (e.g., ConvertLineDataForPlot), table operations (e.g., GetTableRange), and more—with full documentation (still in progress) in the Documentation/ folder. Open this repo as an [Obsidian](https://obsidian.md/) vault to navigate via linked notes, examples, and math derivations.

Imported functions persist in your workbook and work in any Excel version supporting LAMBDA (Excel 365/2021+). No permanent installation required—just sideload the add-in for testing and development! 🚀



---

## Installation

**1. Install the Lambda Function Manager add-in**
- Download the manifest.xml file from this repository.
- Sideload it into Excel by following [Microsoft Guidelines](https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins)
  
**2. Load functions into your workbook**
- Open the add-in task pane in Excel.
- Navigate to the **Library tab** and click **Browse**
- Select the **Functions** folder from the local clone of this repository.
- The add-in automatically reads .json files containing Lambda functions, loads them into your active worksheet/workbook, and supports exporting changes back to JSON. <img width="1519" height="1243" alt="image" src="https://github.com/user-attachments/assets/447a9d16-47f8-4e1f-a7bb-d43f0fe6d1e8" />

**3. Explore as an Obsidian vault:**
- Open this repository directly in [Obsidian](https://obsidian.md/) to browse, document, review, and extend the Lambda library using linked notes in the Documentation/ folder. <img width="1156" height="1292" alt="image" src="https://github.com/user-attachments/assets/3c224d49-9478-47c4-82b0-af27c86ae22a" />

---

## Function Reference

Functions are grouped by category below.

### 🔁 Loop & Control Flow

| Function | Description |
|---|---|
| `ForLoop` | For loop — iterate over a numeric range and apply a LAMBDA |
| `WhileLoop` | While loop — iterate until a condition is satisfied |
| `ForEachRow` | Apply a LAMBDA to every row of an array |
| `ForEachColumn` | Apply a LAMBDA to every column of an array |

---

### 📐 Geometry & Trigonometry

| Function | Description |
|---|---|
| `Dist` | Distance between two points (x1,y1,x2,y2) |
| `AngleBetween3Points` | Angle formed at the middle of three points |
| `AngleBetweenLineAndX` | Angle between a line and the X-axis |
| `CoorAngle` | Angle of a line defined by two coordinate pairs |
| `PolarToXYCoor` | Convert polar coordinates to Cartesian (x,y) |
| `OffsetPoint` | Offset a point by a distance and angle |
| `OffsetLine` | Offset a line segment |
| `RotatePoint` | Rotate a point about an origin |
| `RotateShape` | Rotate all vertices of a shape |
| `TranslateCoor` | Translate (shift) coordinates |
| `SolveTriangle` | Solve a triangle given sides/angles |

---

### 🔷 Polygon & Line Operations

| Function | Description |
|---|---|
| `IsPointInPoly` | Check if a point lies inside a polygon |
| `IsPointOnPolyEdge` | Check if a point lies on a polygon edge |
| `isPointOnLine` | Check if a point lies on a line segment |
| `IsAnyPointInPoly` | Check if any of a set of points is inside a polygon |
| `IsAllPointsInPoly` | Check if all points are inside a polygon |
| `IsPolyAndLineIntersect` | Check if a polygon and a line intersect |
| `IsPolysIntersect` | Check if two polygons intersect |
| `IsAnyEdgeIntersect` | Check if any edges between two polygons intersect |
| `isPolyAInPolyB` | Check if polygon A is entirely within polygon B |
| `isClockwise` | Check if polygon vertices are ordered clockwise |
| `IntersectionOfTwoLines` | Find the intersection point of two lines |
| `TwoLinesIntersection` | Intersection of two lines (alternate form) |
| `TwoLinesIntersection2` | Intersection of two lines (alternate form 2) |
| `IsTwoLinesIntersect` | Check if two line segments intersect |
| `PolyAndLineIntersection` | Find intersection points of a polygon and a line |
| `PolyAndLineIntersection2` | Polygon–line intersection (alternate form) |
| `InsertPolyAndLineIntersection` | Insert intersection points into polygon vertices |
| `InsertPolysIntersection` | Insert mutual intersection points into two polygons |
| `IntersectionAreaAndLine` | Compute intersection of an area polygon and a line |
| `CombinePolygons` | Combine multiple polygons into one |
| `CombineTwoPolygons` | Combine exactly two polygons |
| `Loop_CombinePolygons` | Iteratively combine a list of polygons |
| `OverlappedPolygons` | Find the overlapping region of two polygons |
| `SplitPolyByLine` | Split a polygon into two parts along a line |
| `SplitPolyIntoTwoPolys` | Split a polygon into exactly two polygons |
| `SplitPolysIteration` | Iterative polygon splitting |
| `CleanUpContinuousIntersections` | Remove redundant consecutive intersection points |
| `GetVerticesBetweenIntersections` | Extract vertices between two intersection points |
| `ReverseVerticesDirection` | Reverse the winding order of polygon vertices |
| `FindNearestPoint` | Find the nearest point in a set to a given point |
| `DistToNearestPoint` | Distance from a point to the nearest point in a set |

---

### 📏 Section Properties

| Function                  | Description                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| `Properties`              | Full section properties of a polygon (area, centroid, I, Z, S, …) |
| `Prop_Area`               | Area of a polygon                                                 |
| `Prop_Centroid`           | Centroid of a polygon                                             |
| `Prop_Cx`                 | X-coordinate of the centroid                                      |
| `Prop_Cy`                 | Y-coordinate of the centroid                                      |
| `Prop_PlasticCentroidCpx` | Plastic centroid X-coordinate                                     |
| `Prop_PlasticCentroidCpy` | Plastic centroid Y-coordinate                                     |

---

### 📦 Standard Section Coordinates

| Function | Description |
|---|---|
| `CoorRect` | Rectangle section vertices (h, b) |
| `CoorT` | T-section vertices |
| `CoorI` | I-section vertices |
| `CoorPFC` | PFC (channel) section vertices |
| `CoorCircle` | Circle vertices (approximated polygon) |
| `DishChannelArea` | Cross-sectional area of a dish/channel |
| `DishChannelWetPerimeter` | Wet perimeter of a dish/channel |

---

### 🔩 Bolt Pattern Coordinates

| Function | Description |
|---|---|
| `CreateBoltCoor_4Bolts` | Coordinates for a 4-bolt pattern |
| `CreateBoltCoor_6Bolts_2x3` | Coordinates for a 6-bolt (2×3) pattern |
| `CreateBoltCoor_6Bolts_3x2` | Coordinates for a 6-bolt (3×2) pattern |
| `CreateBoltCoor_8Bolts_3x3` | Coordinates for an 8-bolt (3×3) pattern |

---

### 📊 Interpolation & Tables

| Function | Description |
|---|---|
| `InterpolateXY` | Linear interpolation between two points |
| `InterpolateXY2` | Linear interpolation (alternate form) |
| `InterpolateXYTable` | Interpolate from an XY data table |
| `GetTableRange` | Return the used range of a table starting from a reference cell |
| `CreateStepRange` | Create a numeric range with a defined step size |
| `GridMesh` | Generate a grid mesh of X,Y coordinates |

---

### 🗃️ Array & Text Utilities

| Function | Description |
|---|---|
| `TextToArray` | Convert a delimited text string to an array |
| `MultipleTextToArray` | Convert multiple delimited strings to arrays |
| `VRepeatArray` | Vertically repeat an array N times |
| `Reverse` | Reverse the order of elements in an array |
| `RemoveRow` | Remove a specific row from an array |
| `ReplaceErrInRange` | Replace error values in a range with a fallback |
| `NumberToLetter` | Convert a column number to its letter (1 → A, 27 → AA) |
| `Prop` | General property lookup helper |
| `ConvertLineDataForPlot` | Reformat line/polygon data for Excel chart plotting |
| `SetGraphLimit` | Compute axis limits for a chart |
| `SolveLevels` | Solve surveying level data |

---

### 🏗️ Civil / Drainage

| Function | Description |
|---|---|
| `CalSoilPressure` | Calculate soil pressure distribution |
| `PipeToMHSchedule` | Generate a pipe-to-manhole schedule |
| `GetMHInfoFromPipeSch` | Extract manhole info from a pipe schedule |

---

### 🏛️ SAP2000 `.s2k` Text Format

Functions for generating SAP2000 import text (`.s2k` format):

| Function | Description |
|---|---|
| `s2k_ProgramControl` | Program control section header |
| `s2k_jtCoor` | Joint coordinate entry |
| `s2k_jtCoorHeader` | Joint coordinate section header |
| `s2k_jtLoad` | Joint load entry |
| `s2k_jtLoadHeader` | Joint load section header |
| `s2k_loadPat` | Load pattern entry |
| `s2k_loadPatHeader` | Load pattern section header |
| `s2k_loadCaseDef` | Load case definition entry |
| `s2k_loadCaseDefHeader` | Load case definition section header |
| `s2k_staticLoadCase` | Static load case entry |
| `s2k_staticLoadCaseHeader` | Static load case section header |
| `s2k_loadCombHeader` | Load combination section header |
| `s2k_createLoadComb` | Create a load combination entry |
| `s2k_addLoadCaseToLoadComb` | Add a load case to a load combination |
| `s2k_FrameDistributedLoad` | Frame distributed load entry |
| `s2k_FrameDistributedLoadHeader` | Frame distributed load section header |

---

## Repository Structure

```
Functions/          # One .json file per LAMBDA function
Documentation/      # Markdown documentation for selected functions
Examples/           # Example Excel workbooks
Z_System/           # System attachments (screenshots, etc.)
```

---

## Contributing

Pull requests are welcome. Each function should have its own `.json` file in `Functions/` following the existing schema:

```json
{
  "name": "FunctionName",
  "formula": "=LAMBDA(...)",
  "comment": "Brief description. Last Update at YYYY-MM-DD.",
  "children": [],
  "allChildren": []
}
```
