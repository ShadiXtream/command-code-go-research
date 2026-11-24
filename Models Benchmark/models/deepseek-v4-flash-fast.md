---
cc_id: "deepseek/deepseek-v4-flash-fast"
display_name: "DeepSeek V4 Flash Fast"
provider: "DeepSeek"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: ""
weights: "open"
context: "1M"
reasoning: true
efforts: ["low", "high", "max"]
evaluated_effort: "max"
default_effort: "unknown"
---

# DeepSeek V4 Flash Fast

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `deepseek/deepseek-v4-flash-fast` |
| Provider | DeepSeek |
| Release date | unknown |
| Weights | open |
| Parameters | 284B total |
| Context window | 1M |
| Input modalities | text |
| Output modalities | text |
| Reasoning / efforts | low, high, max |
| Default effort | unknown |
| AA slug | — |
| Command Code mapping note | Serving-speed variant of DeepSeek V4 Flash |

**Mapping risk:** **high** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $8 |
| Input $/1M | 0.28 |
| Output $/1M | 0.56 |
| Cache read $/1M | 0.07 |
| Cache write $/1M | — |
| Estimated requests/month | 2090 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/high/max; low-latency serving |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0038**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | — | — | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | — | AA |
| Time per Intelligence Index task | — min | — | AA |
| Time to first answer token | — | — | AA |
| Output speed | — tok/s | — | AA |
| Output tokens on index | — | — | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | — | 0–100 | — | AA | 2026-11-24 | NE |
| Terminal-Bench | 4.1 | — | % resolved | — | TB official | — | NE |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index — | TBD | TBD |
| Coding | Terminal-Bench —; LiveBench coding — | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1M | TBD | TBD |
| Instruction following | LiveBench IF — | TBD | TBD |
| Multimodal | text | TBD | TBD |
| Speed / latency | — min/task; —s TTFT; — tok/s | TBD | TBD |
| Cost efficiency | $—/task; 2090 req/mo | TBD | TBD |

**Profile summary:** Pending benchmark review.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | TBD |
| Acceptable for | TBD |
| Avoid for | TBD |
| Cheapest good use | TBD |
| Do not use when | TBD |
| Pair with | TBD |
| Go budget fit | TBD |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code | https://commandcode.ai/docs/plans/go | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** No separate AA/LB/TB; base DeepSeek V4 Flash; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

