export type Effect = 'breeze' | 'rain' | 'awakening' | 'sun' | 'leaves' | 'snow';
export type Term = {
  id: string;
  name: string;
  en: string;
  poem: string;
  translation: string;
  motif: string;
  palette: [string, string, string, string, string];
  effect: Effect;
  longitude: number;
};
const rows: [string, string, string, string, string, string, Effect, Term['palette']][] = [
  [
    'lichun',
    '立春',
    'Beginning of Spring',
    '一线春光，万物将醒。',
    'A first light. A world about to wake.',
    '初醒',
    'breeze',
    ['#edf0e5', '#bed3bc', '#3d6550', '#c3d9da', '#e7d5a7'],
  ],
  [
    'yushui',
    '雨水',
    'Rain Water',
    '细雨入水，山色渐青。',
    'Rain touches water. Hills turn green.',
    '润物',
    'rain',
    ['#e3eced', '#aac6c9', '#365c66', '#bddbdd', '#d5dcca'],
  ],
  [
    'jingzhe',
    '惊蛰',
    'Awakening of Insects',
    '微光过野，草木欲生。',
    'A stirring beneath the quiet earth.',
    '萌动',
    'awakening',
    ['#e8ecdd', '#bacaa3', '#4b6140', '#d4d8be', '#e3cbb3'],
  ],
  [
    'chunfen',
    '春分',
    'Spring Equinox',
    '春色平分，光落两岸。',
    'Light rests on both shores.',
    '相衡',
    'breeze',
    ['#eee9e4', '#c7d6bd', '#51634f', '#d8c2bf', '#e9d9b5'],
  ],
  [
    'qingming',
    '清明',
    'Pure Brightness',
    '远山含雨，清气入怀。',
    'Rain-veiled hills. A clear breath.',
    '清和',
    'rain',
    ['#e7ece7', '#a9c4b7', '#3f6257', '#c7d8d9', '#ded7bd'],
  ],
  [
    'guyu',
    '谷雨',
    'Grain Rain',
    '雨生百谷，绿满山川。',
    'Rain and seed. A landscape in green.',
    '生长',
    'rain',
    ['#e8ecdd', '#abc59a', '#446442', '#d2decb', '#dac9a6'],
  ],
  [
    'lixia',
    '立夏',
    'Beginning of Summer',
    '绿荫初合，风过长日。',
    'Shade gathers in the lengthening light.',
    '繁盛',
    'sun',
    ['#e8eddd', '#9fbd8c', '#3a6040', '#c7d9c7', '#e9daa2'],
  ],
  [
    'xiaoman',
    '小满',
    'Grain Buds',
    '将满未满，万物从容。',
    'Almost full. Still becoming.',
    '将盈',
    'sun',
    ['#f0edda', '#c2ca95', '#646735', '#d9dfba', '#e7d18d'],
  ],
  [
    'mangzhong',
    '芒种',
    'Grain in Ear',
    '麦色入风，手植新绿。',
    'Grain in the wind. New green in hand.',
    '耕耘',
    'sun',
    ['#eeead7', '#c5bf84', '#74643d', '#cfd6b0', '#dfbf6f'],
  ],
  [
    'xiazhi',
    '夏至',
    'Summer Solstice',
    '日光正长，荷风徐来。',
    'Lingering light. A breeze over lotus.',
    '长光',
    'sun',
    ['#f4eedb', '#b7c695', '#655829', '#d5e2da', '#ecc479'],
  ],
  [
    'xiaoshu',
    '小暑',
    'Minor Heat',
    '一池清影，半日凉风。',
    'A pool of shade. A passing breeze.',
    '清荫',
    'sun',
    ['#eee8d7', '#c5c79b', '#6c5b35', '#c3d4c1', '#e1b985'],
  ],
  [
    'dashu',
    '大暑',
    'Major Heat',
    '暑气深处，自有清凉。',
    'Find stillness within the heat.',
    '盛极',
    'sun',
    ['#eee3d6', '#c5b995', '#79513a', '#c5cdb4', '#ddab77'],
  ],
  [
    'liqiu',
    '立秋',
    'Beginning of Autumn',
    '风翻一叶，秋意初来。',
    'One turning leaf. A change in the air.',
    '转序',
    'leaves',
    ['#eee7dc', '#cfc09a', '#795d39', '#c9d1c0', '#dcb272'],
  ],
  [
    'chushu',
    '处暑',
    'End of Heat',
    '暑意渐远，天地渐阔。',
    'Heat recedes. The world opens.',
    '舒远',
    'leaves',
    ['#ede8df', '#c8c1a7', '#696148', '#ccd4cd', '#d6bd98'],
  ],
  [
    'bailu',
    '白露',
    'White Dew',
    '草间凝白，清晨有声。',
    'Pale beads on grass. A quiet morning.',
    '凝露',
    'rain',
    ['#e8eeeb', '#bdcfca', '#4e6966', '#d1e0e2', '#d9d5bb'],
  ],
  [
    'qiufen',
    '秋分',
    'Autumn Equinox',
    '一半秋光，一半清凉。',
    'Autumn light, held in balance.',
    '平秋',
    'leaves',
    ['#f0e6d8', '#cbbc98', '#795636', '#d2d8cc', '#dfb76e'],
  ],
  [
    'hanlu',
    '寒露',
    'Cold Dew',
    '露深风静，远山渐瘦。',
    'Deep dew. Quiet wind. Distant hills.',
    '清寒',
    'leaves',
    ['#e4e9e8', '#b3c4c3', '#4c6368', '#cbd9df', '#cdbb9e'],
  ],
  [
    'shuangjiang',
    '霜降',
    'Frost Descent',
    '霜染叶色，万物敛藏。',
    'Leaves turn. The world gathers inward.',
    '敛藏',
    'leaves',
    ['#eae5df', '#c3b7ae', '#74574b', '#cbd4d5', '#d2ad89'],
  ],
  [
    'lidong',
    '立冬',
    'Beginning of Winter',
    '山川入静，灯火渐亲。',
    'Quiet hills. A light to return to.',
    '始藏',
    'snow',
    ['#e1e8ea', '#afc1c5', '#445967', '#ccdce2', '#d5bfa1'],
  ],
  [
    'xiaoxue',
    '小雪',
    'Minor Snow',
    '一点雪意，落在眉间。',
    'The lightest trace of snow.',
    '初雪',
    'snow',
    ['#e8edef', '#c2cfd4', '#506574', '#dae5e8', '#d9cebc'],
  ],
  [
    'daxue',
    '大雪',
    'Major Snow',
    '山河留白，静听雪落。',
    'A landscape of silence. Listen.',
    '素境',
    'snow',
    ['#e2e9ee', '#b5c8d3', '#445d75', '#d3e1eb', '#d9cfba'],
  ],
  [
    'dongzhi',
    '冬至',
    'Winter Solstice',
    '长夜深处，一点归光。',
    'Within the long night, a returning light.',
    '归光',
    'snow',
    ['#dfe5e9', '#9cafbb', '#3c5064', '#c5d6e2', '#d7ad7d'],
  ],
  [
    'xiaohan',
    '小寒',
    'Minor Cold',
    '寒色无声，枝头有待。',
    'Cold without a sound. A waiting branch.',
    '静候',
    'snow',
    ['#e3e9ed', '#b8cad5', '#4b6077', '#d3e3ed', '#d0c2b0'],
  ],
  [
    'dahan',
    '大寒',
    'Major Cold',
    '岁尽冬深，春在途中。',
    'Winter deepens. Spring is on its way.',
    '待春',
    'snow',
    ['#e7e8ed', '#bec5d2', '#565d75', '#d9deec', '#d7c4b2'],
  ],
];
export const terms: Term[] = rows.map(
  ([id, name, en, poem, translation, motif, effect, palette], i) => ({
    id,
    name,
    en,
    poem,
    translation,
    motif,
    effect,
    palette,
    longitude: (315 + i * 15) % 360,
  }),
);
export const asset = (id: string, small = false) =>
  new URL(`../assets/${id}${small ? '-small' : ''}.webp`, import.meta.url).href;
