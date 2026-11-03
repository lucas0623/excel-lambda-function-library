---
description: "Returns one joint-force record for a SAP2000 .s2k file."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_JTLOAD
AI Reviewed: true
---

## Overview

Returns one joint-force record for a SAP2000 `.s2k` file.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_jtLoad(jtName, loadPat, isGlobal, Fx, Fy, Fz, Mx, My, Mz)
```

The s2k_jtLoad function has the following arguments:

| Argument | Description |
| --- | --- |
| `jtName` | Required. Joint name, written after `Joint=`. |
| `loadPat` | Required. Load pattern name, written after `LoadPat=`. |
| `isGlobal` | Required. Chooses the coordinate system. True writes `GLOBAL`. False writes `LOCAL`. |
| `Fx` | Required. Force component, written after `F1=`. |
| `Fy` | Required. Force component, written after `F2=`. |
| `Fz` | Required. Force component, written after `F3=`. |
| `Mx` | Required. Moment component, written after `M1=`. |
| `My` | Required. Moment component, written after `M2=`. |
| `Mz` | Required. Moment component, written after `M3=`. |

## Remarks

- The result is one text line. The fields are joined by three spaces, in this order: `Joint`, `LoadPat`, `CoordSys`, `F1`, `F2`, `F3`, `M1`, `M2`, `M3`.
- `IF(isGlobal, ...)` writes `CoordSys=GLOBAL` when `isGlobal` is true and `CoordSys=LOCAL` otherwise.
- The line belongs under the table header from [[s2k_jtLoadHeader]], `Table: "JOINT LOADS - FORCE"`.
- The formula has no error branch.

The joined text has this shape:

```
Joint=<jtName>   LoadPat=<loadPat>   CoordSys=GLOBAL   F1=<Fx>   F2=<Fy>   F3=<Fz>   M1=<Mx>   M2=<My>   M3=<Mz>
```

`CoordSys` is `LOCAL` when `isGlobal` is false.

## Related functions

- [[s2k_jtLoadHeader]] — header for the same table.
- [[s2k_loadPat]] — the load pattern named in `LoadPat`.
