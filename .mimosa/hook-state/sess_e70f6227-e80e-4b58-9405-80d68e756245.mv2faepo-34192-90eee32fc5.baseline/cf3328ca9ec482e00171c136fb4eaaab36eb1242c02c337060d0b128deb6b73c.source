import { bookCopy } from './book-copy';
import data from './book-provenance.json';
import type { Term } from './data';
import type { Gesture } from './life-data';
import { References } from './References';

export function LifeContext({
  term,
  focus,
  gesture,
  english,
}: {
  term: Term;
  focus: number;
  gesture: Gesture;
  english: boolean;
}) {
  const chapter =
    focus === 2 || (focus === 1 && ['plum', 'tea'].includes(gesture))
      ? 3
      : focus === 0 || ['light', 'dew', 'leaf', 'bud', 'soil', 'shade'].includes(gesture)
        ? 0
        : 2;
  const ids = data.chapters[term.id as keyof typeof data.chapters][chapter];
  const notes = ids.map((id) => data.notes[id as keyof typeof data.notes]);
  const sourceIds = [...new Set(notes.flatMap((note) => note.sources))];
  return (
    <details className="life-context" key={`${term.id}-${focus}`}>
      <summary>
        {english
          ? chapter === 3
            ? 'A life in its place · read the context'
            : 'Behind this observation'
          : chapter === 3
            ? '一处地方的生活 · 读背景'
            : '这段观察的来处'}
      </summary>
      <p>{bookCopy[term.id][chapter][english ? 1 : 0]}</p>
      <References
        sources={sourceIds.map((id) => data.sources[id as keyof typeof data.sources])}
        english={english}
      />
    </details>
  );
}
