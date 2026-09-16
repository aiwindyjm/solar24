> 前期方案记录：初始化后的当前目录、接口、状态与研究层规范见 [docs/README.md](docs/README.md)。原建议保留供追溯。

# Global Expression Protocol

社区表达是 Solar24 从产品定位中持续发出的开放邀请：不同地区的人可以围绕相近自然时间、季节变化、光照、物候或生命阶段，分享自己的经验、文化、艺术和技术表达。这不是把任何节日强行归入某个节气，也不是只有官方内容完成后才成立的附加功能；首版先定义规则并展示入口，投稿和审核能力按路线逐步实现。

```ts
type GlobalExpression = {
  id: string; termId?: string; relation: 'nearby-time'|'shared-nature'|'seasonal-experience'|'life-cycle'|'other';
  place: { country: string; region?: string; coordinates?: [number, number] };
  creators: PersonRef[]; culturalContext: LocalizedText; title: LocalizedText;
  description: LocalizedText; relationReason: LocalizedText; media: MediaRef[];
  sources: SourceRef[]; license: LicenseRef; status: 'submitted'|'reviewing'|'published'|'featured'|'withdrawn';
};
```

贡献者必须声明自己对文化背景的发言位置，提供资料和媒体许可证；涉及社群知识时遵守知情同意和撤回要求。审核关注准确性、尊重、关联理由和可访问性，不以“像中国节气”为通过条件。Featured 是编辑标记，不代表官方认证整个文化。

首版只定义 schema、目录和审核模板，不做全球投稿平台或自动推荐系统。
