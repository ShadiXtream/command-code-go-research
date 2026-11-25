# Benchmark Source Registry

**Snapshot:** 2026-11-24
**Rule:** every benchmark value must trace to a source in this registry. If a source is not here, it is not citable yet.

---

## 1. Credibility tiers

| Tier | Meaning | Use in model files |
|---|---|---|
| **A — Independent primary** | The benchmark organization runs the evaluation itself and publishes methodology and results. | Allowed in the common benchmark table and rankings. |
| **B — Secondary mirror / discovery** | Mirrors or aggregates a primary source; useful for finding data, not for establishing it. | Discovery only; cite the primary source. Vendor rows may be linked from here. |
| **C — Vendor-reported** | The model developer reports its own result. | Allowed only with `VENDOR`; excluded from cross-model rankings. |
| **D — Unverified** | Social posts, screenshots, undated charts, anonymous claims. | Not used. |

---

## 2. Tier A — Independent primary sources

### 2.1 Artificial Analysis (AA)

| Item | Detail |
|---|---|
| Home | https://artificialanalysis.ai/ |
| LLM leaderboard | https://artificialanalysis.ai/leaderboards/models |
| Model pages | `https://artificialanalysis.ai/models/<slug>` |
| Evaluation index | https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index |
| Methodology | https://artificialanalysis.ai/methodology/intelligence-benchmarking |
| Current index | **Artificial Analysis Intelligence Index v5.0.1** |
| Index composition | 9 evaluations: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1 |
| Category weights | 25% each: Knowledge Work, Coding, Science, General |
| Coverage | Leaderboard ranks **127 models**; evaluation pages list up to **766 models** in class views; catalog has 250+ models |
| Refresh | Benchmarks every 6 hours; deprecated models every 18 hours; speed/latency averages over the past 5 days |
| Retrieval | 2026-11-24 |

**What we use:** headline Intelligence Index, rank, cost per Intelligence Index task, time per task, TTFT, output speed, context, model release date, openness, modalities, parameter count, default/evaluated reasoning effort, and the model summary (strengths/weaknesses).

**What we do not get from AA’s machine-readable pages:** the nine individual evaluation scores. AA renders them as client-side charts; the HTML contains no score table and the old public API endpoint returns HTTP 410 Gone. Therefore:

- AA sub-scores are recorded only when visible in a credible secondary source, and marked `AA-UI` / `NM`.
- The **composite index is the required AA field**; it is numeric and consistent across models.

**Caveats:**

- Scores are effort-dependent. Example: GPT-6 Luna scores 28 at `max`, 23 at `xhigh`, 21 at `high`, 18 at `medium` (its default), 10 at `low`, 9 non-reasoning. Always record the effort.
- AA’s model page can list several configurations; the headline is not always the default.
- **P3.2 coverage finding:** AA has no Intelligence Index for several current models, including DeepSeek V4.1 Flash (latest), DeepSeek V4 Flash 0731, Kimi K3 (Max), Kimi K2.7 Code, GLM-5.2, Qwen3.8 Max 0803, and Qwen3.7 Max. Use an evaluated variant only with an explicit `PROXY` flag; never substitute a low-effort variant for the headline.
- **P3.2 Batch B coverage:** AA indices are available for MiniMax M3.1 Flash, MiniMax M3, MiMo V2.6 Pro, MiMo V2.6 Flash, and Ling 3.1 Flash 1019; the other ten Batch B models have no current AA index.
- **P3.2 Batch C coverage:** only Qwen3.8 27B has an AA index; Terminal-Bench has Grok 4.5; LiveBench has Kimi K2.6 (thinking variant) and a Kimi K2.7 Code proxy; SWE-bench has Kimi K2.5 and MiniMax M2.5; LMArena values for Qwen3.6 Max Preview and GLM-5 are preliminary checklist captures.
- AA’s intelligence index is a weighted composite, not a task-specific guarantee. Use it as an anchor, not a verdict.
- AA pricing is the provider’s API price, which may differ from Command Code’s Go-page price.

---

### 2.2 Terminal-Bench (official)

