import { fileURLToPath } from 'node:url';

const hostDependency = (name: string) =>
  fileURLToPath(new URL(`../../../apps/host/node_modules/${name}`, import.meta.url));

export default {
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: './',
  resolve: {
    alias: [
      { find: 'react-dom', replacement: hostDependency('react-dom') },
      { find: 'react', replacement: hostDependency('react') },
    ],
  },
  esbuild: { jsx: 'automatic' },
  build: { outDir: 'dist', emptyOutDir: true },
  server: { host: '127.0.0.1' },
};
