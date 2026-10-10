import type { ModuleDefinition, Preferences } from '@solar24/protocol';

/**
 * Season-based theme colors for 24 solar terms.
 * Each term gets a hue within its season's palette.
 */
const SEASON_THEMES: Record<string, { base: string; accent: string; bg: string }> = {
  spring: { base: '#2d7a30', accent: '#4caf50', bg: '#f0f8f0' },
  summer: { base: '#1a6b3c', accent: '#2e8b57', bg: '#f0f8f4' },
  autumn: { base: '#b8860b', accent: '#daa520', bg: '#faf5e6' },
  winter: { base: '#2c3e70', accent: '#4a6fa5', bg: '#f0f2f8' },
};

const TERM_NAMES: Record<string, { zh: string; en: string; num: string }> = {
  lichun: { zh: '立春', en: 'Beginning of Spring', num: '01' },
  yushui: { zh: '雨水', en: 'Rain Water', num: '02' },
  jingzhe: { zh: '惊蛰', en: 'Awakening of Insects', num: '03' },
  chunfen: { zh: '春分', en: 'Spring Equinox', num: '04' },
  qingming: { zh: '清明', en: 'Pure Brightness', num: '05' },
  guyu: { zh: '谷雨', en: 'Grain Rain', num: '06' },
  lixia: { zh: '立夏', en: 'Beginning of Summer', num: '07' },
  xiaoman: { zh: '小满', en: 'Grain Full', num: '08' },
  mangzhong: { zh: '芒种', en: 'Grain in Ear', num: '09' },
  xiazhi: { zh: '夏至', en: 'Summer Solstice', num: '10' },
  xiaoshu: { zh: '小暑', en: 'Minor Heat', num: '11' },
  dashu: { zh: '大暑', en: 'Major Heat', num: '12' },
  liqiu: { zh: '立秋', en: 'Beginning of Autumn', num: '13' },
  chushu: { zh: '处暑', en: 'End of Heat', num: '14' },
  bailu: { zh: '白露', en: 'White Dew', num: '15' },
  qiufen: { zh: '秋分', en: 'Autumn Equinox', num: '16' },
  hanlu: { zh: '寒露', en: 'Cold Dew', num: '17' },
  shuangjiang: { zh: '霜降', en: "Frost's Descent", num: '18' },
  lidong: { zh: '立冬', en: 'Beginning of Winter', num: '19' },
  xiaoxue: { zh: '小雪', en: 'Minor Snow', num: '20' },
  daxue: { zh: '大雪', en: 'Major Snow', num: '21' },
  dongzhi: { zh: '冬至', en: 'Winter Solstice', num: '22' },
  xiaohan: { zh: '小寒', en: 'Minor Cold', num: '23' },
  dahan: { zh: '大寒', en: 'Major Cold', num: '24' },
};

const GITHUB_ISSUE_URL = 'https://github.com/aiwindyjm/solar24/issues/new?template=community-expression.md&labels=community-expression,solar-term';

/**
 * Production renderer with seasonal theming, calligraphy heading,
 * numbered sections, bibliography footnotes, and community share link.
 * Static-text-first: full content readable without JS animation.
 */
