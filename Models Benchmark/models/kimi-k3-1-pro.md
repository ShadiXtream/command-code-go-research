---
cc_id: "moonshotai/Kimi-K3.1-Pro"
display_name: "Kimi K3.1 Pro"
provider: "Moonshot AI / Kimi"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "kimi-k3-1-pro"
weights: "open-restricted"
context: "1M"
reasoning: true
efforts: ["low", "high", "max"]
evaluated_effort: "max"
default_effort: "max"
---

# Kimi K3.1 Pro

**One-line verdict:** The highest-intelligence model on the Go plan and the strongest published Terminal-Bench performer among the samples — the right choice for planning, deep verification, and hard agentic coding, but far too slow and credit-hungry for bulk work.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `moonshotai/Kimi-K3.1-Pro` |
| Provider | Moonshot AI / Kimi |
| Release date | 2026-10-23 |
| Weights | Open weights, commercial-use restrictions (Kimi K3.1-Pro Licence) |
| Parameters | 2.8T total / 104B active |
| Context window | 1M |
| Input modalities | Text, image |
| Output modalities | Text |
| Reasoning / efforts | Yes — low, high, max |
| Default effort | max |
| AA slug | `kimi-k3-1-pro` |
| Command Code mapping note | Exact ID; AA name matches |

**Mapping risk:** **low.** The only caveat is that LiveBench has a **Kimi K3** row, not a K3.1 Pro row. Do not use K3’s 79.2 as a proxy.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | $2.00 |
| Output $/1M | $10.00 |
| Cache read $/1M | $0.20 |
| Cache write $/1M | — |
| Estimated requests/month | 441 |
| Estimated requests/5h | 132 |
| Estimated requests/week | 265 |
| Plan gate | Go |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0131**, consistent with the Go page’s ≈$0.0136/request estimate at $6/441.

**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

**Notes:** Expensive per request and only 441 requests/month. Treat it as a scarce reasoning budget, not a general worker.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **46** | max | AA model page |
| AA rank | #1 / 33 in class | Open weights, large | AA model page |
| Cost per Intelligence Index task | $3.68 | max | AA |
| Time per Intelligence Index task | 35.7 min | max | AA |
| Time to first answer token | 140.23 s | max | AA |
| Output speed | 34 tok/s | max | AA |
| Output tokens on index | 113M | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights (commercial restrictions) | — | AA |

**What the composite means:** 46 is the highest AA index among the seven samples and the highest among open-weight models on AA’s board. It still is not a frontier closed-model score (top closed models are in the 60s), but it is the best available on Go.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 46 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **59.7** ±4.2 | % resolved | Claude Code; max | TB official | 2026-10-24 | value (rank 11) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE (no K3.1 Pro row) |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM (not in captured top/Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (not on Verified board) |

### Vendor claims (not comparable)

No vendor benchmark rows were extracted for K3.1 Pro. If any are added, they belong in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv), not in this file.

### Benchmark context

**Terminal-Bench context:** 59.7% is rank 11 of 54 rows on the 4.1 board, below GPT-6 Astra (60.3%) and above Fable 5.1 (57.6%). It is the best **Go-plan** model on the captured board. Qwen 4 Max is not on the board, so this is not a complete Go ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 46 (highest on Go) | Excellent | High |
| Coding | TB 4.1 59.7% (Claude Code, max) | Excellent | High |
| Agentic / tool use | TB 4.1; AA agentic evals | Excellent | High |
| Knowledge / factuality | AA index; no Omniscience sub-score captured | Strong | Medium |
| Long context | 1M | Excellent | High |
| Instruction following | AA index; no LiveBench IF row | Strong | Medium |
| Multimodal | Text + image input | Good | High |
| Speed / latency | 35.7 min/task; 140.23s TTFT; 34 tok/s | Very slow | High |
| Cost efficiency | $3.68/task; 441 req/mo | Poor for volume | High |

**Profile summary:** Kimi K3.1 Pro is the Go plan’s quality ceiling. The cost is latency and credits: nearly 36 minutes per AA task and only 441 estimated requests per month. It should be used where a wrong answer is expensive, not where many answers are needed.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | Planning/DAG design, deep research synthesis, final numerical verification, complex agentic coding, hard debugging |
| Acceptable for | Architecture review, benchmark interpretation, high-value writing |
| Avoid for | Bulk extraction, 62-file generation, latency-sensitive loops, high-volume classification |
| Cheapest good use | One planning pass, then delegate execution to Muse Ember/GPT-6 Luna and return for final QA |
| Do not use when | You need >1,000 requests/month or sub-minute first token |
| Pair with | `meta/muse-ember` for execution; `Qwen/Qwen4-Max` for an independent second read |
| Go budget fit | 441 req/mo; reserve for the highest-value 5–10% of work |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context |
| Artificial Analysis | https://artificialanalysis.ai/models/kimi-k3-1-pro | 2026-11-24 | AA index, cost, speed, release |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | TB 4.1 59.7%, harness, date |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | confirmed no K3.1 Pro row |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | confirmed not in captured top/Pareto |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no Verified row |

**Data-quality flags:** LiveBench `NE` (K3 row exists but is a different model); LMArena `NM`; SWE-bench `NE`. Terminal-Bench is harness-dependent (Claude Code), so 59.7 is not a model-only score.

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
