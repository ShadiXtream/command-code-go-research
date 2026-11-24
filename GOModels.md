# Command Code Go Plan — Available Models (Verified Snapshot)

**Snapshot:** 2026-11-24
**Plan:** Go — **$1/month**, **$10 of usage per month**, rolling limits of **$3 per 5 hours** and **$6 per week**.
**Scope:** Every model included on the Go plan — **62 models** — with exact Command Code IDs, context windows, per-token prices, Go monthly credits, and published request estimates.

This file is an inventory, not a benchmark. Benchmarks live in [`Models Benchmark/`](./Models%20Benchmark/plan.md).

---

## 1. Why this file exists

The Go plan is the cheapest Command Code tier, and its model access is **not** the same as the full catalog. This file answers one question precisely:

> Which models can a Go subscriber select today, and what does each one cost in Go credits?

It is also the input list for the benchmark project in `Models Benchmark/`. Every benchmark file must use the exact ID from this inventory so data cannot drift onto a similarly named model.

---

## 2. Verification (second pass)

### 2.1 Sources used

| Source | What it establishes | URL |
|---|---|---|
| Command Code — Go plan page | Authoritative Go model list (`62`), per-model credits, request estimates, context, prices | https://commandcode.ai/docs/plans/go |
| Command Code — Models catalog | Exact IDs, context, reasoning efforts, prices, Min plan column | https://commandcode.ai/models |
| Command Code — pricing & limits | Plan order, credits, rolling limits, deals, geo restrictions | https://commandcode.ai/docs/resources/pricing-limits |
| Bundled Command Code model reference | `Min plan` per model and the live-catalog override | `command-code-knowledge/reference/models.md` + live catalog section |
| Artificial Analysis | Independent cross-check of model names, release dates, openness, and serving prices | https://artificialanalysis.ai/leaderboards/models |

### 2.2 Count reconciliation

The Go page states **`Go plan 62`** and **`62/107 Models`**. The inventory below reconstructs that number three ways:

| Slice | Count |
|---|---:|
| Models in the Go page’s two “Every model on the Go plan” credit tables | 52 |
| Older models listed separately on the Go page | 8 |
| Free models (Flint, Glyph Cluster) | 2 |
| **Total** | **62** |

Provider split of the 62:

| Provider family | Count |
|---|---:|
| Alibaba / Qwen | 11 |
| Z.ai / GLM | 7 |
| DeepSeek | 6 |
| Moonshot / Kimi | 6 |
| MiniMax | 4 |
| Tencent | 4 |
| Meta / Muse | 4 |
| StepFun | 3 |
| Thinking Machines | 3 |
| Xiaomi / MiMo | 2 |
| NVIDIA / Nemotron | 2 |
| Other (LongCat, Ornith, Mistral, Ling ×2, Grok, GPT-5.6 Luna, GPT-6 Luna, Flint, Glyph) | 10 |
| **Total** | **62** |

### 2.3 Live-catalog reconciliation

The bundled reference’s live section adds two models the generated catalog did not list, and removes one:

| Model | Live-catalog state | Go status | Resolution |
|---|---|---|---|
| `thinkingmachines/inkling-2-mini` | Added | **In the Go 62** | Included below (standard $6 credits) |
| `google/gemini-4-neon` | Added | **Not in the Go 62**; reference Min plan is Pro+ | Excluded from this inventory |
| `thinkingmachines/inkling-2-small:free` | Removed / no longer offered | Not in the Go 62 | Excluded; do not benchmark or recommend it |

### 2.4 Independent `Min plan` cross-check

The bundled catalog was parsed independently for every row whose `Min plan` is `Go and above`:

| Check | Result |
|---|---|
| Catalog rows with `Min plan = Go and above` | **62** |
| Inventory rows in this file | **62** |
| Set difference vs. inventory | `+ thinkingmachines/inkling-2-mini` (live addition) / `− thinkingmachines/inkling-2-small:free` (removed) |
| Unexplained differences | **0** |

This is the strongest verification available without querying the user’s plan: two independent sources (the Go plan page and the catalog’s Min plan column) both yield **62**, and their only differences are the two live-catalog changes already documented.

