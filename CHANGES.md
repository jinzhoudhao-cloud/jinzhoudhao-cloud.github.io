# 网站更新包 · CYB 115 Lab 23 上线

生成时间：2026-11-15
基准：jinzhoudhao-cloud.github.io-main（main 分支最新 zip）

## 交付内容

覆盖到仓库根目录即可（路径保持一致）：

**修改（5 个）**

- `DEVELOPMENT.md`
- `index.html`
- `library.css`
- `library.js`
- `library.json`

**新增（49 个，2.02 MB）**

- `resources/CYB115_Lab_23.docx`
- `resources/CYB115_Lab_23_zh.docx`
- `resources/cyb115-lab23.json`
- `resources/cyb115-lab23/image01.webp` … `image46.webp`（46 张终端截图，共 385 KB）

没有删除任何文件。

## 改了什么

1. **多文档阅读器**：原来 `library.js` 只认一份 `cyb115-lab-index.json`，现在按 `library.json` 里每个
   `type: "document"` 资源的 `preview` 字段加载任意份，卡片、搜索、阅读器、下载链接都跟着资源走。
2. **新增 Lab 23 资源**：`library.json` 里插入 `cyb115-lab23`（cybersecurity 分类），
   中英双语标题/描述/标签，`download` 指英文原文件、`downloadZh` 指中文版。
3. **阅读器新增「sections」版式**：段落 + 截图按原文档顺序排版，截图懒加载、宽度自适应，
   字号/颜色/背景沿用原有 `--accent` / `--line` / dialog 主题，与 CYB115 表格版一致。
4. **搜索**：库里搜关键词会命中标题、描述、标签、全文（中英都索引）并在卡片上给出「本文档中有 N 处匹配」，
   可点「查看 23D 小节」直接跳到对应小节；文档内还有自己的搜索框。
5. **下载**：卡片给英文原文件；阅读器里同时给「下载 DOCX」和「中文版 DOCX」，两个文件与原文件字节一致。
6. **手机端**：修了阅读器在 390px 下按钮撑破视口的问题（按钮换行、对话框全宽）。
7. **缓存版本**：`index.html` 与 `library.js` 里的 `?v=exams1` 改成 `?v=lab23`，避免访客拿到旧 CSS/JS。
8. **深链接**：`/#cyb115-lab23` 可直接打开该文档（并支持同页 hashchange）。

## 已验证（本地 127.0.0.1 起服务，Playwright 实测）

| 项目 | 结果 |
|---|---|
| 卡片数量 / Lab 23 卡片 | 4 张 / 存在，标题描述正确 |
| 阅读器小节 / 图片 | 6 个小节，46 张图全部加载成功，0 张破图 |
| 文档内搜索 | `grep` → 2 个小节 / 41 处；`权限` → 4 个小节 |
| 中英切换 | 小节标题与正文同步切换，中文版下载按钮出现 |
| 库搜索 | `bash` / `awk` / `脚本` / `权限` / `备份` 均命中该卡片 |
| CYB115 原文档回归 | 表格 74 行正常、搜索 `firewall` → 2 行、下载链接恢复 |
| 下载字节一致性 | 3 个 docx（含原 CYB115）sha256 与源文件完全一致 |
| 手机 390px | 无横向溢出，阅读器全宽可读 |
| 控制台 | 0 个 JS 错误 |

## 怎么发布

```powershell
# 1. 把 site-update 里的内容覆盖到本地仓库工作区
Copy-Item -Recurse -Force .\site-update\* <你的仓库目录>\

# 2. 提交并推送
cd <你的仓库目录>
git add -A
git commit -m "Add CYB 115 Lab 23 to cybersecurity with bilingual reader and screenshots"
git push
```

推送后 GitHub Pages 大约 1 分钟生效，可访问：
- 列表：https://jinzhoudhao-cloud.github.io/#cybersecurity
- 直达：https://jinzhoudhao-cloud.github.io/#cyb115-lab23

## 备注

- 两份 docx 原样保存为 `resources/CYB115_Lab_23.docx`、`resources/CYB115_Lab_23_zh.docx`，未做任何改动。
- 截图由 PNG 转 WebP（质量 82、最大宽 1200），46 张合计 385 KB，比原 docx 里的 798 KB 省一半。
- 仓库总体积从 9.38 MB 增加到约 11.4 MB，主要是两份 docx（约 1.7 MB）。
