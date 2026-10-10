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
        <p className="notice">工程骨架预览 · 文化内容尚未发布</p>
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
      <footer>Culture &gt; Experience &gt; Design &gt; Technology</footer>
    </>
  );
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
