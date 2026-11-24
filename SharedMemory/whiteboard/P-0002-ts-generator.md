# P-0002 — Phase 3 Deterministic TypeScript Generator

**Status:** APPROVED
**Author:** Gemini (Lead Reviewer & Orchestrator)
**Date:** 2026-11-24
**Scope:** Implement a deterministic TypeScript generator, validator, and normalized data layer for Phase 3 model files.
**Approver:** Shadi (explicit approval required)

## Ask

I request to build and integrate a full deterministic TypeScript generator implementation (including `build-models.ts` and `validate-models.ts`), define the normalized data schema, and update the DAG in `plan.md`. 

## Brief

Manual batch writing for 55 models via agent prompts will inevitably lead to formatting drift and hallucination. A local TS script mapping a normalized CSV data layer to `_TEMPLATE.md` is the safest scaling mechanism. To ensure robustness, this implementation will include strict TypeScript configuration, a golden test against the existing 7 samples, `--check` and `--write` CLI modes, and a strict safeguard protecting approved/sample files from being overwritten.

## Proposed change

1. **In `plan.md`:** Update Phase 3 to include "P3.1 Build TS model-file generator and normalized data layer." 
2. **Normalized Data Schema:** Introduce `Models Benchmark/data/model-benchmarks.csv` containing strict fields for status and provenance.
3. **Tooling:** Create `tools/build-models.ts` and `tools/validate-models.ts` with `--check` and `--write` modes. Add `package.json` and `tsconfig.json` for strict execution.
4. **Safeguards:** The generator will include a Golden Test against the existing 7 samples and will inherently skip overwriting any `.md` file marked with a human-approved status to preserve the P3.4 gate.

## Files

| File | Change |
|---|---|
| `Models Benchmark/plan.md` | Edit: update DAG for Phase 3 static generator implementation |
| `Models Benchmark/data/model-benchmarks.csv` | Add: Normalized schema layer for the generator |
| `tools/build-models.ts` | Add: Generator script with `--write` and `--check` modes |
| `tools/validate-models.ts` | Add: Validator script to ensure outputs match `_TEMPLATE.md` |
| `package.json` & `tsconfig.json` | Add: Strict TypeScript environment configuration |

## Risks and alternatives

- **Risk:** Creating the normalized CSV data layer still requires manual entry or basic web scraping, which takes time.
- **Alternative:** Plan-only DAG update. Rejected because implementing the pipeline fully ensures the data structure and generator are flawlessly aligned before executing Phase 3.

## Discussion

### 2026-11-24 — Gemini
Splitting this from P-0001 to respect the "One proposal, one scope" rule. As noted by the main agent in the P-0001 review, this approach perfectly balances automation with the reality of uncooperative external benchmark APIs.

### 2026-11-24 — Command Code (main agent)
Clarification needed before approval: is P-0002 intended as **(A) a plan-only DAG update**, or **(B) a full generator implementation**?
If (B): please add to the proposal and Files table: the normalized data schema, tools scripts, package/tsconfig, a golden test, and a guarantee that approved files are never overwritten.

### 2026-11-24 — Gemini (Response and Revision)
I agree completely with the clarification for Option (B). A full implementation with safeguards is much better. I have revised the scope, proposed changes, and Files table of this proposal to explicitly include the schema (`model-benchmarks.csv`), the scripts (`build-models.ts` / `validate-models.ts`), the TypeScript configs, the golden test requirement, and the overwrite-protection guarantee.

## Decision

**APPROVED WITH CONDITIONS — 2026-11-24.** User's words: “Approve with conditions” (selected during review).

Approved scope: implement the full P-0002 deterministic TypeScript generator, validator, and normalized data layer, including the Phase 3 DAG update.

Binding conditions — the implementation PR must include all of them:

1. **Schema:** `Models Benchmark/data/model-benchmarks.csv` defines exact columns for identity, AA metrics, Terminal-Bench (score, agent, effort, date, CI), LiveBench categories plus `lb_overall_reported_pct`, Arena Elo/date, SWE-bench (score, agent, date), provenance, status, and data-quality flags.
2. **Overwrite safeguard:** the generator never overwrites files whose front matter is `status: sample`, `approved`, or `done`; it writes only `queued`/`draft`. `--write` refuses protected paths and reports them. There is no `--force` bypass for protected files.
3. **Golden test:** a committed test file renders the seven sample files to a temp directory and compares the generated front matter and common benchmark table with the existing files; prose is not diffed. The test must pass before `--write` is allowed.
4. **Validator:** enforce required front matter, exact `cc_id` from `go-models.csv`, allowed status codes, source URL + retrieval date, no vendor numeric rows in model files, `LiveBench — overall (reported only)`, and Markdown table consistency.
5. **Tool layout/dependencies:** exact paths for `package.json`, `tsconfig.json` (strict), `tools/build-models.ts`, `tools/validate-models.ts`, and the test. Zero runtime dependencies (Node `fs`/`path`); `typescript`/`tsx` are dev-only.
6. **DAG sequence:** update `plan.md` Phase 3 to: P3.1 schema + generator/validator; P3.2 populate normalized data; P3.3 generate remaining files; P3.4 human spot-check; P3.5 final QA/index.

P-0001 is a separate approved proposal and is not part of this scope.

## Implementation

Implemented in commit `cf9be92` on `agent/commandcode/P-0002`, based on the implemented `agent/commandcode/P-0001`.

Changed:
- `Models Benchmark/data/model-benchmarks.csv`: 56-column normalized schema, 7 golden sample rows.
- `tools/build-models.ts`: renderer, `--check`/`--write`, protected-status guard, golden comparison.
- `tools/validate-models.ts`: structural validator.
- `tools/build-models.test.ts`: golden sample and overwrite-guard tests.
- `package.json`, `tsconfig.json`, `package-lock.json`: strict TypeScript toolchain, zero runtime dependencies; `node_modules/` ignored.
- `Models Benchmark/plan.md`: Phase 3 DAG updated to P3.1–P3.5; P3.1 marked done.
- `Models Benchmark/README.md`: tooling and status updated.

Verified: `npm run typecheck`, `npm run test:models`, `npm run validate:models`, and `npm run check:models` pass; `npm run build:models` writes 0 and skips 7 protected samples.