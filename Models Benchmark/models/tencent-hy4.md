---
cc_id: "tencent/hy4"
display_name: "Tencent Hy4"
provider: "Tencent"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "tencent-hy4"
weights: "open-restricted"
context: "1M"
reasoning: true
efforts: ["low", "medium", "high"]
evaluated_effort: "AA headline (default not stated); TB max"
default_effort: "unknown"
---

# Tencent Hy4

**One-line verdict:** A strong open-weight reasoner with a 1M context and a mid-range price — a good second opinion and cost-aware synthesis model, but its extreme verbosity and 99s first-token latency make it a poor bulk worker.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `tencent/hy4` |
| Provider | Tencent |
| Release date | 2026-11-03 |
| Weights | Open weights, commercial-use restrictions (Tencent Hy License) |
| Parameters | 774B total / 50.2B active |
| Context window | 1M |
| Input modalities | Text, image |
| Output modalities | Text |
| Reasoning / efforts | Yes — low, medium, high |
| Default effort | Not stated by AA |
| AA slug | `tencent-hy4` |
| Command Code mapping note | Exact ID; AA name “Tencent Hy4” matches |

**Mapping risk:** **low.** The only ambiguity is the evaluated effort: AA’s model page reports a single headline score without naming the default effort, while the Terminal-Bench row explicitly uses `max`.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $6 |
| Input $/1M | $0.834 |
| Output $/1M | $2.501 |
| Cache read $/1M | $0.042 |
| Cache write $/1M | — |
| Estimated requests/month | 1,840 |
| Estimated requests/5h | 551 |
| Estimated requests/week | 1,100 |
| Plan gate | Go |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0031**, consistent with the Go page’s ≈$0.0033/request estimate at $6/1,840.

**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

**Notes:** Cheaper per request than Kimi, Qwen, or GLM, but it generates far more tokens. The Go estimate already accounts for typical output; unusually long reasoning traces will burn credits faster.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **35** | AA headline (effort not stated) | AA model page |
| AA rank | #2 / 33 in class | Open weights, large | AA model page |
| Cost per Intelligence Index task | $1.03 | AA headline | AA |
| Time per Intelligence Index task | 13.8 min | AA headline | AA |
| Time to first answer token | 99.30 s | AA headline | AA |
| Output speed | 94 tok/s | AA headline | AA |
| Output tokens on index | 160M | AA headline | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights (commercial restrictions) | — | AA |

**What the composite means:** 35 is second only to Kimi K3.1 Pro (46) and Qwen 4 Max (43) among the seven samples. It is well above AA’s median for comparable open-weight models (23), but it is achieved with a very high token budget.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 35 | 0–100 | AA headline | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **37.9** ±3.5 | % resolved | Claude Code; max | TB official | 2026-11-04 | value (rank 25) |
| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE (no Hy4 row) |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM (not in captured top/Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (not on Verified board) |

### Vendor claims (not comparable)

No reliable vendor benchmark rows were extracted for Hy4. Vendor and third-party rows for all models live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv); they are not used in this file’s ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 35 | Strong | High |
| Coding | TB 4.1 37.9% (Claude Code, max) | Good | High |
| Agentic / tool use | TB 4.1; AA agentic evals | Good | High |
| Knowledge / factuality | AA index; no Omniscience sub-score captured | Good | Medium |
| Long context | 1M | Excellent | High |
| Instruction following | AA index; no LiveBench IF row | Unknown | Low |
| Multimodal | Text + image | Good | High |
| Speed / latency | 13.8 min/task; 99.30s TTFT; 94 tok/s | Moderate (slow first token) | High |
| Cost efficiency | $1.03/task; 1,840 req/mo | Good | High |
| Verbosity | 160M output tokens on index | Very verbose | High |

**Profile summary:** Hy4 is a capable open reasoner at a mid-range price, with a 1M context and vision. Its practical weakness is token verbosity: 160M output tokens on the AA index is the highest among the seven samples, which raises real-world cost and latency even when the per-token price looks low.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | Mid-cost reasoning, second-opinion verification, long-context text synthesis, vision-assisted analysis |
| Acceptable for | Coding review, research summarization, drafting with a token budget |
| Avoid for | High-volume extraction, latency-sensitive loops, strict output-length work |
| Cheapest good use | A second read on a high-stakes conclusion after a cheaper first pass |
| Do not use when | You need fast first tokens or tightly bounded output |
| Pair with | `meta/muse-ember` for first-pass extraction; `moonshotai/Kimi-K3.1-Pro` for final QA |
| Go budget fit | 1,840 req/mo; mid-range, but verbosity can erode it |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context |
| Artificial Analysis | https://artificialanalysis.ai/models/tencent-hy4 | 2026-11-24 | AA index, cost, speed, release |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | TB 4.1 37.9%, harness, date |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | confirmed no Hy4 row |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | confirmed not in captured top/Pareto |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no Verified row |

**Data-quality flags:** evaluated effort not stated by AA; LiveBench `NE`; LMArena `NM`; SWE-bench `NE`. Terminal-Bench is harness-dependent (Claude Code, max).

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
