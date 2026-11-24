import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = path.join(ROOT, "Models Benchmark", "data");
const MODELS_DIR = path.join(ROOT, "Models Benchmark", "models");
const GO_CSV = path.join(DATA_DIR, "go-models.csv");
const BENCH_CSV = path.join(DATA_DIR, "model-benchmarks.csv");
const VENDOR_CSV = path.join(DATA_DIR, "vendor_claims.csv");

export const REQUIRED_BENCH_COLUMNS = [
  "slug",
  "cc_id",
  "display_name",
  "provider",
  "snapshot_date",
  "status",
  "aa_slug",
  "weights",
  "context",
  "reasoning",
  "efforts",
  "evaluated_effort",
  "default_effort",
  "release_date",
  "parameters",
  "input_modalities",
  "output_modalities",
  "mapping_note",
  "mapping_risk",
  "aa_index",
  "aa_rank",
  "aa_cost_task_usd",
  "aa_time_task_min",
  "aa_ttft_s",
  "aa_speed_tok_s",
  "aa_output_tokens",
  "aa_context",
  "aa_openness",
  "aa_config",
  "tb_status",
  "tb_score_pct",
  "tb_ci",
  "tb_agent",
  "tb_effort",
  "tb_date",
  "tb_rank",
  "lb_status",
  "lb_overall_reported_pct",
  "lb_reasoning",
  "lb_coding",
  "lb_math",
  "lb_data_analysis",
  "lb_language",
  "lb_if",
  "lb_source",
  "lb_date",
  "arena_status",
  "arena_elo",
  "arena_date",
  "swe_status",
  "swe_verified_pct",
  "swe_agent",
  "swe_date",
  "data_quality_flags",
  "source_urls",
  "retrieved_date",
] as const;

export const PROTECTED_STATUSES = new Set(["sample", "approved", "done"]);
export const ALLOWED_STATUSES = new Set([
  "sample",
  "approved",
  "done",
  "blocked",
  "queued",
  "draft",
]);

export type CsvRow = Record<string, string>;

export interface ModelRecord {
  bench: CsvRow;
  go: CsvRow;
}

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (ch !== "\r") {
      field += ch;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((cells) => cells.some((cell) => cell.trim() !== ""));
}

export function loadCsv(filePath: string): CsvRow[] {
  const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
  const table = parseCsv(raw);
  const header = table.shift();
  if (!header) {
    throw new Error(`CSV is empty: ${filePath}`);
  }
  return table.map((cells) => {
    const row: CsvRow = {};
    header.forEach((key, index) => {
      row[key.trim()] = (cells[index] ?? "").trim();
    });
    return row;
  });
}

function field(row: CsvRow, key: string): string {
  return row[key] ?? "";
}

