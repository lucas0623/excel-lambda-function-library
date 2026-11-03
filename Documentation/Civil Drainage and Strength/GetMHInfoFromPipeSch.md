---
created: 2026-11-03
tags:
  - civil
  - drainage
aliases:
  - GETMHINFOFROMPIPESCH
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

## Overview

Returns one row for each pipe connected to a manhole.

Example file: [[Civil Drainage Strength.xlsx]]

An inlet is a pipe whose downstream manhole is `CMH`. An outlet is a pipe whose upstream manhole is `CMH`. The outlet invert is the upstream invert of the outgoing pipe, which is the level at this manhole. A missing side is `"-"`. Extra rows repeat `CMH`. Unequal inlet and outlet lists are padded by [[ReplaceErrInRange]].

The nine values are `CMH`, inlet invert, inlet diameter, inlet material, inlet from manhole, outlet invert, outlet diameter, outlet material, and outlet to manhole.

## Syntax

```
=GetMHInfoFromPipeSch(CMH, USMH, DSMH, USIL, DSIL, PipeDia, PipeMat)
```

The GetMHInfoFromPipeSch function has the following arguments:

| Argument | Description |
| --- | --- |
| `CMH` | Required. Manhole to look up. |
| `USMH` | Required. Column of upstream manholes. |
| `DSMH` | Required. Column of downstream manholes. |
| `USIL` | Required. Column of upstream inverts. |
| `DSIL` | Required. Column of downstream inverts. |
| `PipeDia` | Required. Column of diameters. |
| `PipeMat` | Required. Column of materials. |

Each pipe argument is a column of the same length.

## Remarks

- Omitting `CMH` returns `#VALUE!`.
- The library call is `{ref}ReplaceErrInRange(`.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. `MH2` has two inlets and one outlet.

![[GetMHInfoFromPipeSch-20261103122525.jpeg]]

| CMH | Inlet I.L. | Dia | Mat | From | Outlet I.L. | Dia | Mat | To |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MH2 | 9.5 | 300 | C | MH1 | 9.4 | 450 | U | MH3 |
| MH2 | 7.5 | 225 | V | MH4 | - | - | - | - |

## Tests

Excel calculated 4 cases. All 4 passed.

| Case | Result |
| --- | --- |
| `MH2`, two inlets and one outlet | The two rows in the example |
| `MH1`, outlet only | Dashes on the inlet side, outlet to `MH2` |
| `MH9`, no pipes | One row of dashes |
| Call with no arguments | `#VALUE!` |

## Related functions

- [[ReplaceErrInRange]] — fills the padded `#N/A` cells with `"-"`.
- [[PipeToMHSchedule]] — one block of this function for each manhole.
