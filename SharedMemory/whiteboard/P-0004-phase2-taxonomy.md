# P-0004 — Phase 2 task taxonomy and decision weights

**Status:** OPEN
**Author:** Command Code (main agent)
**Date:** 2026-11-25
**Scope:** P4.1 only — define the task taxonomy, per-task weights, eligibility filters, and confidence rules. No scoring code, calculator, or dataset changes.
**Approver:** user (explicit approval required)

## Ask

Approve the ten-task taxonomy, per-task weights, eligibility filters, and confidence rules below. After approval I will write `Models Benchmark/phase2/taxonomy.md` and update the Phase 2 status in `plan.md` and `README.md`.

## Brief

The dataset is locked at 62 models (7 samples + 55 drafts; SHA-256 `0ba9c2d…644b`). Coverage is uneven: AA index 26/62, Terminal-Bench 21/62, LiveBench categories 24/62, LMArena 6/62, SWE-bench 3/62. Arena and SWE are too sparse to be core weights; they should be tie-breakers only. AA is the broadest anchor, with TB and LiveBench as secondary evidence. Cost, context, modality, and Go allowance are available for all models.

Phase 2 must not produce a single "best model" ranking. It must produce task-specific routing with explicit eligibility, coverage, and confidence.

## Proposed change

### 10 tasks

| Task | Use case |
|---|---|
| `planning` | Architecture, DAGs, decomposition, implementation plans |
| `research` | Long-document synthesis, source reading, cross-referencing |
| `extraction` | Structured extraction, normalization, table repair |
| `coding` | Scripts, repo edits, agentic terminal work |
| `verification` | Number checks, QA, second opinions, consistency review |
| `writing` | Prose, docs, summaries, editing |
| `long_context` | Tasks that need large context windows |
| `multimodal` | Image, audio, or video input |
| `latency` | Interactive work with strict time-to-first-token/latency |
| `budget` | High-volume, cost-capped work |

### Core weights (sum 100)

| Task | AA | TB | LB reasoning | LB coding | LB math | LB data | LB language | LB IF | Cost | Speed | TTFT | Time | Req/mo | Context |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| planning | 45 | 25 | 15 | — | — | — | — | — | 15 | — | — | — | — | — |
| research | 40 | — | 20 | — | — | — | 15 | — | 15 | 10 | — | — | — | — |
| extraction | 20 | — | — | — | — | 20 | — | 25 | 25 | 10 | — | — | — | — |
| coding | 20 | 45 | — | 20 | — | — | — | — | 15 | — | — | — | — | — |
| verification | 40 | 10 | 20 | — | 15 | — | — | — | 15 | — | — | — | — | — |
| writing | 25 | — | — | — | — | — | 30 | 20 | 15 | 10 | — | — | — | — |
| long_context | 35 | — | 20 | — | — | — | — | — | 20 | 10 | — | — | — | 15 |
| multimodal | 40 | — | 20 | — | — | — | — | — | 20 | 20 | — | — | — | — |
| latency | 20 | — | — | — | — | — | — | — | 10 | 20 | 20 | 30 | — | — |
| budget | 25 | 15 | — | — | — | — | — | — | 40 | — | — | — | 20 | — |

- **Sparse evidence:** SWE-bench is a coding tie-breaker; LMArena is a writing tie-breaker. They can break a gap of ≤5 points but never move a model more than 5 points.
- **Cost:** AA cost/task when available; otherwise the standard Go request cost (800 fresh input + 50K cache read + 150 output) from the Go inventory. Free models score at the top of cost but are excluded when ZDR is required.
- **Context:** hard filter first; for `long_context`, context headroom is also scored.

### Eligibility filters

- Minimum context window; required input modalities; text output.
- `--zdr` excludes free/stealth models and any row without a ZDR-compatible provider.
- Optional capability floor (`--min-aa`, `--min-tb`); a missing floor metric fails conservatively.
- `latency` excludes models without TTFT/speed data rather than imputing a score.

### Normalization and confidence

- Percentile rank within the eligible set (midrank for ties); cost/time/TTFT are inverse percentiles.
- Missing metric: drop it and renormalize the remaining weights.
- `coverage = sum(available core weights) / 100`.
- Rank only at coverage ≥50%; show 40–49% as low confidence; below 40% is "insufficient evidence".
- A proxy/variant/preliminary flag reduces confidence by 10% (max 20%); it never changes the score.
- Report score, coverage, confidence tier, configuration caveats, and the reasons behind the top three.

### P4.1 deliverables

- `Models Benchmark/phase2/taxonomy.md` — tasks, weights, filters, confidence definitions, and examples.
- `Models Benchmark/plan.md` — P4.1 done; P4.2 next.
- `Models Benchmark/README.md` — Phase 2 entry point.

P4.2 (scoring spec + calculator) is a separate follow-up; this proposal does not implement it.

## Files

| File | Change |
|---|---|
| `Models Benchmark/phase2/taxonomy.md` | Add: P4.1 taxonomy, weights, filters, confidence rules |
| `Models Benchmark/plan.md` | Edit: Phase 2 status; P4.1 done, P4.2 next |
| `Models Benchmark/README.md` | Edit: link the taxonomy and state Phase 2 has started |

## Risks and alternatives

- **Risk — weights imply false precision.** Mitigation: scores are relative to the Go set, confidence is mandatory, and no single best-model claim is published.
- **Risk — sparse data dominates.** Mitigation: only broadly covered metrics carry core weight; Arena/SWE are capped tie-breakers.
- **Risk — missing data hides weak models.** Mitigation: coverage gate and low-confidence labels; no zero-fill.
- **Alternative — one global score.** Rejected: it would rank models on benchmarks they do not have and repeat the failure mode the dataset was built to avoid.
- **Alternative — wait for full benchmark coverage.** Rejected: coverage will stay uneven; explicit confidence is more useful than blocking Phase 2.

## Discussion

### 2026-11-25 — Command Code (main agent)

P3.4/P3.5 locked the 62-model dataset. The user said “go ahead” for P4.1 after the lock. This proposal is the required design gate before writing Phase 2 project files.

## Decision

Pending.

## Implementation

Not started.