### 2.5 Edge cases checked

- **Same-family near-duplicates** are separate models and are kept separate: `Qwen3.8-Max` vs `Qwen3.8-Max-0902`; `GLM-5.3` vs `GLM-5.3-Flash` vs `GLM-5.3-FlashX`; `DeepSeek V4.1 Flash` vs `V4.1 Flash Fast` vs `V4 Flash Fast`; `Muse Spark 1.2` vs `Muse Spark 1.2 Contributor`; `MiMo V2.6 Pro` vs `MiMo V2.6 Pro UltraSpeed` (the UltraSpeed is **not** on Go).
- **Plan-gated models were removed, not renamed.** Examples that are *not* on Go: Gemini 4 Neon, Gemini 4 Carbon/Argon, Claude Sonnet 5/5.5, Claude Opus 5+, GPT-6.2 Astra/Sol, GPT-5.6 Sol, Grok 4.6/4.7, Fugu Ultra, Qwen 3.8 Max Prime, DeepSeek V4.1 Flash Ultrafast, MiMo V2.6 Pro UltraSpeed, Muse Wonder, and the non-Contributor Muse Spark 1.2/1.3.
- **The Go FAQ is a summary, not the list.** The FAQ names only “GPT-5.6 Luna, Grok 4.5, Qwen Max & Plus, and the Muse Spark Contributor tiers” as closed models, but the Go model table also includes **GPT-6 Luna, Muse Ember, and Qwen4 Max**. The 62-row table is the operative list; the FAQ appears stale. Do not use the FAQ as a filter.
- **Exact IDs are preserved with catalog casing.** Do not lowercase Moonshot/Qwen/MiniMax IDs; `/model` accepts the exact catalog IDs.
- **Prices are Command Code’s Go-page rates**, not the upstream lab’s list price. DeepSeek V4 Pro/Flash rates are off-peak; peak is higher (see notes).
- **Context values can be rounded on the Go page.** Where the catalog reference gives a more precise value (e.g., `1.05M`, `1.02M`), that value is used and the discrepancy is noted.

**Verification result: 62 unique models, 0 duplicates, 0 missing from the Go page, 0 plan-gated models included.**

---

## 3. How to read the inventory

- **ID** — exact string accepted by `/model`, `--model`, and agent `model:` pins.
- **Context** — maximum combined input/output tokens. `—` means Command Code does not publish a value.
- **In / Out / Cache read / Cache write** — USD per 1M tokens on the Go plan. `—` means not billed / not published.
- **Go credits** — the model’s monthly allowance inside the shared $10 Go pool. It is not an extra charge.
- **Req/mo** — Command Code’s estimate for a typical agent request (~800 fresh input tokens, ~50K cache reads, 125–200 output tokens). `—` means the Go page gives no estimate for that model; the standard allowance is $6.
- **Class** — `Open*` means the model is listed in the catalog’s open-source section; `Closed` means the catalog or Artificial Analysis identifies it as proprietary. This is a catalog label, not a legal review. `*` marks a license with known commercial-use restrictions (Kimi, GLM, Hy4, etc.); unmarked open models may also have terms — verify before redistribution.
- **Vision** — accepts image input.
- **Reasoning** — exposes reasoning effort levels; the exact efforts are in the notes when relevant.

> **Go plan limits:** $3 of usage per rolling 5 hours, $6 per rolling 7 days, $10 per month. Extra credits are never throttled. Models on Go do **not** include Cloud or Provider API access (those start at GOAT).

---

