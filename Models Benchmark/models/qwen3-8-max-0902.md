---
cc_id: "Qwen/Qwen3.8-Max-0902"
display_name: "Qwen3.8 Max (0902)"
provider: "Alibaba"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "qwen3-8-max"
weights: "closed"
context: "984K"
reasoning: true
efforts: ["low", "medium", "xhigh"]
evaluated_effort: "xhigh"
default_effort: "xhigh"
---

# Qwen3.8 Max (0902)

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `Qwen/Qwen3.8-Max-0902` |
| Provider | Alibaba |
| Release date | 2026-09-02 |
| Weights | closed |
| Parameters | unknown |
| Context window | 984K |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | low, medium, xhigh |
| Default effort | xhigh |
| AA slug | qwen3-8-max |
| Command Code mapping note | Exact ID; AA 0902 variant |

**Mapping risk:** **low-medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly credits | $7 |
| Input $/1M | 2.00 |
| Output $/1M | 6.00 |
| Cache read $/1M | 0.25 |
| Cache write $/1M | — |
| Estimated requests/month | 458 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/medium/xhigh |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0150**.


## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 33.7 | xhigh | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | xhigh | AA |
| Time per Intelligence Index task | 58.9 min | xhigh | AA |
| Time to first answer token | 104.1 s | xhigh | AA |
| Output speed | 48.3 tok/s | xhigh | AA |
| Output tokens on index | — | xhigh | AA |
| Context window (AA) | 984K | — | AA |
| Openness | Proprietary | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 33.7 | 0–100 | xhigh | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **27.0** ±3.9 | % resolved | Claude Code; max | TB official | 2026-09-02 | value (rank 29) |
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
| General reasoning | AA index 33.7 | TBD | TBD |
| Coding | Terminal-Bench 27.0; LiveBench coding — | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 984K | TBD | TBD |
| Instruction following | LiveBench IF — | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 58.9 min/task; 104.1s TTFT; 48.3 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 458 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/qwen3-8-max | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA cost/task NM; LB NE; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

