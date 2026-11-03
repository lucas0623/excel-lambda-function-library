---
created: 2026-11-03
tags:
  - trigonometry
  - triangle
aliases:
  - SOLVETRIANGLE
AI Reviewed: true
example: "[[Geometry Family.xlsx]]"
---

## Overview

Solves one triangle from two sides and the included angle.

Example file: [[Geometry Family.xlsx]]

This is SAS only. Side `a` is opposite angle A, side `b` is opposite angle B, and `angleC` is the included angle at C, in degrees. The function does not solve ASA, SSS, or SSA.

## Syntax

```
=SolveTriangle(a, b, angleC, output)
```

The SolveTriangle function has the following arguments:

| Argument | Description |
| --- | --- |
| `a` | Required. Side a. |
| `b` | Required. Side b. |
| `angleC` | Required. Included angle at C, in degrees. |
| `output` | Required. `a`, `b`, `c`, `AngleA`, `AngleB`, or `AngleC`. |

## Remarks

- Side c is the law of cosines:

$$
c = \sqrt{a^2+b^2-2ab\cos C}
$$

- Angles A and B use the law of cosines and `ACOS`, so a result can be obtuse. The previous formula used `ASIN`, which cannot return an angle greater than 90.
- Angles are degrees from 0 to 180.
- An unknown `output` name returns the text `Cannot Identify '<output>' output.`
- A zero side on a requested angle returns `#DIV/0!`.
- The name stays `SolveTriangle`. The comment states that the solver is SAS only.

## Example

The sample data is on the `example` sheet of [[Geometry Family.xlsx]]. Blue cells are inputs.

![[SolveTriangle-20261103020343.jpeg]]

| a | b | angleC | output | Formula | Result |
| --- | --- | --- | --- | --- | --- |
| 3 | 4 | 90 | c | `=SolveTriangle(A18,B18,C18,D18)` | 5 |

## Tests

The `test` sheet checks side c and both acute angles of the 3-4-5 triangle against `ACOS`, an obtuse angle A, an unknown output name, and a zero side. Excel calculated 6 cases. All 6 passed.

For `a = 5`, `b = 1`, and `angleC = 20`, angle A is about 155.19°. The expected value is `DEGREES(ACOS(...))` from the law of cosines, and it is greater than 90.

| Case | Result |
| --- | --- |
| 3, 4, 90, side c | 5 |
| 3, 4, 90, angle A | `DEGREES(ACOS(0.8))` |
| 3, 4, 90, angle B | `DEGREES(ACOS(0.6))` |
| Obtuse angle A | greater than 90 |
| output `nope` | `Cannot Identify 'nope' output.` |
| Side a is 0, angle B | `#DIV/0!` |

## Related functions

- [[AngleBetween3Points]] — interior angle when the three vertices are known instead of SAS.
