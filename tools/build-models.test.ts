import * as assert from "node:assert/strict";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";
import {
  assertGoldenSamples,
  isProtectedStatus,
  loadRecords,
  writeModel,
} from "./build-models.js";
import type { ModelRecord } from "./build-models.js";

function testProtectedStatuses(): void {
  assert.equal(isProtectedStatus("sample"), true);
  assert.equal(isProtectedStatus("approved"), true);
  assert.equal(isProtectedStatus("done"), true);
  assert.equal(isProtectedStatus("queued"), false);
  assert.equal(isProtectedStatus("draft"), false);
  console.log("PASS protected statuses");
}

function testOverwriteGuard(): void {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "model-generator-"));
  try {
    const record = loadRecords()[0];
    assert.ok(record, "expected at least one sample record");
    const queuedRecord: ModelRecord = {
      bench: { ...record.bench, status: "queued" },
      go: record.go,
    };
    const slug = record.bench["slug"] ?? "";
    assert.ok(slug, "expected a slug");

    const protectedPath = path.join(tempDir, `${slug}.md`);
    fs.writeFileSync(
      protectedPath,
      '---\nstatus: "approved"\n---\n# Approved file\n',
      "utf8",
    );
    const protectedResult = writeModel(queuedRecord, tempDir);
    assert.equal(protectedResult.written, false);
    assert.match(protectedResult.reason, /protected/);

    const queuedPath = path.join(tempDir, `${slug}-queued.md`);
    const queuedSlugRecord: ModelRecord = {
      bench: { ...queuedRecord.bench, slug: `${slug}-queued` },
      go: record.go,
    };
    fs.writeFileSync(
      queuedPath,
      '---\nstatus: "queued"\n---\n# Old draft\n',
      "utf8",
    );
    const queuedResult = writeModel(queuedSlugRecord, tempDir);
    assert.equal(queuedResult.written, true);
    assert.match(fs.readFileSync(queuedPath, "utf8"), /Generated scaffold/);
    console.log("PASS overwrite guard");
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

testProtectedStatuses();
testOverwriteGuard();
assertGoldenSamples();
console.log("PASS golden samples");
console.log("All model tool tests passed.");
