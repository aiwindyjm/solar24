import { readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { KnowledgeSchema, assertKnowledgeNote } from '../packages/protocol/src/index.js';

export function readNote(path: string) {
  const raw = readFileSync(path, 'utf8');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) throw new Error(`Missing YAML frontmatter: ${path}`);
  const note = KnowledgeSchema.parse(parse(match[1]));
  assertKnowledgeNote(note);
  return note;
}
