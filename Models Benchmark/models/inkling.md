---
cc_id: "thinkingmachines/inkling"
display_name: "Inkling"
provider: "Thinking Machines"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "inkling"
weights: "open"
context: "256K"
reasoning: true
efforts: ["unknown"]
evaluated_effort: "xhigh"
default_effort: "unknown"
---

# Inkling

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `thinkingmachines/inkling` |
| Provider | Thinking Machines |
| Release date | 2026-07-15 |
| Weights | open |
| Parameters | 975B total |
| Context window | 256K |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | unknown |
| Default effort | unknown |
| AA slug | inkling |
| Command Code mapping note | Exact AA slug; Xhigh variant |

**Mapping risk:** **medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | 1.00 |
| Output $/1M | 4.05 |
| Cache read $/1M | 0.17 |
| Cache write $/1M | — |
| Estimated requests/month | 593 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | multimodal MoE |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0099**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 12.5 | xhigh | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | xhigh | AA |
| Time per Intelligence Index task | 9.3 min | xhigh | AA |
| Time to first answer token | — | xhigh | AA |
| Output speed | 92.2 tok/s | xhigh | AA |
| Output tokens on index | — | xhigh | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 12.5 | 0–100 | xhigh | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **0.0** ±0.0 | % resolved | mini-swe-agent; none | TB official | 2026-07-17 | value (rank 54) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 78.0 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 58.0 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 93.8 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 67.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 74.6 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 65.4 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 12.5 | TBD | TBD |
| Coding | Terminal-Bench 0.0; LiveBench coding 58.0 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 256K | TBD | TBD |
| Instruction following | LiveBench IF 65.4 | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 9.3 min/task; —s TTFT; 92.2 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 593 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/inkling | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA/LB Xhigh; TB reported 0.0; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

