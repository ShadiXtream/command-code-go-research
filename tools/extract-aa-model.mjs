// Usage: node tools/extract-aa-model.mjs <aa-slug> <saved-model-page.html> [--all]
// Reads the embedded Next.js model details from a saved AA model page.
// Best-effort: AA pages expose different variants; review the output and flags.

import fs from "node:fs";

const slug = process.argv[2];
const file = process.argv[3];
const html = fs.readFileSync(file, "utf8");

function extractArray(markerRaw, markerPlain) {
  const markerIndex = html.indexOf(markerRaw);
  if (markerIndex < 0) return null;
  const pushPrefix = 'self.__next_f.push([1,"';
  const pushStart = html.lastIndexOf(pushPrefix, markerIndex);
  if (pushStart < 0) return null;
  const contentStart = pushStart + pushPrefix.length;
  const close = html.indexOf('"])</script>', markerIndex);
  if (close < 0) return null;
  const chunk = html.slice(contentStart, close);
  let unescaped;
  try {
    unescaped = JSON.parse('"' + chunk + '"');
  } catch {
    return null;
  }
  const arrStart = unescaped.indexOf(markerPlain);
  if (arrStart < 0) return null;
  const start = arrStart + markerPlain.length - 1;
  let depth = 0;
  let inString = false;
  let escaped = false;
  let end = -1;
  for (let i = start; i < unescaped.length; i += 1) {
    const ch = unescaped[i];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === "\\") {
        escaped = true;
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }
    if (ch === '"') {
      inString = true;
    } else if (ch === "[" || ch === "{") {
      depth += 1;
    } else if (ch === "]" || ch === "}") {
      depth -= 1;
      if (depth === 0 && ch === "]") {
        end = i + 1;
        break;
      }
    }
  }
  if (end < 0) return null;
  try {
    return JSON.parse(unescaped.slice(start, end));
  } catch {
    return null;
  }
}

const details = extractArray('\\"models\\":[', '"models":[');
if (!details || details.length === 0) {
  throw new Error(`details array not found for ${slug}`);
}
if (process.argv.includes("--all")) {
  console.log(
    JSON.stringify(
      details.map((item) => ({
        name: item.name,
        intelligenceIndex: item.intelligenceIndex,
        timePerTaskSeconds: item.intelligenceIndexTimePerTask,
        outputSpeed: item.outputSpeed,
        parameters: item.parameters,
        contextWindowTokens: item.contextWindowTokens,
        weightsUrl: item.modelWeightsSourceUrl,
      })),
      null,
      2,
    ),
  );
  process.exit(0);
}
const detail = details[0];
const targetIndex = detail.intelligenceIndex;

const needle = `\\"slug\\":\\"${slug}\\"`;
let mainWindow = null;
let idx = 0;
while ((idx = html.indexOf(needle, idx)) >= 0) {
  const window = html.slice(idx, idx + 15000);
  const match = window.match(/\\"intelligenceIndex\\":([0-9.]+)/);
  if (
    match &&
    targetIndex !== null &&
    Math.abs(Number(match[1]) - targetIndex) < 1e-6
  ) {
    mainWindow = window;
    break;
  }
  idx += needle.length;
}

function numFrom(text, name) {
  const re = new RegExp('\\\\"' + name + '\\\\":(-?[0-9.]+)');
  const match = text.match(re);
  return match ? Number(match[1]) : null;
}

function strFrom(text, name) {
  const re = new RegExp('\\\\"' + name + '\\\\":\\\\"([^\\\\"]*)\\\\"');
  const match = text.match(re);
  return match ? match[1] : null;
}

function boolFrom(text, name) {
  const re = new RegExp('\\\\"' + name + '\\\\":(true|false)');
  const match = text.match(re);
  return match ? match[1] === "true" : null;
}

