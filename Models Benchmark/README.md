# Models Benchmark

Standardized benchmark files for every model on the **Command Code Go plan**.

## Start here

| File | What it is |
|---|---|
| [`plan.md`](./plan.md) | The DAG, methodology, common benchmark set, human-review gates, and 62-model status checklist |
| [`sources.md`](./sources.md) | Credibility tiers, URLs, methodology caveats, and the conflict log |
| [`_TEMPLATE.md`](./_TEMPLATE.md) | The exact schema every model file must follow |
| [`../GOModels.md`](../GOModels.md) | The verified 62-model Go inventory (IDs, prices, credits) |
| [`models/`](./models/) | One Markdown file per model |
| [`data/model-benchmarks.csv`](./data/model-benchmarks.csv) | Normalized 56-column schema; currently the seven golden samples |
| [`data/vendor_claims.csv`](./data/vendor_claims.csv) | Isolated vendor/third-party claims; never used in rankings |
| [`data/`](./data/) | Machine-readable snapshots: Go inventory, LiveBench CSV, SWE-bench CSV, Terminal-Bench Go rows, sample score matrix |
| [`../tools/`](../tools/) | Strict TypeScript generator, validator, and golden test |

## Current state

- **Inventory:** 62/62 Go models verified.
- **Samples:** 7 files, protected as `status: sample` — Qwen 4 Max, Kimi K3.1 Pro, Tencent Hy4, GLM-5.3, Muse Ember, GPT-6 Luna, DeepSeek V4 Pro.
- **Model files:** 47 — 7 protected samples + 40 Batch A/B/C drafts.
- **Approvals:** P-0001 (data hygiene) and P-0002 (generator) approved; the Batch A pilot is recorded in P-0003.
- **P3.1 tooling:** complete — normalized schema, generator, validator, golden test.
- **Batch A+B+C:** 40/55 drafts generated from the normalized CSV; 15 models queued.
- **Phase 2:** not started; begins after the dataset is locked.

## Run the tools

```bash
npm install
npm run check:models     # schema + files + golden samples
npm test                 # golden samples + overwrite guard
npm run validate:models  # structural validation
npm run build:models     # writes queued/draft only; sample/approved/done are protected
```

## Data helpers

- `tools/livebench-categories.mjs` — recomputes the six LiveBench category scores from the official CSV using the project mapping verified against the seven samples.
- `tools/extract-aa-model.mjs` — extracts the embedded AA model details from a saved AA model page. Best-effort: AA pages vary by variant, so review the extracted fields and flags.

## How to review the samples

1. Open `plan.md` §2 and §4 to see why the benchmark set is shaped this way.
2. Open at least five files in `models/`. Check:
   - the Go price/credits match `../GOModels.md`;
   - the AA index, cost, time, TTFT, and speed match the linked AA page;
   - the Terminal-Bench score, harness, and effort match `www.tbench.ai`;
   - missing benchmarks are marked `NE` / `NM` / `STALE`, not zero;
   - the verdict is consistent with the evidence.
3. Open `data/sample-scores.csv` for the side-by-side matrix.
4. Flag specific numbers in the whiteboard; sample data remains spot-checkable even though the methodology is approved.

## Design rule

> A missing benchmark is a gap, not a zero. Never rank a model on data it does not have.
