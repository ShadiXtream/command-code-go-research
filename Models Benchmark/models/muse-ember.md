---
cc_id: "meta/muse-ember"
display_name: "Muse Ember"
provider: "Meta"
snapshot_date: "2026-11-24"
status: "sample"
aa_slug: "muse-ember"
weights: "closed"
context: "1.05M"
reasoning: true
efforts: ["low", "medium", "high", "xhigh", "max"]
evaluated_effort: "max"
default_effort: "max"
---

# Muse Ember

**One-line verdict:** The efficiency outlier of the Go plan: AA 36 at $0.14/task, 420 tok/s, 5.1s first token, and ~15,800 requests/month — the default bulk worker for extraction, drafting, and summarization.

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `meta/muse-ember` |
| Provider | Meta |
| Release date | 2026-11-09 |
| Weights | Proprietary |
| Parameters | Undisclosed |
| Context window | 1.05M (Command Code) / 1M (AA) |
| Input modalities | Text, image |
| Output modalities | Text |
| Reasoning / efforts | Yes — low, medium, high, xhigh, max |
| Default effort | max |
| AA slug | `muse-ember` |
| Command Code mapping note | Exact ID; AA name “Muse Ember” matches |

**Mapping risk:** **low-medium.** Command Code lists five effort levels; AA’s model page only reports `max` and `xhigh`. The headline 36 is the `max` configuration, not necessarily every effort.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly credits | $6 |
| Input $/1M | $0.10 |
| Output $/1M | $0.50 |
| Cache read $/1M | $0.004 |
| Cache write $/1M | — |
| Estimated requests/month | 15,800 |
| Estimated requests/5h | 4,740 |
| Estimated requests/week | 9,470 |
| Plan gate | Go |

**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$0.00036**, consistent with the Go page’s ≈$0.00038/request estimate at $6/15,800.

**Notes:** This is one of the cheapest per-request models on Go. Its input and cache-read prices are extremely low, which makes it ideal for repeated context-heavy agent loops.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | **36** | max | AA model page |
| AA Intelligence Index (xhigh) | 34 | xhigh | AA model page |
| AA rank | #2 / 40 in class | Proprietary, low price tier | AA model page |
| Cost per Intelligence Index task | $0.14 | max | AA |
| Time per Intelligence Index task | 3.3 min | max | AA |
| Time to first answer token | 5.10 s | max | AA |
| Output speed | 420 tok/s | max | AA |
| Output tokens on index | 115M | max | AA |
| Context window (AA) | 1M | — | AA |
| Openness | Proprietary | — | AA |

**What the composite means:** 36 is third among the seven samples, behind Kimi (46) and Qwen (43), but it is achieved at roughly **1/23rd** of Qwen’s cost per task and **1/7th** of Qwen’s time per task. This is the best quality-per-credit profile in the sample set.

## 4. Common benchmark table

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | 36 | 0–100 | max | AA | 2026-11-24 | value |
| Terminal-Bench | 4.1 | **30.6** ±3.8 | % resolved | Muse Code; xhigh | TB official | 2026-11-09 | value (rank 27) |
| LiveBench — overall | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE (no Muse Ember row) |
| LiveBench — reasoning | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — coding | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — math | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — data analysis | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — language | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LiveBench — instruction following | 2026-06-25 | — | % | — | LB CSV | 2026-06-25 | NE |
| LMArena Text | 2026-11-22 | — | Elo | — | Arena | 2026-11-22 | NM (not in captured top/Pareto) |
| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | 2026-11-24 | NE (not on Verified board) |

### Supplementary evidence (not for cross-model ranking)

No reliable vendor benchmark table was extracted for Muse Ember in this sample. The independent evidence is AA + Terminal-Bench.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index 36 | Strong | High |
| Coding | TB 4.1 30.6% (Muse Code, xhigh) | Moderate | High |
| Agentic / tool use | TB 4.1; AA agentic evals | Moderate | High |
| Knowledge / factuality | AA index; no Omniscience sub-score | Good | Medium |
| Long context | 1M | Excellent | High |
| Instruction following | AA index; no LiveBench IF row | Unknown | Low |
| Multimodal | Text + image | Good | High |
| Speed / latency | 3.3 min/task; 5.10s TTFT; 420 tok/s | Excellent | High |
| Cost efficiency | $0.14/task; 15,800 req/mo | Excellent | High |

**Profile summary:** Muse Ember is the best speed/quality/price balance on Go. It is not the strongest coder or reasoner, but it is fast enough and cheap enough to run the bulk of a 62-model documentation project, with escalation to Kimi or Qwen only for hard cases.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | Bulk extraction, template-filled model files, page summarization, classification, first-pass drafting |
| Acceptable for | Coding review, medium-complexity research, multimodal document reading |
| Avoid for | Hard agentic coding, final numerical verification, tasks where a 5-point reasoning gap matters |
| Cheapest good use | Generate the first draft of every model file, then escalate exceptions |
| Do not use when | The task requires the highest correctness or complex multi-step planning |
| Pair with | `moonshotai/Kimi-K3.1-Pro` or `Qwen/Qwen4-Max` for final QA; `zai-org/GLM-5.3` for code-heavy steps |
| Go budget fit | 15,800 req/mo — the default volume model |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | 2026-11-24 | credits, requests, price |
| Command Code catalog | https://commandcode.ai/models | 2026-11-24 | exact ID, context, efforts |
| Artificial Analysis | https://artificialanalysis.ai/models/muse-ember | 2026-11-24 | AA index, cost, speed, release |
| Terminal-Bench | https://www.tbench.ai/ | 2026-11-24 | TB 4.1 30.6%, harness, date |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | 2026-11-24 | confirmed no Muse Ember row |
| Arena | https://arena.ai/leaderboard/chat/text | 2026-11-24 | confirmed not in captured top/Pareto |
| SWE-bench JSON | https://www.swebench.com/ | 2026-11-24 | confirmed no Verified row |

**Data-quality flags:** effort list differs between Command Code (5 levels) and AA (2 reported); LiveBench `NE`; LMArena `NM`; SWE-bench `NE`. Terminal-Bench is harness-dependent (Muse Code, xhigh).

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| 2026-11-24 | Initial sample file | Human-review batch |
