# Phase 2 — Task Taxonomy and Decision Weights (P4.1)

**Version:** 1.0
**Status:** Approved for P4.1; calculator is P4.2
**Dataset:** `data/model-benchmarks.csv`, locked at 62 models
**Dataset SHA-256:** `0ba9c2d26ed4ba4647945227ff6727b6579d12ac2d59ca0d3ef7a8f41c8e644b`

This document defines **what** Phase 2 ranks and **how much each signal counts**. It does not implement the calculator or claim measured visual capability.

## 1. Inputs and coverage

The locked set contains 7 protected samples and 55 drafts. Coverage is uneven, so the weights use broadly covered metrics and treat sparse benchmarks as tie-breakers.

| Signal | Coverage | Role |
|---|---:|---|
| AA Intelligence Index | 26 / 62 (41.9%) | Broad capability anchor |
| Terminal-Bench 4.1 | 21 / 62 (33.9%) | Agentic coding anchor |
| LiveBench categories | 24 / 62 (38.7%) | Reasoning, coding, math, data, language, IF |
| LMArena Text | 6 / 62 (9.7%) | Writing tie-breaker only |
| SWE-bench Verified | 3 / 62 (4.8%) | Coding tie-breaker only |
| Go cost, context, modalities, allowance | 62 / 62 (100%) | Eligibility and economics |

Scores are **relative to this Go set**, not universal model rankings. Missing data is a gap, never a zero.

## 2. Task profiles

| Task | Definition | Primary metric |
|---|---|---|
| `planning` | Architecture, DAGs, decomposition, trade-off analysis, implementation plans | AA |
| `research` | Synthesis across long documents, source reading, cross-referencing | AA |
| `extraction` | Structured extraction, normalization, table repair, high-volume cleanup | LB IF |
| `coding` | Scripts, repo edits, agentic terminal work, debugging | TB |
| `verification` | Number checks, QA, second opinions, consistency review | AA |
| `writing` | Prose, docs, summaries, editing | LB language |
| `long_context` | Tasks that need large context windows or high context headroom | AA |
| `multimodal` | Image, audio, or video input; **Proxy Only** | AA |
| `vision_to_code` | UI/frontend generation from design mockups; **Proxy Only** | TB |
| `latency` | Interactive work with strict time-to-first-token or latency | Time per task |

`budget` is not a task. It is a global modifier; see §4.

## 3. Core weights

Weights sum to 100 for each task. `—` means the metric does not participate.

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
| vision_to_code | 30 | 35 | — | 20 | — | — | — | — | 15 | — | — | — | — | — |
| latency | 20 | — | — | — | — | — | — | — | 10 | 20 | 20 | 30 | — | — |

## 4. `--budget` modifier

`--budget` can be applied to any task. It is not a separate ranking.

1. Scale every performance weight (AA, TB, LB, speed, TTFT, time, context) by **0.75**.
2. Add **15 points to Cost** and **10 points to Req/mo**. If the task has no Req weight, add the full **25 points to Cost**.
3. Renormalize to 100. Tie-breakers remain capped.

Example — coding:

| Metric | Default | With `--budget` |
|---|---:|---:|
| AA | 20.0 | 14.5 |
| TB | 45.0 | 32.5 |
| LB coding | 20.0 | 14.5 |
| Cost | 15.0 | 38.6 |
| Req/mo | — | — |

No core task carries a Req/mo weight, so the modifier adds the full 25 points to Cost. If a future task has a Req/mo weight, the split becomes +15 Cost / +10 Req.

The output records `modifier: budget` and the adjusted weights.

## 5. Primary-metric rule

A model missing a task’s primary metric is **unproven**, not automatically competitive.

- Apply a **0.8× score multiplier**.
- Cap confidence at **40%**.
- Label the row **“unproven primary metric.”**
- Do not place it in the default top three; it may appear under “unproven alternatives.”
- Missing non-primary metrics are dropped and the remaining weights are renormalized; confidence records the gap.
- `latency` is stricter: missing TTFT/speed excludes the model; no imputation.

This prevents a cheap general-text model with no Terminal-Bench evidence from winning `coding` merely because TB was absent.

## 6. Cost and effort

