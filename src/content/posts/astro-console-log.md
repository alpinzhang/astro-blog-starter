---
title: astro-console-log
published: 2024-04-16
description: "如何在 astro 文件中进行调试"
image: ""
tags: ["astro"]
category: "指南"
draft: false
---

# 背景

在 Astro 开发中，经常会遇到一些变量，不知到其数据结构是怎么样的；在我们平常 web 开发时，
可以使用 `console.log()` 将变量的值输出到控制台。那么在 astro 文件中，如何来打印这些变量呢。
在查看文档后，找到以下几种方法。

# 使用 `console.log()` 打印调试

需要注意的是，书写 `console.log()` 的位置将决定了调试输出会被打印到哪里。

```astro
---
console.log('Hi! 我是服务器。这是在运行 Astro 的终端中记录的。');
---
<script>
console.log('Hi! 我是客户端。这是在浏览器的开发控制台中记录的');
</script>
```

Astro Frontmatter 中的 `console.log()` 语句始终输出到运行 Astro CLI 的终端上。这是因为 Astro 在服务器上运行。

而在 `<script>` 标签中的代码在浏览器中运行。因此会打印在**浏览器的控制台中**

# 使用 Astro `<Debug />` 组件调试

Astro 提供了内置的 `<Debug />` 组件, 可以用它吧任意值直接渲染到 HTML 模板中。示例如下：

```astro
---
import { Debug } from 'astro:components';
const sum = (a, b) => a + b;
const answer = sum(2, 4);
---
<!-- 示例：在浏览器中输出 {answer: 6} -->
<Debug answer={sum(2, 4)} />
<!-- 示例：三者等效-->
<Debug {{answer: sum(2, 4)}} />
<Debug {answer} />
```
