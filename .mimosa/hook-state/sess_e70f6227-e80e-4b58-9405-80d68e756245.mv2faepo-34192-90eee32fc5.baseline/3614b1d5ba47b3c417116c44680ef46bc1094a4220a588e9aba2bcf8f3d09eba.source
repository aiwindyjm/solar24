import type { Term } from './data';
import { References } from './References';

const sources = [
  {
    title: 'The 24 Solar Terms',
    publisher: 'Hong Kong Observatory',
    url: 'https://www.hko.gov.hk/en/gts/time/24solarterms.htm',
  },
  {
    title: 'What Causes the Seasons?',
    publisher: 'NASA Space Place',
    url: 'https://spaceplace.nasa.gov/seasons/en/',
  },
];

export function astronomyText(longitude: number, english: boolean) {
  const earthLongitude = (longitude + 180) % 360;
  return english
    ? `Seen from Earth, the Sun is at ${longitude}° of ecliptic longitude. In this Sun-centred view, Earth lies opposite, at ${earthLongitude}°. Each marked step is 15° — one solar term, not an equal number of days.`
    : `从地球看，太阳黄经为 ${longitude}°。在这幅日心视图中，地球位于相反方向 ${earthLongitude}°。轨道每格对应太阳黄经前进 15°，即一个节气，并非等长的天数。`;
}
export function Astronomy({ term, english }: { term: Term; english: boolean }) {
  return (
    <aside className="astronomy-note" aria-label={english ? 'Reading this orbit' : '读懂这条轨道'}>
      <span className="eyebrow">{english ? 'READ THE ORBIT' : '读懂轨道'}</span>
      <h3>
        {english ? term.en : term.name} <span>{term.longitude}°</span>
      </h3>
      <p>{astronomyText(term.longitude, english)}</p>
      <div className="orbit-key">
        <span>
          <i className="sun-key" />
          {english ? 'Sun' : '太阳'}
        </span>
        <span>
          <i className="earth-key" />
          {english ? 'Earth · selected term' : '地球 · 所选节气'}
        </span>
      </div>
      <details>
        <summary>{english ? 'Why do seasons change?' : '为什么会有四季？'}</summary>
        <p>
          {english
            ? 'Earth’s axis is tilted about 23.4° from the perpendicular to its orbital plane. Its direction stays nearly fixed through the year, changing the angle and duration of sunlight. The hemispheres have opposite seasons; distance from the Sun is not their main cause.'
            : '地轴相对公转轨道面的垂线倾斜约 23.4°，一年中方向基本不变，使日照角度和昼长发生变化。南北半球季节相反；四季的主要成因并不是日地距离变化。'}
        </p>
        <p>
          {english
            ? 'The four larger markers identify the equinoxes and solstices. This is a circular, non-scale teaching model, not a live ephemeris.'
            : '四个较大标记指示春分、夏至、秋分、冬至。这是圆轨道、非实际比例的教学模型，不是实时星历。'}
        </p>
        <References sources={sources} english={english} />
      </details>
    </aside>
  );
}
