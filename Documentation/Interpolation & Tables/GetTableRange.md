---
created: 2026-05-02
tags:
  - excel-lambda
  - table-range
---

## Description
Returns the **table range** starting from `refCell` (top-left cell), expanding downward until the first blank cell in the **first column** or a fixed number of rows, capped by `maxRows`. The range preserves the **column width** of `refCell`.

Uses `MATCH` on the first column to detect the first blank row.

**Assumptions & Error Handling**:
- `refCell` is the top-left of a table-like range.
- Table end detected by blank in column 1; other columns ignored for length.
- Capped at Excel max row (~1M) if `maxRows` omitted.
- `IFERROR` returns `valueIfError` (default empty string) for issues like no blank found, invalid offsets.
- **Note**: Formula parameter names mismatch (e.g., `MaxNumOfRows` vs `maxRows`); consider fixing for production use.

## Parameters
| Parameter      | Type             | Description |
|----------------|------------------|-------------|
| `refCell`      | Range            | Top-left cell of the table. |
| `maxRows`      | Number (optional)| Maximum rows to consider from `refCell` (default: unlimited). |
| `fixedRows`    | Number (optional)| Fixed number of rows to return (overrides blank detection). |
| `valueIfError` | Any (optional)   | Value to return on error (default: empty string `''`). |

## Returns
- **Range**: The dynamic table range (e.g., `A1:C10`), or `valueIfError` on error.

## Dependencies
None.

## Usage Examples

- [[GetTableRange.xlsx]]
![[GetTableRange-20261002100511.jpeg]]

