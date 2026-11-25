---
cc_id: "Qwen/Qwen3.8-27B"
display_name: "Qwen3.8 27B"
provider: "Alibaba"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "qwen3-8-27b"
weights: "open"
context: "262K"
reasoning: true
efforts: ["low", "medium", "xhigh"]
evaluated_effort: "xhigh"
default_effort: "unknown"
---

# Qwen3.8 27B

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `Qwen/Qwen3.8-27B` |
| Provider | Alibaba |
| Release date | 2026-08-14 |
| Weights | open |
| Parameters | 27B total |
| Context window | 262K |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | low, medium, xhigh |
| Default effort | unknown |
| AA slug | qwen3-8-27b |
| Command Code mapping note | Exact AA slug; Xhigh variant |

**Mapping risk:** **low-medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $10 |
| Input $/1M | 0.40 |
| Output $/1M | 3.00 |
| Cache read $/1M | 0.04 |
| Cache write $/1M | — |
| Estimated requests/month | 3420 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/xhigh; vision |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0028**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 20.1 | xhigh | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | xhigh | AA |
| Time per Intelligence Index task | 27.7 min | xhigh | AA |
| Time to first answer token | — | xhigh | AA |
| Output speed | 66.3 tok/s | xhigh | AA |
| Output tokens on index | — | xhigh | AA |
| Context window (AA) | 256K | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 20.1 | 0–100 | xhigh | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | — | % resolved | — | TB official | — | NE |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 82.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 67.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 93.3 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 67.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 76.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 59.6 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 20.1 | TBD | TBD |
| Coding | Terminal-Bench —; LiveBench coding 67.1 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 262K | TBD | TBD |
| Instruction following | LiveBench IF 59.6 | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 27.7 min/task; —s TTFT; 66.3 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 3420 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/qwen3-8-27b | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** LB exact; TB NE; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

