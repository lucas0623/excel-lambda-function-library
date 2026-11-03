---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# InnerMerge function

Inner-joins two tables on `keyName`.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=InnerMerge(leftDF, rightDF, keyName)
```

The InnerMerge function has the following arguments:

| Argument | Description |
| --- | --- |
| `leftDF` | Required. Left table, including its header row. |
| `rightDF` | Required. Right table, including its header row. |
| `keyName` | Required. Header text of the key. It may sit in any column. |

## Remarks

- Result columns are the key, the other left columns, then the other right columns.
- Result rows follow the left table. The match uses [[Inner]].
- A missing header returns `#N/A`.
- No shared key returns `#CALC!`.
- The name stays `InnerMerge`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs. The key is the second column of the left table.

![[InnerMerge-20261103031605.jpeg]]

| name | id | val | id | extra | Formula | Result |
| --- | --- | --- | --- | --- | --- | --- |
| name | id | val | id | extra | `=InnerMerge(A143:C145,D143:E145,"id")` | id, name, val, extra |
| Ann | 1 | 10 | 1 | x |  | 1, Ann, 10, x |
| Bob | 2 | 20 | 2 | y |  | 2, Bob, 20, y |

## Tests

The `test` sheet checks a key in the first column, a key in another column, a missing name, and no shared key. Excel calculated 4 InnerMerge cases. All 4 passed.

| Case | Result |
| --- | --- |
| Key in the first column | id, a, b, 1, 10, 100, 2, 20, 200 |
| Key not in the first column | id, name, val, extra, 1, Ann, 10, x, 2, Bob, 20, y |
| Header `missing` | `#N/A` |
| No shared key | `#CALC!` |

## Related functions

- [[Inner]] — the shared-key list used by this join.
