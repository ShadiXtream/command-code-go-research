# P-0004 — Phase 2 task taxonomy and decision weights

**Status:** APPROVED
**Author:** Command Code (main agent)
**Date:** 2026-11-25
**Scope:** P4.1 only — define the task taxonomy, per-task weights, eligibility filters, and confidence rules. No scoring code, calculator, or dataset changes.
**Approver:** user (explicit approval required)

## Ask

Approve the ten-task taxonomy, per-task weights, qualifying rules, and confidence rules below. After approval I will write `Models Benchmark/phase2/taxonomy.md` and update the Phase 2 status in `plan.md` and `README.md`.

## Brief

The dataset is locked at 62 models (7 samples + 55 drafts; SHA-256 `0ba9c2d…644b`). Coverage is uneven: AA index 26/62, Terminal-Bench 21/62, LiveBench categories 24/62, LMArena 6/62, SWE-bench 3/62. Arena and SWE are too sparse to be core weights; they are capped tie-breakers. AA is the broadest anchor, with TB and LiveBench as secondary evidence. Cost, context, modality, and Go allowance are available for all models.

Phase 2 must not produce a single "best model" ranking. It must produce task-specific routing with explicit eligibility, coverage, confidence, and — where the dataset lacks true visual benchmarks — a clear **Proxy Only** label.

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
| `multimodal` | Image, audio, or video input; **Proxy Only** |
| `vision_to_code` | UI/frontend generation from design mockups; **Proxy Only** |
| `latency` | Interactive work with strict time-to-first-token/latency |

`budget` is **not** a task. It is a global modifier (`--budget`) applied to any task.

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
| vision_to_code | 30 | 35 | — | 20 | — | — | — | — | 15 | — | — | — | — | — |
| latency | 20 | — | — | — | — | — | — | — | 10 | 20 | 20 | 30 | — | — |

### Primary metric and missing-data penalty

Each task has one primary metric. Missing it is not a free pass.

| Task | Primary metric |
|---|---|
| planning | AA |
| research | AA |
| extraction | LB IF |
| coding | TB |
| verification | AA |
| writing | LB language |
| long_context | AA |
| multimodal | AA |
| vision_to_code | TB |
| latency | Time |

- **Primary metric present:** normal weighted score.
- **Primary metric missing:** apply a **0.8× score multiplier**, cap confidence at **40%**, label the row **“unproven primary metric”**, and do not place it in the default top three. It may appear as an unproven alternative.
- **Non-primary metric missing:** drop it and renormalize the remaining weights; coverage/confidence records the gap. No artificial penalty beyond reduced coverage.
- **Latency exception:** missing TTFT/speed excludes the model from `latency`; no imputation.

### `--budget` modifier

`--budget` shifts weight from performance to economics without creating a separate task:

- Scale every performance weight (AA, TB, LB, speed, TTFT, time, context) by **0.75**.
- Add **15 points to Cost** and **10 points to Req/mo**; if the task has no Req weight, add the full **25 points to Cost**.
- Renormalize to 100. Sparse tie-breakers remain capped.
- The output records `modifier: budget` and shows the adjusted weights.

### Cost vs effort

- Prefer `aa_cost_task_usd`; it reflects the evaluated configuration.
- Fallback: standard Go request cost (800 fresh input + 50K cache read + 150 output) from the Go inventory.
- If fallback cost is used and `evaluated_effort` is `max` or `xhigh`, multiply by **1.5**; for `high`, multiply by **1.2**. Flag as **“effort-adjusted heuristic”** and reduce confidence by 10%.
- If effort is `unknown`, keep list-price cost but flag **“effort unverified”** and reduce confidence by 5%.
- Free models score at the top of cost but are excluded when ZDR is required.

### Proxy-only tasks

The dataset has **no true visual/multimodal benchmark** (no MMMU, MathVista, or equivalent).

- `multimodal` requires at least one non-text input, but it is scored on AA/LB text-reasoning proxies.
- `vision_to_code` requires `image` input and blends TB/LB coding with AA as a text-reasoning proxy.
- Both outputs must carry **“PROXY ONLY — visual quality unverified”**. Do not describe them as measured multimodal capability.

### Eligibility filters

- Minimum context window; required input modalities; text output.
- `--zdr` excludes free/stealth models and any row without a ZDR-compatible provider.
- Optional capability floor (`--min-aa`, `--min-tb`); a missing floor metric fails conservatively.
- `vision_to_code` requires `image`; `multimodal` requires at least one of image/audio/video.

