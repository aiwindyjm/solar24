> 前期方案记录：初始化后的当前目录、接口、状态与研究层规范见 [docs/README.md](docs/README.md)。原建议保留供追溯。

# Cultural Data Schema

推荐“每节气一个聚合文档 + 可拆分的证据记录”，而不是把 scientific、nature、agriculture 分散成互不关联的文件。聚合文档适合阅读和版本评审，证据记录保证字段级追溯。

```ts
type TermContent = {
  id: string; slug: string; name: LocalizedText; season: Season;
  summary: LocalizedText; what: Section; why: Section;
  nature: Section[]; people: Section[]; culture: Section;
  experience: ExperienceBrief; sources: SourceRef[];
  researchStatus: 'unreviewed'|'draft'|'reviewed'|'published';
  lastReviewed?: string; editors?: PersonRef[];
};
type Section = { id: string; title: LocalizedText; body: LocalizedText; claims?: ClaimRef[]; media?: MediaRef[] };
type ClaimRef = { id: string; statement: LocalizedText; sourceIds: string[]; confidence?: 'established'|'contextual'|'contested' };
type SourceRef = { id: string; type: 'historical'|'scientific'|'cultural'|'museum'|'fieldwork'; title: string; author?: string; url?: string; citation: string; license?: string; accessed?: string };
```

所有事实先写 claim，再由 section 引用；译文标记 locale 和译者。科学描述与文化解释分开，避免把民俗、诗歌或地域经验写成普遍事实。`unreviewed` 内容不得进入“官方已发布”视图。Schema 使用 JSON Schema + TypeScript 类型双重校验。
