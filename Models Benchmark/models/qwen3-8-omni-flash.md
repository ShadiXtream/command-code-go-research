---
cc_id: "Qwen/Qwen3.8-Omni-Flash"
display_name: "Qwen3.8 Omni Flash"
provider: "Alibaba"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: ""
weights: "open-restricted"
context: "1M"
reasoning: true
efforts: ["low", "medium", "xhigh"]
evaluated_effort: "unknown"
default_effort: "unknown"
---

# Qwen3.8 Omni Flash

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `Qwen/Qwen3.8-Omni-Flash` |
| Provider | Alibaba |
| Release date | unknown |
| Weights | open-restricted |
| Parameters | unknown |
| Context window | 1M |
| Input modalities | text, image, audio, video |
| Output modalities | text |
| Reasoning / efforts | low, medium, xhigh |
| Default effort | unknown |
| AA slug | — |
| Command Code mapping note | No AA page; omni-modal |

**Mapping risk:** **high** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | 0.15 |
| Output $/1M | 0.47 |
| Cache read $/1M | 0.016 |
| Cache write $/1M | — |
| Estimated requests/month | 5920 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/xhigh; omni-modal |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0010**.


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
| Context window (AA) | — | — | AA |
| Openness | — | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | — | 0–100 | — | AA | 2026-11-24 | NE |
| Terminal-Bench | 4.1 | — | % resolved | — | TB official | — | NE |
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
| General reasoning | AA index — | TBD | TBD |
| Coding | Terminal-Bench —; LiveBench coding — | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1M | TBD | TBD |
| Instruction following | LiveBench IF — | TBD | TBD |
| Multimodal | text, image, audio, video | TBD | TBD |
| Speed / latency | — min/task; —s TTFT; — tok/s | TBD | TBD |
| Cost efficiency | $—/task; 5920 req/mo | TBD | TBD |

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

**Data-quality flags:** AA NM; TB NE; LB NE; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

