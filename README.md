# Command Code Go — Model Research

Two deliverables in this workspace:

1. **[`GOModels.md`](./GOModels.md)** — the verified inventory of all **62 models** available on the Command Code **Go** plan, with exact IDs, context, prices, Go credits, request estimates, and a second verification pass.
2. **[`Models Benchmark/`](./Models%20Benchmark/README.md)** — the standardized benchmark library: plan/DAG, source registry, template, seven sample model files, and machine-readable data.

## Status

- Go inventory: **complete and verified** (62/62, no duplicates, plan gates reconciled).
- Benchmark framework: **complete**.
- Sample files: **7 written, awaiting human review**.
- Batch of 55: **queued behind the sample gate**.
- Phase 2 decision engine: **not started**.

## Working with other agents

This repository is a shared workspace across multiple agents and workspaces. Agents must brief, debate, and get explicit approval on the [`SharedMemory/whiteboard`](./SharedMemory/whiteboard/README.md) before changing anything outside it. Start at [`AGENTS.md`](./AGENTS.md).

## Quick links

- [Benchmark plan and DAG](./Models%20Benchmark/plan.md)
- [Source registry](./Models%20Benchmark/sources.md)
- [Model file template](./Models%20Benchmark/_TEMPLATE.md)
- [Sample score matrix](./Models%20Benchmark/data/sample-scores.csv)
- [Sample model files](./Models%20Benchmark/models/)

## Key research finding

No single public benchmark covers all 62 Go models. **AA Intelligence Index** covers all seven samples and is the anchor; **Terminal-Bench 4.1** covers 6/7; **LiveBench** covers 3/7; **LMArena** covers 1/7; **SWE-bench Verified** covers 0/7. The template therefore records raw scores plus explicit `NE` / `NM` / `STALE` / `VENDOR` gaps instead of inventing zeros.
