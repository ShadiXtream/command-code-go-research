---
cc_id: "meta/muse-spark-1.3-contributor"
display_name: "Muse Spark 1.3 Contributor"
provider: "Meta"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "muse-spark-1-3"
weights: "closed"
context: "1.05M"
reasoning: true
efforts: ["low", "medium", "high", "xhigh"]
evaluated_effort: "max"
default_effort: "high"
---

# Muse Spark 1.3 Contributor

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `meta/muse-spark-1.3-contributor` |
| Provider | Meta |
| Release date | 2026-09-02 |
| Weights | closed |
| Parameters | unknown |
| Context window | 1.05M |
| Input modalities | text |
| Output modalities | text |
| Reasoning / efforts | low, medium, high, xhigh |
| Default effort | high |
| AA slug | muse-spark-1-3 |
| Command Code mapping note | Exact AA slug; Max variant |

**Mapping risk:** **low-medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | 0.10 |
| Output $/1M | 0.20 |
| Cache read $/1M | 0.002 |
| Cache write $/1M | — |
| Estimated requests/month | 27300 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/high/xhigh; ~95% off |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0002**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 36.6 | max | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | max | AA |
| Time per Intelligence Index task | 14.1 min | max | AA |
| Time to first answer token | 24.9 s | max | AA |
| Output speed | 107.9 tok/s | max | AA |
| Output tokens on index | — | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Proprietary | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 36.6 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | — | % resolved | — | TB official | — | NE |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 92.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 70.9 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 95.9 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 72.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 82.0 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 84.6 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 36.6 | TBD | TBD |
| Coding | Terminal-Bench —; LiveBench coding 70.9 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1.05M | TBD | TBD |
| Instruction following | LiveBench IF 84.6 | TBD | TBD |
| Multimodal | text | TBD | TBD |
| Speed / latency | 14.1 min/task; 24.9s TTFT; 107.9 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 27300 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/muse-spark-1-3 | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA Max / LB Xhigh variant; TB NE; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

