# 个人网站

纯静态个人网站，无付费依赖。首页包含 Home、作品、博客、音乐和赞助区块；当前所有内容为明确的空状态。

## 文件
- index.html：文字、区块与链接。修改这里即可添加真实作品、文章、音乐链接和赞助方式。
- styles.css：配色、布局及手机适配。
- site.js：年份与导航高亮。关闭 JavaScript 仍可浏览所有内容。
- .nojekyll：让 GitHub Pages 直接提供静态文件。

## 发布
在 GitHub 账号 jinzhoudhao-cloud 下确认没有同名仓库后，新建公开仓库 jinzhoudhao-cloud.github.io，上传这些文件到 main 根目录。在 Settings → Pages 中选择 Deploy from a branch，main / (root)，保存。
预期网址：https://jinzhoudhao-cloud.github.io/ 。只有部署成功并实际访问验证后，才算发布完成。

## 扩展
可在仓库中添加 assets/ 图片和音频、posts/ 文章页面，并从首页链接。仅上传拥有发布权的内容。不要把密码、私人资料或访问密钥提交到公开仓库。
