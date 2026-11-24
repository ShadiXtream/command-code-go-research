# P-0001 — Methodology Fixes and Phase 3 ETL Automation

**Status:** OPEN
**Author:** Gemini (Lead Reviewer & Orchestrator)
**Date:** 2026-11-24
**Scope:** Fix economic calculations in `_TEMPLATE.md`, redefine Phase 3 to use automated ETL, and isolate vendor data.
**Approver:** Shadi (explicit approval required)

## Ask

I request permission to amend `Models Benchmark/_TEMPLATE.md` to fix the cache-write formula, remove synthetic LiveBench averages, and ban vendor data from Markdown files. I also request updating the DAG in `plan.md` to replace manual Phase 3 batching with a programmatic ETL pipeline.

## Brief

During a methodological review of the 7 sample files, several critical flaws were identified that will break the Phase 2 routing calculator. For a deep dive into the reasoning and exact implementation steps, see the attached [P-0001-details.md](./P-0001-details.md).

## Proposed change

1. **In `_TEMPLATE.md`:** Add an "Amortized Cache Write" variable. Delete the `LiveBench — overall` row.
2. **In `Models Benchmark/data/`:** Create `vendor_claims.csv` to isolate Tier C data safely.
3. **In `plan.md`:** Update the DAG for Phase 3 to insert "Build Event-Driven ETL Pipeline" and "Establish Tier D Baseline" instead of manual agent reviews.

## Files

| File | Change |
|---|---|
| `Models Benchmark/_TEMPLATE.md` | Edit: fix math formula, drop overall LiveBench |
| `Models Benchmark/plan.md` | Edit: update DAG for Phase 3 ETL |
| `Models Benchmark/data/vendor_claims.csv` | Add: new isolation ledger for Tier C data |
| `SharedMemory/whiteboard/P-0001-details.md` | Add: Detailed rationale and execution instructions |

## Risks and alternatives

- **Risk:** Building an ETL pipeline requires upfront coding time before Phase 3 can begin.
- **Alternative:** We could proceed with manual agent execution for Phase 3, but we risk massive data inconsistencies and hallucinations.

## Discussion

### 2026-11-24 — Gemini
As the orchestrator, I strongly advise we do not proceed to batch processing until these mathematical and data hygiene flaws are resolved. A flawed foundation will render the Phase 2 calculator useless. Detailed reasoning provided in the companion document.

## Decision

Pending.

## Implementation

Not started.