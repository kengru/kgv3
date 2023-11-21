---
author: Kendry
pubDatetime: 2023-11-21T15:22:00Z
title: Moving kengru.do to Astro
postSlug: moving-kengru-to-astro
featured: true
draft: false
tags:
  - docs
description: My takeways, why and how I moved to Astro.
---

## Astro

[Astro](https://astro.build/) is a web framework that's perfect for blogs and content
-focused sites.
There are a lot of themes made for Astro websites and it makes picking and choosing
things you would like on a page really easy without overcomplicating on your
website when there is no need to.

## Why

This website has been through 3 iterations (hence the name of the [repo](https://github.com/kengru/kgv3)) the first one was made completly out of scratch while I was giving my first
steps into creating small apps to learn React.

The second one was done with [Hugo](https://gohugo.io/) which was great since Hugo
is a framework just like Astro just a litle bit more different than what I'm used to
see from an SSR framework. It has very good themes and they are very complete in terms of
accessibility and internalization.

I decided to go with Astro since its themes were much to my liking, it's [blazingly fast](https://astro.build/blog/2023-web-framework-performance-report/), and in my opinion it has
better web fundamentals built into it.

It was a really straightforward process where I just created a new branch, deleted everything
and ran `yarn create astro --template ${template}` and started changing all of the configuration
files, then moved the old post I had into the content folder and it worked like a charm!

## Takeway

Astro is pretty good but what I like the most about it is the ability to use templates and
focus in the part that is really important when having a blog which is writing. The template
I chose has everything needed related to responsiveness and accesibility which makes my
job easier.

Hopefully this is the last time I have to change this site at least this drastic. I'm going
to be focusing on making this look nice and any other feature I will need in the future, I
will make them myself in top of this structure.

Thank you for reading :)!
