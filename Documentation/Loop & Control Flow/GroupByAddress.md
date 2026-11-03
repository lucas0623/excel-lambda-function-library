---
created: 2026-11-03
tags:
  - excel-lambda
  - sheets
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns the key, first row, last row, and address for each group.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=GroupByAddress(key_cell, length_cell, return_columns)
```

The GroupByAddress function has the following arguments:

| Argument | Description |
| --- | --- |
| `key_cell` | Required. First key cell. A blank key continues the current group. |
| `length_cell` | Required. First cell of the length column. The block ends at its first blank. |
| `return_columns` | Required. Columns covered by the address. The address uses their width. |

## Remarks

- The height comes from [[ExpandToLastRow]] on `length_cell`. The keys come from that same height.
- A blank key cell arrives as 0 from that expansion, and 0 is treated as blank. A numeric key of 0 is also blank.
- Group bounds come from [[NextDiff]]. The address uses [[GetSheetName]] and absolute `ADDRESS` references.
- All-blank keys return `#CALC!`.
- The name stays `GroupByAddress`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs. The blank key on the second row stays in the K1 group.

![[GroupByAddress-20261103031605.jpeg]]

| key | length | value | Formula | Result |
| --- | --- | --- | --- | --- |
| K1 | 1 | x | `=GroupByAddress(A224,B224,C224)` | K1, 224, 225, `'example'!$C$224:$C$225` |
|  | 1 | y |  |  |
| K2 | 1 | z |  | K2, 226, 226, `'example'!$C$226:$C$226` |

## Tests

The `test` sheet checks two groups, one group, and all-blank keys. Excel calculated 3 GroupByAddress cases. All 3 passed.

| Case | Result |
| --- | --- |
| K1 and K2 on `test` | K1 rows 30–31, K2 rows 32–33 |
| One group | Only, row 40 through row 40 |
| All blank keys | `#CALC!` |

## Related functions

- [[ExpandToLastRow]] — the row count of the block.
- [[NextDiff]] — the first row of each key.
- [[GetSheetName]] — the sheet quoted in the address.
