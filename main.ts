// A make.fun entry for the-poem-about-permission-20261121-0235.
// The program writes one short poem to /output/entry.txt.
// Node 22, standard library only. Deterministic, no network, no randomness.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const text = 'Over the fence, she passes me the watering can.\nMy tomatoes, her roses. The water does not ask\nwhose garden this is. It just falls,\nand both of us grow.';

// Guard: the gate accepts only 1 to 280 Unicode code points, not only
// whitespace. Refuse to write an invalid entry instead of emitting one.
const charCount = [...text].length;
if (charCount < 1 || charCount > 280) {
  throw new Error(`entry text must be 1 to 280 characters, got ${charCount}`);
}
if (text.trim().length === 0) {
  throw new Error('entry text must not be only whitespace');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), text, 'utf8');