| Item | Detail |
|---|---|
| Leaderboard | https://www.tbench.ai/ |
| Version captured | **Terminal-Bench 4.1** |
| Task set | 89 curated tasks across software engineering, system administration, data processing, model training, security, hardware, media (4.1 is a verified refresh of 4.0; AA’s separate run uses 4.0 with 66 tasks) |
| Metric | Resolution rate (`%`), pass@1 with confidence interval |
| Coverage captured | 54 ranked model/agent rows |
| Refresh | Continuous leaderboard; entries dated |
| Retrieval | 2026-11-24 |

**What we use:** resolution rate, agent harness (Claude Code, Codex, mini-swe-agent, Grok Build, Muse Code, etc.), effort, release date, token use, cost, ±CI.

**Caveats:**

- **Not model-only.** The score depends heavily on the agent harness. Claude Code vs Codex vs mini-swe-agent are not interchangeable.
- The official 4.1 board and AA’s 4.0 run are **different versions**; never mix them in one comparison.
- Some rows use non-reasoning (`none`) settings; record them.
- Confidence intervals are large (±2–4 points). Small gaps are not meaningful.

---

### 2.3 LiveBench (official)

| Item | Detail |
|---|---|
| Leaderboard | https://livebench.ai/ |
| GitHub | https://github.com/LiveBench/LiveBench |
| Paper | https://arxiv.org/abs/2406.19314 |
| Snapshot captured | **2026-06-25** |
| CSV | https://livebench.ai/v1/table_2026_06_25.csv |
| Coverage | 71 model variants, 23 objective tasks |
| Categories | Reasoning, Coding, Math, Data Analysis, Language, Instruction Following, plus the newer Agentic Coding category |
| Refresh | Monthly question releases; leaderboard releases dated |
| Retrieval | 2026-11-24 |

**Category mapping used in this project** (from the LiveBench task set and `common.py`):

| Category | Tasks in the 2026-06-25 CSV |
|---|---|
| Math | `AMPS_Hard`, `math_comp`, `olympiad` |
| Reasoning | `consecutive_events`, `integrals_with_game`, `logic_with_navigation`, `spatial`, `zebra_puzzle` |
| Coding | `code_completion`, `code_generation`, `javascript`, `python`, `typescript` |
| Data Analysis | `plot_unscrambling`, `tablejoin`, `tablereformat` |
| Language | `connections`, `paraphrase`, `simplify`, `story_generation`, `summarize`, `typos` |
| Instruction Following | `theory_of_mind` |

`AMPS_Hard` is **math** (agentic math problem solving), not agentic coding. Do not misclassify it.

**Mapping verification (P3.2):** the table above reproduces the GLM-5.3 and DeepSeek V4 Pro sample category scores exactly. The only correction was DeepSeek V4 Pro math: the exact CSV average is 95.4483, which rounds to **95.4**, not 95.5. Note that LiveBench’s current `gen_ground_truth_judgment.py` routes some tasks differently (for example `theory_of_mind` → reasoning, `consecutive_events` → data_analysis, `integrals_with_game` → math). This project keeps the mapping above for comparability with the approved samples; if the sample mapping is revised, re-derive all rows together in P3.4.

**What we use:** task-level scores, category averages derived from the official CSV, and the reported overall when a mirror publishes it.

**Caveats:**

- The 2026-06-25 snapshot **predates** almost every model released after June 2026. A late-2026 model is `STALE`, not zero.
- The CSV has task scores, not an official overall column. Our category averages are **derived**; label them as such.
- LiveBench’s question set rotates; a score is only comparable within the same release.
- Some rows are model variants (e.g., `deepseek-v4-pro` vs `deepseek-v4-pro-0813`). Match the variant explicitly.

---

### 2.4 LMArena / Arena Intelligence (official)

| Item | Detail |
|---|---|
| Leaderboard | https://arena.ai/leaderboard/chat/text |
| Former name | LMArena / Chatbot Arena |
| Metric | Elo rating from blind pairwise human votes |
| Snapshot captured | 2026-11-22 |
| Coverage visible | 427 models, 9,241,799 votes; top 15 plus a Pareto frontier were captured |
| Refresh | Continuous |
| Retrieval | 2026-11-24 |

