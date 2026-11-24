---
cc_id: "zai-org/GLM-5.3"
display_name: "GLM-5.3"
provider: "Z.ai"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "glm-5-3"
weights: "open-restricted"
context: "1M"
reasoning: true
efforts: ["low", "high", "max"]
evaluated_effort: "max"
default_effort: "max"
---

# GLM-5.3

**One-line verdict:** A coding-and-instruction-following specialist with the strongest published Terminal-Bench score among the mid-tier Go models — the right tool for structured coding work, but text-only, slow, and the most expensive sample per task.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `zai-org/GLM-5.3` |
| Provider | Z.ai |
| Release date | 2026-08-18 |
| Weights | Open weights, commercial-use restrictions (GLM-5.3 License) |
| Parameters | 753B total / 40B active |
| Context window | 1M |
| Input modalities | Text only |
| Output modalities | Text |
| Reasoning / efforts | Yes — low, high, max |
| Default effort | max |
| AA slug | `glm-5-3` |
| Command Code mapping note | Exact ID; AA “GLM-5.3 (Max)” is the headline configuration |

**Mapping risk:** **low.** Do not confuse with `GLM-5.3-Flash` or `GLM-5.3-FlashX`; they are separate Go models with different prices and scores.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $10 |
| Input $/1M | $1.40 |
| Output $/1M | $4.40 |
| Cache read $/1M | $0.26 |
| Cache write $/1M | — |
| Estimated requests/month | 677 |
| Estimated requests/5h | 203 |
| Estimated requests/week | 406 |
| Plan gate | Go |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0148**, consistent with the Go page’s ≈$0.0148/request estimate at $10/677.

**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

**Notes:** The $10 allowance is the full Go pool, so heavy GLM-5.3 use leaves nothing for other models. The cheap cache-read price ($0.26) still dominates the request cost.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **32** | max | AA model page |
| AA Intelligence Index (low) | 23 | low | AA model page |
| AA rank | #4 / 33 in class | Open weights, large | AA model page |
| Cost per Intelligence Index task | $5.01 | max | AA |
| Time per Intelligence Index task | 27.8 min | max | AA |
| Time to first answer token | 86.28 s | max | AA |
| Output speed | 71 tok/s | max | AA |
| Output tokens on index | 135M | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights (commercial restrictions) | — | AA |

**What the composite means:** 32 is fourth among the seven samples, but its Terminal-Bench result (41.2%) is second only to Kimi’s 59.7%. This is a case where the aggregate undersells a specific capability: GLM-5.3 is optimized for coding/agentic work, not broad knowledge.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 32 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **41.2** ±3.3 | % resolved | Claude Code; max | TB official | 2026-08-14 | value (rank 20) |
| LiveBench — overall (reported only) | 2026-06-25 | 76.1* | % | not stated | BenchLM mirror | 2026-06-25 | value (reported overall) |
| LiveBench — reasoning | 2026-06-25 | 79.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 68.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 94.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 66.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 76.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 88.5 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM (GLM-5.3 not in captured top/Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (GLM 5 is 72.8, different model) |

`*` Reported overall is a BenchLM mirror of LiveBench. A 6-category mean derived from the official CSV is ≈78.7, because the official CSV does not include the agentic-coding category and the mirror may use a different aggregation. The category scores are the reliable part; do not treat 76.1 and 78.7 as a model change.

### Vendor claims (not comparable)

No vendor benchmark rows were extracted for GLM-5.3. Its LiveBench category scores are official and appear in §4; they are not vendor claims and are not in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv).

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 32 (max) / 23 (low) | Good | High |
| Coding | TB 4.1 41.2%; LiveBench coding 68.1 | Strong | High |
| Agentic / tool use | TB 4.1; AA agentic evals | Strong | High |
| Knowledge / factuality | AA index; no Omniscience sub-score | Moderate | Medium |
| Long context | 1M | Excellent | High |
| Instruction following | LiveBench IF 88.5 | Excellent | High |
| Multimodal | Text only | None | High |
| Speed / latency | 27.8 min/task; 86.28s TTFT; 71 tok/s | Slow | High |
| Cost efficiency | $5.01/task; 677 req/mo | Poor for volume | High |

**Profile summary:** GLM-5.3 is the strongest structured-coding and instruction-following model in the sample set after Kimi, with a 1M context and a high math score. It is not a general-purpose bulk model: text-only, slow, and the highest cost per task here.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | Agentic coding, code review, structured output, instruction-heavy pipelines, math validation |
| Acceptable for | Long-context text analysis, research synthesis with strict formatting |
| Avoid for | Image/video input, high-volume extraction, latency-sensitive tasks |
| Cheapest good use | A focused coding/parsing task where TB score matters more than request volume |
| Do not use when | The task needs vision or >1,500 requests/month |
| Pair with | `meta/muse-ember` for bulk; `Qwen/Qwen4-Max` for multimodal review |
| Go budget fit | 677 req/mo and the full $10 pool — use deliberately |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context |
| Artificial Analysis | https://artificialanalysis.ai/models/glm-5-3 | 2026-11-24 | AA index, max/low, cost, speed |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | TB 4.1 41.2%, harness, date |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | task scores, derived categories |
| BenchLM LiveBench mirror | https://benchlm.ai/benchmarks/livebench | 2026-11-24 | reported overall 76.1 |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | confirmed GLM-5.3 not in captured top/Pareto |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no GLM-5.3 row |

**Data-quality flags:** LiveBench overall has a mirror/derived discrepancy; LMArena `NM`; SWE-bench `NE`; Terminal-Bench harness-dependent (Claude Code, max). GLM-5.3 is text-only, so multimodal tasks cannot be evaluated.

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
