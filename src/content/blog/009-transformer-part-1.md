---
author: Kendry
pubDatetime: 2023-11-27T03:22:00Z
title: Transformer - an image format converter
postSlug: transformer-part-one
featured: true
draft: false
tags:
  - remix
  - supabase
  - image
  - gif
  - learning
description: Learning about image manipulation in javascript.
---

# Initial thoughts

I've been very interested in generative art and shading for [quite a while now](https://twitter.com/kxngru), which I've had to deal with all sorts of troubles with images, from converting a jpg into a WebP, removing color and adding transparency to a png and converting a group of PNGs into a gif like this one:

![gif](../../assets/images/projects/hex_opt.gif)

Usually, for this kind of operation, I use something like [ezgif](https://ezgif.com/) or [onlinepngtools](https://onlinepngtools.com/) which by almost any standard they work just fine, but they don't work exactly like I would like them too, and `onlinepngtools` is freemium, permitting only 5 uses per day.

So I thought, why don't I build my own image-modifying web app where features will only be limited by me implementing them.

## Idea

And so `Transformer` was born. I started the project with just the idea of turning PNG and JPG into WebP since I needed to compress some files for a website I'm building and WebP is one of the [best formats for the web](https://developers.google.com/speed/webp#:~:text=WebP%20is%20a%20modern%20image,that%20make%20the%20web%20faster.).

I created the project with [Remix](https://remix.run/) and used the Netlify template again for ease of deployment. I then added [Supabase](https://supabase.com/) because I will be doing all the transformations of images on the server side which means the way I can communicate to the client is by passing it a link to the changed image so that it can share with the user.

This is a huge issue. Every image that gets uploaded and converted will be saved into the storage this project has on Supabase, that means that if this application gets a lot of users the project could run out of space, but that is a problem I'm going to solve later.

## Development

I used the [Sharp](https://sharp.pixelplumbing.com/) library which comes with a lot of handy functions to turn a [Buffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) into a WebP image back to a buffer.

I created a simple form with a drag and drop for file selection and a `select` input to choose between converting the file into WebP or PNG.

At first, I did not understand at all how a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) worked but after a few shots, I got the basics of converting a buffer into a string and then uploading it into Supabase right after the conversion with `Sharp`. This gave me back a link and I then sent it to the client back so that the user can click it and download its newly converted image!

The code is at [GitHub](https://github.com/odin-software/transformer).  
The live site is at [Transformer](https://transformer.odin.do).

## Things I learned in this project

- How [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) and the File API work in javascript.
- How to use the sharp library for image conversion.
- Drag and drop file input in React.

## Things to improve

- Figure out how to do all the work on the frontend.
- Preview of the new converted/manipulated image.
- Multiple images at a time.
- Other file manipulations like turning a specific color transparent in an image.
- Deleting unused files in the Supabase storage (this requires some scheduled function running).
- Add support for different languages.

Thank you for reading!
