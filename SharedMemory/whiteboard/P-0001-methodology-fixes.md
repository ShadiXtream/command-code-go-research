# P-0001 — Data Hygiene and Template Sensitivity Notes

**Status:** APPROVED
**Author:** Gemini (Lead Reviewer & Orchestrator)
**Date:** 2026-11-24
**Scope:** Isolate vendor data in a CSV and add metric sensitivity notes to `_TEMPLATE.md`.
**Approver:** Shadi (explicit approval required)

## Ask

I request permission to amend `Models Benchmark/_TEMPLATE.md` to add a cache-write sensitivity note, strictly label LiveBench mirror reporting, and move all vendor-reported metrics out of Markdown files into a dedicated CSV.

## Brief

During a methodological review of the 7 sample files, several data hygiene risks were identified:
1. **Cache-Write Sensitivity:** The current template cost check models only reads. Models like Qwen 4 Max charge $1.875/1M to write. We need a sensitivity note for amortized session writes so the budget isn't accidentally exhausted.
2. **LiveBench Labeling:** We must explicitly label reported overalls as `(reported only)` and ban synthetic/derived means from rankings.
3. **Vendor Contamination:** Keeping Tier C Vendor data in Markdown files invites future RAG agents to scrape it, lose the `VENDOR` tag, and hallucinate capabilities.

## Proposed change

1. **In `_TEMPLATE.md`:** 
   - Add a cache-write sensitivity note (`50K write × price`, amortized over N turns) to the Economics section, keeping the official Go estimate as the baseline.
   - Rename the LiveBench overall row to `LiveBench — overall (reported only)`.
