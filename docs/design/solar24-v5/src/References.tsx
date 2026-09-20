import './references.css';

export type ReadingSource = { title: string; publisher: string; url: string };

function sourceLanguage(url: URL) {
  if (url.hostname.endsWith('nao.ac.jp')) return ['ja', '日文', 'Japanese'] as const;
  if (url.pathname.includes('/en/') || url.pathname.endsWith('/en'))
    return ['en', '英文', 'English'] as const;
  return ['zh', '中文', 'Chinese'] as const;
}

/** Local bibliography first; original websites are optional further reading. */
export function References({ sources, english }: { sources: ReadingSource[]; english: boolean }) {
  if (!sources.length) return null;
  const entries = sources.map((source) => {
    const url = new URL(source.url);
    return { ...source, host: url.hostname, language: sourceLanguage(url) };
  });
  return (
    <details className="chapter-provenance reading-references">
      <summary>{english ? 'Reading references' : '阅读依据'}</summary>
      <ol className="reference-books">
        {entries.map((source) => (
          <li key={source.url}>
            <cite lang={source.language[0]}>{source.title}</cite>
            <span className="reference-publisher">{source.publisher}</span>
            <small>{source.language[english ? 2 : 1]}</small>
          </li>
        ))}
      </ol>
      <details className="reference-originals">
        <summary>{english ? 'Explore original websites' : '延伸阅读 · 原文网站'}</summary>
        <p>
          {english
            ? 'The introduction is complete on this page. These optional sources open on other websites in a new tab; availability depends on your network.'
            : '本页已完整呈现介绍。以下原文在新标签页打开，供进一步查阅；访问情况取决于所在网络。'}
        </p>
        <ol>
          {entries.map((source, index) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${source.title} · ${english ? 'external website, new tab' : '外部网站，新标签页'}`}
              >
                {source.host} ↗
              </a>
              <small>
                {english ? `Source ${index + 1}` : `文献 ${index + 1}`} ·{' '}
                {source.language[english ? 2 : 1]}
              </small>
            </li>
          ))}
        </ol>
      </details>
    </details>
  );
}