function splitList(value: string): string[] {
  return value
    .split(";")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function quote(value: string): string {
  return JSON.stringify(value);
}

function display(value: string, fallback = "—"): string {
  return value.trim() === "" ? fallback : value;
}

function numberOrUndefined(value: string): number | undefined {
  if (value.trim() === "") return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

export function isProtectedStatus(status: string): boolean {
  return PROTECTED_STATUSES.has(status.trim().toLowerCase());
}

export function loadRecords(): ModelRecord[] {
  const goRows = loadCsv(GO_CSV);
  const benchRows = loadCsv(BENCH_CSV);
  if (benchRows.length === 0) {
    throw new Error(`No rows found in ${BENCH_CSV}`);
  }

  const header = Object.keys(benchRows[0] ?? {});
  const missing = REQUIRED_BENCH_COLUMNS.filter((col) => !header.includes(col));
  if (missing.length > 0) {
    throw new Error(`model-benchmarks.csv is missing columns: ${missing.join(", ")}`);
  }

  const goById = new Map<string, CsvRow>();
  for (const row of goRows) {
    const id = field(row, "id");
    if (id) goById.set(id, row);
  }

  return benchRows.map((bench, index) => {
    const ccId = field(bench, "cc_id");
    const slug = field(bench, "slug");
    const status = field(bench, "status");
    if (!ccId) throw new Error(`Row ${index + 2}: missing cc_id`);
    if (!slug) throw new Error(`Row ${index + 2}: missing slug`);
    if (!ALLOWED_STATUSES.has(status)) {
      throw new Error(`Row ${index + 2}: invalid status "${status}"`);
    }
    const go = goById.get(ccId);
    if (!go) {
      throw new Error(`Row ${index + 2}: cc_id "${ccId}" not found in go-models.csv`);
    }
    return { bench, go };
  });
}

function frontMatter(record: ModelRecord): string {
  const b = record.bench;
  const efforts = splitList(field(b, "efforts")).map(quote).join(", ");
  const reasoning = field(b, "reasoning").trim().toLowerCase() === "true";
  return [
    "---",
    `cc_id: ${quote(field(b, "cc_id"))}`,
    `display_name: ${quote(field(b, "display_name"))}`,
    `provider: ${quote(field(b, "provider"))}`,
    `snapshot_date: ${quote(field(b, "snapshot_date"))}`,
    `status: ${quote(field(b, "status"))}`,
    `aa_slug: ${quote(field(b, "aa_slug"))}`,
    `weights: ${quote(field(b, "weights"))}`,
    `context: ${quote(field(b, "context"))}`,
    `reasoning: ${reasoning ? "true" : "false"}`,
    `efforts: [${efforts}]`,
    `evaluated_effort: ${quote(field(b, "evaluated_effort"))}`,
    `default_effort: ${quote(field(b, "default_effort"))}`,
    "---",
  ].join("\n");
}

function identitySection(record: ModelRecord): string {
  const b = record.bench;
  return [
    "## 1. Identity and mapping",
    "",
    "| Field | Value |",
    "|---|---|",
    `| Command Code ID | \`${field(b, "cc_id")}\` |`,
    `| Provider | ${display(field(b, "provider"))} |`,
    `| Release date | ${display(field(b, "release_date"))} |`,
    `| Weights | ${display(field(b, "weights"))} |`,
    `| Parameters | ${display(field(b, "parameters"))} |`,
    `| Context window | ${display(field(b, "context"))} |`,
    `| Input modalities | ${display(splitList(field(b, "input_modalities")).join(", "))} |`,
    `| Output modalities | ${display(field(b, "output_modalities"))} |`,
    `| Reasoning / efforts | ${splitList(field(b, "efforts")).join(", ") || "—"} |`,
    `| Default effort | ${display(field(b, "default_effort"))} |`,
    `| AA slug | ${display(field(b, "aa_slug"))} |`,
    `| Command Code mapping note | ${display(field(b, "mapping_note"))} |`,
    "",
    `**Mapping risk:** **${display(field(b, "mapping_risk"))}** — see the mapping note above.`,
  ].join("\n");
}

function economicsSection(record: ModelRecord): string {
  const b = record.bench;
  const g = record.go;
  const inPrice = field(g, "in_price");
  const outPrice = field(g, "out_price");
  const cacheRead = field(g, "cache_read");
  const cacheWrite = field(g, "cache_write");
  const inNum = numberOrUndefined(inPrice) ?? 0;
  const outNum = numberOrUndefined(outPrice) ?? 0;
  const cacheNum = numberOrUndefined(cacheRead) ?? 0;
  const requestCost = 0.0008 * inNum + 0.05 * cacheNum + 0.00015 * outNum;
  const cacheWriteNum = numberOrUndefined(cacheWrite);
  const cacheWriteCost = cacheWriteNum !== undefined ? 0.05 * cacheWriteNum : undefined;

  return [
    "## 2. Go plan economics",
    "",
    "| Field | Value |",
    "|---|---:|",
    `| Go monthly credits | $${display(field(g, "go_credits"), "0")} |`,
    `| Input $/1M | ${display(inPrice)} |`,
    `| Output $/1M | ${display(outPrice)} |`,
    `| Cache read $/1M | ${display(cacheRead)} |`,
    `| Cache write $/1M | ${display(cacheWrite)} |`,
    `| Estimated requests/month | ${display(field(g, "req_per_month"))} |`,
    `| Estimated requests/5h | — |`,
    `| Estimated requests/week | — |`,
    "| Plan gate | Go |",
    `| Notes | ${display(field(g, "notes"))} |`,
    "",
    `**Cost sanity check:** a typical request (800 fresh input + 50K cache read + 150 output) costs ≈ **$${requestCost.toFixed(4)}**.`,
    cacheWriteCost !== undefined
      ? `\n**Cache-write sensitivity:** 50K × $${cacheWrite}/1M = **$${cacheWriteCost.toFixed(4)}** for the first write; amortized over N turns = $${cacheWriteCost.toFixed(4)}/N. The Go request estimate above is a cache-hit steady state.`
      : "",
  ].join("\n");
}

function aaSection(record: ModelRecord): string {
  const b = record.bench;
  return [
    "## 3. Headline metrics (Artificial Analysis)",
    "",
    "| Metric | Value | Configuration | Source |",
    "|---|---:|---|---|",
    `| AA Intelligence Index v5.0.1 | ${display(field(b, "aa_index"))} | ${display(field(b, "aa_config"))} | AA |`,
    `| AA rank | ${display(field(b, "aa_rank"))} | — | AA |`,
    `| Cost per Intelligence Index task | $${display(field(b, "aa_cost_task_usd"))} | ${display(field(b, "aa_config"))} | AA |`,
    `| Time per Intelligence Index task | ${display(field(b, "aa_time_task_min"))} min | ${display(field(b, "aa_config"))} | AA |`,
    `| Time to first answer token | ${display(field(b, "aa_ttft_s"))} s | ${display(field(b, "aa_config"))} | AA |`,
    `| Output speed | ${display(field(b, "aa_speed_tok_s"))} tok/s | ${display(field(b, "aa_config"))} | AA |`,
    `| Output tokens on index | ${display(field(b, "aa_output_tokens"))} | ${display(field(b, "aa_config"))} | AA |`,
    `| Context window (AA) | ${display(field(b, "aa_context"))} | — | AA |`,
    `| Openness | ${display(field(b, "aa_openness"))} | — | AA |`,
  ].join("\n");
}

function tbRow(b: CsvRow): string {
  const score = field(b, "tb_score_pct");
  if (field(b, "tb_status") === "value" && score !== "") {
    const ci = field(b, "tb_ci");
    const renderedScore = ci ? `**${score}** ±${ci}` : `**${score}**`;
    const rank = field(b, "tb_rank");
    const status = rank ? `value (rank ${rank})` : "value";
    return `| Terminal-Bench | 4.1 | ${renderedScore} | % resolved | ${display(field(b, "tb_agent"))}; ${display(field(b, "tb_effort"))} | TB official | ${display(field(b, "tb_date"))} | ${status} |`;
  }
  return `| Terminal-Bench | 4.1 | — | % resolved | — | TB official | ${display(field(b, "tb_date"))} | NE |`;
}

function lbOverallRow(b: CsvRow): string {
  const score = field(b, "lb_overall_reported_pct");
  if (field(b, "lb_status") === "value" && score !== "") {
    return `| LiveBench — overall (reported only) | 2026-06-25 | ${score}* | % | reported figure | BenchLM mirror | ${display(field(b, "lb_date"))} | value (reported overall) |`;
  }
  return `| LiveBench — overall (reported only) | 2026-06-25 | — | % | — | LB CSV | ${display(field(b, "lb_date"))} | ${display(field(b, "lb_status"), "NE")} |`;
}

function lbCategoryRow(b: CsvRow, label: string, key: string): string {
  const score = field(b, key);
  if (field(b, "lb_status") === "value" && score !== "") {
    return `| LiveBench — ${label} | 2026-06-25 | ${score} | % | CSV variant | LB CSV (derived) | ${display(field(b, "lb_date"))} | value (derived) |`;
  }
  return `| LiveBench — ${label} | 2026-06-25 | — | % | — | LB CSV | ${display(field(b, "lb_date"))} | ${display(field(b, "lb_status"), "NE")} |`;
}

function arenaRow(b: CsvRow): string {
  const elo = field(b, "arena_elo");
  if (field(b, "arena_status") === "value" && elo !== "") {
    const parsed = Number(elo);
    const formatted = Number.isFinite(parsed)
      ? parsed.toLocaleString("en-US")
      : elo;
    return `| LMArena Text | 2026-11-22 | ${formatted} | Elo | not stated | Arena | ${display(field(b, "arena_date"))} | value (Pareto) |`;
  }
  return `| LMArena Text | 2026-11-22 | — | Elo | — | Arena | ${display(field(b, "arena_date"))} | NM |`;
}

function sweRow(b: CsvRow): string {
  const score = field(b, "swe_verified_pct");
  if (field(b, "swe_status") === "value" && score !== "") {
    return `| SWE-bench Verified | 2026-11-24 | ${score} | % resolved | ${display(field(b, "swe_agent"))} | SWE-bench | ${display(field(b, "swe_date"))} | value |`;
  }
  return `| SWE-bench Verified | 2026-11-24 | — | % resolved | — | SWE-bench | ${display(field(b, "swe_date"))} | NE |`;
}

function benchmarkSection(record: ModelRecord): string {
  const b = record.bench;
  return [
    "## 4. Common benchmark table",
    "",
    "Use only benchmarks from `sources.md`. Keep raw units. Do not convert.",
    "",
    "| Benchmark | Version | Score | Unit | Configuration | Source | Date | Status |",
    "|---|---|---|---:|---|---|---|---|",
    `| AA Intelligence Index | v5.0.1 | ${display(field(b, "aa_index"))} | 0–100 | ${display(field(b, "aa_config"))} | AA | ${display(field(b, "retrieved_date"))} | ${field(b, "aa_index") ? "value" : "NE"} |`,
    tbRow(b),
    lbOverallRow(b),
    lbCategoryRow(b, "reasoning", "lb_reasoning"),
    lbCategoryRow(b, "coding", "lb_coding"),
    lbCategoryRow(b, "math", "lb_math"),
    lbCategoryRow(b, "data analysis", "lb_data_analysis"),
    lbCategoryRow(b, "language", "lb_language"),
    lbCategoryRow(b, "instruction following", "lb_if"),
    arenaRow(b),
    sweRow(b),
  ].join("\n");
}

function vendorSection(): string {
  return [
    "### Vendor claims (not comparable)",
    "",
    "Vendor-reported and third-party benchmark rows for this model live in",
    "[`../data/vendor_claims.csv`](../data/vendor_claims.csv). Do not copy their numbers",
    "into this file or use them in a cross-model ranking.",
  ].join("\n");
}

function capabilitySection(record: ModelRecord): string {
  const b = record.bench;
  return [
    "## 5. Capability profile",
    "",
    "| Capability | Evidence | Rating | Confidence |",
    "|---|---|---|---|",
    `| General reasoning | AA index ${display(field(b, "aa_index"))} | TBD | TBD |`,
    `| Coding | Terminal-Bench ${display(field(b, "tb_score_pct"))}; LiveBench coding ${display(field(b, "lb_coding"))} | TBD | TBD |`,
    `| Agentic / tool use | Terminal-Bench; AA agentic evals | TBD | TBD |`,
    `| Knowledge / factuality | AA index; AA-Omniscience (if available) | TBD | TBD |`,
    `| Long context | ${display(field(b, "context"))} | TBD | TBD |`,
    `| Instruction following | LiveBench IF ${display(field(b, "lb_if"))} | TBD | TBD |`,
    `| Multimodal | ${display(splitList(field(b, "input_modalities")).join(", "))} | TBD | TBD |`,
    `| Speed / latency | ${display(field(b, "aa_time_task_min"))} min/task; ${display(field(b, "aa_ttft_s"))}s TTFT; ${display(field(b, "aa_speed_tok_s"))} tok/s | TBD | TBD |`,
    `| Cost efficiency | $${display(field(b, "aa_cost_task_usd"))}/task; ${display(field(record.go, "req_per_month"))} req/mo | TBD | TBD |`,
    "",
    "**Profile summary:** Pending benchmark review.",
  ].join("\n");
}

function verdictSection(): string {
  return [
    "## 6. Verdict and routing",
    "",
    "| Question | Answer |",
    "|---|---|",
    "| Best for | TBD |",
    "| Acceptable for | TBD |",
    "| Avoid for | TBD |",
    "| Cheapest good use | TBD |",
    "| Do not use when | TBD |",
    "| Pair with | TBD |",
    "| Go budget fit | TBD |",
  ].join("\n");
}

function sourceName(url: string): string {
  if (url.includes("commandcode.ai")) return "Command Code";
  if (url.includes("artificialanalysis.ai")) return "Artificial Analysis";
  if (url.includes("tbench.ai")) return "Terminal-Bench";
  if (url.includes("livebench.ai")) return "LiveBench";
  if (url.includes("arena.ai")) return "Arena";
  if (url.includes("swebench.com")) return "SWE-bench";
  return "Source";
}

function provenanceSection(record: ModelRecord): string {
  const b = record.bench;
  const retrieved = display(field(b, "retrieved_date"));
  const urls = splitList(field(b, "source_urls"));
  const rows = urls.map(
    (url) => `| ${sourceName(url)} | ${url} | ${retrieved} | provenance |`,
  );
  return [
    "## 7. Provenance",
    "",
    "| Source | URL | Retrieved | Used for |",
    "|---|---|---|---|",
    ...rows,
    "",
    `**Data-quality flags:** ${display(field(b, "data_quality_flags"), "None recorded")}`,
  ].join("\n");
}

function changelogSection(record: ModelRecord): string {
  const b = record.bench;
  return [
    "## 8. Changelog",
    "",
    "| Date | Change | Reason |",
    "|---|---|---|",
    `| ${display(field(b, "snapshot_date"))} | Generated scaffold from model-benchmarks.csv | Initial |`,
  ].join("\n");
}

export function renderModel(record: ModelRecord): string {
  const b = record.bench;
  return [
    frontMatter(record),
    `# ${display(field(b, "display_name"))}`,
    "**One-line verdict:** Pending benchmark review.",
    identitySection(record),
    economicsSection(record),
    aaSection(record),
    benchmarkSection(record),
    vendorSection(),
    capabilitySection(record),
    verdictSection(),
    provenanceSection(record),
    changelogSection(record),
    "",
  ].join("\n\n");
}

export interface WriteResult {
  written: boolean;
  reason: string;
  filePath: string;
}

export function writeModel(
  record: ModelRecord,
  outputDir = MODELS_DIR,
): WriteResult {
  const b = record.bench;
  const slug = field(b, "slug");
  const target = path.join(outputDir, `${slug}.md`);
  const recordStatus = field(b, "status").toLowerCase();

  if (isProtectedStatus(recordStatus)) {
    return {
      written: false,
      reason: `record status is protected (${recordStatus})`,
      filePath: target,
    };
  }

  if (fs.existsSync(target)) {
    const existing = fs.readFileSync(target, "utf8");
    const existingStatus = parseFrontMatter(existing).status ?? "";
    if (isProtectedStatus(existingStatus)) {
      return {
        written: false,
        reason: `existing file is protected (${existingStatus})`,
        filePath: target,
      };
    }
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(target, renderModel(record), "utf8");
  return { written: true, reason: "written", filePath: target };
}

export function parseFrontMatter(text: string): Record<string, string> {
  const match = /^---\n([\s\S]*?)\n---/.exec(text);
  if (!match || match[1] === undefined) return {};
  const result: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const index = line.indexOf(":");
    if (index <= 0) continue;
    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim().replace(/^"|"$/g, "");
    result[key] = value;
  }
  return result;
}

export function parseBenchmarkScores(text: string): Map<string, number | null> {
  const start = text.indexOf("## 4. Common benchmark table");
  const end = text.indexOf("## 5.", start >= 0 ? start : 0);
  if (start < 0 || end < 0) return new Map();
  const result = new Map<string, number | null>();
  for (const line of text.slice(start, end).split("\n")) {
    if (!line.trim().startsWith("|")) continue;
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((cell) => cell.trim());
    const label = cells[0];
    const scoreCell = cells[2];
    if (!label || scoreCell === undefined) continue;
    if (label === "Benchmark" || label.startsWith("---")) continue;
    const cleaned = scoreCell
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/±.*$/, "")
      .replace(/,/g, "")
      .trim();
    const match = /-?\d+(?:\.\d+)?/.exec(cleaned);
    result.set(label, match ? Number(match[0]) : null);
  }
  return result;
}

function normalizeFrontMatterValue(value: string): string {
  return value.replace(/\s+/g, "").replace(/^"|"$/g, "");
}

export function assertGoldenSamples(): void {
  const records = loadRecords().filter(
    (record) => field(record.bench, "status") === "sample",
  );
  if (records.length === 0) {
    throw new Error("No sample rows found for the golden test");
  }

  const errors: string[] = [];
  for (const record of records) {
    const slug = field(record.bench, "slug");
    const goldenPath = path.join(MODELS_DIR, `${slug}.md`);
    if (!fs.existsSync(goldenPath)) {
      errors.push(`${slug}: golden file is missing at ${goldenPath}`);
      continue;
    }
    const golden = fs.readFileSync(goldenPath, "utf8");
    const generated = renderModel(record);

    const goldenFrontMatter = parseFrontMatter(golden);
    const generatedFrontMatter = parseFrontMatter(generated);
    for (const [key, expected] of Object.entries(goldenFrontMatter)) {
      const actual = generatedFrontMatter[key];
      if (actual === undefined) {
        errors.push(`${slug}: generated front matter is missing "${key}"`);
      } else if (
        normalizeFrontMatterValue(actual) !== normalizeFrontMatterValue(expected)
      ) {
        errors.push(
          `${slug}: front matter "${key}" expected ${expected}, got ${actual}`,
        );
      }
    }

    const goldenScores = parseBenchmarkScores(golden);
    const generatedScores = parseBenchmarkScores(generated);
    for (const [benchmark, expected] of goldenScores) {
      const actual = generatedScores.get(benchmark);
      if (actual === undefined) {
        errors.push(`${slug}: generated table is missing "${benchmark}"`);
      } else if (expected === null && actual === null) {
        continue;
      } else if (expected === null || actual === null) {
        errors.push(
          `${slug}: "${benchmark}" expected ${expected ?? "—"}, got ${actual ?? "—"}`,
        );
      } else if (Math.abs(expected - actual) > 1e-9) {
        errors.push(
          `${slug}: "${benchmark}" expected ${expected}, got ${actual}`,
        );
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Golden sample test failed:\n- ${errors.join("\n- ")}`);
  }
}

export function validateModelFiles(): string[] {
  const errors: string[] = [];
  const records = loadRecords();
  const slugs = new Set<string>();

  for (const record of records) {
    const b = record.bench;
    const slug = field(b, "slug");
    if (slugs.has(slug)) errors.push(`duplicate slug: ${slug}`);
    slugs.add(slug);

    const snapshot = field(b, "snapshot_date");
    const retrieved = field(b, "retrieved_date");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(snapshot)) {
      errors.push(`${slug}: snapshot_date is not ISO (${snapshot})`);
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(retrieved)) {
      errors.push(`${slug}: retrieved_date is not ISO (${retrieved})`);
    }
  }

  if (!fs.existsSync(VENDOR_CSV)) {
    errors.push(`missing vendor claims CSV: ${VENDOR_CSV}`);
  } else {
    const vendorRows = loadCsv(VENDOR_CSV);
    const vendorHeader = vendorRows[0] ? Object.keys(vendorRows[0]) : [];
    for (const col of [
      "model_id",
      "benchmark",
      "score",
      "unit",
      "who_ran_it",
      "provenance",
      "source_url",
    ]) {
      if (!vendorHeader.includes(col)) {
        errors.push(`vendor_claims.csv is missing column: ${col}`);
      }
    }
  }

  for (const record of records) {
    const slug = field(record.bench, "slug");
    const filePath = path.join(MODELS_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      if (isProtectedStatus(field(record.bench, "status"))) {
        errors.push(`${slug}: protected record has no model file`);
      }
      continue;
    }

    const text = fs.readFileSync(filePath, "utf8");
    const front = parseFrontMatter(text);
    if (front.cc_id !== field(record.bench, "cc_id")) {
      errors.push(`${slug}: front matter cc_id does not match the CSV`);
    }
    if (!front.status || !ALLOWED_STATUSES.has(front.status)) {
      errors.push(`${slug}: invalid or missing front matter status`);
    }
    if (!text.includes("## 4. Common benchmark table")) {
      errors.push(`${slug}: missing common benchmark table`);
    }
    if (!text.includes("LiveBench — overall (reported only)")) {
      errors.push(`${slug}: missing reported-only LiveBench label`);
    }

    const vendorStart = text.indexOf("### Vendor claims (not comparable)");
    if (vendorStart >= 0) {
      const vendorEnd = text.indexOf("\n## ", vendorStart + 1);
      const vendorBlock = text.slice(
        vendorStart,
        vendorEnd >= 0 ? vendorEnd : undefined,
      );
      const numericTableRows = vendorBlock
        .split("\n")
        .filter((line) => line.trim().startsWith("|") && /\d/.test(line));
      if (numericTableRows.length > 0) {
        errors.push(`${slug}: numeric vendor table rows must live in vendor_claims.csv`);
      }
    } else {
      errors.push(`${slug}: missing vendor claims section`);
    }

    const lines = text.split("\n");
    let inTable = false;
    let expectedPipes = 0;
    lines.forEach((line, index) => {
      if (line.trim().startsWith("|")) {
        const pipes = (line.match(/\|/g) ?? []).length;
        if (!inTable) {
          inTable = true;
          expectedPipes = pipes;
        } else if (pipes !== expectedPipes) {
          errors.push(
            `${slug}:${index + 1}: table has ${pipes} pipes, expected ${expectedPipes}`,
          );
        }
      } else {
        inTable = false;
      }
    });
  }

  return errors;
}

function main(): void {
  const mode = process.argv.includes("--write") ? "write" : "check";
  const errors = validateModelFiles();

  try {
    assertGoldenSamples();
  } catch (error) {
    errors.push(error instanceof Error ? error.message : String(error));
  }

  if (errors.length > 0) {
    console.error("Model validation failed:");
    for (const error of errors) console.error(`- ${error}`);
    process.exitCode = 1;
    return;
  }

  if (mode === "check") {
    console.log("Model validation passed.");
    return;
  }

  const records = loadRecords();
  let written = 0;
  let skipped = 0;
  for (const record of records) {
    const status = field(record.bench, "status").toLowerCase();
    if (status !== "queued" && status !== "draft") {
      skipped += 1;
      continue;
    }
    const result = writeModel(record);
    if (result.written) {
      written += 1;
      console.log(`wrote ${result.filePath}`);
    } else {
      skipped += 1;
      console.log(`skipped ${result.filePath}: ${result.reason}`);
    }
  }
  console.log(`Generation complete: ${written} written, ${skipped} skipped.`);
}

if (
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  main();
}
