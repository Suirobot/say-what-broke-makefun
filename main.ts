// Say What Actually Broke — entrypoint.
// Writes one line of software error copy (at most 200 characters) that
// tells the brutal truth about the failure, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Your document didn't fail to save. It saved beautifully - to a server we decommissioned in March.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
