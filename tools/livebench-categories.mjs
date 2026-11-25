// Usage: node tools/livebench-categories.mjs <livebench-csv> <model>...
// Project LiveBench mapping, verified against the GLM-5.3 and DeepSeek V4 Pro samples.

import fs from "node:fs";

const CATEGORY_TASKS = {
  coding: [
    "code_completion",
    "code_generation",
    "javascript",
    "python",
    "typescript",
  ],
  math: ["AMPS_Hard", "math_comp", "olympiad"],
  instruction_following: ["theory_of_mind"],
  reasoning: [
    "zebra_puzzle",
    "logic_with_navigation",
    "spatial",
    "integrals_with_game",
    "consecutive_events",
  ],
  data_analysis: ["tablejoin", "tablereformat", "plot_unscrambling"],
  language: [
    "connections",
    "paraphrase",
    "simplify",
    "story_generation",
    "summarize",
    "typos",
  ],
};

function parseCsv(text) {
  const rows = [];
  let row = [];
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

const file = process.argv[2];
const models = process.argv.slice(3);
const table = parseCsv(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
const header = table.shift();
if (!header) throw new Error("LiveBench CSV is empty");
const rows = new Map();
for (const cells of table) {
  const row = {};
  header.forEach((key, index) => {
    row[key.trim()] = (cells[index] ?? "").trim();
  });
  if (row.model) rows.set(row.model, row);
}

function average(values) {
  const numbers = values
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value));
  if (numbers.length === 0) return null;
  return numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
}

const output = {};
for (const model of models) {
  const row = rows.get(model);
  if (!row) {
    output[model] = null;
    continue;
  }
  const categories = {};
  for (const [category, tasks] of Object.entries(CATEGORY_TASKS)) {
    const value = average(tasks.map((task) => row[task] ?? ""));
    categories[category] = value === null ? null : Number(value.toFixed(1));
  }
  output[model] = categories;
}

console.log(JSON.stringify(output, null, 2));