let effort = null;
let defaultEffort = null;
let headline = null;
if (mainWindow) {
  const effortMatch = mainWindow.match(
    /\\"effort\\":\{\\"slug\\":\\"([^\\"]+)\\",\\"label\\":\\"([^\\"]+)\\"/,
  );
  if (effortMatch) effort = { slug: effortMatch[1], label: effortMatch[2] };
  const defaultMatch = mainWindow.match(
    /\\"defaultEffort\\":\{\\"slug\\":\\"([^\\"]+)\\",\\"label\\":\\"([^\\"]+)\\"/,
  );
  if (defaultMatch) {
    defaultEffort = { slug: defaultMatch[1], label: defaultMatch[2] };
  }
  const headlineMatches = [
    ...mainWindow.matchAll(
      /\\"headline\\":\{\\"outputSpeed\\":([0-9.]+),\\"timeToFirstToken\\":([0-9.]+),\\"timeToFirstAnswerToken\\":([0-9.]+)\}/g,
    ),
  ];
  for (const match of headlineMatches) {
    const speed = Number(match[1]);
    if (
      detail.outputSpeed === null ||
      Math.abs(speed - detail.outputSpeed) < 0.01
    ) {
      headline = {
        outputSpeed: speed,
        timeToFirstToken: Number(match[2]),
        timeToFirstAnswerToken: Number(match[3]),
      };
      break;
    }
  }
  if (!headline && headlineMatches.length > 0) {
    const match = headlineMatches[0];
    headline = {
      outputSpeed: Number(match[1]),
      timeToFirstToken: Number(match[2]),
      timeToFirstAnswerToken: Number(match[3]),
    };
  }
}

function formatContext(tokens) {
  if (tokens === null) return null;
  if (tokens >= 1_000_000) {
    const millions = tokens / 1_000_000;
    return `${Number(millions.toFixed(2))}M`;
  }
  if (tokens >= 1_000) return `${Math.round(tokens / 1_000)}K`;
  return String(tokens);
}

const inputModalities = [];
if (mainWindow) {
  if (boolFrom(mainWindow, "inputModalityText")) inputModalities.push("text");
  if (boolFrom(mainWindow, "inputModalityImage")) inputModalities.push("image");
  if (boolFrom(mainWindow, "inputModalitySpeech")) inputModalities.push("audio");
  if (boolFrom(mainWindow, "inputModalityVideo")) inputModalities.push("video");
}

const outputModalities = [];
if (mainWindow) {
  if (boolFrom(mainWindow, "outputModalityText")) outputModalities.push("text");
  if (boolFrom(mainWindow, "outputModalityImage")) outputModalities.push("image");
  if (boolFrom(mainWindow, "outputModalitySpeech")) outputModalities.push("audio");
  if (boolFrom(mainWindow, "outputModalityVideo")) outputModalities.push("video");
}

const result = {
  slug,
  name: detail.name ?? null,
  intelligenceIndex: targetIndex,
  parameters: detail.parameters ?? null,
  contextWindowTokens: detail.contextWindowTokens ?? null,
  context: formatContext(detail.contextWindowTokens ?? null),
  price1mBlended7To2To1: detail.price1mBlended7To2To1 ?? null,
  timePerTaskSeconds: detail.intelligenceIndexTimePerTask ?? null,
  timePerTaskMinutes:
    detail.intelligenceIndexTimePerTask !== null &&
    detail.intelligenceIndexTimePerTask !== undefined
      ? detail.intelligenceIndexTimePerTask / 60
      : null,
  outputSpeed: detail.outputSpeed ?? null,
  modelWeightsSourceUrl: detail.modelWeightsSourceUrl ?? null,
  releaseDate: mainWindow ? strFrom(mainWindow, "releaseDate") : null,
  isReasoning: mainWindow ? boolFrom(mainWindow, "isReasoning") : null,
  effort,
  defaultEffort,
  isOpenWeights: mainWindow ? boolFrom(mainWindow, "isOpenWeights") : null,
  inputModalities,
  outputModalities,
  headline,
  terminalBench40: mainWindow ? numFrom(mainWindow, "terminalBench40") : null,
  frontierCode: mainWindow ? numFrom(mainWindow, "frontierCode") : null,
  hleDiamond: mainWindow ? numFrom(mainWindow, "hleDiamond") : null,
  omniscience: mainWindow ? numFrom(mainWindow, "omniscience") : null,
  mainWindowFound: mainWindow !== null,
};

console.log(JSON.stringify(result));
