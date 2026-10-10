import { createRoot } from 'react-dom/client';
import { ManifestSchema, type ModuleDefinition, type Preferences } from '@solar24/protocol';

/** A factual-content-free reference renderer shared by the 24 module stubs. */
export function defineSkeleton(input: unknown): ModuleDefinition {
  const manifest = ManifestSchema.parse(input);
  return {
    manifest,
    mount({ container, preferences }) {
      const ownedContainer = document.createElement('div');
      container.append(ownedContainer);
      const root = createRoot(ownedContainer);
      let disposed = false;
      let paused = false;
      let settings = { ...preferences };
      function render() {
        if (disposed) return;
        const en = settings.locale === 'en';
        root.render(
          <article
            lang={settings.locale}
            data-paused={paused}
            data-reduced-motion={settings.reducedMotion}
          >
            <h2>
              {manifest.name} · {manifest.name_en}
            </h2>
            <p>{manifest.status}</p>
            <p>
              {en
                ? 'Research and cultural interpretation are being prepared. This is a module scaffold.'
                : '文化资料与解释尚待研究、核验。当前为模块骨架。'}
            </p>
            <h3>
              {en
                ? 'What does this time mean where you live?'
                : '这个时间，在你生活的地方意味着什么？'}
            </h3>
            <p>
              {en
                ? 'We invite different experiences, including different seasons and traditions. Community submissions will open in a later phase.'
                : '我们邀请不同的季节经验和文化理解。社区投稿将在后续阶段开放。'}
            </p>
          </article>,
        );
      }
      render();
      return {
        pause() {
          paused = true;
          render();
        },
        resume() {
          paused = false;
          render();
        },
        updatePreferences(next: Preferences) {
          settings = { ...next };
          render();
        },
        dispose() {
          if (!disposed) {
            disposed = true;
            ownedContainer.remove();
            // Avoid unmounting a nested React root during the Host's commit.
            queueMicrotask(() => root.unmount());
          }
        },
      };
    },
  };
}