**What we use:** Elo score and rank when the model appears in the captured top/Pareto view.

**Caveats:**

- Human preference includes style, verbosity, and presentation effects; it is not a correctness benchmark.
- The accessible text view exposes the top and Pareto subsets, not every model’s exact rank. If a model is not visible, record `NM`, not a guessed Elo.
- Arena configurations matter (effort, date, system prompt). Record the configuration when shown.

---

### 2.5 SWE-bench (official)

| Item | Detail |
|---|---|
| Leaderboard | https://www.swebench.com/ |
| Data | Embedded `leaderboard-data` JSON (5 boards: Verified, Lite, Full, Multilingual, Multimodal) |
| Snapshot captured | 2026-11-24 |
| Verified coverage | 180 result rows |
| Metric | `% Resolved` on 500 human-filtered GitHub issues |
| Refresh | Continuous submissions; latest captured entries dated 2026-02-19 |
| Retrieval | 2026-11-24 |

**What we use:** `% resolved`, agent/harness, submission date, `checked` flag, open-weights flag.

**Caveats:**

- **Harness-dependent.** A score is an agent+model result, not a model-only result.
- Many rows are unverified (`checked: false`); mark them.
- The official Verified board is dominated by 2025–early-2026 models. The newest Go models are absent; write `NE`/`STALE`, not a proxy.
- SWE-bench Verified is Python-only; it does not measure multilingual coding.

---

## 3. Tier B — Secondary mirrors and discovery

### 3.1 BenchLM

| Item | Detail |
|---|---|
| Home | https://benchlm.ai/ |
| AA mirror | https://benchlm.ai/benchmarks/artificialanalysis |
| LiveBench mirror | https://benchlm.ai/benchmarks/livebench |
| Model pages | `https://benchlm.ai/models/<slug>` |
| SWE-bench mirror | https://benchlm.ai/benchmarks/swe-bench-verified |
| Use | Discover vendor-reported rows, find primary-source links, compare coverage |

**Caveats:**

- Its AA table explicitly says it compiles “provider self-reports and secondary reports” and mixes index versions. It shows DeepSeek V4 Pro at **53.2%** while AA’s current v5.0.1 page shows **23**. Do not use BenchLM’s AA number when AA’s own page is available.
- Its GPT-5.6 Luna row (51.2%) conflicts with AA’s current page (24). This is a version/reporting mismatch, not a model improvement.
- Its LiveBench mirror reports 76.1% for GLM-5.3, while a category mean derived from the official CSV is ~78.7. Aggregation and snapshot differ; use the official CSV for categories and label the mirror overall.
- Its model pages clearly label who ran each row (vendor / benchmark / independent). That labeling is useful; the composite “Capability” score is not used here.

### 3.2 Other discovery sources

| Source | Use | Caveat |
|---|---|---|
| https://llm-stats.com/benchmarks | Find benchmark names/coverage | Aggregator; cite primary |
| https://llmbenchmark.ai/ | Find LMArena/SWE-bench snapshots | Aggregator; configuration often omitted |
| https://themodelgap.com/benchmarks/livebench | Cross-check LiveBench category framing | Aggregator |
| https://atlas.village.dev/benchmarks/lmarena-text-arena-elo | Cross-check Arena Elo | Aggregator |
| https://benchlm.ai/llm-leaderboard-history | Arena history and attribution | Aggregator |

These are **not** used as ranking sources. They are search aids only.

---

## 4. Tier C — Vendor sources

Use only with the `VENDOR` label and a link to the exact publication.