- Use `aa_cost_task_usd` when present; it reflects the evaluated configuration.
- Otherwise use the standard Go request cost: 800 fresh input + 50K cache read + 150 output.
- If fallback cost is used and `evaluated_effort` is `max` or `xhigh`, multiply by **1.5**; for `high`, multiply by **1.2**. Flag **“effort-adjusted heuristic”** and reduce confidence by 10%.
- If effort is `unknown`, keep list-price cost, flag **“effort unverified,”** and reduce confidence by 5%.
- Free models score at the top of cost but are excluded when ZDR is required.
- Cost is an inverse percentile: cheaper is better.

## 7. Proxy-only visual tasks

The dataset has **no true visual benchmark** — no MMMU, MathVista, or equivalent.

- `multimodal` requires at least one non-text input; it is scored on text-reasoning proxies.
- `vision_to_code` requires `image` input and blends TB/LB coding with AA as a text-reasoning proxy.
- Both must carry **“PROXY ONLY — visual quality unverified”** in every output.
- Do not describe these results as measured multimodal capability.

## 8. Eligibility filters

| Filter | Rule |
|---|---|
| Context | Model context must meet the task requirement |
| Modalities | Required inputs must be present; output is text |
| ZDR | `--zdr` excludes free/stealth models and non-ZDR providers |
| Capability floor | Optional `--min-aa` / `--min-tb`; missing floor metric fails conservatively |
| Latency | TTFT/speed must exist for `latency`; no imputation |
| Vision | `vision_to_code` requires image; `multimodal` requires image/audio/video |

## 9. Two modes

### Balanced (default)

Weighted composite with coverage, confidence, primary-metric penalty, and top three. Best for general guidance.

### Optimize

Apply hard floors first, then sort survivors by one objective. Best for procurement-style decisions.

| Task | Initial hard floor |
|---|---|
| planning | AA ≥ 15 or TB ≥ 10 |
| research | AA ≥ 15 |
| extraction | LB IF ≥ 50 or AA ≥ 15 |
| coding | TB ≥ 20 |
| verification | AA ≥ 15 |
| writing | LB language ≥ 60 |
| long_context | Context ≥ requirement |
| multimodal | Required modality present |
| vision_to_code | Image present and TB ≥ 10 |
| latency | TTFT/speed present |

- `--optimize cost` — lowest effort-adjusted cost.
- `--optimize latency` — lowest TTFT, then lowest time per task.
- `--optimize capability` — highest balanced score.
- In optimize mode, a missing primary metric excludes the model. No penalty-based ranking.
- Floors are versioned. Changes require a proposal update and a new P4.3 validation run.

## 10. Normalization and confidence

- Percentile rank within the eligible set; ties use midrank.
- Cost, time, and TTFT are inverse percentiles; higher speed and req/mo are better.
- `coverage = sum(available core weights) / 100`.
- Rank only at coverage ≥50%; 40–49% is low confidence; below 40% is “insufficient evidence.”
- Primary-metric penalty: 0.8× score, confidence cap 40%, unproven label.
- A proxy/variant/preliminary flag reduces confidence by 10% (maximum 20%); it never changes the score.
- Report score, coverage, confidence tier, configuration caveats, and the reasons behind the top three.

## 11. Sparse-evidence tie-breakers

- SWE-bench is a **coding** tie-breaker.
- LMArena is a **writing** tie-breaker.
- A tie-breaker may reorder models within a 5-point score gap; it may never move a model more than 5 points or promote it across a larger gap.
- Tie-breakers are not core weights and do not affect coverage.

## 12. Output contract

Every routing result must include:

1. Task, filters, mode, and budget modifier.
2. Top three with score, coverage, confidence tier, and evaluated configuration.
3. Reasons and caveats for each recommendation.
4. Unproven alternatives, clearly separated.
5. Excluded-model count and floor failures.
6. **PROXY ONLY** for `multimodal` and `vision_to_code`.
7. A note that scores are relative to the locked 62-model Go set.

No single “best model” claim is permitted.

## 13. Change control

- This taxonomy is `v1.0`; the dataset remains locked and unchanged.
- Weight, floor, or task changes require a whiteboard proposal and a new version.
- P4.3 must validate the outputs on real tasks before P4.4 publishes a routing table or calculator.
