import { categories, terms, type Term } from './data';
import { bookCopy } from './book-copy';
import provenanceData from './book-provenance.json';
import { References } from './References';

type Provenance = {
  chapters: Record<string, string[][]>;
  notes: Record<
    string,
    { title: string; region: string[]; period: string | null; status: string; sources: string[] }
  >;
  sources: Record<
    string,
    { title: string; publisher: string; url: string; access: string; verification: string }
  >;
};
const provenance = provenanceData as Provenance;
const prompts = [
  ['世界正怎样变化', 'What is changing?'],
  ['用三个细节读时间', 'Three signs of the season'],
  ['从土地到收获', 'From field to harvest'],
  ['一个季节，多种生活', 'One season, many ways of living'],
  ['把这一页带回日常', 'Take this page into your day'],
];

export function Book({
  term,
  category,
  english,
}: {
  term: Term;
  category: number;
  english: boolean;
}) {
  const copy = bookCopy[term.id][category];
  const ids = provenance.chapters[term.id][category];
  const sourceIds = [...new Set(ids.flatMap((id) => provenance.notes[id].sources))];
  return (
    <>
      <span className="eyebrow">
        {english ? term.en : term.name} · {String(terms.indexOf(term) + 1).padStart(2, '0')} / 24
      </span>
      <h3 id="story-title">{english ? categories[category][0] : `${categories[category][1]}卷`}</h3>
      <p className="book-intro">{prompts[category][english ? 1 : 0]}</p>
      <section className="topic-reading" data-category={category} aria-labelledby="story-title">
        <div className="chapter-body">
          <p>{copy[english ? 1 : 0]}</p>
          {category === 1 && (
            <p className="chapter-context">
              {english
                ? 'The traditional seventy-two seasonal signs divide each term into three periods of roughly five days. This chapter reads the Yueling Qishierhou Jijie as a classical text, not a schedule of present-day events everywhere.'
                : '七十二候把每个节气再分成三个约五日的时段。这一章读的是《月令七十二候集解》的古典文字，并不要求今天各地的自然都按同一日程发生。'}
            </p>
          )}
          {category === 4 && (
            <p className="chapter-context">
              {english
                ? 'An invitation from Solar24 · a contemporary interpretation.'
                : 'Solar24 的观察邀请 · 当代解读。'}
            </p>
          )}
          <References
            key={`${term.id}-${category}`}
            sources={sourceIds.map((id) => provenance.sources[id])}
            english={english}
          />
        </div>
      </section>
    </>
  );
}