## 4. DeepSeek (6)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `deepseek/deepseek-v4.1-flash` | DeepSeek V4.1 Flash (latest) | 1M | 0.15 | 0.60 | 0.003 | — | $10 | 25,600 | Open; reasoning off/low/high/max; vision |
| `deepseek/deepseek-v4-flash` | DeepSeek V4 Flash (latest) | 1M | 0.15 | 0.60 | 0.003 | — | $6 | 15,400 | Open; reasoning off/high/max |
| `deepseek/deepseek-v4-flash-fast` | DeepSeek V4 Flash Fast | 1M | 0.28 | 0.56 | 0.07 | — | $8 | 2,090 | Open; low/high/max; low-latency serving |
| `deepseek/deepseek-v4.1-flash-fast` | DeepSeek V4.1 Flash Fast (latest) | 1M | 0.16 | 0.58 | 0.016 | — | $6 | 5,750 | Open; off/low/high/max; off-peak shown |
| `deepseek/deepseek-v4-pro` | DeepSeek V4 Pro (latest) | 1M | 0.66 | 1.98 | 0.022 | — | $6 | 2,960 | Open (MIT); off/high/max; off-peak shown |
| `deepseek/deepseek-v4-flash-vision-exp` | DeepSeek V4 Flash Vision (exp) | 1M | 0.15 | 0.60 | 0.003 | — | $6 | 15,400 | Open; experimental vision; off-peak shown |

**DeepSeek price note:** V4 Pro, V4 Flash, and V4 Flash Vision are billed at **peak** rates 01:00–04:00 and 06:00–10:00 UTC, Monday–Friday; the table shows the **off-peak** rate (17h/day + weekends). Peak V4 Pro is $1.32/$3.96; peak V4 Flash is $0.30/$1.20.

---

## 5. Moonshot / Kimi (6)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `moonshotai/Kimi-K3.1-Pro` | Kimi K3.1 Pro | 1M | 2.00 | 10.00 | 0.20 | — | $6 | 441 | Open*; reasoning low/high/max; vision; top open-weight model on AA |
| `moonshotai/Kimi-K3` | Kimi K3 | 1M | 3.00 | 15.00 | 0.30 | — | $8 | 392 | Open*; low/high/max |
| `moonshotai/Kimi-K2.7-Code` | Kimi K2.7 Code | 256K | 0.95 | 4.00 | 0.19 | — | $9 | 814 | Open*; coding; vision |
| `moonshotai/Kimi-K2.7-Code-Highspeed` | Kimi K2.7 Code HighSpeed | 262K | 1.90 | 8.00 | 0.38 | — | $6 | 271 | Open*; high-speed coding; vision |
| `moonshotai/Kimi-K2.6` | Kimi K2.6 | 256K | 0.95 | 4.00 | 0.16 | — | $6 | — | Open; long-horizon coding; vision |
| `moonshotai/Kimi-K2.5` | Kimi K2.5 | 256K | 0.60 | 3.00 | 0.10 | — | $6 | — | Open; multimodal frontend coding |

---

## 6. Z.ai / GLM (7)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `z-ai/glm-5.3-flash` | GLM-5.3 Flash | 1M | 0.15 | 0.50 | 0.03 | — | $10 | 5,900 | Open; low/high/max; vision |
| `z-ai/glm-5.3-flashx` | GLM-5.3 FlashX | 1M | 0.37 | 1.25 | 0.075 | — | $6 | 1,420 | Open; high-speed GLM-5.3 Flash |
| `zai-org/GLM-5.3` | GLM-5.3 | 1M | 1.40 | 4.40 | 0.26 | — | $10 | 677 | Open*; low/high/max; text-only |
| `zai-org/GLM-5.2` | GLM-5.2 | 1M | 1.40 | 4.40 | 0.26 | — | $10 | 677 | Open; high/max |
| `zai-org/GLM-5.2-Fast` | GLM-5.2 Fast | 1M | 3.00 | 10.25 | 0.50 | — | $9 | 311 | Open; high-throughput serving |
| `zai-org/GLM-5.1` | GLM-5.1 | 200K | 1.40 | 4.40 | 0.26 | — | $6 | — | Open; autonomous coding agent |
| `zai-org/GLM-5` | GLM-5 | 200K | 1.00 | 3.20 | 0.20 | — | $6 | — | Open; multi-mode thinking |

---

