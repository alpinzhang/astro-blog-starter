---
title: 简单的主题配置指南
published: 2023-09-01
description: "如何使用这个博客模板"
image: "https://astro-1252785733.cos.ap-chengdu.myqcloud.com/my-blog-screenshot.png?q-sign-algorithm=sha1&q-ak=AKIDZGjr8yxHTxh2ObAHXudx_BDNk9JeDcbBBc-AZcYCYvM-f69TQMiaHnXa7cbVdtUj&q-sign-time=1714375277;1714378877&q-key-time=1714375277;1714378877&q-header-list=host&q-url-param-list=ci-process&q-signature=4ce1cbff856a410b33a5f530683b62ec78732a1b&x-cos-security-token=fn6WrAkrXekY50wE9i3ymOoq84hpVu0a5c919fe2cba06813e790e1a692e872157UJn_g-jmfr8jpXTIlEVAe0b38NnsdGa7ZliQkVJ_td6dWig8tEr5s7RdC-lBXiAewsiEJVa4XM5yhnV039vHMO5iK0Z7Ur47qNJ6O_53L7amV0jNw5FfHIi0jzMSDBlhFL9UQmfu9vlEg4UrXruU_YLaZphPbeQzwNXnotfA3j9ucnquyKVN_4O2Z8uBZ3D&ci-process=originImage"
tags: ["Fuwari", "Blogging", "Customization"]
category: 指南
draft: false
---

> 测试图床图片
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
