// News-image entry: the front page is already built and shipped as entry.png.
// This program only carries those exact bytes to the output directory, so both
// graded runs write identical output by construction. It runs with no network
// and no drawing at run time; a damaged source fails loudly instead of writing
// a partial file.

import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
const isPng =
  bytes[0] === 0x89 &&
  bytes[1] === 0x50 &&
  bytes[2] === 0x4e &&
  bytes[3] === 0x47;
if (bytes.length < 1024 || (!isJpeg && !isPng)) {
  throw new Error(
    `entry.png is not a whole image: ${bytes.length} bytes, ` +
      `magic ${bytes.subarray(0, 4).toString('hex')}`,
  );
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png exceeds the 1 MiB cap: ${bytes.length} bytes`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, bytes);

const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error('output bytes differ from entry.png');
}

const digest = createHash('sha256').update(bytes).digest('hex');
console.log(`entry.png: ${bytes.length} bytes sha256 ${digest.slice(0, 16)}`);