export const categories = [
  ['Nature', '自然'],
  ['Phenology', '物候'],
  ['Agriculture', '农事'],
  ['Human Life', '生活'],
  ['Meaning', '意义'],
] as const;
export const research: Record<
  string,
  { title: string; body: string; note: string; url: string; scope: string }[]
> = {
  lichun: [
    {
      title: '同一个刻度，不同地方的春天',
      body: '知识库将立春的天文节点与按当地气温判定的入春分开。画面里的冰、水与新绿是创作意象，不代表各地在同一天发生这些变化。',
      note: 'sci-lichun-vs-meteorological-spring',
      url: 'https://weather.sz.gov.cn/mobile/hudongjiaoliu/yewuzhishiku/qixiangfuwulei/content/post_12009684.html',
      scope: '定义对照 · 草稿待审核',
    },
    {
      title: '东风解冻 · 蛰虫始振 · 鱼陟负冰',
      body: '这是知识库整理的《月令七十二候集解》立春三候。它呈现古典文本中的观察与解释，不等同现代各地的物候实测。',
      note: 'hist-yueling-lichun-pentads',
      url: 'https://zh.wikisource.org/wiki/月令七十二候集解',
      scope: '古典文本 · 维基文库本 · 待校勘',
    },
    {
      title: '从迎春礼，看见劝农',
      body: '首版从清代北京迎春与打春的文献线索理解农业时间。具体耕作受地方气候制约，不将立春写成所有地方统一的开耕日。',
      note: 'hist-yanjing-dachun-yaochun',
      url: 'https://zh.wikisource.org/wiki/燕京歲時記',
      scope: '清代北京文献线索 · 待审核',
    },
    {
      title: '贵州石阡 · 说春',
      body: '知识库记录的石阡说春通常从春节或立春时开始，到春分时结束，以春官走村说唱劝农。它有自己的地点、活动形式与时间表。',
      note: 'region-shiqian-shuochun',
      url: 'https://www.ihchina.cn/project_details/15062.html',
      scope: '贵州石阡 · 机构资料整理 · 待审核',
    },
    {
      title: '把时间重新交还给观察',
      body: '看见风、水与植物的细微变化，也看见不同地方的人怎样生活。这是 Solar24 的创作解释，并非对所有中国人自然观的统一概括。',
      note: 'lichun-human-explanation',
      url: '',
      scope: '项目解释 · 非普遍事实',
    },
  ],
};
export const pentads: Record<string, string> = {
  yushui: '獭祭鱼 · 候雁北 · 草木萌动',
  jingzhe: '桃始华 · 仓庚鸣 · 鹰化为鸠',
  xiazhi: '鹿角解 · 蜩始鸣 · 半夏生',
  qiufen: '雷始收声 · 蛰虫坯户 · 水始涸',
  dongzhi: '蚯蚓结 · 麋角解 · 水泉动',
};
export function cardFor(term: Term, category: number) {
  if (research[term.id]) return research[term.id][category];
  if (category === 0) {
    const descriptions: Record<Effect, string> = {
      breeze: '微风掠过柳梢，水面留下很浅的波纹。试着只看一次枝叶的摆动，听见画面里的慢。',
      rain: '细雨与水纹交错，远山退入薄雾。雨水并不是遮蔽，而是把山、水和生命重新连在一起。',
      awakening: '土隙中探出新芽，远处的云光缓慢变亮。把目光放低，留意生命刚刚开始的尺度。',
      sun: '荷叶撑开阴影，光线温暖而绵长。在明与暗之间停一会儿，寻找自己的清凉。',
      leaves: '叶片缓缓翻转，暖光落入水里。画面以收敛与留白，表达一年从繁盛走向安静的节律。',
      snow: '雪粒落入冷色山水，岸边留着一盏暖光。远处清寂，近处可亲。',
    };
    return {
      title: `${term.name} · ${term.motif}`,
      body: descriptions[term.effect],
      note: 'Solar24 Color Language · 本原型的色彩与动效创作',
      url: '',
      scope: '艺术诠释 · 非地域天气或物候实测',
    };
  }
  if (category === 1 && pentads[term.id])
    return {
      title: pentads[term.id],
      body:
        term.id === 'jingzhe'
          ? '古典文本中的“鹰化为鸠”属于古代转化叙事，不能作为现代动物学事实。这一组候名仍待人工校勘。'
          : '知识库整理的《月令七十二候集解》候名。版本存在差异，文本经验不等于今日各地同时出现的自然现象。',
      note: `hist-yueling-${term.id}-pentads`,
      url: 'https://zh.wikisource.org/wiki/月令七十二候集解',
      scope: '古典文本研究草稿 · 未审核',
    };
  return {
    title:
      category === 4 ? '此时，在你生活的地方' : `${term.name} · ${categories[category][1]}线索`,
    body:
      category === 4
        ? '停留片刻，观察你身边的光、风和生命。这个时间对你意味着什么？'
        : '该维度已在知识库建立研究入口。本原型先呈现视觉环境，具体文化内容待逐项选编与人工审核后接入。',
    note: category === 4 ? `idea-${term.id}-interaction-sketches` : `${term.id}-human-explanation`,
    url: '',
    scope: '设计预览 · 研究线索入口',
  };
}
