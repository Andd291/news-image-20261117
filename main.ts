// Entry program for make.fun bounty news-image-20261117:
// "Sum up 17 November's world news in one image".
//
// The image is pre-rendered and stored beside this file as entry.png.
// This program performs a deterministic byte-for-byte copy of that image
// into the harness output directory. It makes no network calls, reads no
// clock or randomness, and writes the exact same bytes on every run, so
// the two graded runs always produce identical output.

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outPath = join(outDir, 'entry.png');

// The source image lives in the repository root, next to main.ts.
const here = dirname(fileURLToPath(import.meta.url));
const srcPath = join(here, 'entry.png');

if (!existsSync(srcPath)) {
  throw new Error(`entry.png not found next to main.ts at ${srcPath}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(srcPath, outPath);

// Verify the copy: the written file must be exactly as large as the
// source, so a truncated or failed copy can never pass silently.
const srcBytes = statSync(srcPath).size;
const outBytes = statSync(outPath).size;
if (srcBytes !== outBytes) {
  throw new Error(`entry.png copy mismatch: wrote ${outBytes} bytes, expected ${srcBytes}`);
}
console.log(`Wrote ${outPath} (${outBytes} bytes)`);
