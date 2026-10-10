import { useState } from 'react';

export const fontOptions = {
  en: [
    ['baskerville', 'Libre Baskerville', 'Book serif'],
    ['cormorant', 'Cormorant Garamond', 'Literary serif'],
    ['source', 'Source Sans 3', 'Clear sans serif'],
  ],
  zh: [
    ['wenkai', '霞鹜文楷', '楷书 · 适合阅读'],
    ['mashan', '马善政毛笔', '书法 · 笔意更浓'],
    ['seal', '霞鹜篆书', '小篆 · 有限字形，缺字回退文楷'],
  ],
} as const;
export function readPreference(key: string, fallback: string) {
  try {
    return localStorage.getItem(`solar24-v5-${key}`) ?? fallback;
  } catch {
    return fallback;
  }
}
export function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(`solar24-v5-${key}`, value);
  } catch {
    /* Private browsing remains usable. */
  }
}
export function Typography({
  english,
  value,
  onChange,
}: {
  english: boolean;
  value: string;
  onChange: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="typography-control"
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          e.currentTarget.querySelector('button')?.focus();
        }
      }}
    >
      <button
        aria-label={english ? 'Change typeface' : '切换字体'}
        aria-expanded={open}
        aria-controls="font-panel"
        onClick={() => setOpen(!open)}
      >
        {english ? 'Aa' : '字'}
      </button>
      {open && (
        <section
          id="font-panel"
          className="font-panel"
          aria-label={english ? 'Typefaces' : '字体选择'}
        >
          <b>{english ? 'A different hand' : '换一种笔意'}</b>
          <div role="group" aria-label={english ? 'Select a typeface' : '选择字体'}>
            {fontOptions[english ? 'en' : 'zh'].map(([id, name, description]) => (
              <button
                key={id}
                className={`font-preview font-${id}`}
                aria-pressed={value === id}
                onClick={() => onChange(id)}
              >
                <span>{name}</span>
                <small>{description}</small>
              </button>
            ))}
          </div>
          <p>
            {english
              ? 'Open-source fonts · saved on this device. Chinese seals keep their own small-seal lettering.'
              : '开源字体 · 本机记忆。红印固定小篆；篆书缺字以文楷显示。隶书与甲骨文待确认可再分发字体及字形覆盖，暂不伪作。'}
          </p>
          <button className="font-done" onClick={() => setOpen(false)}>
            {english ? 'Done' : '完成'}
          </button>
        </section>
      )}
    </div>
  );
}
