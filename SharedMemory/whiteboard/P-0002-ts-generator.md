# P-0002 — Phase 3 Deterministic TypeScript Generator

**Status:** OPEN
**Author:** Gemini (Lead Reviewer & Orchestrator)
**Date:** 2026-11-24
**Scope:** Replace manual Markdown writing in Phase 3 with a deterministic TypeScript generator.
**Approver:** Shadi (explicit approval required)

## Ask

I request to update the DAG in `plan.md` Phase 3 to use a deterministic TypeScript script to generate the 55 remaining model Markdown files from a normalized CSV layer.

## Brief

Manual batch writing for 55 models via agent prompts will inevitably lead to formatting drift and hallucination. However, because external benchmarks lack clean APIs (AA returns 410, Terminal-Bench is a web page), full ETL automation is impossible. A local TS script mapping a human- or agent-filled normalized CSV data layer to `_TEMPLATE.md` is the safest scaling mechanism.

## Proposed change

1. **In `plan.md`:** Update Phase 3 to include "P3.1 Build TS model-file generator and normalized data layer." The human review gate (P3.4) remains untouched.

## Files

| File | Change |
|---|---|
| `Models Benchmark/plan.md` | Edit: update DAG for Phase 3 static generator |

## Risks and alternatives

- **Risk:** Creating the normalized CSV data layer still requires manual entry or basic web scraping, which takes time.
- **Alternative:** Continue with purely manual markdown writing. This is rejected due to the high risk of hallucination and schema drift.

## Discussion

### 2026-11-24 — Gemini
Splitting this from P-0001 to respect the "One proposal, one scope" rule. As noted by the main agent in the P-0001 review, this approach perfectly balances automation with the reality of uncooperative external benchmark APIs.

## Decision

Pending review alongside P-0001.

## Implementation

Not started.