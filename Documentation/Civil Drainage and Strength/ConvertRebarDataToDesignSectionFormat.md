---
created: 2026-11-03
tags:
  - strength
  - reinforcement
aliases:
  - CONVERTREBARDATATODESIGNSECTIONFORMAT
AI Reviewed: true
example: "[[Civil Drainage Strength.xlsx]]"
---

# ConvertRebarDataToDesignSectionFormat function

Returns the design-section text at each chainage after the first.

Example file: [[Civil Drainage Strength.xlsx]]

Stations are the sorted unique starts and ends, and the first station is dropped. A bar is active where the station is greater than its start and less than or equal to its end. Layers matching `T` and digits are the top, `B` and digits the bottom, and `shear` the links. Top layer names are joined with a comma. The other lists are joined with a plus. A torsion layer is calculated and then dropped. No match is `"-"`.

The columns are station, top layers, top rebar, bottom layers, bottom rebar, and links.

## Syntax

```
=ConvertRebarDataToDesignSectionFormat(layerArr, rebarArr, startArr, endArr)
```

The ConvertRebarDataToDesignSectionFormat function has the following arguments:

| Argument | Description |
| --- | --- |
| `layerArr` | Required. Column of layer names. |
| `rebarArr` | Required. Column of bar or link text. |
| `startArr` | Required. Column of start chainages. |
| `endArr` | Required. Column of end chainages. |

Each argument is a column of the same length.

## Remarks

- Omitting `layerArr` returns `#VALUE!`.
- The first station is omitted, so a bar that starts at 0 does not produce a row at 0.
- A torsion layer does not appear in the result.
- Last Update at 2026-11-03.

## Example

The sample data is on the `example` sheet of [[Civil Drainage Strength.xlsx]]. Blue cells are inputs. `T1` `3T20` runs 0 to 3, `B1` `3T16` runs 0 to 6, shear `T10-150` runs 3 to 6, `T2` `2T25` runs 3 to 6, and torsion `T12-200` runs 0 to 6. Stations after dropping 0 are 3 and 6. Shear is not active at 3 because the station is not greater than the start.

![[ConvertRebarDataToDesignSectionFormat-20261103122525.jpeg]]

| Station | Top layers | Top rebar | Bottom layers | Bottom rebar | Links |
| --- | --- | --- | --- | --- | --- |
| 3 | T1 | 3T20 | B1 | 3T16 | - |
| 6 | T2 | 2T25 | B1 | 3T16 | T10-150 |

## Tests

Excel calculated 3 cases. All 3 passed.

| Case | Result |
| --- | --- |
| The example, including a torsion row | The two rows above. Torsion is absent |
| `T1` from 0 to 5 and `T2` from 5 to 8 | 5 keeps `T1`. 8 keeps `T2`. The start station 0 is dropped |
| Call with no arguments | `#VALUE!` |
