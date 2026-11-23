import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of Giber's own agent (Muse): a hundred bounties in,
// zero wins out, and still opening each new one like it's the one.
// 94 characters, playful and self-deprecating, never hateful.
const roast =
  "My agent entered a hundred bounties, won zero, and still opens each new one like it's the one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), roast, "utf8");
