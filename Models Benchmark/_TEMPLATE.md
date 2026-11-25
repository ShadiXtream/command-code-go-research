# Standard Model Benchmark File Template

Copy this file to `models/<slug>.md` and fill every field. Do not delete a section; write `N/A` with a status code instead.

---

```markdown
---
cc_id: "provider/exact-id"
display_name: "Model Name"
provider: "Provider"
snapshot_date: "YYYY-MM-DD"
status: "sample"            # sample | approved | done | blocked
aa_slug: "aa-model-slug"    # or null
weights: "open"             # open | open-restricted | closed | stealth | unknown
context: "1M"               # Command Code value, with AA value in notes if different
reasoning: true
efforts: ["low", "medium", "high"]
evaluated_effort: "max"     # effort used for the headline benchmark
default_effort: "max"       # or "unknown"
---

# Model Name

**One-line verdict:** …

## 1. Identity and mapping

| Field | Value |
|---|---|
| Command Code ID | `…` |
| Provider | … |
| Release date | … |
| Weights | … |
| Parameters | … |
| Context window | … |
| Input modalities | … |
| Output modalities | … |
| Reasoning / efforts | … |
| Default effort | … |
| AA slug | … |
| Command Code mapping note | … |

**Mapping risk:** `none` / `low` / `medium` / `high` — explain any version, alias, or effort ambiguity.

## 2. Go plan economics

| Field | Value |
|---|---:|
| Go monthly allowance (shared $10 pool) | $… |
| Input $/1M | … |
| Output $/1M | … |
| Cache read $/1M | … |
| Cache write $/1M | … |
| Estimated requests/month | … |
| Estimated requests/5h | … |
| Estimated requests/week | … |
| Plan gate | Go |
| Notes | peak/off-peak, deals, geo restrictions |

**Cost sanity check:** compute the cost of a typical request (≈800 fresh input + 50K cache read + 150 output) and compare with the Go-page estimate.

**Cache-write sensitivity (only when cache write is billed):** `50K tokens × cache-write $/1M = $X`. Amortize over the number of turns in a session (`$X / N`). The Go `Req/mo` estimate is a cache-hit steady state and does not assume a cache write on every request.

**Allowance note:** the Go plan is $1/month with a shared $10 usage pool ($3 per rolling 5 hours, $6 per rolling 7 days). The allowance above is this model’s share of that pool, not an extra charge.

## 3. Headline metrics (Artificial Analysis)

| Metric | Value | Configuration | Source |
|---|---:|---|---|
| AA Intelligence Index v5.0.1 | … | … | AA |
| AA rank | … | … | AA |
| Cost per Intelligence Index task | $… | … | AA |
| Time per Intelligence Index task | … min | … | AA |
| Time to first answer token | … s | … | AA |
| Output speed | … tok/s | … | AA |
| Output tokens on index | … | … | AA |
| Context window (AA) | … | … | AA |
| Openness | … | … | AA |

**AA index composition reminder:** AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1.

## 4. Common benchmark table

Use only benchmarks from `sources.md`. Keep raw units. Do not convert.

| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |
|---|---|---|---:|---|---|---|---|
| AA Intelligence Index | v5.0.1 | … | 0–100 | effort … | AA | … | value |
| Terminal-Bench | 4.1 | … | % resolved | agent …; effort … | TB | … | value / NE |
| LiveBench — overall (reported only) | 2026-06-25 | … | % | reported figure; no derived mean | LB mirror | … | value / STALE |
| LiveBench — reasoning | 2026-06-25 | … | % | … | LB CSV (derived) | … | value / STALE |
| LiveBench — coding | 2026-06-25 | … | % | … | LB CSV (derived) | … | value / STALE |
| LiveBench — math | 2026-06-25 | … | % | … | LB CSV (derived) | … | value / STALE |
| LiveBench — data analysis | 2026-06-25 | … | % | … | LB CSV (derived) | … | value / STALE |
| LiveBench — language | 2026-06-25 | … | % | … | LB CSV (derived) | … | value / STALE |
| LiveBench — instruction following | 2026-06-25 | … | % | … | LB CSV (derived) | … | value / STALE |
| LMArena Text | 2026-11-22 | … | Elo | … | Arena | … | value / NM |
| SWE-bench Verified | 2026-11-24 | … | % resolved | agent … | SWE-bench | … | value / NE |

### Vendor claims (not comparable)

Vendor-reported and third-party benchmark rows for this model live in
[`data/vendor_claims.csv`](./data/vendor_claims.csv). Do not copy their numbers
into this file or use them in a cross-model ranking.

## 5. Capability profile

| Capability | Evidence | Rating | Confidence |
|---|---|---|---|
| General reasoning | AA index, LiveBench reasoning | strong / average / weak | high / medium / low |
| Coding | Terminal-Bench, LiveBench coding, vendor coding claim (see CSV) | … | … |
| Agentic / tool use | Terminal-Bench, AA agentic evals | … | … |
| Knowledge / factuality | AA index, AA-Omniscience (if available), vendor HLE claim (see CSV) | … | … |
| Long context | Context window + any long-context evidence | … | … |
| Instruction following | LiveBench IF, vendor claim (see CSV) | … | … |
| Multimodal | Input modalities + any vision benchmark | … | … |
| Speed / latency | AA time/task, TTFT, output speed | … | … |
| Cost efficiency | AA cost/task + Go credits | … | … |

**Profile summary:** two or three sentences. State what the model is evidence-backed to do, and what remains unknown.

## 6. Verdict and routing

| Question | Answer |
|---|---|
| Best for | … |
| Acceptable for | … |
| Avoid for | … |
| Cheapest good use | … |
| Do not use when | … |
| Pair with | … |
| Go budget fit | … |

## 7. Provenance

| Source | URL | Retrieved | Used for |
|---|---|---|---|
| Command Code Go page | https://commandcode.ai/docs/plans/go | YYYY-MM-DD | credits, requests |
| Command Code model page | https://commandcode.ai/models | YYYY-MM-DD | ID, price, context |
| Artificial Analysis model page | https://artificialanalysis.ai/models/… | YYYY-MM-DD | AA metrics |
| Terminal-Bench | https://www.tbench.ai/ | YYYY-MM-DD | TB score |
| LiveBench CSV | https://livebench.ai/v1/table_2026_06_25.csv | YYYY-MM-DD | LiveBench categories |
| Arena | https://arena.ai/leaderboard/chat/text | YYYY-MM-DD | Elo |
| SWE-bench | https://www.swebench.com/ | YYYY-MM-DD | Verified score |
| Vendor claims | … | YYYY-MM-DD | `data/vendor_claims.csv` |

**Data-quality flags:** list every `NP`, `NE`, `STALE`, `NM`, `PROXY`, `VENDOR`, and any source conflict.

## 8. Changelog

| Date | Change | Reason |
|---|---|---|
| YYYY-MM-DD | Initial file | Sample batch |
```

