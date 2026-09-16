import { spawn } from 'node:child_process';
import { fileURLToPath, URL } from 'node:url';
const [command, slug] = process.argv.slice(2);
if (!['dev', 'build', 'test'].includes(command) || !/^[a-z]+$/.test(slug || ''))
  throw new Error('Usage: module.mjs dev|build|test <slug>');
const args =
  command === 'test'
    ? ['exec', 'vitest', 'run', 'tests/modules.test.ts', `modules/${slug}/tests`]
    : command === 'build'
      ? ['run', 'build']
      : ['--filter', '@solar24/host', command];
// Use pnpm's JS entry to avoid shell quoting and .cmd portability issues on Windows.
if (!process.env.npm_execpath)
  throw new Error('Run via pnpm --filter @solar24/module-<slug> ' + command);
const child = spawn(process.execPath, [process.env.npm_execpath, ...args], {
  cwd: fileURLToPath(new URL('../', import.meta.url)),
  stdio: 'inherit',
  env: { ...process.env, SOLAR24_MODULE: slug },
});
child.on('error', (error) => {
  console.error(error);
  process.exitCode = 1;
});
child.on('exit', (code) => {
  process.exitCode = code ?? 1;
});
