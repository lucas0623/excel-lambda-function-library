## What is this?

**GitHub repository:** [lucas0623/excel-lambda-function-library](https://github.com/lucas0623/excel-lambda-function-library)  
**Published documentation:** [lucas0623.github.io/excel-lambda-function-library](https://lucas0623.github.io/excel-lambda-function-library)

[Excel's LAMBDA functions](https://support.microsoft.com/en-us/office/lambda-function-bd212d27-1cd1-4321-a34a-ccbf254b8b67) unlock powerful spreadsheet development, enabling complex formulas for advanced calculations like geometry, data processing, and simulations—without VBA or external scripts.

However, Excel lacks native tools for managing, reusing, and versioning these functions across workbooks. This repository solves that:

- Acts as the single source of truth for a growing library of reusable LAMBDA functions (stored as .json files).
- Leverages GitHub for easy tracking of changes, collaboration, and releases.
- Integrates seamlessly with the [Lambda Function Manager Excel web add-in](https://github.com/lucas0623/excel-lambda-function-library/releases/tag/v1.0.0.1): simply sideload the add-in, browse to the Functions/ folder, and import/export functions directly into your worksheets/workbooks.

Current coverage includes geometry (e.g., Dist, AngleBetween3Points, FindNearestPoint), plotting utilities (e.g., ConvertLineDataForPlot), table operations (e.g., GetTableRange), and more—with full documentation (still in progress) in the Documentation/ folder. Open that documentation as an [Obsidian](https://obsidian.md/) vault, or read it on the [published site](https://lucas0623.github.io/excel-lambda-function-library). Step 3 below has both options.

Imported functions persist in your workbook and work in any Excel version supporting LAMBDA (Excel 365/2021+). No permanent installation required—just sideload the add-in for testing and development! 🚀

A Cursor agent can use the same `Functions` folder through [lfm-mcp](https://github.com/lucas0623/lfm-mcp). Install steps are in that repository. Point `--library` at the `Functions` folder of your clone.



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

**3. Explore the documentation** — open it as an Obsidian vault, or open the published website:

- **Open as an Obsidian vault.** Open this repository in [Obsidian](https://obsidian.md/) to browse, document, review, and extend the Lambda library using linked notes in the Documentation/ folder.
- **Open the published website.** Read the same notes in the browser: [Lambda Function Library](https://lucas0623.github.io/excel-lambda-function-library).

<img width="1156" height="1292" alt="Documentation open in Obsidian" src="https://github.com/user-attachments/assets/3c224d49-9478-47c4-82b0-af27c86ae22a" />

**4. Use the library from Cursor**

Install [lfm-mcp](https://github.com/lucas0623/lfm-mcp) and set its library path to the `Functions` folder of this clone. The agent can then read the functions and import them into a workbook with desktop Excel.

---

## Function index

Each function note has a one-sentence description. [[Function Index]] lists those notes, grouped by folder. The file is `Documentation/Function Index.base`. A note appears on the index when its `description` field is set.

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
