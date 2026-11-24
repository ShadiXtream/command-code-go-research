---
cc_id: "deepseek/deepseek-v4-pro"
display_name: "DeepSeek V4 Pro"
provider: "DeepSeek"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "deepseek-v4-pro"
weights: "open"
context: "1M"
reasoning: true
efforts: ["off", "high", "max"]
evaluated_effort: "max"
default_effort: "high"
---

# DeepSeek V4 Pro

**One-line verdict:** A cheap, MIT-licensed 1M-context reasoner with strong LiveBench math/reasoning but weak agentic coding — useful for long-document analysis and second opinions, not for coding agents.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `deepseek/deepseek-v4-pro` |
| Provider | DeepSeek |
| Release date | 2026-08-13 (AA “DeepSeek V4 Pro 0813”) |
| Weights | Open weights, MIT |
| Parameters | 1.6T total / 49B active |
| Context window | 1M |
| Input modalities | Text only |
| Output modalities | Text |
| Reasoning / efforts | Yes — off, high, max |
| Default effort | high |
| AA slug | `deepseek-v4-pro` |
| Command Code mapping note | Command Code says “latest”; AA slug is the **0813** release. Mapping assumed, not confirmed. |

**Mapping risk:** **medium-high.** Command Code’s `deepseek/deepseek-v4-pro` is described as “latest,” while AA’s page is explicitly “DeepSeek V4 Pro 0813.” LiveBench also has two rows: `deepseek-v4-pro` (77.4) and `deepseek-v4-pro-0813` (71.6). The benchmark values below use the 0813 row; a future “latest” release could change them. Confirm the served version before relying on the fine-grained numbers.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly credits | $6 |
| Input $/1M | $0.66 off-peak (peak $1.32) |
| Output $/1M | $1.98 off-peak (peak $3.96) |
| Cache read $/1M | $0.022 |
| Cache write $/1M | — |
| Estimated requests/month | 2,960 |
| Estimated requests/5h | 889 |
| Estimated requests/week | 1,780 |
| Plan gate | Go |

**Cost sanity check:** a typical off-peak request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.0019**, consistent with the Go page’s ≈$0.0020/request estimate at $6/2,960. Peak hours roughly double input/output.

**Notes:** The off-peak price is excellent for a 1M-context model. Peak hours are 01:00–04:00 and 06:00–10:00 UTC, Monday–Friday; weekends are fully off-peak.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **23** | max | AA model page |
| AA Intelligence Index | 21 | high (default) | AA model page |
| AA Intelligence Index | 13 | non-reasoning | AA model page |
| AA rank | #18 / 33 in class | Open weights, large | AA model page |
| Cost per Intelligence Index task | $1.77 | max | AA |
| Time per Intelligence Index task | 19.1 min | max | AA |
| Time to first answer token | 73.21 s | max | AA |
| Output speed | 86 tok/s | max | AA |
| Output tokens on index | 119M | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Open weights (MIT) | — | AA |

**What the composite means:** 23 is average for large open-weight models and lower than the other six samples except none (it is the lowest of the seven). Its value is price and context, not aggregate intelligence.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 23 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **6.7** ±2.5 | % resolved | Claude Code; max | TB official | 2026-08-13 | value (rank 48) |
| LiveBench — overall (reported only) | 2026-06-25 | 71.6* | % | 0813 variant | BenchLM mirror | 2026-06-25 | value (reported overall) |
| LiveBench — reasoning | 2026-06-25 | 88.6 | % | 0813 variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — coding | 2026-06-25 | 63.8 | % | 0813 variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — math | 2026-06-25 | 95.5 | % | 0813 variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — data analysis | 2026-06-25 | 70.6 | % | 0813 variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — language | 2026-06-25 | 75.5 | % | 0813 variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LiveBench — instruction following | 2026-06-25 | 84.6 | % | 0813 variant | LB CSV (derived) | 2026-06-25 | value (derived) |
| LMArena Text | 2026-11-22 | **1,458** | Elo | not stated | Arena | 2026-11-22 | value (Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (V4 Pro absent; V3.2 is different) |

`*` There are two LiveBench rows: `deepseek-v4-pro` at 77.4 and `deepseek-v4-pro-0813` at 71.6. This file uses the 0813 row to match AA’s release page. A 6-category mean derived from the 0813 row is ≈79.8; the mirror’s overall is 71.6. The gap is an aggregation/version difference, not a model change. Do not quote 79.8 as an official overall.

### Vendor claims (not comparable)

No reliable vendor benchmark rows were extracted for V4 Pro. Vendor and third-party rows for all models live in
[`../data/vendor_claims.csv`](../data/vendor_claims.csv); they are not used in this file’s ranking.

### Benchmark context

**Arena context:** 1,458 Elo places it on Arena’s Pareto frontier as a low-cost text model, below MiMo V2.6 Pro (1,481) and above MiMo V2.6 Flash (1,448). The Arena configuration is not stated.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA 23 max / 21 default; LiveBench reasoning 88.6 | Strong reasoning, average aggregate | High |
| Coding | TB 4.1 6.7%; LiveBench coding 63.8 | Weak agentic, moderate code generation | High |
| Agentic / tool use | TB 4.1 6.7% | Poor | High |
| Knowledge / factuality | AA index; no Omniscience sub-score | Moderate | Medium |
| Long context | 1M | Excellent | High |
| Instruction following | LiveBench IF 84.6 | Strong | High |
| Multimodal | Text only | None | High |
| Speed / latency | 19.1 min/task; 73.21s TTFT; 86 tok/s | Slow | High |
| Cost efficiency | $1.77/task, off-peak cheap; 2,960 req/mo | Good | High |

**Profile summary:** V4 Pro is a text-only long-context reasoner with an unusually high LiveBench math/reasoning profile for its AA aggregate. Its Terminal-Bench 6.7% is a clear warning: do not use it as an autonomous coding agent. Its Arena 1,458 and low off-peak price make it a good cheap second opinion.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | Long-document synthesis, cheap reasoning, second-opinion analysis, text-only research |
| Acceptable for | Math-heavy validation, structured extraction from long text, low-cost batch reasoning |
| Avoid for | Agentic coding, complex tool use, multimodal tasks, latency-sensitive work |
| Cheapest good use | A 1M-context text pass at off-peak rates, then escalate hard conclusions to Kimi/Qwen |
| Do not use when | The task requires coding-agent behavior or images |
| Pair with | `zai-org/GLM-5.3` for coding; `moonshotai/Kimi-K3.1-Pro` for final verification |
| Go budget fit | 2,960 req/mo; strong value off-peak |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context, peak/off-peak |
| Artificial Analysis | https://artificialanalysis.ai/models/deepseek-v4-pro | 2026-11-24 | AA index by effort, cost, speed, release |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | TB 4.1 6.7%, harness, date |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | 0813 task scores, derived categories |
| BenchLM LiveBench mirror | https://benchlm.ai/benchmarks/livebench | 2026-11-24 | reported overall 71.6 |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | 1,458 Elo, Pareto list |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no V4 Pro Verified row |

**Data-quality flags:** version mapping `medium-high` (latest vs 0813); LiveBench two-row conflict; LMArena configuration unknown; SWE-bench `NE`; Terminal-Bench harness-dependent (Claude Code, max).

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
