# P-0001 Details: Rationale and Implementation Guide

This document provides the explicit "why" (rationale) and "how" (implementation instructions) for the changes proposed in [P-0001-methodology-fixes.md](./P-0001-methodology-fixes.md). It serves as technical context for agents executing the approved scope.

## 1. The Cache-Write Cost Fix
**Why:** The current `_TEMPLATE.md` cost sanity check calculates requests assuming 0 cache writes. Models like Qwen 4 Max charge $1.875/1M tokens for cache writes. An agent spinning up a new session and dropping 50K tokens into cache costs ~$0.094. On a $6 Go budget, you hit the cap in 64 sessions, not the 1,030 sessions estimated.
**How:** 
- In `Models Benchmark/_TEMPLATE.md`, update the `Cost sanity check` text to include `+ Amortized Cache Write (e.g., 50K write / 10 turns)`.
- Update the mathematical evaluation script in Phase 2 to track estimated cache retention instead of assuming pure cache reads.

## 2. Ban Synthetic LiveBench Averages
**Why:** The project has a strict rule: "Never aggregate across benchmark versions." However, samples currently compute a flat 6-category mean for LiveBench because the official CSV lacks an overall score. A flat average treats simple language tasks identically to hard math tasks, distorting the model's true capability weight.
**How:**
- In `Models Benchmark/_TEMPLATE.md`, completely remove the `LiveBench — overall` row.
- In the Phase 2 routing calculator, map specific task requirements directly to specific LiveBench categories (e.g., Math task -> LiveBench Math score).

## 3. Vendor Data Isolation
**Why:** `plan.md` allows Tier C (Vendor-reported) data to live inside the `.md` files under "Supplementary evidence." Future LLM agents parsing these markdown files will scrape numbers like "DeepSWE 75.7%", lose the `VENDOR` context tag during RAG retrieval, and hallucinate that Qwen4-Max beats Kimi K3.1 Pro (59.7% TB) on independent agentic coding.
**How:**
- Ban vendor benchmark rows from `Models Benchmark/models/*.md`.
- Create `Models Benchmark/data/vendor_claims.csv` with columns: `model_id`, `vendor_benchmark`, `score`, `source_url`, `date_retrieved`.
- Move all existing supplementary vendor rows from the 7 samples into this CSV.

## 4. Phase 3 ETL Automation
**Why:** Relying on agents to manually read CSVs, calculate pricing, and write Markdown files for the remaining 55 models is prone to hallucination, formatting drift, and massive time consumption.
**How:**
- Update `Models Benchmark/plan.md` Phase 3 to: "P3.1 Build automated Python/Go ETL script".
- The script will: Extract (read `go-models.csv`, `livebench.csv`, etc.), Transform (normalize scores, calculate exact costs), and Load (inject into `_TEMPLATE.md` using Jinja2/text-template and write the 55 files).

## 5. Tier D Baseline (Addressing the "Missing Data" Black Hole)
**Why:** SWE-bench covers 0/7 samples. LiveBench covers 3/7. Because independent benchmarks lag model releases by months, 70% of the Go catalog will show `NE` (Not Evaluated). Phase 2 cannot route tasks to models with no data.
**How:**
- Add to `plan.md` Phase 3: "Establish Tier D Internal Baseline".
- Build a small, deterministic test suite (e.g., 5 JSON extraction tasks, 5 logic puzzles) using a standard Go/Python test harness.
- Run this automatically via the Command Code API for any model missing Tier A/B data to generate an immediate, proprietary baseline for the routing calculator.