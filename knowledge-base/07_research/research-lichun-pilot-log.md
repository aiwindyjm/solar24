---
schema_version: '0.1.0'
id: 'research-lichun-pilot-log'
type: 'ResearchNote'
title: '立春试点研究 · 第一轮执行日志（2026-09-16）'
solar_terms: ['lichun']
season: 'spring'
dimensions: ['ai-research-log', 'references']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'unverified'
confidence: 'unknown'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-16'
updated: '2026-09-16'
human_review: null
research:
  {
    'task': '以立春为试点，按 1×维度×问题拆分完成第一轮知识库填充',
    'queries': [
      '二十四节气 联合国教科文组织 人类非物质文化遗产代表作名录 2016 inscribed UNESCO',
      'GB/T 33661-2017 农历的编算和颁行 节气 太阳黄经 315度 立春',
      '月令七十二候集解 立春 正月节 立 建始也 东风解冻 蛰虫始振 鱼陟负冰',
      '气候季节划分 QX/T 152-2012 入春 连续5天 滑动平均气温',
      '九华立春祭 班春劝农 石阡说春 国家级非物质文化遗产 扩展项目',
      '淮南子 天文训 二十四节气 完整 记载 距日冬至四十五日而立春',
      '杜甫 立春 诗 "春日春盘细生菜" 全文',
      '1914年 民国 内务部 农历正月初一 定名 春节 立春 历史',
      '立春 咬春 春饼 萝卜 春卷 南北 地域差异 民俗',
      'Imbolc February 1 Celtic St Brigid Day Ireland public holiday 2023',
      'Setsubun February 3 Japan bean throwing origin / Groundhog Day Candlemas origin',
    ],
    'discovered_source_ids':
      [
        'source-yueling-qishierhou-wikisource',
        'source-huainanzi-tianwenxun-wikisource',
        'source-xinhua-unesco-solarterms',
        'source-ihchina-jiuhua-lichunji',
        'source-ihchina-shiqian-shuochun',
        'source-gbt-33661-openstd',
        'source-szmb-season-division',
        'source-gushiwen-dufu-lichun',
        'source-bjnews-yaochun',
        'source-wikipedia-setsubun',
        'source-imbolc-brigid-leads',
        'source-groundhog-candlemas-leads',
      ],
    'conflicts':
      [
        '《淮南子·天文训》立春句"距日冬至四十五日/四十六日"版本差异（维基文库本=四十六日；国学网等=四十五日；另八风段"四十五日条风至"易混淆）——已记录于 hist-huainanzi-complete-24terms，待校勘',
        '《月令七十二候集解》"鱼陟负冰"注文各本文字不一（维基文库本 vs CText 检索摘要）——已记录于 hist-yueling-lichun-pentads，待校勘',
        '"古代春节一词指立春"的流行说法与古籍实际用法之间的张力——未获任何直接读取来源，整卡保持 unverified（hist-1914-chunjie-renaming）',
      ],
    'conclusions':
      [
        '第一轮共建立 12 条知识节点、12 条来源记录（其中 8 条为直接读取、4 条为线索级），全部 draft，等待人工审核',
        '高可信锚点：UNESCO 2016 入选（新华社+非遗网交叉）、立春三候原文（维基文库直读）、九华立春祭/石阡说春（非遗网直读）',
        '主要证据缺口：GB/T 标准正文条款、QX/T 152 原文、节气逐年时刻权威数据、咬春与1914改名的原始文献、全部全球表达来源',
      ],
    'human_questions':
      [
        'GB/T 33661-2017 与 QX/T 152-2012 的正文 PDF 需人工下载核读（在线预览含验证码）',
        '维基文库与 CText 的古籍异文，是否引入中华书局点校本作为仲裁来源？',
        'UNESCO 官网（ich.unesco.org）在本环境被验证码拦截，是否由人工浏览器访问并导出官方页内容？',
        '全球表达线索（Imbolc/节分/土拨鼠日）是否进入第二阶段前先经跨文化顾问审核？',
      ],
  }
---

# 立春试点研究 · 第一轮执行日志

## 执行摘要

2026-09-16 由 AI 研究代理执行。研究问题（顶层）：**立春是什么？由哪些可靠来源支撑？证据边界在哪里？**

## 流程记录

1. **检索**：11 组关键词（见 frontmatter research.queries），覆盖天文/历法/历史文献/物候/气候/民俗/饮食/文学/全球表达九个方向；平台为 web 检索 + 页面直接读取。
2. **来源发现与分级**：命中来源按三层分类；**只有 8 个页面被直接读取**（维基文库×2、新华社、中国非遗网×2、国标信息页元数据、深圳气象局、古文岛）；UNESCO 官网、CText、民俗学网被反爬/超时拦截，记"未读"；4 条线索级 Source 如实标注。
3. **抽取与交叉**：古籍原文摘录带定位；交叉核对发现并登记 3 处证据冲突（版本异文×2、流行说法×1）。
4. **成卡**：每卡一个命题，区分 FACT / HISTORICAL RECORD / TRADITION / INTERPRETATION / UNVERIFIED，标注地域与时代范围。
5. **诚实留空**：农业技术细节、植物/动物现代观测、视觉/声音素材、现代生活场景、班春劝农详情、气候分布断言等**本轮无可靠直接来源，一律未建卡**，在索引中保持"待研究"。

## 关键证据冲突（详见各卡）

1. 《淮南子》立春句四十五/四十六日版本差异。
2. 《月令七十二候集解》三候注文异文。
3. "古代春节=立春"说法未获直接文献支撑。

## 未解决与下一步（按优先级）

1. 人工核读 GB/T 33661-2017 正文 → 升级 sci-lichun-longitude-315 置信度。
2. 直接读取民俗学网/社科院文章 → 升级 hist-1914-chunjie-renaming。
3. 建立"班春劝农"（浙江遂昌）来源；补《荆楚岁时记》春盘条目。
4. 全球表达三来源直接读取；日文权威来源核验"节分=立春前日"。
5. 农业维度（立春备耕的农史依据）、现代物候观测数据（中国物候观测网/竺可桢《物候学》）建卡。
6. 视觉/声音素材的版权研究（春牛年画、句芒图像、立春声景）。

## 规范自检

- 未编造来源、引文或检索记录；未读原文一律标注；全部 human_review=null；无 approved 状态；无自动发布的facts。
- 本日志本身也待人工复核。

[[01_terms/01_立春|立春索引]] · [[07_research/research-lichun-astronomy-plan|前一任务草案]] · [[04_sources/README|来源库]]
