# Haotian Fu — personal website

学术个人主页：[haotian-fu.github.io](https://haotian-fu.github.io)

整体按艺术馆墙文来排：细导航、衬线标题、照片当展品。

技术栈：**Astro** 静态站 → **GitHub Pages**。

---

## 快速开始

需要 [Node.js](https://nodejs.org/) 18+。

```bash
cd Haotian-Fu.github.io
npm install
npm run dev
```

打开 [http://localhost:4321](http://localhost:4321)。保存源文件后浏览器会热更新。

| 命令 | 作用 |
| --- | --- |
| `npm run dev` | 本地开发（改字立刻能看） |
| `npm run build` | 导出静态站到 `dist/` |
| `npm run preview` | 预览已经 build 好的 `dist/` |

`npm run preview` 只读 `dist/`。改完源文件要再 `npm run build` 才会出现在 preview 里；日常改文案用 `npm run dev` 即可。

---

## 怎么改：三条原则

1. **路由 = 文件名。** `src/pages/index.astro` → `/`，`research.astro` → `/research`，以此类推。
2. **一段 `<section>` = 页面上一块。** 带 `id="…"` 的可以用网址哈希跳转，例如 `/#news`、`/publications#citation`。
3. **全站顶栏 / 页脚不在各 page 里**，在 `src/layouts/Base.astro`。颜色和间距在 `src/styles/global.css`。改一句话一般不用动 CSS。

只改标签**中间的字**或引号里的链接。SVG 里的 `x="145" y="86"` 是坐标：字变长（尤其中文）可能和图形重叠，再微调坐标或 `font-size`。

---

## 文件总表

```
src/
├── layouts/Base.astro           # 顶栏、导航、页脚、浏览器标题
├── pages/
│   ├── index.astro              # 首页 /
│   ├── research.astro           # /research（旧地址 /projects 会跳过来）
│   ├── publications.astro       # /publications（旧地址 /pub）
│   ├── about.astro              # /about 跑步
│   └── cv.astro                 # /cv 简历下载（旧地址 /CV.html）
├── components/
│   └── HeroFigure.astro         # 首页那张公寓传感示意图（不是 JPG）
└── styles/global.css            # 颜色、字体、间距

public/assets/
├── img/avatar.jpg               # 首页肖像
├── img/FM.jpg  HM.jpg  10K.jpg  # About 页比赛照片
├── Haotian_Fu_CV.pdf            # 通用 CV
└── Haotian_Fu_CV_BCI.pdf        # 健康 / BCI 向 CV
```

| 想改什么 | 改哪个文件 |
| --- | --- |
| 导航文字、页脚邮箱 | `src/layouts/Base.astro` |
| 首页姓名、简介、News、精选论文 | `src/pages/index.astro` |
| 示意图上的房间标签 | `src/components/HeroFigure.astro` |
| 研究经历条目 | `src/pages/research.astro` |
| 论文题目、BibTeX | `src/pages/publications.astro` |
| 比赛成绩和照片 | `src/pages/about.astro` + `public/assets/img/` |
| 替换 CV PDF | 覆盖 `public/assets/Haotian_Fu_CV.pdf`（或 `_BCI.pdf`） |
| 颜色 / 字体 / 留白 | `src/styles/global.css` 顶部的 `:root` |

---

## 全站壳：顶栏和页脚

文件：`src/layouts/Base.astro`

| 你在页面上看到的 | 改哪里 |
| --- | --- |
| 浏览器标签标题、搜索引擎摘要 | 文件顶部 `title`、`description`（各 page 传入；首页默认值也在这里） |
| 左上角 “Haotian Fu” | `<a class="brand">` |
| Home / Research / Publications / About / CV | `.navlinks` 里的 `<a>` |
| 页脚版权、地点、邮箱 | `<footer class="site-footer">` |

加一个导航项：在 `.navlinks` 里复制一行 `<a href="/新路径">…</a>`，并在 `src/pages/` 下新建对应的 `.astro` 文件。

---

## 首页 `/` → `src/pages/index.astro`

| Section / `id` | 你看到的 | 改什么 |
| --- | --- | --- |
| `.intro`（无 id） | 大号姓名、中文名、头衔、学校、导师、CV/Email/GitHub/LinkedIn、研究兴趣、右侧肖像 | 左侧文案直接改对应 `<p>` / `<h1>`；换头像覆盖 `public/assets/img/avatar.jpg`；照片下小字在 `<figcaption>` |
| `#hello` | “Hello.” 两段自我介绍 | 改两个 `<p>`。实习意向在第二段的 `<strong>` |
| `#exhibit` | “Selected work” 和传感大图 | 图注在本页 `<figcaption>`；图上的房间/传感器文字在 `HeroFigure.astro`（见下一节） |
| `#research` | 01 / 02 / 03 三条目录 | 每个 `<article class="catalog-item">`：编号、标题、段落、链接 |
| `#news` | News 列表 | `<ul class="news">` 里每一行：`<time>年份</time><span>一句话</span>`。复制一行即可新增 |
| `#publications` | 首页精选论文 | 每个 `<article class="pub">`：年份、题目、venue、作者。完整列表在 Publications 页 |

新增一条 News：复制一个 `<li>…</li>` 贴到列表最上面。  
新增一条首页精选论文：复制一个 `<article class="pub">`。

---

## 首页示意图：文字在哪改？

大图**不是一张 JPG**，是 `src/components/HeroFigure.astro` 里的 HTML + SVG。`index.astro` 只负责插入它：

```astro
<HeroFigure />
```

| 你在图上看到的 | 改这里 | 约略行号 |
| --- | --- | --- |
| Home sensing · four-room apartment | `<strong>` | ~17 |
| 16 UWB · 6 Kinect · wearables | 旁边的 `<span>` | ~18 |
| LIVING ROOM | `<text>…LIVING ROOM</text>` | ~23 |
| sofa / occluder | `<text>` | ~25 |
| table | `<text>` | ~27 |
| participant | `<text>` | ~30 |
| RGB-D | `<text>` | ~33 |
| UWB radar | `<text>` | ~37 |
| IMU | `<text>` | ~42 |
| ScoreKFT · contactless tracking… | 房间底部 `<text>` | ~43 |
| Time-aligned modalities | 右侧 `<strong>` | ~48 |
| RGB / DEPTH / UWB RF / WEARABLE | `<span class="viz-label">` | 各 stream 标题 |
| 底栏 Walking → Sitting → Standing | `<div class="viz-caption">` | 文件底部 |

图下方那句说明（“Capture setup in a four-room apartment…”）不在组件里，在 **`index.astro` 的 `#exhibit` `<figcaption>`**。

---

## Research `/research` → `src/pages/research.astro`

旧链接 `/projects` 会自动跳到这里。

| 区块 | 改什么 |
| --- | --- |
| `.pagehead` | 眉题 “Research”、主标题、导师/时间那一行 |
| 每个 `<article class="project">` | `eyebrow`（时间）、`<h3>`（项目名）、`.meta`（一行副标题）、`<ul>` 里的要点 |
| 本科项目 | 最后一个 `article`，以及上面的 “Prior work at SJTU” |

新增一个研究生项目：复制一整块 `<article class="project">…</article>`，改时间和条目。首页 `#research` 的 01/02/03 是摘要，这里才是完整条目，两处要一起改才一致。

---

## Publications `/publications` → `src/pages/publications.astro`

旧链接 `/pub` 会自动跳到这里。

| 区块 / `id` | 改什么 |
| --- | --- |
| `.pagehead` | 页标题、导语 |
| 每个 `<article class="pub">` | 年份、题目、venue、作者、摘要、按钮（BibTeX / DOI / Project notes） |
| `#citation` | ScoreKFT 的 BibTeX。字符串在文件**顶部**的 `const scorekft = \`…\``，页面下半部分的 `<pre>` 会自动引用它 |

新增一篇论文：复制一个 `<article class="pub">`。如果也要出现在首页，再到 `index.astro` 的 `#publications` 加一条。

DOI 按钮改 `href="https://doi.org/…"`。还没有 PDF / preprint 时，可以先删掉对应的 `<a class="button">`。

---

## About `/about` → `src/pages/about.astro`

| 区块 | 改什么 |
| --- | --- |
| `.pagehead` | “A marathon runner.” 和导语 |
| 每张 `<article class="runner-card">` | 照片路径、`alt`、`.meta`（例如 First full marathon）、比赛名、成绩、名次 |

| 照片文件 | 对应比赛 |
| --- | --- |
| `public/assets/img/FM.jpg` | Suffolk County Marathon |
| `public/assets/img/HM.jpg` | Brooklyn Half |
| `public/assets/img/10K.jpg` | Great Cow Harbor 10K |

换照片：用同名文件覆盖即可。新增一场比赛：复制一张 `runner-card`，把 `src="/assets/img/新文件.jpg"` 指到 `public/assets/img/` 里的新图。

---

## CV `/cv` → `src/pages/cv.astro`

旧链接 `/CV.html` 由 `public/CV.html` 跳到 `/cv`。

| 区块 | 改什么 |
| --- | --- |
| `.pagehead` | 标题和实习说明 |
| 左卡 General CV | 说明文字；下载链接 `href="/assets/Haotian_Fu_CV.pdf"` |
| 右卡 Healthcare / BCI CV | 同上，文件是 `Haotian_Fu_CV_BCI.pdf` |
| Skills | `.mod` 四格（Programming / ML / Infrastructure / Sensing）和下面的 `.chip` 标签 |
| 页底 Contact | 邮箱和 LinkedIn |

只换 PDF：把新文件放到 `public/assets/`，**文件名保持不变**，不用改 HTML。改文件名的话，同时改 `cv.astro` 里的 `href`。

---

## 颜色和字体

文件：`src/styles/global.css` 最上面的 `:root`

| 变量 | 用途 |
| --- | --- |
| `--paper` | 页面底色（现在是米白） |
| `--ink` | 标题、姓名 |
| `--muted` | 正文灰 |
| `--line` | 分隔线 |
| `--max` | 内容最大宽度 |

标题字体是 Cormorant Garamond，导航/正文是 Outfit，在文件顶部 `@import`。一般改文案不用动这个文件。

---

## 部署到 GitHub Pages

这不是 Jekyll。推 `master` 后由 GitHub Actions 构建（`.github/workflows/deploy.yml`）。

**第一次上线前**把 Pages 源改成 GitHub Actions，否则旧的 branch 部署会挂：

1. https://github.com/Haotian-Fu/Haotian-Fu.github.io/settings/pages
2. **Source** → **GitHub Actions**（不要选 Deploy from a branch）

然后：

```bash
git add -A
git commit -m "Update site copy"
git push origin master
```

等 1–3 分钟，硬刷新 https://haotian-fu.github.io/（Ctrl+F5）。

旧路径仍然可用：`/projects` → `/research`，`/pub` → `/publications`，`/CV.html` → `/cv`。重定向写在 `astro.config.mjs`。

---

## 常见操作对照

| 任务 | 步骤 |
| --- | --- |
| 改一句自我介绍 | `src/pages/index.astro` → `#hello` |
| 加一条 News | `index.astro` → `<ul class="news">` 顶部插一行 |
| 论文中了 | `publications.astro` 加条目；`index.astro` 的 News 和精选论文也各加一条 |
| 换头像 | 覆盖 `public/assets/img/avatar.jpg` |
| 换 CV | 覆盖 `public/assets/Haotian_Fu_CV.pdf` |
| 加一场比赛 | `about.astro` 复制 `runner-card`，照片放进 `public/assets/img/` |
| 改示意图标签 | `src/components/HeroFigure.astro` 里的 `<text>` |
| 改导航 | `src/layouts/Base.astro` 的 `.navlinks` |
