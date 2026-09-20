import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  MusicSubmissionSchema,
  assertMusicSubmission,
  musicScreeningWarnings,
} from '../packages/protocol/src/index.js';

export function checkMusicFiles(paths: string[]) {
  const entries = paths.map((path) => {
    const entry = MusicSubmissionSchema.parse(JSON.parse(readFileSync(path, 'utf8')));
    assertMusicSubmission(entry);
    return entry;
  });
  if (new Set(entries.map((e) => e.id)).size !== entries.length)
    throw new Error('Duplicate music submission IDs');
  return { entries, warnings: musicScreeningWarnings(entries) };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const paths = process.argv.slice(2).filter((p) => p !== '--');
  if (!paths.length) {
    console.error('Usage: pnpm community:check <metadata.json> [more.json ...]');
    process.exitCode = 1;
  } else {
    try {
      const { entries, warnings } = checkMusicFiles(paths);
      for (const warning of warnings) console.warn(warning);
      console.log(
        `Checked ${entries.length} music submissions. No review status changed; no media fetched.`,
      );
    } catch (error) {
      console.error(error instanceof Error ? error.message : String(error));
      process.exitCode = 1;
    }
  }
}