---

## Status codes

| Code | Meaning | Ranking use |
|---|---|---|
| `value` | Numeric result with source and configuration | Allowed within that benchmark |
| `NP` | Not published by the benchmark | Excluded |
| `NE` | Benchmark has not evaluated the model | Excluded |
| `NM` | Not machine-readable / not accessible | Excluded |
| `STALE` | Snapshot predates the model | Excluded |
| `PROXY` | Different variant or sibling | Excluded |
| `VENDOR` | Vendor-reported | Excluded from cross-model ranking |

## Fill rules

1. Use the exact Command Code ID in front matter and the identity table.
2. Record the **evaluated effort** for every reasoning model; a headline score without its effort is incomplete.
3. Record the **agent harness** for Terminal-Bench and SWE-bench.
4. Keep raw units: `%`, `Elo`, `0–100`, `USD`, `minutes`, `tok/s`.
5. Never write `0` for missing data.
6. Never average scores from different benchmark versions.
7. Every numeric row needs a source and a retrieval date.
8. Vendor and third-party rows go in `data/vendor_claims.csv`, never in the model file or the common table.
9. A `LiveBench — overall` value must be a reported figure with a source; never enter a derived mean.
10. If two credible sources disagree, keep both in the provenance/conflict section and mark the row.
11. Update the changelog for any later change.

## Minimum acceptance checklist

- [ ] All front-matter fields filled or explicitly `unknown`.
- [ ] AA index, cost/task, time/task, TTFT, output speed, context, evaluated effort recorded.
- [ ] Terminal-Bench, LiveBench, Arena, SWE-bench each resolved to `value`, `NE`, `NP`, `STALE`, or `NM`.
- [ ] LiveBench overall, if present, is a reported figure with a source, not a derived mean.
- [ ] No vendor numeric rows in this file; they are in `data/vendor_claims.csv`.
- [ ] At least one capability judgment has a cited evidence row.
- [ ] Verdict states best use, avoid use, and Go-budget fit.
- [ ] Provenance table has a retrieval date for every source.
- [ ] Data-quality flags list every gap.
- [ ] Changelog initialized.