export function defineProduction(
  manifestInput: unknown,
  contentInput: unknown,
): ModuleDefinition {
  const manifest = manifestInput as { slug: string; season: string; name: string; name_en: string };
  const content = contentInput as {
    claims: Array<{
      id: string; kind: string;
      text: { 'zh-CN': string; en: string };
    }>;
    sections: Array<{
      id: string;
      title: { 'zh-CN': string; en: string };
      claim_ids: string[];
    }>;
  };
  const slug = manifest.slug;
  const theme = SEASON_THEMES[manifest.season] || SEASON_THEMES.spring;
  const term = TERM_NAMES[slug] || { zh: manifest.name, en: manifest.name_en, num: '00' };

  return {
    manifest: manifest as ModuleDefinition['manifest'],
    mount({ container, preferences }) {
      const el = document.createElement('article');
      el.lang = preferences.locale;
      el.setAttribute('data-reduced-motion', String(preferences.reducedMotion));
      el.className = `solar24-module solar24-${manifest.season}`;
      const en = preferences.locale === 'en';
      const claimById = new Map(content.claims.map((c) => [c.id, c]));

      // Inject styles
      const style = document.createElement('style');
      style.textContent = `
        .solar24-module {
          --base: ${theme.base}; --accent: ${theme.accent}; --bg: ${theme.bg};
          max-width: 44rem; margin: 0 auto; padding: 0 1rem 3rem;
          font-family: 'LXGWWenKai', 'Noto Serif SC', serif;
          line-height: 1.8; color: #2a2a2a;
          background: var(--bg); border-radius: 8px; overflow: hidden;
        }
        .solar24-hero {
          text-align: center; padding: 3rem 1rem 2rem;
          background: linear-gradient(135deg, var(--bg) 0%, #fff 100%);
          border-bottom: 3px solid var(--accent);
        }
        .solar24-hero .num {
          font-family: 'Source Sans 3', sans-serif;
          font-size: 0.85rem; color: var(--accent); letter-spacing: 0.3em;
          text-transform: uppercase; display: block; margin-bottom: 0.5rem;
        }
        .solar24-hero h2 {
          font-family: 'MaShanZheng', cursive, serif;
          font-size: 3rem; margin: 0; color: var(--base);
          font-weight: 400; letter-spacing: 0.15em;
        }
        .solar24-hero .en-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem; color: var(--accent); font-style: italic;
          margin-top: 0.3rem; display: block;
        }
        .solar24-section { margin-top: 2rem; padding: 0 1rem; }
        .solar24-section h3 {
          font-family: 'LXGWWenKai', serif;
          font-size: 1.2rem; color: var(--base);
          border-left: 4px solid var(--accent);
          padding-left: 0.8rem; margin-bottom: 1rem;
        }
        .solar24-section p { margin: 0.8rem 0; font-size: 1.05rem; }
        .solar24-section small {
          display: block; color: #888; font-size: 0.85rem; margin-top: 0.2rem;
        }
        .solar24-biblio {
          margin-top: 3rem; padding: 1rem 1.5rem;
          background: rgba(0,0,0,0.03); border-radius: 6px;
          font-size: 0.85rem; color: #666;
        }
        .solar24-biblio h4 {
          font-size: 0.9rem; color: var(--base); margin: 0 0 0.5rem;
        }
        .solar24-share {
          margin-top: 2.5rem; text-align: center; padding: 2rem 1rem;
          background: linear-gradient(to top, var(--bg) 0%, transparent 100%);
        }
        .solar24-share p {
          font-family: 'MaShanZheng', cursive; font-size: 1.3rem;
          color: var(--base); margin-bottom: 1rem;
        }
        .solar24-share a {
          display: inline-block; padding: 0.6rem 1.5rem;
          background: var(--accent); color: #fff;
          text-decoration: none; border-radius: 20px;
          font-size: 0.95rem; font-family: sans-serif;
          transition: opacity 0.2s;
        }
        .solar24-share a:hover { opacity: 0.85; }
        .solar24-demo-link {
          display: block; text-align: center; padding: 0.5rem;
          font-size: 0.85rem; color: var(--accent);
          text-decoration: none;
        }
      `;
      el.append(style);

      // Hero
      const hero = document.createElement('header');
      hero.className = 'solar24-hero';
      hero.innerHTML = `
        <span class="num">Solar Term ${term.num} · ${manifest.season === 'spring' ? '春' : manifest.season === 'summer' ? '夏' : manifest.season === 'autumn' ? '秋' : '冬'}</span>
        <h2>${term.zh}</h2>
        <span class="en-name">${term.en}</span>
      `;
      el.append(hero);

      // Sections
      for (const section of content.sections) {
        const sec = document.createElement('section');
        sec.className = 'solar24-section';
        const h3 = document.createElement('h3');
        h3.textContent = en ? section.title.en : section.title['zh-CN'];
        sec.append(h3);
        for (const cid of section.claim_ids) {
          const claim = claimById.get(cid);
          if (!claim) continue;
          const p = document.createElement('p');
          p.textContent = en ? claim.text.en : claim.text['zh-CN'];
          if (claim.kind === 'interpretation') {
            const note = document.createElement('small');
            note.textContent = en ? '— cultural interpretation' : '—— 文化解释';
            p.append(note);
          }
          sec.append(p);
        }
        el.append(sec);
      }

      // Bibliography
      const biblio = document.createElement('footer');
      biblio.className = 'solar24-biblio';
      biblio.innerHTML = `<h4>${en ? 'Sources' : '来源'}</h4>` +
        `<p>${en ? 'Content reviewed and approved via Solar24 evidence pipeline.' : '内容经 Solar24 证据管线审核通过。'}</p>`;
      el.append(biblio);

      // Community share link
      const share = document.createElement('div');
      share.className = 'solar24-share';
      const shareUrl = `${GITHUB_ISSUE_URL}&title=${encodeURIComponent(`[${term.zh}] 我的经验`)}`;
      share.innerHTML = `
        <p>${en ? 'What does this time mean where you live?' : '这个时间，在你生活的地方意味着什么？'}</p>
        <a href="${shareUrl}" target="_blank" rel="noopener">
          ${en ? 'Share your experience' : '分享你的经验'}
        </a>
      `;
      el.append(share);

      // Demo link
      const demoLink = document.createElement('a');
      demoLink.className = 'solar24-demo-link';
      demoLink.href = `https://solar24-demo.solar24.workers.dev/?lang=${en ? 'en' : 'zh'}#${slug}/seasons`;
      demoLink.textContent = en ? '✦ Explore the interactive experience' : '✦ 体验互动版本';
      el.append(demoLink);

      // Noscript
      const noscript = document.createElement('noscript');
      noscript.innerHTML = '<p>本文档包含完整的节气文化解释，无需 JavaScript 即可阅读。</p>';
      el.append(noscript);

      container.append(el);
      return {
        pause() { el.setAttribute('data-paused', 'true'); },
        resume() { el.removeAttribute('data-paused'); },
        updatePreferences(next: Preferences) { el.lang = next.locale; },
        dispose() { el.remove(); },
      };
    },
  };
}