### Two modes: balanced and optimize

**Balanced (default):** weighted composite, coverage, confidence, top three.

**Optimize:** apply hard floors first, then sort survivors by one objective. This avoids the “mushy middle” where a model that is mediocre at everything outranks a specialist.

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

- `--optimize cost` sorts by lowest effort-adjusted cost.
- `--optimize latency` sorts by lowest TTFT, then lowest time/task.
- `--optimize capability` sorts by highest balanced score.
- In optimize mode, a missing primary metric excludes the model; no penalty-based ranking.
- Floors are versioned. Changes require a proposal update and a new validation run.

### Normalization and confidence

- Percentile rank within the eligible set (midrank for ties); cost/time/TTFT are inverse percentiles.
- `coverage = sum(available core weights) / 100`.
- Rank only at coverage ≥50%; show 40–49% as low confidence; below 40% is “insufficient evidence”.
- Primary-metric penalty caps confidence at 40% and applies the 0.8× score multiplier.
- A proxy/variant/preliminary flag reduces confidence by 10% (max 20%); it never changes the score.
- Report score, coverage, confidence tier, configuration caveats, and the reasons behind the top three.

### Sparse evidence tie-breakers

- SWE-bench is a **coding** tie-breaker.
- LMArena is a **writing** tie-breaker.
- A tie-breaker may reorder models within a 5-point score gap; it may never move a model more than 5 points or promote it across a larger gap.
- Tie-breakers are not core weights and do not affect coverage.

### P4.1 deliverables

- `Models Benchmark/phase2/taxonomy.md` — tasks, weights, primary metrics, budget modifier, filters, modes, confidence definitions, and examples.
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
- **Risk — renormalization rewards missing data.** Mitigation: primary-metric penalty, confidence cap, and unproven label.
- **Risk — sparse data dominates.** Mitigation: only broadly covered metrics carry core weight; Arena/SWE are capped tie-breakers.
- **Risk — effort-adjusted cost is a heuristic.** Mitigation: prefer AA cost/task; label fallback multipliers and reduce confidence.
- **Risk — hard floors are arbitrary.** Mitigation: start conservative, version the floors, and validate in P4.3 before publishing.
- **Alternative — one global score.** Rejected: it would rank models on benchmarks they do not have and repeat the failure mode the dataset was built to avoid.
- **Alternative — wait for full benchmark coverage.** Rejected: coverage will stay uneven; explicit confidence is more useful than blocking Phase 2.

## Discussion

### 2026-11-25 — Command Code (main agent)

P3.4/P3.5 locked the 62-model dataset. The user said “go ahead” for P4.1 after the lock. This proposal is the required design gate before writing Phase 2 project files.

### 2026-11-25 — Gemini (Lead Reviewer) — PR #12 comment

Gemini raised six issues: budget is a constraint, not a task; renormalization gives missing primary metrics a free pass; the taxonomy misses vision-to-code; multimodal has no true visual benchmark; cost must track `evaluated_effort`; and weighted sums create a mushy middle instead of hard thresholds plus single-objective sorting.

### 2026-11-25 — Command Code (main agent) — revision

Accepted all six points:

1. Removed `budget`; added `--budget` as a global weight modifier.
2. Added primary-metric penalties: 0.8× score, 40% confidence cap, unproven label, no default top three.
3. Added `vision_to_code`, requiring image input and blending TB/LB coding with AA.
4. Marked `multimodal` and `vision_to_code` **Proxy Only**; no visual benchmark is claimed.
5. Added effort-adjusted fallback cost (max/xhigh ×1.5, high ×1.2) with confidence penalties.
6. Added `--optimize cost|latency|capability` with task-specific hard floors, alongside the balanced default.

Approved below.

### 2026-11-25 — Shadi (user)

“ok gemini replayed rea then let us go a head”

Approved the revised P4.1 proposal. Implementation is limited to the taxonomy document and Phase 2 status updates.

## Decision

**APPROVED — 2026-11-25.** User’s words: “ok gemini replayed rea then let us go a head.” Approved scope: P4.1 only — task taxonomy, weights, eligibility, and confidence rules. Gemini’s six-point review is addressed in the revision above.

## Implementation

In progress on `agent/commandcode/P-0004`.
