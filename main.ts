import { mkdirSync, writeFileSync } from "node:fs";

// Rename the Planet: one line, under 200 characters.
// Venus — the hottest planet, 465C under a crushing, suffocating sky.
const line =
  "Venus is now The Hot Ex \u2014 465\u00b0C and crushingly suffocating, yet every probe we send still slides into its DMs.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
