// Warning label for humans: one line, big laugh (round 2 entry).
// The program writes exactly one warning-label line to /output/entry.txt:
// a single line, 1-160 characters, no trailing newline, so the sealed
// scorer sees a valid entry and the judge reads the joke as printed.
import { mkdirSync, writeFileSync } from "node:fs";

const label = "WARNING: Contents may reply 'k' to paragraphs.";

const chars = [...label];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`label must be 1-160 characters, got ${chars.length}`);
}
if (label.trim().length === 0 || label.includes("\n")) {
  throw new Error("label must be a single non-empty line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", label, "utf8");
