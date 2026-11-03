---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

## Overview

Returns values of `list1` that also occur in `list2`, in `list1` order.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=Inner(list1, list2)
```

The Inner function has the following arguments:

| Argument | Description |
| --- | --- |
| `list1` | Required. Values to keep, in the order they are returned. |
| `list2` | Required. Values used as the match list. |

## Remarks

- Match is exact and case-insensitive.
- No shared value returns `#CALC!`.
- The name stays `Inner`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[Inner-20261103031605.jpeg]]

| list1 | list2 | Formula | Result |
| --- | --- | --- | --- |
| 1 | 3 | `=Inner(A132:A134,B132:B134)` | 2 |
| 2 | 2 |  | 3 |
| 3 | 9 |  |  |

## Tests

The `test` sheet checks two shared values, one shared value, and no shared value. Excel calculated 3 Inner cases. All 3 passed.

| Case | Result |
| --- | --- |
| `{1;2;3}` and `{3;2;9}` | 2, 3 |
| `{5}` and `{5;6}` | 5 |
| No shared value | `#CALC!` |

## Related functions

- [[Except]] — keeps the values that are absent from the second list.
- [[InnerMerge]] — joins two tables on a named key.
