# Jinzhou’s Online Resource Library

Public site: https://jinzhoudhao-cloud.github.io/

Static GitHub Pages site. English is the default; the persistent 中文 / English button switches the interface and document preview. Search works across both languages.

## Editing resources

Edit `library.json` to add resources under `videos`, `cybersecurity`, `code`, `gallery`, or `journal`. Supply `title`, `description` and `tags` in both `en` and `zh`. Links use `type: "link"` and `url`. Artworks use `type: "artwork"` and `image`. No works are fabricated for empty categories.

The original CYB 115 Word file is in `resources/CYB115_Lab_Index.docx`; its bilingual reader data is in `resources/cyb115-lab-index.json`. The Word original is unchanged. The music room supports private local listening; selecting a file does not publish it.

Interface text lives in `library.js`, layout in `library.css`, and black-hole animation in `blackhole.js`. Follow `DEVELOPMENT.md` for all future additions.

Run a local static server from this folder, for example `python -m http.server 8765 --bind 127.0.0.1`. Changes committed to the repository’s main branch publish through GitHub Pages.

中文说明：编辑 `library.json` 添加真实资源，每个标题、说明和标签同时填写英文与中文。界面翻译在 `library.js`，样式在 `library.css`。中文按钮仅切换网页与阅读版，下载的 Word 文档仍为英文原文件。
