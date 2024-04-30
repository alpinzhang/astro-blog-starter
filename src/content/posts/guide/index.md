---
title: 简单的主题配置指南
published: 2023-09-01
description: "如何使用这个博客模板"
image: "./cover.jpeg"
tags: ["Fuwari", "Blogging", "Customization"]
category: 指南
draft: false
---

> Cover image source: [Source](<https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg>)

博客主题构建使用 [Astro](https://astro.build/). 这里就不做介绍，可以参考官方文档 [Astro Docs](https://docs.astro.build/).

## 博客文章的 Front-matter

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| 属性          | 描述                                                                                                                                                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | The title of the post.                                                                                                                                                                                      |
| `published`   | The date the post was published.                                                                                                                                                                            |
| `description` | A short description of the post. Displayed on index page.                                                                                                                                                   |
| `image`       | The cover image path of the post.<br/>1. Start with `http://` or `https://`: Use web image<br/>2. Start with `/`: For image in `public` dir<br/>3. With none of the prefixes: Relative to the markdown file |
| `tags`        | The tags of the post.                                                                                                                                                                                       |
| `category`    | The category of the post.                                                                                                                                                                                   |
| `draft`       | If this post is still a draft, which won't be displayed.                                                                                                                                                    |

## 放置博客文章的位置

你的博客文章应该放置在 `src/content/posts/` 目录. 你也可以创建一个子目录来组织你的博客文章和资源

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
