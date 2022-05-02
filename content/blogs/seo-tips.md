---
title: 5 HTML SEO Tips To Rank Higher in Google
cover_image: https://res.cloudinary.com/terieyenike/image/upload/v1651446130/pexels-henry-_-co-2468056_zwawwz.jpg
author: Teri Eyenike
description: In this article, we will learn some new tips and insights on the most important HTML tags that you might have come across when setting up the structure of an HTML document, but you are not aware of its importance to boost your Search Engine Optimization (SEO).
date: July 10, 2022
publishOn: 2022-07-10T00:00:00
tags: ["html", "seo", "productivity"]
---

## Introduction

In this article, we will learn some new tips and insights on the most important HTML tags that you might have come across when setting up the structure of an HTML document, but you are not aware of its importance to boost your Search Engine Optimization (SEO).

## Why SEO?

Everybody is on their mobile phone, and one of the easiest things to do now is to search on Google when you are puzzled about a particular topic or word. So to take advantage of the available real-estate on the first page of Google, you need to start doing the right things by using __keywords__ in your website to boost your authority.

![Learn JavaScript](https://user-images.githubusercontent.com/25850598/128917564-67f1b707-3b0a-496a-8d55-9388c0914ead.png)

## Benefits of SEO

- It helps for the discoverability and visibility of your website.

- It boosts your website traffic when people search using specific keywords.

To learn more about the benefits of SEO, use this [link](https://www.crazyegg.com/blog/seo/benefits/).

Let's begin 🚀

## 1. The Title Tag

The `<title>` tag is the title you want to appear in the search result to describe your brand name and what the page is. It is advisable to keep the title short, around 60 characters.

```html
<head>
   <title>
      SEO tips | Rank higher on Google search result
   </title>
</head>
```

From the above code snippet, place the `<title>` element in between the `<head>` and `</head>` element of your HTML. One thing to note is that the content of the HTML `<head>` is not displayed on the page when loaded in the browser, unlike the `<body>` element. The head element contains all the metadata about the document.

![Title tag](https://user-images.githubusercontent.com/25850598/128953551-b6338496-66eb-48c3-b219-4fc79d71b206.png)

## 2. Meta Tags

The `<meta>` tags help browsers know what the content of your website is. Some of the common meta tags worthy of note are:
- author
- description
- viewport.

```html
   <head>
    <meta name="author" content="Teri Eyenike" />
    <meta
      name="description"
      content="Project-based guide for web developers and devops engineers"
    />

    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
  </head>
```

The __viewport__ meta tag lets you control the width and scaling of the viewport so that it fits all devices. Also, in the early days of web development, the __keyword meta tag__ was of great importance, but the keyword meta tag isn't that relevant now, and Google doesn't use it in its [search ranking](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag).

![Meta description](https://user-images.githubusercontent.com/25850598/128953713-5052b6f7-0a3f-4167-8799-31e52f33336d.png)


Another meta tag you would like to use is the `og:` meta tag that helps social media sites like Facebook and Twitter create preview cards for sharing on other platforms.

```html
<head>
    <meta
      property="og:title"
      content="Teri Eyenike - A Front-end Developer and Technical Writer"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/codeg0d/image/upload/v1609859185/3_skg4ne.jpg"
    />
    <meta property="og:url" content="https://www.terieyenike.github.io/v2" />
    <meta property="og:description" content="Project-based guide for web developers and devops engineers" />
  </head>
```

> Other social media sites use the `og` meta tags to create posts.

Last, is the `robots` meta tag used to keep search engines from indexing documents, internal search results, duplicate pages, etc., you don't want to appear in search.

```html
<head>
    <meta name="robots" content="noindex nofollow" />
  </head>
```

## 3. Alt Attribute

The alt attribute is used inside the `<img>` element to describe the image as an alternate text. The primary function of the alt attribute is it helps with your website accessibility, and for SEO, it helps index images for search engines. The rule of thumb when using the alt attribute is to keep it short but descriptive.

```html
<img src="https://res.cloudinary.com/codeg0d/image/upload/v1609859185/2_txw6yz.jpg" alt="Poster for baby driver movie" width="600" height="300" />
``` 

## 4. Canonical Tag

The canonical tag tells search results that a specific URL represents the master copy and helps prevent problems caused by duplicate content appearing on multiple URLs.

```html
<head>
    <link
      rel="canonical"
      href="https://devdojo.com/teri/5-html-seo-tips-to-rank-higher-in-google"
    />
  </head>
```

## 5. Semantic Tags

Semantic tags are HTML tags that help communicate to the browser the structure of your web page. Elements such as `<header>`, `<footer>`, `<article>` are all considered semantic because they describe the content embedded within them.

When used appropriately, search engines and assistive technologies can understand the document's content, which helps with accessibility, especially screen readers for users with sight impairment.

Some other semantic elements, you should take note of are:

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<nav>`
- `<mark>`
- `<section>`
- `<summary>`
- `<time>`

Try to avoid using the `<div>` element throughout the entire document of your web page.

## Conclusion

In this post, you learned about the different strategies to implement in your next web project to rank higher in Search Engine Result Pages (SERP). Furthermore, I will recommend you start using the tips to monitor your website growth :).

## Further Reading

[Open Graph](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/#what-is-open-graph)

[Canonicalization](https://moz.com/learn/seo/canonicalization)

[Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
