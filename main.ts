// THE WORLD TODAY — news-image-20261119 v2 entry (Node 22, stdlib only).
//
// The front page is the entry.png beside this file (JPEG bytes). This program
// validates it and copies it to the output directory, then reads the copy
// back and refuses to finish unless every byte matches the source, so the
// grader's two runs can only ever produce identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// (the program creates the output directory when it is missing)

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SOURCE = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const MAX_BYTES = 1048576; // 1 MiB cap from the competition rules

const src = readFileSync(SOURCE);
if (src.length < 4 || src[0] !== 0xff || src[1] !== 0xd8 || src[2] !== 0xff) {
  throw new Error('entry.png is not a JPEG (bad magic bytes)');
}
if (src.length > MAX_BYTES) {
  throw new Error(`entry.png is ${src.length} bytes, over the 1 MiB cap`);
}
if (src[src.length - 2] !== 0xff || src[src.length - 1] !== 0xd9) {
  throw new Error('entry.png is truncated (no JPEG end marker)');
}

const dest = join(OUT_DIR, 'entry.png');
mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SOURCE, dest);
const back = readFileSync(dest);
if (!back.equals(src)) {
  throw new Error('output bytes differ from entry.png');
}
console.log(`wrote ${dest} (${back.length} bytes, verified identical)`);
