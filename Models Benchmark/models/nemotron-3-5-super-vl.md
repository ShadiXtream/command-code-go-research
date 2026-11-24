---
cc_id: "nvidia/nemotron-3.5-super-vl"
display_name: "Nemotron 3.5 Super VL"
provider: "NVIDIA"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "nemotron-3-5-super-vl"
weights: "open"
context: "262K"
reasoning: true
efforts: ["low", "medium", "high"]
evaluated_effort: "unknown"
default_effort: "unknown"
---

# Nemotron 3.5 Super VL

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `nvidia/nemotron-3.5-super-vl` |
| Provider | NVIDIA |
| Release date | 2026-10-15 |
| Weights | open |
| Parameters | 120B total |
| Context window | 262K |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | low, medium, high |
| Default effort | unknown |
| AA slug | nemotron-3-5-super-vl |
| Command Code mapping note | Exact AA slug |

**Mapping risk:** **low-medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | 0.20 |
| Output $/1M | 0.50 |
| Cache read $/1M | 0.04 |
| Cache write $/1M | — |
| Estimated requests/month | 2650 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/high; vision-language |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0022**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 13.6 | — | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | — | AA |
| Time per Intelligence Index task | 3.8 min | — | AA |
| Time to first answer token | — | — | AA |
| Output speed | 358.5 tok/s | — | AA |
| Output tokens on index | — | — | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 13.6 | 0–100 | — | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **0.3** ±0.6 | % resolved | mini-swe-agent; none | TB official | 2026-10-15 | value (rank 53) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 13.6 | TBD | TBD |
| Coding | Terminal-Bench 0.3; LiveBench coding — | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 262K | TBD | TBD |
| Instruction following | LiveBench IF — | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 3.8 min/task; —s TTFT; 358.5 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 2650 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/nemotron-3-5-super-vl | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA effort not stated; TB exact; LB NE; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

