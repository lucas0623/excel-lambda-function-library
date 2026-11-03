---
description: "Returns one distributed frame-load record for each frame name in Frames."
created: 2026-11-03
tags:
  - sap2000
  - s2k
aliases:
  - S2K_FRAMEDISTRIBUTEDLOAD
AI Reviewed: true
---

## Overview

Returns one distributed frame-load record for each frame name in `Frames`.

This was a comment review. The function was not calculated.

## Syntax

```
=s2k_FrameDistributedLoad(LoadPat, Dir, Frames, Value, [isGlobalCoor])
```

The s2k_FrameDistributedLoad function has the following arguments:

| Argument | Description |
| --- | --- |
| `LoadPat` | Required. Load pattern name, written after `LoadPat=` on every line. |
| `Dir` | Required. Direction token, written after `Dir=` on every line. |
| `Frames` | Required. List of frame names. `MAP` writes one line per name. |
| `Value` | Required. Uniform intensity, written after both `FOverLA=` and `FOverLB=`. |
| `isGlobalCoor` | Optional. Omit it to write `CoordSys=GLOBAL`. Any supplied value writes `CoordSys=LOCAL`. |

## Remarks

- Each line is joined by three spaces, in this order: `Frame`, `LoadPat`, `CoordSys`, `Type`, `Dir`, `DistType`, `RelDistA`, `RelDistB`, `FOverLA`, `FOverLB`.
- `Type` is always `Force`. `DistType` is always `RelDist`. `RelDistA` is always `0` and `RelDistB` is always `1`, so the load covers the whole member. Both end intensities are `Value`.
- `MAP` returns one text line for each name in `Frames`, in the same shape as `Frames`.

> [!warning]
> The formula does not read the value of `isGlobalCoor`. `IF(ISOMITTED(isGlobalCoor), TRUE, FALSE)` writes `GLOBAL` only when the argument is omitted. Passing `TRUE` writes `LOCAL`.

- The lines belong under the table header from [[s2k_FrameDistributedLoadHeader]], `Table: "FRAME LOADS - DISTRIBUTED"`.
- The formula has no error branch.

One line has this shape when `isGlobalCoor` is omitted:

```
Frame=<frameName>   LoadPat=<LoadPat>   CoordSys=GLOBAL   Type=Force   Dir=<Dir>   DistType=RelDist   RelDistA=0   RelDistB=1   FOverLA=<Value>   FOverLB=<Value>
```

## Related functions

- [[s2k_FrameDistributedLoadHeader]] — header for the same table.
- [[s2k_loadPat]] — the load pattern named in `LoadPat`.
