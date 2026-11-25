# Roadmap — Command Code Go Research

**Last updated:** 2026-11-25
**Current focus:** P4.2 — scoring spec and calculator
**Dataset:** locked at 62 models, SHA-256 `0ba9c2d26ed4ba4647945227ff6727b6579d12ac2d59ca0d3ef7a8f41c8e644b`
**Open PR:** [#12](https://github.com/ShadiXtream/command-code-go-research/pull/12) — P4.1 taxonomy (CLEAN; awaiting merge)
**Branch for P4.1:** `agent/commandcode/P-0004`

Status legend: `[x]` done · `[~]` in progress · `[ ]` pending · `[!]` blocked.

## Final goal

A trustworthy, evidence-based routing system for the 62 Command Code Go models: per-task recommendations with explicit eligibility, coverage, confidence, and cost — plus a calculator and validation record. It must never collapse into a single “best model” claim.

## Roadmap checklist

### Phase 0 — Research and inventory

- [x] Enumerate all 62 Go models.
- [x] Verify inventory against live Go pages and the catalog.
- [x] Research AA, Terminal-Bench, LiveBench, LMArena, SWE-bench, and vendor sources.
- [x] Define the 56-column schema, missing-data rules, and common benchmark set.
- [x] Produce the initial routing recommendation.

### Phase 1 — Inventory and scaffold

- [x] Write `GOModels.md`.
- [x] Second verification pass; resolve live additions.
- [x] Create `Models Benchmark/` scaffold, `sources.md`, `_TEMPLATE.md`, and `data/`.

### Phase 2 — Samples and human gate

- [x] Select 7 archetype samples.
- [x] Fetch AA/TB/LB/Arena/SWE data for samples.
- [x] Write and self-check the 7 sample files.
- [x] P-0001/P-0002 approved; samples remain protected.

### Phase 3 — Normalized data and all model files

- [x] P3.1 schema, TypeScript generator/validator, golden test.
- [x] P3.2 populate all 55 remaining models in four batches.
- [x] P3.3 generate 55 draft files (62 total).
- [x] P3.4 spot-check 6 random + 27 flagged rows; fix LiveBench gaps and Flint reasoning.
- [x] P3.5 coverage audit, checklist index, dataset lock.
- [x] Merge PRs #7–#11; `main` synced at `6240194`.

### Phase 4 — Decision system

- [x] P4.0 dataset locked; Phase 2 can begin.
- [x] P4.1 task taxonomy and weights — `Models Benchmark/phase2/taxonomy.md`; approved by Shadi; D-0006; PR #12.
- [~] P4.2 scoring spec + calculator — **current work**:
  - [ ] `Models Benchmark/phase2/scoring-spec.md`
  - [ ] `tools/score-models.ts`
  - [ ] `tools/score-models.test.ts`
  - [ ] `npm run score:models`
  - [ ] plan/README status update
- [ ] P4.3 validate on real tasks; record predicted vs actual and misses.
- [ ] P4.4 publish routing table + calculator.
- [ ] Final QA, handoff, and closeout.

## Resume here

1. Read `AGENTS.md`, `SharedMemory/whiteboard/README.md`, and this file.
2. Check open PRs and `main`; do not merge without explicit user approval.
3. PR #12 contains P4.1. P4.2 is stacked on `agent/commandcode/P-0004`.
4. The dataset is locked: do not edit `data/model-benchmarks.csv`, `models/*.md`, or `dataset-lock.json` without a new proposal.
5. Run `npm run typecheck`, `npm run test:models`, `npm run validate:models`, and `npm run check:models` before claiming completion.
6. Verify Markdown tables and local links; the project has no CI, so local checks are the gate.

**Useful commands**

```bash
npm run check:models
npm run validate:models
npm run test:models
npm run typecheck
git log --oneline --decorate -10
gh pr list --state open
```

## Lessons learned

- **Coverage is uneven.** AA 26/62, TB 21/62, LiveBench categories 24/62, Arena 6/62, SWE 3/62. Sparse metrics must be tie-breakers, not core weights.
- **Missing data is a gap, not a zero.** Never fill with zero or a sibling’s score without a `PROXY`/`NM`/`NE` flag.
- **The model file is authoritative.** The plan checklist is an index; `model-benchmarks.csv` and the generated file are the contract.
- **LiveBench has task-level data.** The official CSV has no overall column. Derived categories are labeled; unverified reported overalls were removed.
- **Effort matters.** AA/TB/LB scores are effort-dependent; cost must not use a cheap base price for a Max-effort result.
- **Go credits are monthly allowances** inside the shared $10 pool, not plan prices.
- **Free/stealth models are not ZDR.** They may train on data and are capped at 1,000 requests/day.
- **The whiteboard gate works.** Proposals, decisions, and implementation records prevented accidental project edits.
- **GitHub can transiently 500 on push.** Retry after a short wait; the commit remains local.
- **Local validation is the CI.** Run typecheck, tests, validator, check mode, and table/link audits.

## What to avoid

- Do not edit the locked dataset or model files without a new approved proposal.
- Do not merge a PR without explicit user approval.
- Do not present a proxy or variant as an exact score.
- Do not rank models on benchmarks they do not have.
- Do not call `multimodal` or `vision_to_code` measured capability; the dataset has no visual benchmark.
- Do not use `go_credits` as a plan price.
- Do not use vendor claims in cross-model rankings.
- Do not skip the primary-metric penalty; a missing TB score should not let a general-text model win `coding`.
- Do not let the plan checklist override the CSV or model file.
- Do not add runtime dependencies to the scoring tools; the project is zero-runtime-dependency.

## Great vision

Turn a pile of model pages into a **decision instrument**: one that tells a builder which Go model to use for the task in front of them, how confident that recommendation is, what it will cost, and what evidence is missing. It should be honest about gaps, useful under budget pressure, and reproducible by any agent from the locked data. The end state is not a leaderboard — it is a routing system a human can trust and audit.