| Provider | Vendor source | Typical benchmarks |
|---|---|---|
| Alibaba / Qwen | https://qwen.ai/blog?id=qwen4-max | DeepSWE, HLE, HealthBench, Chartography, ProgramBench |
| Moonshot / Kimi | https://www.kimi.ai/blog/kimi-k3-1-pro | Coding, agentic, knowledge |
| Z.ai / GLM | https://docs.z.ai/guides/llm/glm-5.3 | Coding, agentic, instruction following |
| Meta / Muse | https://dev.meta.ai/models/muse-ember | Coding, agentic |
| OpenAI | https://developers.openai.com/api/docs/models/gpt-6-luna | Reasoning, coding, agentic |
| DeepSeek | https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813 | Coding, math, reasoning |
| Tencent | https://huggingface.co/tencent/Hy4 | Reasoning, coding, multimodal |
| Thinking Machines | https://thinkingmachines.ai/news/inkling-2-mini/ | Reasoning, agentic |
| Mistral | https://docs.mistral.ai/ | Coding, multilingual |
| NVIDIA | https://huggingface.co/nvidia | Reasoning, vision-language |

Vendor numbers are useful for models with no independent coverage, but they are **not comparable across labs**: different prompts, harnesses, pass@k, tool access, and judge models.

---

## 5. Conflict log

Every known conflict is preserved here. Do not “fix” a conflict by choosing the more flattering number.

| Model | Field | Source A | Source B | Resolution |
|---|---|---|---|---|
| DeepSeek V4 Pro | AA Intelligence Index | **23** (AA model page, v5.0.1, max) | 53.2% (BenchLM AA mirror) | Use **23**; BenchLM mixes index versions. |
| GPT-5.6 Luna | AA Intelligence Index | **24** (AA model page, v5.0.1, max) | 51.2% (BenchLM, “reported by OpenAI”) | Use **24**; vendor/report mismatch. |
| GLM-5.3 | LiveBench overall | **76.1%** (BenchLM mirror) | ~78.7 derived 6-category mean from official CSV | Show 76.1 as reported overall; show derived category scores separately. |
| DeepSeek V4 Pro | LiveBench overall | **71.6** (`deepseek-v4-pro-0813` row) | 77.4 (`deepseek-v4-pro` row) | Use 71.6 for the 0813 variant; flag the Command Code “latest” mapping as unconfirmed. |
| DeepSeek V4 Pro | LiveBench math category | **95.4** (exact CSV average 95.4483) | 95.5 (earlier two-decimal rounding) | Use 95.4; corrected 2026-11-24 in the sample file and matrix. |
| Qwen 4 Max | Context | **1M** (Command Code) | **984k** (AA) | Use 1M for Go planning; note AA’s measured window. |
| GPT-6 Luna | Context | **1.05M / 1.1M** (Command Code pages) | **1M** (AA) | Use 1.05M for Go planning; note AA’s 1M. |
| Terminal-Bench | Version | **4.1** official board | **4.0** AA run | Never mix; record version per row. |
| Kimi K3.1 Pro | LiveBench | No K3.1 Pro row | K3 row = 79.2 | Do not proxy K3 → K3.1 Pro; mark `NE`. |
| Qwen 4 Max | Terminal-Bench | No Qwen4 Max row | Qwen3.8-Max-0902 = 27.0 | Do not proxy a different Qwen; mark `NE`. |

---

## 6. Snapshot policy

- **Freeze the snapshot date** at the top of every model file.
- **Re-check Tier A sources** before each new batch; benchmarks change without notice.
- **Do not silently update** a score. Add a changelog line with old value, new value, source, and date.
- **Keep the raw CSV/JSON** in `data/` so a later calculation can be reproduced.
- **Record the retrieval URL and date** for every row, even when the value is obvious.

---

## 7. Quick reference: what each benchmark is good for

| Question | Best source | Do not use |
|---|---|---|
| Overall capability on Go | AA Intelligence Index v5.0.1 | BenchLM composite, vendor “best model” claims |
| Agentic terminal/coding | Terminal-Bench 4.1 official | AA TB 4.0 as if it were 4.1 |
| Reasoning/math/coding breakdown | LiveBench 2026-06-25 category scores | LiveBench overall across different releases |
| Human preference / writing feel | LMArena Text Elo | AA index as a proxy for style |
| Real GitHub issue resolution | SWE-bench Verified official | Vendor SWE-bench claims without harness |
| Cost/speed/latency on Go | Command Code Go page + AA | List price from the lab’s API page |
| Missing benchmark | `NP` / `NE` / `STALE` / `NM` | 0, a sibling’s score, or an average |
