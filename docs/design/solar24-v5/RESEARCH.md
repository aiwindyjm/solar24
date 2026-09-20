# 第五版研究与设计转译 · 2026-09-20

状态：设计研究草稿；AI 整理，human_review=null。以下来源已实际读取正文或字体元数据。只引用必要事实，不复制原作图像。

## 日地关系

1. 香港天文台：[The 24 Solar Terms](https://www.hko.gov.hk/en/gts/time/24solarterms.htm)。太阳从地球看来沿黄道的视运动，以黄经每 15° 划分节气；春分 0°，夏至 90°，秋分 180°，冬至 270°，立春 315°。这不是按固定天数等分的公历月，也不是地球轨道上的罗盘方位。
2. NASA Space Place：[What Causes the Seasons?](https://spaceplace.nasa.gov/seasons/en/)。地轴倾斜及其一年间基本稳定的方向改变日照角度与昼长；日地距离不是四季的主要成因，南北半球季节相反。

转译：简化日心模型中地球方向取 `(太阳黄经 + 180) % 360`。X-Z 平面为公转面，北轴向 -Z 倾斜约 23.44°；夏至地球位于 +Z，北端向日。每个节点等分角度，不表示真实等时公转、椭圆轨道或精确轨道倾角系统。文字把“从地球看太阳”与“从太阳看地球”分开说明。

## 罗盘

实际读取：[Compassipedia — Religion / Luo Pan Compass](https://www.compassmuseum.com/religion/religion.htm)，其中展示同心圈、八卦、方位与其他分度的关系，并引用 Klaproth 的历史材料。该站为收藏与器物介绍来源，不能代表所有罗盘流派。

转译：借用同心分层及逐层阅读的方式，重新安排四个 Solar24 图层。未将罗盘二十四方位等同二十四节气；未宣称复原传统罗盘或提供风水占测。层内释义使用项目自己的说明。

检索中 Wikipedia / 部分博物馆页面返回 403、429 或无匹配结果，未将其作为已读证据。

## 字体

- [霞鹜篆书](https://github.com/lxgw/LxgwSeal)：OFL 1.1；读取 README、OFL 和字表，当前为有限小篆字集。确有本版全部印章用字和以正字书写的节气名；不将缺字补绘成“古字”。
- [霞鹜文楷](https://github.com/lxgw/LxgwWenKai)：OFL 1.1，`fonts/TTF/LXGWWenKai-Regular.ttf`。
- [Ma Shan Zheng](https://github.com/google/fonts/tree/main/ofl/mashanzheng)：OFL 1.1，毛笔书法；未错误标注为隶书。
- [Libre Baskerville](https://github.com/google/fonts/tree/main/ofl/librebaskerville)、[Cormorant Garamond](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond)、[Source Sans 3](https://github.com/google/fonts/tree/main/ofl/sourcesans3)：OFL 1.1。分别提供书籍衬线、文学衬线和清晰无衬线选项。

中文子集仅覆盖当前界面和文化草稿中的字符，并保留基本拉丁字符。所有版权与许可证原文随文件分发，衍生字体内部名称已更换。未核实到适合本次本地托管的甲骨文与隶书字体授权及覆盖范围，暂不加入这两个选项；这不表示它们不存在。