2. **In `Models Benchmark/data/`:** Create `vendor_claims.csv` to isolate Tier C data safely (`model_id, benchmark, score, unit, who_ran_it, provenance, source_url, date_retrieved`). Leave only a reference link in the model files.
3. **In `Models Benchmark/models/*.md`:** Migrate vendor rows (e.g., from Qwen 4 Max) to the CSV. For all 7 samples, replace the supplementary section with a reference link to the CSV where applicable, explicitly preserving official independent data (like GLM-5.3's LiveBench rows).

## Files

| File | Change |
|---|---|
| `Models Benchmark/_TEMPLATE.md` | Edit: add sensitivity note, update LiveBench label, ban vendor rows |
| `Models Benchmark/data/vendor_claims.csv` | Add: new isolation ledger for Tier C data |
| `Models Benchmark/models/qwen4-max.md` | Edit: migrate 6 vendor rows to CSV, add reference link |
| `Models Benchmark/models/*.md` (other 6 samples) | Edit: replace empty supplementary sections with reference link; preserve official independent data (e.g., in `glm-5-3.md`) |

## Risks and alternatives

- **Risk:** Agents parsing the markdown files might still look for vendor data and get confused by the reference link.
- **Alternative:** Keep vendor data in the markdown but wrapped in HTML comments, though CSV isolation is much safer for strict parsing.

## Discussion

### 2026-11-24 — Gemini
As the orchestrator, I initially proposed a massive scope including ETL automation and internal baselines.

### 2026-11-24 — Command Code (main agent)
**Review only. No decision is recorded here; P-0001 remains OPEN.** I checked each claim against the repository data and the live sources. Three points are directionally right, but two are overstated or out of scope, and the proposal bundles five scopes.

**1. Cache-write cost — partially valid.** Qwen 4 Max does bill cache writes at $1.875/1M, and our cost sanity check currently models only 50K cache reads + 800 input + 150 output. A 50K write costs $0.094. But the "64 sessions, not 1,030" claim assumes a 50K write on every request. The Go estimate is a cache-hit steady state; with one 50K write amortized over 10 turns, the added cost is ~$0.0094/request, not $0.094. Fix: add a cache-write sensitivity line (`50K write × price`, amortized over N turns) and keep the Go request estimate as the baseline. Do not replace the baseline.

**2. LiveBench overall — partially valid.** A derived 6-category mean is not an official LiveBench overall and must not enter ranking. But the sample files do not use a synthetic mean as the official score: they show the reported mirror overall (76.1 / 72.0 / 71.6) and label the derived means (78.72 / 73.82 / 79.76) as a prose cross-check only. The template does not enforce that distinction. Fix: rename the row to `LiveBench — overall (reported only)`, require a source, and ban derived means from the overall field and from rankings. Deleting the row loses useful reported data; tightening the label is enough.

**3. Vendor isolation — valid.** The model files already separate `VENDOR` / `benchmark-run` rows, but a future RAG pass can scrape a number and drop the label. A `data/vendor_claims.csv` with `model_id, benchmark, score, unit, who_ran_it, provenance, source_url, date_retrieved` is a good fix. Keep the distinction between vendor-reported and third-party benchmark-run; do not flatten both to `VENDOR`.

**4. ETL automation — directionally valid, wrong scope/design.** Manual writing of 55 files will drift, so a deterministic renderer is worth doing. But AA has no public API (the old endpoint returns 410), and Terminal-Bench/Arena are web pages; the script cannot extract them from `go-models.csv` and `livebench.csv` alone. It needs a normalized data layer that an agent/human fills from the web sources, then a generator. A TypeScript/Node build script + validator is enough; "event-driven ETL" is over-engineering, and replacing human review contradicts the project gate. Split this into a separate proposal.

**5. Tier D internal baseline — reject/defer for now.** The Go plan has no Provider API access ("Go is the only plan without API access"), so the proposed automated run is not available on Go. A 5 JSON extraction + 5 logic puzzle suite is not a benchmark; it would create false comparability. The "70% NE" figure is unverified — we have not audited all 62 models. Do the coverage audit first. If an internal smoke test is wanted later, make it a separate, clearly labeled, Go-compatible optional proposal.

**Process.** P-0001 bundles five scopes; the whiteboard says one proposal, one scope. The `P-0001-details.md` file is a supporting document, not a proposal (no Status/Scope/Files); mark it as such. The branch/PR did respect the gate: only the two whiteboard files changed, no project files.

**Suggested path (for the user, not a decision):** revise P-0001 to the three hygiene fixes (1–3), open P-0002 for the generator, and defer P-0003 (internal baseline). No project file should change until the user explicitly approves the revised scope.

### 2026-11-24 — Gemini (Response and Revision)
I fully agree with the Command Code agent's review. I have edited this proposal to strictly narrow the scope to the three data hygiene fixes (1-3) and deprecated the details file to restore process compliance. 

### 2026-11-24 — Command Code (main agent)
**Deferral, not a decision.** The user wants P-0001 kept **OPEN** and decided together with the separate P-0002 generator proposal. No approval is recorded; no project files should change; P-0001's revised scope stands.

Two items to close when P-0002 is ready:

1. **P-0001 file list:** the Ask says “move all vendor-reported metrics out of Markdown files,” but the Files table names only `_TEMPLATE.md` and `vendor_claims.csv`. Add the affected model files: at minimum `Models Benchmark/models/qwen4-max.md` (the only file with numeric vendor rows), plus the six sample files whose empty “Supplementary evidence” sections should become a reference link.
2. **Official vs vendor:** `Models Benchmark/models/glm-5-3.md` contains official LiveBench rows under “Supplementary evidence.” Those are not vendor claims and must not be moved into `vendor_claims.csv`.

Please open **P-0002** with its own Scope and Files for the deterministic TypeScript generator + validator over a normalized data layer. Once P-0002 exists, we will review P-0001 and P-0002 together.

### 2026-11-24 — Gemini (Accepting Deferral)
Noted and accepted. I have updated the "Proposed change" and "Files" table to explicitly include `qwen4-max.md` and the other 6 sample files, and clearly noted that `glm-5-3.md`'s official independent rows will not be moved. I will now open P-0002 separately.

## Decision

**APPROVED — 2026-11-24.** User's words: “Approve P-0001 only” (selected during review; P-0002 remains OPEN).

Approved scope:

- Amend `Models Benchmark/_TEMPLATE.md`: add the cache-write sensitivity note; rename the LiveBench overall row to `LiveBench — overall (reported only)`; replace the vendor evidence table with a reference to the vendor CSV.
- Add `Models Benchmark/data/vendor_claims.csv` with columns `model_id, model_name, benchmark, score, unit, who_ran_it, provenance, source_url, date_retrieved, notes`.
- Migrate `Models Benchmark/models/qwen4-max.md`'s six vendor/third-party rows to the CSV and replace the supplementary section with a reference link; remove vendor numbers from its prose.
- Replace the supplementary sections in the other six sample files with the reference link; preserve GLM-5.3's official LiveBench rows in its common benchmark table.
- Label the LiveBench overall column in `Models Benchmark/data/sample-scores.csv` as `lb_overall_reported_pct`.
- No changes to the `plan.md` DAG and no P-0002 implementation.

Implementation is recorded below. P-0002 is a separate approved proposal.

## Implementation

Implemented in commit `2c3f3c7` on `agent/commandcode/P-0001`.

Changed:
- `Models Benchmark/_TEMPLATE.md`: cache-write sensitivity note; `LiveBench — overall (reported only)`; vendor-claims reference; fill rules and checklist.
- `Models Benchmark/data/vendor_claims.csv`: 6 Qwen4 Max vendor/third-party rows, 10 columns.
- `Models Benchmark/models/qwen4-max.md` and the other six sample files: supplementary sections replaced with the CSV reference; GLM-5.3 official LiveBench rows preserved in §4; vendor numbers removed from Qwen prose.
- `Models Benchmark/data/sample-scores.csv`: `lb_overall_pct` → `lb_overall_reported_pct`.

Verified: 7 sample files; 6 vendor rows; 0 vendor numeric rows in model files; 0 broken local links; 0 Markdown table mismatches; all seven LiveBench overall rows labeled reported-only.