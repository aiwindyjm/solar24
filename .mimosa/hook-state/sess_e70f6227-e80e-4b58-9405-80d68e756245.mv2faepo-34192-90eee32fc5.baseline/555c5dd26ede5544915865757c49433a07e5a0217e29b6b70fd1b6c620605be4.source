import { StrictMode, useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import type { ModuleHandle } from '@solar24/protocol';
import registry from 'virtual:solar24-registry';
import './style.css';

function currentSlug() {
  return window.location.hash.slice(1) || registry[0].manifest.slug;
}
function App() {
  const [slug, setSlug] = useState(currentSlug);
  const [message, setMessage] = useState('');
  const target = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const change = () => setSlug(currentSlug());
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  useEffect(() => {
    const entry = registry.find(({ manifest }) => manifest.slug === slug);
    if (!entry) {
      setMessage('未找到该节气，请从导航重新选择。');
      return;
    }
    let cancelled = false;
    let handle: ModuleHandle | undefined;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const visibility = () => (document.hidden ? handle?.pause() : handle?.resume());
    const preferences = () =>
      handle?.updatePreferences({ reducedMotion: motion.matches, muted: true, locale: 'zh-CN' });
    setMessage('正在打开节气模块…');
    entry
      .load()
      .then(({ default: module }) => {
        if (cancelled || !target.current) return;
        handle = module.mount({
          container: target.current,
          preferences: { reducedMotion: motion.matches, muted: true, locale: 'zh-CN' },
        });
        visibility();
        setMessage('');
      })
      .catch(() => {
        if (!cancelled) setMessage('模块加载失败。请刷新页面或选择其他节气。');
      });
    document.addEventListener('visibilitychange', visibility);
    motion.addEventListener('change', preferences);
    return () => {
      cancelled = true;
      handle?.dispose();
      document.removeEventListener('visibilitychange', visibility);
      motion.removeEventListener('change', preferences);
    };
  }, [slug]);
  return (
    <>
      <a
        className="skip"
        href="#experience"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('experience')?.focus();
        }}
      >
        跳到节气内容
      </a>
      <header>
        <p>二十四节气开源数字文化计划</p>
        <h1>Solar24</h1>
        <p lang="en">How does humanity experience time?</p>
        <p>认识中国二十四节气，分享世界不同地方的自然与时间经验。</p>
        <p className="notice">24 个节气生产内容已上线 · <a href="https://solar24-demo.solar24.workers.dev/" target="_blank" rel="noopener">体验互动版 →</a></p>
      </header>
      <nav aria-label="二十四节气">
        <ol>
          {registry.map(({ manifest }) => (
            <li key={manifest.id}>
              <a
                href={'#' + manifest.slug}
                aria-current={slug === manifest.slug ? 'page' : undefined}
              >
                {manifest.name}
                <small>{manifest.name_en}</small>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <main id="experience" tabIndex={-1}>
        <p role="status">{message}</p>
        <div ref={target} />
      </main>
      <aside className="community" aria-label="来自世界的表达">
        <h3>来自世界的表达</h3>
        <p>不同地方的人如何理解相近的自然时间节点。</p>
        <p className="empty">还没有社区分享。<a href="https://github.com/aiwindyjm/solar24/issues/new?template=community-expression.md&labels=community-expression" target="_blank" rel="noopener">成为第一位分享者 →</a></p>
      </aside>
      <footer>Culture &gt; Experience &gt; Design &gt; Technology</footer>
    </>
  );
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
