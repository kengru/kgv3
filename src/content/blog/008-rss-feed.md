---
author: Kendry
pubDatetime: 2023-11-26T15:22:00Z
title: Feeder - a simple rss reader
postSlug: feeder-rss-reader
featured: true
draft: false
tags:
  - remix
  - supabase
  - rss
  - learning
description: Learning the basics of how to parse and show a rss feed from multiple sources and types.
---

## RSS

![rss icon](@assets/images/projects/rss-icon-2.png)

A RSS feed is a web feed that provides automatic updates for content that an user is subscribed to. It is usually created for things like news agregations, source monitoring or even job hunting.
It basically works like this:

A webpage creates a new entry (be it a new blog post, a new podcast or a new article) and then it updates a resource,
in this case an `xml` file with information about all of their entries including the new one. The `xml` file is then exposed in an endpoint where it can be consumed.

The plan on this article is to create a web app where you can see a feed of your stored rss,
categorized by the type of content!

## Init

To get started, I created a new remix project with:
`npx create-remix@latest --template netlify/remix-template`, the template is just because I
want this to be hosted in Netlify and that one comes with a [Netlify adapter](https://docs.netlify.com/integrations/frameworks/remix/).

For storage and (maybe) auth I will be using [Supabase](https://supabase.com/). Supabase has been great for the projects I have recently started given their easy API and [generous free tier](https://supabase.com/pricing).

For stylings I will be using [Tailwind](https://tailwindcss.com/) since it's very easy for me to prototype with it.

## Development

This app will let you add and save your favorite rss feeds by just writing down the URL for the rss.xml file and adding a name to identify the content.

This is the only type of data that needs saving into the database:

```ts
type SingleItem = {
  id: number;
  url: string; // URL of the rss site.
  name: string; // Name for the user to recognize it.
  image: string;
};
```

I'll be using the [rss-parser](https://github.com/rbren/rss-parser) library which in turn is a nice wrapper over the [xml2js](https://www.npmjs.com/package/xml2js) library. I thought at first to create my own library to convert xml files into javascript but I don't want to reinvent the wheel that much (though I think it could be a neat excercise one day).

I recently decided to start using the [`@apply`](https://tailwindcss.com/docs/functions-and-directives#apply) directive from Tailwind in order to clean up the long list of classes on repetitive stylings which sometimes are a little difficult to work with when deep into `jsx code`.

I started creating some functions to parse and get multiple feeds at once. This gave me an opportunity to use the always useful `Promise.all`:

```ts
export async function getFeed(url: string) {
  const feed = await parser.parseURL(url);
  return feed;
}

export async function getMultipleFeeds(urls: string[]) {
  const feeds = await Promise.all(urls.map(url => getFeed(url)));
  return feeds;
}
```

To get all the items into a single array and sort them by published date I decided to write this function, it's probably a bit underperformant but that is something I'm going to worry about later.

```ts
export async function getFeedSortedByDate(
  urls: string[]
): Promise<SingleItem[]> {
  let sortedFeed = [] as SingleItem[];
  const feeds = await getMultipleFeeds(urls);
  for (const i of feeds) {
    const newI = i.items.map((item, idx) => {
      if (idx < 15) {
        const image = i.image?.url ? i.image?.url : i.itunes?.image;
        return { ...item, fallBackTitle: i.title, image: image };
      }
      return null;
    });
    sortedFeed = [...sortedFeed, ...newI];
  }
  const filtered = sortedFeed.filter(item => item !== null);
  filtered.sort((a, b) => {
    return new Date(a.pubDate) < new Date(b.pubDate) ? 1 : -1;
  });

  return filtered;
}
```

After this, it was just a matter of connecting the database and create a route to add the feeds into the table. I used [conform](https://conform.guide/) and [zod](https://zod.dev/) for form validation and input, it's a really great combination which I've been using recently, they really simplify form submittion with both client and server validations.

It turns out that rss feeds do not have any easy way of pagination and how other people handle that is by having an [news aggregator](https://en.wikipedia.org/wiki/News_aggregator) that can keep track of unread items and can create a pagination of it's own by polling the feeds into the database. Not having one made it hard to optimize and the process of getting the feeds and parsing them is slow.

Other than this I just pushed some simple css and voilà, the application can now take an rss url, parse, save and show the articles on it! You can click on each one and go straight into their page :)

The whole project is now hosted at: https://feeder.odin.do  
And the code is at: https://github.com/odin-software/feeder

## Things I learned doing this project

- The structure of RSS, how to consume them and the difference in RSS versions.
- Transitions between page changes using [framer motion](https://www.framer.com/motion/).

### This I could improve and add

- Create an aggregator to keep track of new articles and mark them as read as I click on each one.
- Have it so that people can log in and have their own list.
- Divide posts into types for easier display on things like podcasts.
- Have a list of popular blogs that could be added to a user by just clicking something like a `follow` button.
- Add a dark mode.

Thank you for reading!
