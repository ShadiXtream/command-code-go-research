---
cc_id: "mistral/mistral-large-4"
display_name: "Mistral Large 4"
provider: "Mistral"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "mistral-large-4"
weights: "open"
context: "524K"
reasoning: true
efforts: ["low", "medium", "high"]
evaluated_effort: "high"
default_effort: "unknown"
---

# Mistral Large 4

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `mistral/mistral-large-4` |
| Provider | Mistral |
| Release date | 2026-10-29 |
| Weights | open |
| Parameters | 1.05T total |
| Context window | 524K |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | low, medium, high |
| Default effort | unknown |
| AA slug | mistral-large-4 |
| Command Code mapping note | Exact AA slug; High variant |

**Mapping risk:** **low-medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | 1.36 |
| Output $/1M | 4.18 |
| Cache read $/1M | 0.14 |
| Cache write $/1M | — |
| Estimated requests/month | 672 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/high; multimodal |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0087**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 26.1 | high | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | high | AA |
| Time per Intelligence Index task | 17.0 min | high | AA |
| Time to first answer token | — | high | AA |
| Output speed | 80.2 tok/s | high | AA |
| Output tokens on index | — | high | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 26.1 | 0–100 | high | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **27.6** ±3.9 | % resolved | Claude Code; max | TB official | 2026-10-06 | value (rank 28) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 85.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 65.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 94.8 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 63.3 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 61.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 80.8 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 26.1 | TBD | TBD |
| Coding | Terminal-Bench 27.6; LiveBench coding 65.2 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 524K | TBD | TBD |
| Instruction following | LiveBench IF 80.8 | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 17.0 min/task; —s TTFT; 80.2 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 672 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/mistral-large-4 | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA High / LB High / TB Max variants; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

