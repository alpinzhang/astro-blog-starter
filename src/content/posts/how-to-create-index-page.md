---
title: 在Astro搭建博客示例中创建索引页的方法
published: 2024-04-19
description: 使用 astro 搭建博客，不使用内容集合的情况下，如何创建各种索引页。
image: ""
tags: [指南, 开发, astro]
category: 开发笔记
draft: false
---

## 背景

根据 astro 官方文档中提到的搭建博客的示例中，创建索引页部分，比较值得参考，其中，使用了
Astro API 来处理文件，主要为以下两个 API：

- `Astro.glob()` 从项目中访问文件中的数据；
- `getStaticPaths()` 批量创建多个页面（路由）

这里还没有使用内容集合的功能，所有的页面和文章都在 `src/pages` 目录下面，结构如下

```
D:\mine\astro\blog-demo\src\pages
├── about.astro
├── blog.astro
├── index.astro
├── posts
|  ├── post-1.md
|  ├── post-2.md
|  ├── post-3.md
|  └── post-4.md
├── rss.xml.js
└── tags
   ├── index.astro
   └── [tag].astro
```

## 创建文章归档页

首先来看看，如何能创建文章索引页，也就在 `blog.astro` 中创建文章列表，这部分比较简单，直接上代码：

```astro
---
import { Debug } from "astro:components";
import BaseLayout from "../layouts/BaseLayout.astro"

const pageTitle = "博客"
const allPosts = await Astro.glob('../pages/posts/*.md')
---

<BaseLayout {pageTitle}>
  <!-- 调试 -->
  <!-- <Debug {allPosts}/> -->
  <!-- 渲染列表 -->
  <ul>
    {allPosts.map(post => <li><a href={post.url}>{post.frontmatter.title}</a></li>)}
  </ul>
</BaseLayout>
```

这里使用 `Astro.glob()` 来访问 `pages/posts` 目录下的所有 markdown 文件。可以使用内置组件 `<Debug>` 来打印 `allPosts` 变量的，数据结构如下：

```json
[
  {
    "frontmatter": {
      "layout": "../../layouts/MdPostLayout.astro",
      "title": "我的第一篇博客文章",
      "pubDate": "2022-07-01T00:00:00.000Z",
      "description": "这是我 Astro 博客的第一篇文章。",
      "author": "Astro 学习者",
      "image": {
        "url": "https://docs.astro.build/assets/full-logo-light.png",
        "alt": "The full Astro logo."
      },
      "tags": [
        "astro",
        "blogging",
        "learning in public"
      ]
    },
    "file": "D:/mine/astro/blog-demo/src/pages/posts/post-1.md",
    "url": "/posts/post-1"
  },
  ...
]
```

## 创建标签页

这里需要使用 `.astro` 文件生成多个页面，向外暴露一个 `getStaticPaths()`函数来指定构建页面的路由；

首先创建文件 `pages/tags/[tag].astro`, 然后在页面中添加以下代码；

```astro
---
import BlogPost from '../../components/BlogPost.astro';
import BaseLayout from '../../layouts/BaseLayout.astro';


export async function getStaticPaths() {
  // 访问 posts 目录下所有的 markdown 文件数据
  const allPosts = await Astro.glob('../posts/*.md');
  // 动态生成所有标签集合
  const uniqueTags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  //
  return uniqueTags.map((tag) => {
    // 包含该标签的所有文章
    const filteredPosts  = allPosts.filter((post) => post.frontmatter.tags.includes(tag));
    return {
      params: { tag },
      props: { posts: filteredPosts },
    };
  });
}

const { tag } = Astro.params;
const { posts } = Astro.props

---

<BaseLayout pageTitle={tag}>
  <p>包含「{tag}」标签的文章</p>
  <ul>
    { posts.map(post => <BlogPost url={post.url} title={post.frontmatter.title}/>) }
  </ul>
</BaseLayout>
```

## 创建标签索引页

在写文章的时候，随时都有可能会添加新的标签，因此创建标签索引页的时候，也需要动态获取；

创建文件`pages/tags/index.astro`

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro"

const allPosts = await Astro.glob('../posts/*.md');
// 动态获取所有文章中的标签
const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];

const pageTitle = "标签索引"
---

<BaseLayout {pageTitle}>
  <div class="tags">
    {tags.map((tag) => (
      <p class="tag"><a href={`/tags/${tag}`}>{tag}</a></p>
    ))}
  </div>
</BaseLayout>
```

最后，也可以在文章的布局页面添加上标签的索引。