## 7. MiniMax (4)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `minimax/minimax-m3.1-flash` | MiniMax M3.1 Flash | 1M | 0.15 | 0.60 | 0.015 | — | $6 | 6,350 | Open; low/medium/high/xhigh/max; multimodal |
| `MiniMaxAI/MiniMax-M3` | MiniMax M3 | 1M | 0.30 | 1.20 | 0.06 | — | $8 | 2,360 | Open; low/medium/high; **50% off** |
| `MiniMaxAI/MiniMax-M2.7` | MiniMax M2.7 | — | 0.30 | 1.20 | 0.06 | — | $6 | — | Open; software-engineering agent |
| `MiniMaxAI/MiniMax-M2.5` | MiniMax M2.5 | 200K | 0.30 | 1.20 | 0.03 | — | $6 | — | Open; full-stack agentic dev |

---

## 8. Alibaba / Qwen (11)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `Qwen/Qwen4-Max` | Qwen 4 Max | 1M | 1.50 | 4.50 | 0.075 | 1.875 | $6 | 1,030 | Closed (AA); reasoning off/low/high/xhigh; text+image+video |
| `Qwen/Qwen3.8-Omni-Flash` | Qwen 3.8 Omni Flash | 1M | 0.15 | 0.47 | 0.016 | — | $6 | 5,920 | Open*; low/medium/xhigh; omni-modal |
| `Qwen/Qwen3.8-Max-0902` | Qwen 3.8 Max 0902 | 1M | 2.00 | 6.00 | 0.25 | — | $7 | 458 | Closed (AA); low/medium/xhigh |
| `Qwen/Qwen3.8-Max` | Qwen 3.8 Max | 1M | 2.00 | 6.00 | 0.25 | 2.50 | $7 | 458 | Closed (AA); low/medium/xhigh |
| `Qwen/Qwen3.8-27B` | Qwen 3.8 27B | 262K | 0.40 | 3.00 | 0.04 | — | $10 | 3,420 | Open; low/medium/xhigh; vision |
| `Qwen/Qwen3.8-Flash` | Qwen 3.8 Flash | 1M | 0.16 | 0.47 | 0.016 | — | $6 | 5,870 | Open*; low/medium/xhigh |
| `Qwen/Qwen3.7-Max` | Qwen 3.7 Max | 1M | 2.50 | 7.50 | 0.50 | 3.13 | $10 | 351 | Closed; frontier coding |
| `Qwen/Qwen3.7-Plus` | Qwen 3.7 Plus | 1M | 0.40 | 1.60 | 0.08 | 0.50 | $10 | 2,160 | Closed; agentic coding |
| `Qwen/Qwen3.7-Flash` | Qwen 3.7 Flash | 1M | 0.03 | 0.13 | 0.006 | 0.038 | $6 | — | Closed; cheapest paid model on Go |
| `Qwen/Qwen3.6-Max-Preview` | Qwen 3.6 Max Preview | 200K | 1.30 | 7.80 | 0.26 | 1.63 | $6 | — | Closed; vibe coding |
| `Qwen/Qwen3.6-Plus` | Qwen 3.6 Plus | 200K | 0.50 | 3.00 | 0.10 | — | $10 | 1,670 | Open*; agentic coding |

> **Context note:** the Go page rounds several Qwen windows. `Qwen3.6-Plus` is listed as `200K`; the catalog reference also shows no value, while Artificial Analysis lists Qwen 3.6-era models at 256K. Use 200K as the conservative Command Code limit until confirmed.

---

## 9. Tencent (4)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `tencent/hy3-paid` | Tencent Hy3 | 262K | 0.14 | 0.58 | 0.035 | — | $10 | 5,060 | Open; sparse-MoE reasoning |
| `tencent/hy4` | Tencent Hy4 | 1M | 0.834 | 2.501 | 0.042 | — | $6 | 1,840 | Open*; low/medium/high; vision |
| `tencent/hy4-flash` | Tencent Hy4 Flash | 1M | 0.07 | 0.281 | 0.003 | — | $6 | 22,900 | Open*; off/high |
| `tencent/hy4-preview` | Tencent Hy4 Preview | 1M | 0.834 | 2.501 | 0.042 | — | $6 | 1,840 | Open*; low/medium/high |

---

