import { validateModelFiles } from "./build-models.js";

const errors = validateModelFiles();
if (errors.length > 0) {
  console.error("Model validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Model validation passed.");
}
