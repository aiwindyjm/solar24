import { useEffect, useRef } from 'react';
import { Book } from './Book';
import { categories, terms, type Term } from './data';

export function ReadingScroll({
  open,
  term,
  english,
  category,
  request,
  onOpen,
  onClose,
}: {
  open: boolean;
  term: Term;
  english: boolean;
  category: number;
  request: number;
  onOpen: (category: number) => void;
  onClose: () => void;
}) {
  const scroll = useRef<HTMLElement>(null);
  const heading = useRef<HTMLDivElement>(null);
  const topic = categories[category][english ? 0 : 1];
  const scrollId = `seasonal-scroll-${category}`;
  useEffect(() => {
    if (!open) return;
    // Only the scene is covered; the chapter entrances and dial tools remain available.
    heading.current?.focus({ preventScroll: true });
  }, [open, category]);
  useEffect(() => {
    if (open && matchMedia('(max-width: 700px)').matches)
      scroll.current?.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [open, request]);
  return (
    <aside
      ref={scroll}
      className={`reading-scroll ${open ? 'is-open' : ''}`}
      aria-label={english ? `${term.en} · ${topic} scroll` : `${term.name}·${topic}卷`}
    >
      <div className="scroll-leading-edge" aria-hidden="true" />
      <div
        key={`${term.id}-${category}`}
        id={scrollId}
        className="scroll-mount"
        inert={!open}
        aria-hidden={!open}
      >
        <div ref={heading} tabIndex={-1} className="scroll-heading">
          <span>{english ? `SOLAR24 / ${topic.toUpperCase()}` : `舒卷四时 · ${topic}卷`}</span>
          <button
            className="reading-close"
            onClick={onClose}
            aria-label={english ? 'Roll up reading' : '收起手卷'}
          >
            <span>{english ? 'Roll up' : '收卷'}</span> <span aria-hidden="true">↦</span>
          </button>
        </div>
        <div className="scroll-frontispiece">
          <span className="scroll-volume">
            {english ? 'SOLAR TERM' : '节气'} · {String(terms.indexOf(term) + 1).padStart(2, '0')} /
            24
          </span>
          <div className="scroll-inscription">
            <span className="scroll-title" lang="zh-CN">
              {term.name}
            </span>
          </div>
          <span className="scroll-translation">{term.en}</span>
          <span className="scroll-topic-name">{english ? topic : `${topic}卷`}</span>
          <span className="scroll-longitude">{term.longitude}°</span>
          <div className="scroll-tones" aria-hidden="true">
            {term.palette.map((color, i) => (
              <i key={i} style={{ backgroundColor: color }} />
            ))}
          </div>
          <small className="scroll-colophon">
            {english ? 'Read slowly. Notice the world.' : '舒卷之间 · 看见四时'}
          </small>
        </div>
        <article
          key={request}
          className="reading-rail scroll-paper"
          aria-labelledby="story-title"
          tabIndex={0}
        >
          <Book term={term} category={category} english={english} />
        </article>
        <div className="scroll-foot" aria-hidden="true">
          <span>SOLAR24</span>
          <span>{english ? 'NATURE · TIME · LIFE' : '自然 · 时间 · 生命'}</span>
        </div>
      </div>
      <button
        className="scroll-spine"
        onClick={() => (open ? onClose() : onOpen(category))}
        aria-expanded={open}
        aria-controls={scrollId}
        aria-label={
          english
            ? open
              ? 'Roll up reading'
              : 'Unroll seasonal reading'
            : open
              ? '收起手卷'
              : '展开四时手卷'
        }
      >
        <span lang="zh-CN">{open ? '收卷' : term.name}</span>
        <small>{english ? (open ? 'CLOSE' : 'READ') : open ? '卷回' : '展卷'}</small>
        <i aria-hidden="true">{open ? '›' : '‹'}</i>
      </button>
    </aside>
  );
}
