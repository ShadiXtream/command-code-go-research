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
| [`data/`](./data/) | Machine-readable snapshots: Go inventory, LiveBench CSV, SWE-bench CSV, Terminal-Bench Go rows, sample score matrix |

## Current state

- **Inventory:** 62/62 Go models verified.
- **Samples:** 7 files ready for human review — Qwen 4 Max, Kimi K3.1 Pro, Tencent Hy4, GLM-5.3, Muse Ember, GPT-6 Luna, DeepSeek V4 Pro.
- **Batch:** 55 models queued, blocked on the sample review gate.
- **Phase 2:** not started; begins after the dataset is locked.

## How to review the samples

1. Open `plan.md` §2 and §4 to see why the benchmark set is shaped this way.
2. Open at least five files in `models/`. Check:
   - the Go price/credits match `../GOModels.md`;
   - the AA index, cost, time, TTFT, and speed match the linked AA page;
   - the Terminal-Bench score, harness, and effort match `www.tbench.ai`;
   - missing benchmarks are marked `NE` / `NM` / `STALE`, not zero;
   - the verdict is consistent with the evidence.
3. Open `data/sample-scores.csv` for the side-by-side matrix.
4. Approve, request schema changes, or flag specific numbers.

## Design rule

> A missing benchmark is a gap, not a zero. Never rank a model on data it does not have.
