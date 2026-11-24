---
cc_id: "MiniMaxAI/MiniMax-M3"
display_name: "MiniMax M3"
provider: "MiniMax"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "minimax-m3"
weights: "open"
context: "1M"
reasoning: true
efforts: ["low", "medium", "high"]
evaluated_effort: "unknown"
default_effort: "unknown"
---

# MiniMax M3

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `MiniMaxAI/MiniMax-M3` |
| Provider | MiniMax |
| Release date | 2026-06-01 |
| Weights | open |
| Parameters | 428B total |
| Context window | 1M |
| Input modalities | text |
| Output modalities | text |
| Reasoning / efforts | low, medium, high |
| Default effort | unknown |
| AA slug | minimax-m3 |
| Command Code mapping note | Exact AA slug |

**Mapping risk:** **low** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $8 |
| Input $/1M | 0.30 |
| Output $/1M | 1.20 |
| Cache read $/1M | 0.06 |
| Cache write $/1M | — |
| Estimated requests/month | 2360 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/high; 50% off |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0034**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 19.0 | — | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | — | AA |
| Time per Intelligence Index task | 14.2 min | — | AA |
| Time to first answer token | — | — | AA |
| Output speed | 107.7 tok/s | — | AA |
| Output tokens on index | — | — | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 19.0 | 0–100 | — | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **7.6** ±2.8 | % resolved | mini-swe-agent; none | TB official | 2026-06-01 | value (rank 47) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 72.3 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 51.7 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 83.9 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 64.7 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 68.4 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 76.9 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 19.0 | TBD | TBD |
| Coding | Terminal-Bench 7.6; LiveBench coding 51.7 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1M | TBD | TBD |
| Instruction following | LiveBench IF 76.9 | TBD | TBD |
| Multimodal | text | TBD | TBD |
| Speed / latency | 14.2 min/task; —s TTFT; 107.7 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 2360 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/minimax-m3 | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA effort not stated; LB exact; SWE NE; Arena NM

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

