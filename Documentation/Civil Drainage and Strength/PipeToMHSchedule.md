---
description: "Returns a manhole schedule from a pipe schedule."
created: 2026-11-03
tags:
  - civil
  - drainage
aliases:
  - PIPETOMHSCHEDULE
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns a manhole schedule from a pipe schedule.

Example file: [[Civil Drainage Strength.xlsx]]

`CMH` is the column of manholes to list. The first row is the header. Each following block is [[GetMHInfoFromPipeSch]] for that manhole. The header names the outlet invert `Outlet I.L.` because the value is the invert at this manhole.

## Syntax

```
=PipeToMHSchedule(CMH, USMH, DSMH, USIL, DSIL, PipeDia, PipeMat)
```

The PipeToMHSchedule function has the following arguments:

| Argument | Description |
| --- | --- |
| `CMH` | Required. Column of manholes to list. |
| `USMH` | Required. Column of upstream manholes. |
| `DSMH` | Required. Column of downstream manholes. |
| `USIL` | Required. Column of upstream inverts. |
| `DSIL` | Required. Column of downstream inverts. |
| `PipeDia` | Required. Column of diameters. |
| `PipeMat` | Required. Column of materials. |

## Remarks

- Omitting `CMH` returns `#VALUE!`.
- A manhole with no pipes is one row of dashes under the header.
- The library call is `{ref}GetMHInfoFromPipeSch(`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. The pipe table is the same one used by [[GetMHInfoFromPipeSch]]. The listed manholes are `MH1`, `MH2`, and `MH3`.

![[PipeToMHSchedule-20261103122525.jpeg]]

| MH | Inlet I.L. | Dia | Mat | From | Outlet I.L. | Dia | Mat | To |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MH1 | - | - | - | - | 10 | 300 | C | MH2 |
| MH2 | 9.5 | 300 | C | MH1 | 9.4 | 450 | U | MH3 |
| MH2 | 7.5 | 225 | V | MH4 | - | - | - | - |
| MH3 | 9 | 450 | U | MH2 | - | - | - | - |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| `MH1`, `MH2`, `MH3` | Header plus the four rows above |
| A single missing manhole `MH9` | Header plus one dashed row |
| Call with no arguments | `#VALUE!` |

## Related functions

- [[GetMHInfoFromPipeSch]] — one manhole, without the header.
