---
cc_id: "Qwen/Qwen4-Max"
display_name: "Qwen 4 Max"
provider: "Alibaba"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "qwen4-max"
weights: "closed"
context: "1M"
reasoning: true
efforts: ["off", "low", "high", "xhigh"]
evaluated_effort: "xhigh"
default_effort: "xhigh"
---

# Qwen 4 Max

**One-line verdict:** A high-intelligence, 1M-context multimodal generalist — strongest Go model for long-document synthesis and a second-opinion reviewer, but too slow and expensive per task for bulk work.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `Qwen/Qwen4-Max` |
| Provider | Alibaba |
| Release date | 2026-11-16 |
| Weights | Proprietary |
| Parameters | Undisclosed |
| Context window | 1M (Command Code) / 984k measured by AA |
| Input modalities | Text, image, video |
| Output modalities | Text |
| Reasoning / efforts | Yes — off, low, high, xhigh |
| Default effort | xhigh |
| AA slug | `qwen4-max` |
| Command Code mapping note | Exact ID; AA model name “Qwen4 Max” matches |

**Mapping risk:** **low.** The AA slug and Command Code ID refer to the same November 2026 release. The only difference is the context window (1M advertised vs 984k measured).

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly credits | $6 |
| Input $/1M | $1.50 |
| Output $/1M | $4.50 |
| Cache read $/1M | $0.075 |
| Cache write $/1M | $1.875 |
| Estimated requests/month | 1,030 |
| Estimated requests/5h | 308 |
| Estimated requests/week | 615 |
| Plan gate | Go |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0056**, consistent with the Go page’s ≈$0.0058/request estimate at $6/1,030.

**Notes:** Standard $6 allowance. No deal. Cache writes are billed at $1.875/1M, unusual among Go models — long cached sessions still benefit, but the first write is not free.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **43** | xhigh | AA model page |
| AA rank | #51 / 95 in class | Proprietary, >$1/1M | AA model page |
| Cost per Intelligence Index task | $3.27 | xhigh | AA |
| Time per Intelligence Index task | 24.5 min | xhigh | AA |
| Time to first answer token | 89.49 s | xhigh | AA |
| Output speed | 72 tok/s | xhigh | AA |
| Output tokens on index | 127M | xhigh | AA |
| Context window (AA) | 984k | — | AA |
| Openness | Proprietary | — | AA |

**What the composite means:** AA’s index weights knowledge work, coding, science, and general ability equally. Qwen 4 Max’s 43 is above the median for proprietary models in its price tier (AA median: 44 in the page’s own class; the leaderboard places it just below the top proprietary tier). It is not a coding-specialist signal.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 43 | 0–100 | xhigh | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | — | % resolved | — | TB official | 2026-11-24 | NE (no Qwen4 Max row) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE (model released after snapshot) |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | STALE |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM (not in captured top/Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (not on Verified board) |

### Vendor claims (not comparable)

The six vendor/third-party rows previously listed here now live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv) under `Qwen/Qwen4-Max`.
They are not independent and are not used in any ranking.

**Interpretation:** Qwen 4 Max has **no independent coding-agent result** in the common set. Its vendor coding claims live in the CSV; they are not comparable to Terminal-Bench or SWE-bench and must not be treated as such.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 43; vendor HLE claim (see CSV) | Strong | Medium-high |
| Coding | Vendor coding claim (see CSV); no TB/SWE | Promising but unverified | Low-medium |
| Agentic / tool use | AA index includes agentic evals; no TB | Good (inferred) | Medium |
| Knowledge / factuality | AA index; vendor HLE claim (see CSV) | Strong | Medium |
| Long context | 1M advertised; AA measured 984k | Excellent | High |
| Instruction following | AA index; no LiveBench IF row | Unknown | Low |
| Multimodal | Text, image, video input | Excellent | High |
| Speed / latency | 24.5 min/task; 89.49s TTFT; 72 tok/s | Slow | High |
| Cost efficiency | $3.27/task; 1,030 req/mo | Moderate | High |

**Profile summary:** Qwen 4 Max is a long-context, multimodal generalist with above-median AA intelligence. Its coding claims are vendor-only, so the safe use is synthesis, document reasoning, and cross-checking — not high-volume code generation.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | Long-document synthesis, multimodal document/video analysis, high-stakes general reasoning, second-opinion review |
| Acceptable for | Coding review, structured extraction from long sources, research summarization |
| Avoid for | Bulk generation, latency-sensitive loops, high-volume classification |
| Cheapest good use | One long-context pass over a large source set, then hand off to Muse Ember/GPT-6 Luna for formatting |
| Do not use when | You need sub-10s first token or 15K+ requests/month |
| Pair with | `meta/muse-ember` for bulk; `moonshotai/Kimi-K3.1-Pro` for final verification |
| Go budget fit | 1,030 req/mo; reserve for high-value steps |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context |
| Artificial Analysis | https://artificialanalysis.ai/models/qwen4-max | 2026-11-24 | AA index, cost, speed, release |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | confirmed no Qwen4 Max row |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | confirmed no row |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | confirmed not in captured top/Pareto |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no Verified row |
| BenchLM model ledger | https://benchlm.ai/models/qwen4-max | 2026-11-24 | discovery of vendor links |

**Data-quality flags:** Terminal-Bench `NE`; LiveBench `STALE`; LMArena `NM`; SWE-bench `NE`. Vendor/third-party claims are in `../data/vendor_claims.csv`; they are not independent and are excluded from rankings.

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
