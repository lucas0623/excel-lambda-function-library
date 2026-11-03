---
created: 2026-11-03
tags:
  - excel-lambda
  - arrays
AI Reviewed: true
example: "[[Loops Arrays Sheets.xlsx]]"
---

# Except function

Returns items of `list1` that are absent from `list2`, in `list1` order.

Example file: [[Loops Arrays Sheets.xlsx]]

## Syntax

```
=Except(list1, list2)
```

The Except function has the following arguments:

| Argument | Description |
| --- | --- |
| `list1` | Required. Items to keep when they are missing from `list2`. |
| `list2` | Required. Items to exclude. |

## Remarks

- Match is exact and case-insensitive.
- If none remain, the result is the text `All Items in list1 exists in list2`.
- An error in `list1` is returned.
- The name stays `Except`.

## Example

The sample data is on the `example` sheet of [[Loops Arrays Sheets.xlsx]]. Blue cells are inputs.

![[Except-20261103031605.jpeg]]

| list1 | list2 | Formula | Result |
| --- | --- | --- | --- |
| 1 | 2 | `=Except(A103:A105,B103:B104)` | 1 |
| 2 | 4 |  | 3 |
| 3 |  |  |  |

## Tests

The `test` sheet checks a removed value, a list with nothing left, and an error list. Excel calculated 3 Except cases. All 3 passed.

| Case | Result |
| --- | --- |
| `{1;2;3}` except `{2;4}` | 1, 3 |
| `{1;2}` except `{1;2;3}` | All Items in list1 exists in list2 |
| Error in `list1` | `#DIV/0!` |

## Related functions

- [[Inner]] — keeps the values that occur in both lists.
