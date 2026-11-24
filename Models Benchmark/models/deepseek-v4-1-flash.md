---
cc_id: "deepseek/deepseek-v4.1-flash"
display_name: "DeepSeek V4.1 Flash"
provider: "DeepSeek"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "deepseek-v4-1-flash-1017"
weights: "open"
context: "1M"
reasoning: true
efforts: ["off", "low", "high", "max"]
evaluated_effort: "max"
default_effort: "unknown"
---

# DeepSeek V4.1 Flash

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `deepseek/deepseek-v4.1-flash` |
| Provider | DeepSeek |
| Release date | 2026-10-17 |
| Weights | open |
| Parameters | 552B total / 16B active |
| Context window | 1M |
| Input modalities | text, image |
| Output modalities | text |
| Reasoning / efforts | off, low, high, max |
| Default effort | unknown |
| AA slug | deepseek-v4-1-flash-1017 |
| Command Code mapping note | CC latest assumed = AA/TB 1017 variant |

**Mapping risk:** **medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly credits | $10 |
| Input $/1M | 0.15 |
| Output $/1M | 0.60 |
| Cache read $/1M | 0.003 |
| Cache write $/1M | — |
| Estimated requests/month | 25600 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | reasoning off/low/high/max; vision |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0004**.


## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | 32.4 | max | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | max | AA |
| Time per Intelligence Index task | 14.1 min | max | AA |
| Time to first answer token | — | max | AA |
| Output speed | 164.7 tok/s | max | AA |
| Output tokens on index | — | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 32.4 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **38.5** ±3.8 | % resolved | Claude Code; max | TB official | 2026-10-17 | value (rank 23) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 88.9 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 78.4 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 94.4 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 70.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 77.0 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
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
| General reasoning | AA index 32.4 | TBD | TBD |
| Coding | Terminal-Bench 38.5; LiveBench coding 78.4 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1M | TBD | TBD |
| Instruction following | LiveBench IF 80.8 | TBD | TBD |
| Multimodal | text, image | TBD | TBD |
| Speed / latency | 14.1 min/task; —s TTFT; 164.7 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 25600 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/deepseek-v4-1-flash-1017 | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA/TB are 1017 proxy; LB max variant; AA cost/TTFT NM; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

