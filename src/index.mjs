import assert from 'node:assert/strict';
import { listBuiltinTemplateIds } from '@x12i/reportix-composer-templates';
import { renderToHtml } from '@x12i/reportix-composer-core';
import { mkdtemp, rm, writeFile, readFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, sep } from 'node:path';
const temporaryRoot = await mkdtemp(join(tmpdir(), 'x12i-usage-'));
async function cleanup() {
  assert(resolve(temporaryRoot).startsWith(resolve(tmpdir()) + sep));
  assert(temporaryRoot.split(sep).at(-1).startsWith('x12i-usage-'));
  await rm(temporaryRoot, { recursive: true, force: true });
}
try {
  const templates = listBuiltinTemplateIds();
  assert(templates.includes('clean-report'));
  const result = await renderToHtml('# Local report\n\nA synthetic report with **three** items.', 'clean-report', { templatesDir: temporaryRoot });
  assert(result.html.includes('Local report'));
  assert(result.html.includes('<strong>three</strong>'));
  console.log({ template: 'clean-report', renderedHtml: result.html.slice(0, 500), bytes: Buffer.byteLength(result.html) });
} finally { await cleanup(); }
