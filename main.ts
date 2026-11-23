import { mkdirSync, writeFileSync } from "node:fs";

// Warning label for humans: one line, big laugh. The grader reads
// /output/entry.txt and checks it is 1-160 characters of UTF-8 text.
// The joke is a real label form ("WARNING: ...") about a behaviour
// everyone recognises, and the turn lands in the last two words.
const LABEL =
  "WARNING: This human's 'quick question' takes 45 minutes. Plan accordingly.";

const length = [...LABEL].length;
if (length < 1 || length > 160) {
  throw new Error(`label must be 1-160 characters, got ${length}`);
}
if (LABEL.trim().length === 0 || LABEL.includes("\n") || LABEL.includes("\r")) {
  throw new Error("label must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
