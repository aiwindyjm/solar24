---
schema_version: '0.1.0'
id: 'source-fetchability'
type: 'ResearchNote'
title: '来源抓取可行性手册（活文档，随轮更新）'
solar_terms: []
season: null
dimensions: ['ai-research-log', 'references']
region: []
period: null
language: 'zh-CN'
status: 'draft'
epistemic: 'fact'
confidence: 'high'
risk_level: 'low'
impact_level: 'system'
contested: false
source_ids: []
author: 'Solar24 AI research agent (GLM)'
created: '2026-09-25'
updated: '2026-09-25'
human_review: null
research:
  {
    'task': '汇总两轮实测的来源抓取方法与拦截清单，供 100 轮任务直接复用',
    'queries': ['R02：从 23 份 batch-log 与 2026-09-25 API 实测汇总'],
    'discovered_source_ids': [],
    'conflicts': [],
    'conclusions': ['维基文库=书籍层主通道；ihchina=curl直连+302；境外站走代理；拦截站只记 unread'],
    'human_questions': [],
  }
---

# 来源抓取可行性手册（活文档）

## 一、通道与工具选择

| 站点/通道 | 方法 | 备注 |
|---|---|---|
| 维基文库（书籍层主通道） | WebFetch 常态可读；超时→`curl -x http://127.0.0.1:7897` 直读 wikitext | 检索 API：`zh.wikisource.org/w/api.php?action=query&list=search&srsearch=<词>&format=json`；同一书多页=同一发布方，不作独立交叉 |
| ihchina.cn（非遗网） | WebFetch 常 504；**`curl -L` 直连（不走代理）+跟随302** 最稳；web_reader 第三备选 | solar_details 编号链：40立春…46立夏、6969小满…6984大寒（6970夏至/6972大暑/6973立秋/6974处暑/6975白露/6976秋分/6977寒露/6978霜降/6979立冬/6980小雪/6981大雪/6982冬至/6983小寒）；project_details 页 curl 直连可读；机构页古籍转写有嫁接/异文，引文必须回维基文库校准 |
| 新华网/新华社、中国天气网、人民日报（含海外版）、科普中国 | WebFetch 或 curl 直连（国内站不走代理） | 央广网/浙江在线等地方媒体可读 |
| 境外站（wikipedia/NAOJ/gov.ie 等） | WebFetch；失败→`curl -x http://127.0.0.1:7897` | almanac.com/farmersalmanac 抓取被拒 |
| 紫金山天文台 pmo.cas.cn | WebFetch 证书失败；**curl 直连**成功 | 历书科普问答=历法权威 |
| 港府站（gov.hk / isfhk 非遗办） | WebFetch/curl 可读 | 香港非遗卡已用 |
| 韩国学中央研究院 encykorea | 可读 | 已用于立夏条目 |

## 二、拦截清单（只记 unread，不重试不绕过）

ich.unesco.org（验证码）、unesco.org（403，但 un.org 可读）、ctext.org（反爬声明）、chinesefolklore.org.cn（超时）、openstd.samr.gov.cn 正文在线预览（验证码；元数据页可抓）、data.cma.cn（需账号→人工待办）。

## 三、维基文库书目状态（与第二轮直接相关）

**已有**：《月令七十二候集解》《淮南子》《素问》《荊楚歲時記》《燕京歲時記》《史記》《後漢書》《春秋繁露》《禮記》《欽定大清會典》《帝京景物略》《欽定古今圖書集成·歲功典》（按节气分卷）《廣群芳譜》《東京夢華錄》（卷十已用）《紅樓夢》、全唐诗/千家诗作品页等（详见 04_sources 现存 wikisource 源）。
**2026-09-25 API 实测命中（待 R03+ 建源直读）**：《歲時廣記 (四庫全書本)》（含卷1子页）《東京夢華録 (四庫全書本)》（含卷08子页）《欽定授時通考 (四庫全書本)》（含卷08/卷14子页）《夢粱錄 (四庫全書本)》（含卷04/卷10子页）《齊民要術》（含/序子页）《四時纂要》（主页面，卷页结构待探）。
**确认无**：《清嘉录》《帝京岁时纪胜》《咏廿四气诗》组诗页、《吕氏春秋/孟冬纪》（空壳）——C 类人工采获。
**注意**：條目名细节坑（如"史記/卷026"带前导零；古今图书集成岁功典冬至部卷88子页无内容=死路）。

## 四、防幻觉高危点（已确证样本，同类说法必须直读原文才准入卡）

"雨生百谷"非《月令》原文；广汉保保节=正月十六非雨水日；竖蛋"4000年/清嘉录"两说均无一手文献；"数九出自荆楚岁时记"零命中；史记"产气始萌"无命中；大暑"今则热气犹大也"实为小暑条文字；"礼记载天子春朝日秋夕月"实出应劭注；月令直读"雉雊"vs机构页"雉始鸲"异文。**新增高危模式**：机构页引文与古籍原文出入时以直读为准（非遗网清明释名句归属错误已确证）。

## 五、追加区（每轮新发现实时记录）

- （R03 起）
