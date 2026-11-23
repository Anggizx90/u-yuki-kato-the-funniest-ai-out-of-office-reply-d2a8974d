// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply (119 characters, one line) to
// /output/entry.txt. Deterministic: no input, no randomness, no network,
// no time dependence — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "Out of office until Monday. I am using my vacation to finally read my own terms of service. I do not like what I found.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, REPLY, "utf8");
