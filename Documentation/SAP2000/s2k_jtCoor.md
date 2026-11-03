---
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_JTCOOR
AI Reviewed: true
---

## Overview

Returns one joint-coordinate record for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_jtCoor(name, x, y, z)
```

The s2k_jtCoor function has the following arguments:

| Argument | Description |
| --- | --- |
| `name` | Required. Joint name, written after `Joint=`. |
| `x` | Required. X coordinate, written after `XorR=`. |
| `y` | Required. Y coordinate, written after `Y=`. |
| `z` | Required. Z coordinate, written after `Z=`. |

## Remarks

- The result is one text line. The fields are joined by three spaces, in this order: `Joint`, `CoordSys`, `CoordType`, `XorR`, `Y`, `Z`.
- `CoordSys` is always `GLOBAL`. `CoordType` is always `Cartesian`.
- The line belongs under the table header from [[s2k_jtCoorHeader]], `Table: "JOINT COORDINATES"`.
- The formula has no error branch.

The joined text has this shape:

```
Joint=<name>   CoordSys=GLOBAL   CoordType=Cartesian   XorR=<x>   Y=<y>   Z=<z>
```

## Related functions

- [[s2k_jtCoorHeader]] — header for the same table.
