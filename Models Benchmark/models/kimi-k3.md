---
cc_id: "moonshotai/Kimi-K3"
display_name: "Kimi K3"
provider: "Moonshot AI / Kimi"
snapshot_date: "2026-11-24"
status: "draft"
aa_slug: "kimi-k3"
weights: "open-restricted"
context: "1M"
reasoning: true
efforts: ["low", "high", "max"]
evaluated_effort: "max"
default_effort: "unknown"
---

# Kimi K3

**One-line verdict:** Pending benchmark review.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `moonshotai/Kimi-K3` |
| Provider | Moonshot AI / Kimi |
| Release date | 2026-07-16 |
| Weights | open-restricted |
| Parameters | 2.8T total / 104B active |
| Context window | 1M |
| Input modalities | text |
| Output modalities | text |
| Reasoning / efforts | low, high, max |
| Default effort | unknown |
| AA slug | kimi-k3 |
| Command Code mapping note | Exact ID; AA Max index null; Low 17.4 excluded |

**Mapping risk:** **medium** — see the mapping note above.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $8 |
| Input $/1M | 3.00 |
| Output $/1M | 15.00 |
| Cache read $/1M | 0.30 |
| Cache write $/1M | — |
| Estimated requests/month | 392 |
| Estimated requests/5h | — |
| Estimated requests/week | — |
| Plan gate | Go |
| Notes | low/high/max |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0196**.


**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | — | — | AA |
| AA rank | — | — | AA |
| Cost per Intelligence Index task | — | — | AA |
| Time per Intelligence Index task | — min | — | AA |
| Time to first answer token | — | — | AA |
| Output speed | 39.2 tok/s | — | AA |
| Output tokens on index | — | — | AA |
| Context window (AA) | 1.05M | — | AA |
| Openness | Open weights | — | AA |

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | — | 0–100 | — | AA | 2026-11-24 | NE |
| Terminal-Bench | 4.1 | **23.0** ±3.7 | % resolved | Claude Code; max | TB official | 2026-07-16 | value (rank 32) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NM |
| LiveBench — reasoning | 2026-06-25 | 84.8 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 69.9 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 94.6 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 73.0 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 78.2 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 82.7 | % | CSV variant | LB CSV (derived) | 2026-06-25 | value (derived) |
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
| Coding | Terminal-Bench 23.0; LiveBench coding 69.9 | TBD | TBD |
| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |
| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |
| Long context | 1M | TBD | TBD |
| Instruction following | LiveBench IF 82.7 | TBD | TBD |
| Multimodal | text | TBD | TBD |
| Speed / latency | — min/task; —s TTFT; 39.2 tok/s | TBD | TBD |
| Cost efficiency | $—/task; 392 req/mo | TBD | TBD |

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
| Artificial Analysis | https://artificialanalysis.ai/models/kimi-k3 | 2026-11-24 | provenance |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | provenance |
| LiveBench | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | provenance |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | provenance |
| SWE-bench | https://www.swebench.com/ | 2026-11-24 | provenance |

**Data-quality flags:** AA Max index NE; AA Low 17.4 excluded; LB exact; modalities unverified; Arena NM; SWE NE

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Generated scaffold from model-benchmarks.csv | Initial |

