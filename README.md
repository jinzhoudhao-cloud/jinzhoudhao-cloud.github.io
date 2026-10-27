# 神圣的F2 · 宇宙收藏馆

网站：https://jinzhoudhao-cloud.github.io/

这是一个无构建依赖的静态网站，继续由 GitHub Pages 托管。界面包含动态星空、星球视差、悬浮画廊、音乐与真实音频频谱、B 站主页、代码项目、航行日志和赞助入口。没有虚构作品。

## 最常用的编辑入口

修改 content.json 即可添加内容。上传媒体文件后填写对应路径；不要把整个 JSON 替换为下面某个片段，只替换对应的数组。JSON 使用英文双引号，最后一项后面不要加逗号。

### 音乐

将音频放到 assets/music/，在 tracks 中添加：

```json
"tracks": [
  {"title": "你的歌名", "artist": "神圣的F2", "src": "assets/music/my-song.mp3"}
]
```

播放器支持手动播放、暂停、切歌、进度、音量和持续播放的迷你控制栏。推荐 MP3。频谱分析使用真实音频数据；音频从同一网站加载最方便，外部音频链接必须允许跨域访问（CORS）。

“选择本机音乐试听”只是当前浏览器预览：文件不上传、不公开，刷新后清除。要让其他访客听见，必须把音频上传到仓库并加入 tracks。没有文件时不会伪装成正在播放。

### 艺术画

将图片放到 assets/art/，在 artworks 中添加：

```json
"artworks": [
  {"title": "你的画作名", "image": "assets/art/my-art.webp", "alt": "画面内容的简短描述", "year": "2026", "medium": "数字绘画", "description": "这幅作品的故事。"}
]
```

画作支持点击放大、Escape 关闭和键盘操作。首页缩略图会裁切为 4:5，放大时展示完整图片。空展厅里的几何光影是网站装饰，不作为用户作品。

### 代码作品

```json
"projects": [
  {"title": "你的项目名", "description": "这个项目解决什么问题", "tags": ["Python", "开源"], "url": "https://github.com/你的账号/你的仓库"}
]
```

### B 站视频与博客

bilibili 字段已经设置为 https://space.bilibili.com/10249844 。

videos 和 posts 都接受对象数组：title（标题）、description（介绍）、url（真实链接）。posts 还可填 date。博客文章可以是你已有的文章网址，也可以是仓库中新建的 HTML 页面相对路径，例如 posts/first-note.html。视频默认跳转 B 站，不会自动抓取或嵌入第三方播放器。

### 赞助

暂未开放时保持 support 为 null。准备好真实渠道后改为：

```json
"support": {"label": "支持我的创作 ↗", "url": "你的真实HTTPS赞助链接"}
```

## 发布更新

在 GitHub 编辑文件，Commit changes 到 main，等待 Pages 部署完成。内容与媒体会公开。建议每次先检查文件名大小写和路径，确认只上传准备公开的素材。不要把本机试听当成公开发布。

## 其他文件

- index.html：首页结构与固定文案。
- styles.css：配色、布局与动效。
- site.js：播放器、内容加载、弹窗与交互。
- favicon.svg：网站图标。
- .nojekyll：静态发布标记，请保留。

动态效果可用顶部按钮暂停；网站也遵循系统的减少动态效果设置。浏览器标签页隐藏后停止星空绘制。

## 本机预览

在本目录启动静态 HTTP 服务（例如 python -m http.server 8765），打开 http://127.0.0.1:8765/ 。直接双击 index.html 会因浏览器的本地文件限制而无法加载 content.json。

## 黑洞视觉

首页使用 AI 生成的黑洞概念图，并在支持 WebGL 的浏览器叠加吸积盘扰动和流动光晕。这是艺术化宇宙视觉，不是科学模拟。原图实际分辨率为 1672 × 941；不声称为原生 4K。WebGL 不可用、系统减少动态效果或手动静态模式时保留底图。离开首页或隐藏标签页会暂停黑洞绘制。

- assets/black-hole.png：黑洞底图。
- blackhole.js：渐进增强的 WebGL 动态光晕。
