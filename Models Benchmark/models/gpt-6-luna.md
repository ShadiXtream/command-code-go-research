---
cc_id: "gpt-6-luna"
display_name: "GPT-6 Luna"
provider: "OpenAI"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "gpt-6-luna"
weights: "closed"
context: "1.05M"
reasoning: true
efforts: ["low", "medium", "high", "xhigh", "max"]
evaluated_effort: "max"
default_effort: "medium"
---

# GPT-6 Luna

**One-line verdict:** The cheapest credible high-volume model on Go — 9,090 requests/month, 1M context, multimodal input, and AA 28 at `max` — but its default `medium` is only 18, and its agentic coding score is weak.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `gpt-6-luna` |
| Provider | OpenAI |
| Release date | 2026-09-22 |
| Weights | Proprietary |
| Parameters | Undisclosed |
| Context window | 1.05M (Command Code; some pages show 1.1M) / 1M (AA) |
| Input modalities | Text, image |
| Output modalities | Text |
| Reasoning / efforts | Yes — low, medium, high, xhigh, max |
| Default effort | medium |
| AA slug | `gpt-6-luna` |
| Command Code mapping note | Exact ID; AA name “GPT-6 Luna” matches |

**Mapping risk:** **low-medium.** The model is unambiguous, but the effort setting is not: the headline AA 28 is at `max`, while the default is `medium` (AA 18). Always record which one is being used.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | $0.10 |
| Output $/1M | $0.50 |
| Cache read $/1M | $0.01 |
| Cache write $/1M | $0.125 |
| Estimated requests/month | 9,090 |
| Estimated requests/5h | 2,730 |
| Estimated requests/week | 5,450 |
| Plan gate | Go |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.00066**, consistent with the Go page’s ≈$0.00066/request estimate at $6/9,090.

**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

**Notes:** Slightly more expensive per request than Muse Ember but still extremely cheap. Cache writes cost $0.125/1M, so repeated long contexts are not free but remain inexpensive.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **28** | max | AA model page |
| AA Intelligence Index | 23 | xhigh | AA model page |
| AA Intelligence Index | 21 | high | AA model page |
| AA Intelligence Index | **18** | **medium (default)** | AA model page |
| AA Intelligence Index | 10 | low | AA model page |
| AA Intelligence Index | 9 | non-reasoning | AA model page |
| AA rank | #13 / 40 in class | Proprietary, low price tier | AA model page |
| Cost per Intelligence Index task | $0.15 | max | AA |
| Time per Intelligence Index task | 10.9 min | max | AA |
| Time to first answer token | 56.99 s | max | AA |
| Output speed | 115 tok/s | max | AA |
| Output tokens on index | 110M | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Proprietary | — | AA |

**What the composite means:** At `max`, 28 is respectable for the price; at the default `medium`, 18 is much weaker. The effort dial is the most important fact about this model.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 28 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **15.2** ±2.7 | % resolved | Codex; max | TB official | 2026-09-22 | value (rank 40) |
| LiveBench — overall (reported only) | 2026-06-25 | 72.0* | % | max | BenchLM mirror | 2026-06-25 | value (reported overall) |
| LiveBench — reasoning | 2026-06-25 | 79.7 | % | max | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 62.3 | % | max | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 94.2 | % | max | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 69.0 | % | max | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 64.6 | % | max | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 73.1 | % | max | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM (not in captured top/Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (not on Verified board) |

`*` Reported overall is a BenchLM mirror. A 6-category mean derived from the official CSV is ≈73.8; the difference comes from aggregation/version, not a model change. Use the category scores for decisions.

### Vendor claims (not comparable)

No reliable vendor benchmark rows were extracted for GPT-6 Luna. Vendor and third-party rows for all models live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv); they are not used in this file’s ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA 28 max / 18 default; LiveBench reasoning 79.7 | Good at max, average at default | High |
| Coding | TB 4.1 15.2%; LiveBench coding 62.3 | Weak agentic, moderate code generation | High |
| Agentic / tool use | TB 4.1 | Weak | High |
| Knowledge / factuality | AA index; no Omniscience sub-score | Moderate | Medium |
| Long context | 1M | Excellent | High |
| Instruction following | LiveBench IF 73.1 | Good | High |
| Multimodal | Text + image | Good | High |
| Speed / latency | 10.9 min/task at max; 56.99s TTFT; 115 tok/s; 0.6 min at low | Fast at low effort, slow at max | High |
| Cost efficiency | $0.15/task; 9,090 req/mo | Excellent | High |

**Profile summary:** GPT-6 Luna is a volume model with a good math/reasoning ceiling at `max` and a much lower default. It is not an agentic coder. Use it for extraction, summarization, and drafting where 9,000 requests/month matter more than top-end correctness.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | High-volume extraction, page summarization, first-pass drafting, cheap classification |
| Acceptable for | Math/reasoning at `max`, multimodal document reading, structured output |
| Avoid for | Agentic coding, complex tool use, final verification, latency-sensitive tasks at `max` |
| Cheapest good use | Bulk drafts with an explicit `max` setting, then escalate hard cases |
| Do not use when | The task requires strong coding-agent behavior or default-effort quality |
| Pair with | `zai-org/GLM-5.3` for code; `moonshotai/Kimi-K3.1-Pro` for final QA |
| Go budget fit | 9,090 req/mo — the second-best volume model among the seven samples, after Muse Ember |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context, efforts |
| Artificial Analysis | https://artificialanalysis.ai/models/gpt-6-luna | 2026-11-24 | AA index by effort, cost, speed |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | TB 4.1 15.2%, harness, date |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | task scores, derived categories |
| BenchLM LiveBench mirror | https://benchlm.ai/benchmarks/livebench | 2026-11-24 | reported overall 72.0 |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | confirmed not in captured top/Pareto |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no Verified row |

**Data-quality flags:** AA headline is `max`, default is `medium`; LiveBench overall is a mirror and differs from a derived mean; LMArena `NM`; SWE-bench `NE`. Terminal-Bench is harness-dependent (Codex, max).

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
