---
description: "Returns fall, upstream level, and downstream level."
created: 2026-11-03
tags:
  - civil
  - drainage
aliases:
  - SOLVELEVELS
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns fall, upstream level, and downstream level. Supply any two of those three. The level difference is length divided by fall.

Example file: [[Civil Drainage Strength.xlsx]]

$$
\text{upstream} - \text{downstream} = \frac{\text{length}}{\text{fall}}
$$

The result is a 1×3 row: fall, upstream level, downstream level.

## Syntax

```
=SolveLevels(length, [fall], [upstreamLevel], [downstreamLevel])
```

The SolveLevels function has the following arguments:

| Argument | Description |
| --- | --- |
| `length` | Required. Pipe length, in metres. |
| `fall` | Optional. Run in `1:fall`. Omitted, blank, 0, or `"-"` counts as missing. |
| `upstreamLevel` | Optional. Upstream invert. Omitted, blank, or `"-"` counts as missing. 0 is a real level. |
| `downstreamLevel` | Optional. Downstream invert. Omitted, blank, or `"-"` counts as missing. 0 is a real level. |

## Remarks

- Exactly two of fall, upstream, and downstream are required. Any other count returns `"Please Input 2 out of 3 Items"` across three columns, with the extra columns blank.
- Equal upstream and downstream levels return `"-"` for the fall.
- Text returns `#VALUE!`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. Fall is omitted. Length 40 m, upstream 10.5 mPD, and downstream 10 mPD give fall 80.

![[SolveLevels-20261103122525.jpeg]]

| Fall | Upstream | Downstream |
| --- | --- | --- |
| 80 | 10.5 | 10 |

## Tests

Excel calculated 7 cases. All 7 passed.

| Case | Result |
| --- | --- |
| Length 40, upstream 10.5, downstream 10 | 80, 10.5, 10 |
| Fall 80 and downstream 10 | 80, 10.5, 10 |
| Fall 80 and upstream 10.5 | 80, 10.5, 10 |
| All three supplied | `"Please Input 2 out of 3 Items"` |
| Equal levels 10 and 10 | `"-"`, 10, 10 |
| Length only | `"Please Input 2 out of 3 Items"` |
| Text length | `#VALUE!` |