## 10. Xiaomi / MiMo, StepFun, Meta, Thinking Machines (12)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `xiaomi/mimo-v2.6-pro` | MiMo V2.6 Pro | 1.05M | 0.435 | 0.87 | 0.0036 | — | $6 | 8,550 | Open; flagship multimodal agentic |
| `xiaomi/mimo-v2.6-flash` | MiMo V2.6 Flash | 1.05M | 0.14 | 0.28 | 0.0028 | — | $6 | 19,500 | Open; efficient multimodal |
| `stepfun/Step-5-Preview` | Step 5 Preview | 1M | 1.00 | 2.70 | 0.05 | — | $6 | 1,560 | Open; low/medium/high; 600B sparse MoE |
| `stepfun/Step-3.7-Flash` | Step 3.7 Flash | 256K | 0.20 | 1.15 | 0.04 | — | $6 | 2,510 | Open; multimodal sparse MoE |
| `stepfun/Step-3.5-Flash` | Step 3.5 Flash | 262K | 0.09 | 0.30 | 0.02 | — | $6 | 5,300 | Open; fast agentic reasoning |
| `meta/muse-ember` | Muse Ember | 1.05M | 0.10 | 0.50 | 0.004 | — | $6 | 15,800 | Closed (AA); low/medium/high/xhigh/max; vision |
| `meta/muse-spark-1.3-contributor` | Muse Spark 1.3 Contributor | 1.05M | 0.10 | 0.20 | 0.002 | — | $6 | 27,300 | Closed; low/medium/high/xhigh; ~95% off |
| `meta/muse-spark-1.2-contributor` | Muse Spark 1.2 Contributor | 1.05M | 0.10 | 0.20 | 0.002 | — | $6 | 27,300 | Closed; low/medium/high/xhigh; ~95% off |
| `meta/muse-spark-open` | Muse Spark Open | 1.05M | 1.25 | 4.25 | 0.15 | — | $6 | 642 | Open; low/medium/high; coding/agentic |
| `thinkingmachines/inkling-2-mini` | Inkling 2 Mini | 1M | 0.075 | 0.30 | 0.015 | — | $6 | 6,900 | Open; off/low/medium/high/max; live-catalog addition |
| `thinkingmachines/inkling` | Inkling | 256K | 1.00 | 4.05 | 0.17 | — | $6 | 593 | Open; multimodal MoE |
| `thinkingmachines/inkling-small` | Inkling Small | 1M | 0.50 | 1.20 | 0.10 | — | $6 | 1,060 | Open; lightweight MoE |

---

## 11. Everything else on Go (10)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `meituan/LongCat-2.0` | LongCat 2.0 | 1M | 0.30 | 1.20 | 0.006 | — | $10 | 12,800 | Open; trillion-parameter agentic |
| `ornith/ornith-1.5-122b` | Ornith 1.5 122B | 262K | 0.16 | 0.64 | 0.02 | — | $6 | 4,780 | Open; fast MoE agentic coding |
| `nvidia/nemotron-3-ultra-550b-a55b` | Nemotron 3 Ultra | 1M | 0.60 | 2.40 | 0.12 | — | $6 | 862 | Open; long-horizon autonomous agents |
| `nvidia/nemotron-3.5-super-vl` | Nemotron 3.5 Super VL | 262K | 0.20 | 0.50 | 0.04 | — | $6 | 2,650 | Open; low/medium/high; vision-language |
| `mistral/mistral-large-4` | Mistral Large 4 | 524K | 1.36 | 4.18 | 0.14 | — | $6 | 672 | Open; low/medium/high; multimodal |
| `inclusionai/ling-3.1-flash` | Ling 3.1 Flash | 262K | 0.30 | 0.90 | 0.06 | — | $6 | 1,750 | Open; low/medium/high; hybrid reasoning |
| `inclusionai/ling-3.1-flash-1019` | Ling 3.1 Flash 1019 | 1M | 0.30 | 0.90 | 0.06 | — | $6 | 1,750 | Open; low/medium/high; 1M variant |
| `xai/grok-4.5` | Grok 4.5 | 500K | 2.00 | 6.00 | 0.50 | — | $6 | 216 | Closed; low/medium/high |
| `gpt-5.6-luna` | GPT-5.6 Luna | 1.05M | 0.20 | 1.20 | 0.02 | 0.25 | $6 | 4,440 | Closed; low/medium/high/xhigh/max; deprecated upstream but still served |
| `gpt-6-luna` | GPT-6 Luna | 1.05M | 0.10 | 0.50 | 0.01 | 0.125 | $6 | 9,090 | Closed; low/medium/high/xhigh/max; vision |

