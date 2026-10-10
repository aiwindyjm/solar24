import { mkdirSync, writeFileSync } from 'node:fs';
import { z } from 'zod';
import {
  ManifestSchema,
  ContentSchema,
  SourceSchema,
  AssetsSchema,
  KnowledgeSchema,
  GlobalExpressionSchema,
  MusicSubmissionSchema,
  ContributorCreditSchema,
} from '../packages/protocol/src/index.js';

mkdirSync('docs/protocol/schemas', { recursive: true });
for (const [name, schema] of Object.entries({
  manifest: ManifestSchema,
  content: ContentSchema,
  source: SourceSchema,
  assets: AssetsSchema,
  knowledge: KnowledgeSchema,
  'global-expression': GlobalExpressionSchema,
  'music-submission': MusicSubmissionSchema,
  'contributor-credit': ContributorCreditSchema,
})) {
  writeFileSync(
    `docs/protocol/schemas/${name}.schema.json`,
    JSON.stringify(z.toJSONSchema(schema), null, 2) + '\n',
  );
}
console.log(
  'Exported eight JSON Schemas. Semantic cross-reference checks remain in pnpm validate.',
);
