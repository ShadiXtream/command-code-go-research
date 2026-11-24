---
cc_id: "z-ai/glm-5.3-flash"
display_name: "GLM-5.3 Flash"
provider: "Z.ai"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "glm-5-3-flash"
weights: "open"
context: "1M"
reasoning: true
efforts: ["low", "high", "max"]
evaluated_effort: "max"
default_effort: "max"
---

# GLM-5.3 Flash

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `z-ai/glm-5.3-flash` |
| Provider | Z.ai |
| Release date | 2026-08-26 |
| Weights | open |
| Parameters | 320B total |
| Context window | 1M |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | low, high, max |
| Default effort | max |
| AA slug | glm-5-3-flash |
| Command Code mapping note | Exact ID; AA/TB/LB Max variant |

**Mapping risk:** **low** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly credits | $10 |
| Input $/1M | 0.15 |
| Output $/1M | 0.50 |
| Cache read $/1M | 0.03 |
| Cache write $/1M | — |
| Estimated requests/month | 5900 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/high/max; vision |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0017**.


## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 27.7 | max | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | max | AA |
| Time per Intelligence Index task | 37.1 min | max | AA |
| Time to first answer token | — | max | AA |
| Output speed | 60.3 tok/s | max | AA |
| Output tokens on index | — | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 27.7 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **37.0** ±3.6 | % resolved | Claude Code; max | TB official | 2026-08-26 | value (rank 26) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 73.4 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 65.6 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 93.3 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 68.4 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 63.8 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 73.1 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | 1,476 | Elo | not stated | Arena | 2026-11-22 | value (Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 27.7 | TBD | TBD |
| Coding | Terminal-Bench 37.0; LiveBench coding 65.6 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1M | TBD | TBD |
| Instruction following | LiveBench IF 73.1 | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 37.1 min/task; —s TTFT; 60.3 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 5900 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/glm-5-3-flash | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** Arena value from preliminary checklist; AA cost/TTFT NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