---

## 12. Free / stealth (2)

| ID | Name | Context | In | Out | Cache read | Cache write | Go credits | Req/mo | Class / notes |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| `recursive/flint-v1.0:free` | Flint | 262K | 0 | 0 | 0 | — | $0 | — | Open; 40B total / 2.5B active; **1,000 requests/day**; no ZDR |
| `stealth/glyph-cluster:free` | Glyph Cluster | 256K | 0 | 0 | 0 | — | 0 | — | Stealth; low/medium/high/xhigh; **1,000 requests/day**; no ZDR; provider may train on data |

> Both free models require **$1 of credits in the account** to start a session, cost $0 per token, and are capped at **1,000 requests per account per day** (UTC reset). They do not run under `CMD_ZDR=1`.

---

## 13. Excluded by plan gate (not on Go)

These are present in the full Command Code catalog but require **GOAT, Pro, or Max**. They must not enter the Go benchmark list:

- **Google:** Gemini 4 Neon, Gemini 4 Carbon, Gemini 4 Argon, Gemini 3.8 Flash, Gemini 3.7 Flash, Gemini 3.6/3.5 Flash, Gemini 3.5/3.1 Flash Lite.
- **Anthropic:** Claude Fable 5/5.1/5.2, Claude Opus 4.7/4.8/5/5.5, Claude Sonnet 4.6/5/5.5, Claude Haiku 5.5.
- **OpenAI:** GPT-6 Astra, GPT-6.2 Astra, GPT-6.2 Sol, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Sol, GPT-5.6 Sol, GPT-5.6 Terra, GPT-5.5, GPT-5.4, GPT-5.3 Codex, GPT-5.4 Mini.
- **Others:** Fugu Ultra (Max), Muse Wonder (Max), Muse Spark 1.2/1.3 non-Contributor (GOAT), Grok 4.6/4.7 (GOAT), Qwen 3.8 Max Prime (GOAT), DeepSeek V4.1 Flash Ultrafast (GOAT), MiMo V2.6 Pro UltraSpeed (GOAT).

---

## 14. Caveats that affect model choice

1. **Go credits are per model, from one shared $10 pool.** A model with a `$10` allowance can consume the whole pool; a `$6` model leaves room for others. The table’s `Req/mo` is an estimate, not a quota.
2. **Cache reads dominate agent cost.** Command Code’s estimate assumes ~50K cache reads per request. A model with a cheap input price but a high cache-read price can be more expensive in practice.
3. **Reasoning effort changes both quality and cost.** A model’s headline benchmark may be measured at `max`, while its default may be lower. The benchmark files in `Models Benchmark/` record the evaluated effort explicitly.
4. **DeepSeek day/night pricing.** The Go table shows off-peak; peak hours roughly double input/output for V4 Pro/Flash.
5. **Free/stealth models are not private.** Flint and Glyph Cluster may retain or train on prompts and are excluded from ZDR sessions. Do not use them for sensitive code or data.
6. **Geo restrictions.** GPT-5.6 Luna is unavailable in China (provider restriction). Other providers may add regional limits; a blocked model is not billed.
7. **The catalog changes.** Deals, context windows, and plan gates can change without notice. Re-run the verification in §2 before a new benchmark batch.

---

## 15. Source log

| Item | Retrieved | Source |
|---|---|---|
| Go model list, credits, request estimates | 2026-11-24 | https://commandcode.ai/docs/plans/go |
| Full model catalog and prices | 2026-11-24 | https://commandcode.ai/models |
| Plan order, rolling limits, deals | 2026-11-24 | https://commandcode.ai/docs/resources/pricing-limits |
| Plan-gated model list and live additions | 2026-11-24 | Bundled `command-code-knowledge` reference + live catalog |
| Openness / release-date cross-check | 2026-11-24 | https://artificialanalysis.ai/leaderboards/models |
