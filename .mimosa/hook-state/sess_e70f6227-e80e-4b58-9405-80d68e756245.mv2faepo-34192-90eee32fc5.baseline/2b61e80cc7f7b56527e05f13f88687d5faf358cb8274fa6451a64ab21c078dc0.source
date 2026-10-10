import { act } from 'react';
import { expect, it } from 'vitest';
import { defineSkeleton } from '../packages/module-runtime/src/index.js';
import manifest from '../modules/lichun/module.manifest.json';

it('mounts accessible content, updates preferences, pauses and disposes idempotently', async () => {
  Object.assign(globalThis, { IS_REACT_ACT_ENVIRONMENT: true });
  const container = document.createElement('div');
  document.body.append(container);
  const module = defineSkeleton(manifest);
  let handle!: ReturnType<typeof module.mount>;
  await act(async () => {
    handle = module.mount({
      container,
      preferences: { locale: 'zh-CN', muted: true, reducedMotion: true },
    });
  });
  expect(container.querySelector('h2')?.textContent).toContain('立春');
  await act(async () => {
    handle.pause();
    handle.pause();
  });
  expect(container.querySelector('article')?.getAttribute('data-paused')).toBe('true');
  await act(async () => {
    handle.resume();
    handle.updatePreferences({ locale: 'en', muted: true, reducedMotion: false });
  });
  expect(container.querySelector('article')?.lang).toBe('en');
  expect(container.textContent).toContain('Research and cultural interpretation');
  await act(async () => {
    handle.dispose();
    handle.dispose();
    handle.resume();
  });
  expect(container.childElementCount).toBe(0);
  container.remove();
});
