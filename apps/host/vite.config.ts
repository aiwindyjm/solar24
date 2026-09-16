import { defineConfig, normalizePath } from 'vite';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ManifestSchema } from '@solar24/protocol';

const root = fileURLToPath(new URL('../../', import.meta.url));
const term = process.env.SOLAR24_MODULE;
const manifests = readdirSync(resolve(root, 'modules'))
  .filter((slug) => !slug.startsWith('_'))
  .map((slug) => {
    const base = resolve(root, 'modules', slug);
    const manifest = ManifestSchema.parse(
      JSON.parse(readFileSync(resolve(base, 'module.manifest.json'), 'utf8')),
    );
    return { base, manifest };
  })
  .sort((a, b) => a.manifest.order - b.manifest.order);
if (term && !manifests.some(({ manifest }) => manifest.slug === term))
  throw new Error('Unknown module: ' + term);
export default defineConfig({
  base: './',
  plugins: [
    {
      name: 'solar24-local-registry',
      resolveId(id) {
        if (id === 'virtual:solar24-registry') return '\0' + id;
      },
      load(id) {
        if (id !== '\0virtual:solar24-registry') return;
        return `export default [${manifests
          .filter(({ manifest }) => !term || manifest.slug === term)
          .map(
            ({ base, manifest }) =>
              `{manifest:${JSON.stringify(manifest)},load:()=>import(${JSON.stringify(normalizePath(resolve(base, manifest.entry)))})}`,
          )
          .join(',')}];`;
      },
    },
  ],
  build: { outDir: term ? resolve(root, 'modules', term, 'dist') : 'dist', emptyOutDir: true },
});
