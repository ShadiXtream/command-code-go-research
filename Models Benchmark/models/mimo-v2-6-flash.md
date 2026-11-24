---
cc_id: "xiaomi/mimo-v2.6-flash"
display_name: "MiMo V2.6 Flash"
provider: "Xiaomi"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "mimo-v2-6-flash"
weights: "open"
context: "1.05M"
reasoning: true
efforts: ["unknown"]
evaluated_effort: "unknown"
default_effort: "unknown"
---

# MiMo V2.6 Flash

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `xiaomi/mimo-v2.6-flash` |
| Provider | Xiaomi |
| Release date | 2026-09-21 |
| Weights | open |
| Parameters | 309B total |
| Context window | 1.05M |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | unknown |
| Default effort | unknown |
| AA slug | mimo-v2-6-flash |
| Command Code mapping note | Exact AA slug |

**Mapping risk:** **low-medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | 0.14 |
| Output $/1M | 0.28 |
| Cache read $/1M | 0.0028 |
| Cache write $/1M | — |
| Estimated requests/month | 19500 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | efficient multimodal |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0003**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 26.8 | — | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | — | AA |
| Time per Intelligence Index task | 54.9 min | — | AA |
| Time to first answer token | — | — | AA |
| Output speed | 40.0 tok/s | — | AA |
| Output tokens on index | — | — | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 26.8 | 0–100 | — | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **16.1** ±3.4 | % resolved | mini-swe-agent; none | TB official | 2026-09-22 | value (rank 39) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LMArena Text | 2026-11-22 | 1,448 | Elo | not stated | Arena | 2026-11-22 | value (Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 26.8 | TBD | TBD |
| Coding | Terminal-Bench 16.1; LiveBench coding — | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1.05M | TBD | TBD |
| Instruction following | LiveBench IF — | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 54.9 min/task; —s TTFT; 40.0 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 19500 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/mimo-v2-6-flash | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA effort not stated; Arena value from preliminary checklist; LB NE; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

