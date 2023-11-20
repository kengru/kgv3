import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kengru.do", // replace this with your deployed domain
  author: "Kendry Grullón",
  desc: "A software developer trying to be an engineer.",
  title: "kengru",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-US"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kengru",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kengru/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/kxngru",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kengru/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:kengrullon@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
