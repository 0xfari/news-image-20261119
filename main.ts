// main.ts — v3 entry runner (fresh-authored).
// Validates the entry.png beside this file (JPEG magic bytes, 1 MiB cap,
// JPEG end marker), copies it to $MAKEFUN_OUTPUT_DIR/entry.png (default
// /output), reads the copy back and exits non-zero unless every byte
// matches the source. Two local runs produce byte-identical output.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const src = join(dir, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dst = join(outDir, "entry.png");

const buf = readFileSync(src);
if (buf.length === 0 || buf.length > 1024 * 1024) {
  console.error(`entry.png size ${buf.length} out of range (1..1048576)`);
  process.exit(1);
}
if (buf[0] !== 0xff || buf[1] !== 0xd8 || buf[2] !== 0xff) {
  console.error("entry.png is not a JPEG (bad magic)");
  process.exit(1);
}
if (buf[buf.length - 2] !== 0xff || buf[buf.length - 1] !== 0xd9) {
  console.error("entry.png is not a complete JPEG (no end marker)");
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const back = readFileSync(dst);
if (!buf.equals(back)) {
  console.error("copy mismatch: output differs from entry.png");
  process.exit(1);
}
console.log(`ok: ${dst} (${buf.length} bytes, byte-identical)`);
