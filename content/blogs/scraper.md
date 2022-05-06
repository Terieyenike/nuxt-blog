---
title: How to Build a Web Scraper With Node.JS
cover_image: https://res.cloudinary.com/terieyenike/image/upload/v1651446130/pexels-taryn-elliott-4405252_cdkcgv.jpg
author: Teri Eyenike description: How do you increase productivity, especially when you want to multi-task and achieve
so much in so little time? We have all encountered situations when our lead in an organisation instructs us to get (
scrape) information off the internet, especially if we are in a team that does a lot of manual processes to achieve your
work. Doing this with a pen and paper can lead to errors and missing out on specific information from the website. date:
December 10, 2021 publishOn: 2021-12-10T00:00:00 tags: ["nodejs", "javascript", "web scraping"]
---

How do you increase productivity, especially when you want to multi-task and achieve so much in so little time? We have
all encountered situations when our lead in an organisation instructs us to get (scrape) information off the internet,
especially if we are in a team that does a lot of manual processes to achieve your work. Doing this with a pen and paper
can lead to errors and missing out on specific information from the website.

This tutorial will demonstrate how to automate scraping data off of the website and using it for whatever purpose.

## Sandbox

You can find the source code of the completed project on [CodeSandbox](https://codesandbox.io/s/web-scraper-nxmv8).
Fork, tweak the scripts and run the code.

```js
<CodeSandbox title="scrape the web" id="web-scraper-nxmv8"/>
```

## Prerequisites

As developers, a basic understanding of JavaScript is necessary for you to complete the project built with Node.js and
Express. Also, to follow through the steps, we need to do the following:

- Have Node.js installed on our computer. We use `npm`, a package manager, to install dependencies for our program
- We will make use of a code editor of our choice

> NPM is available when you install [Node](https://nodejs.org/en/) from the official documentation

## Installation

Create a node server with the following command.

```
npm init -y
```



The above command helps to initialise our project by creating a `package.json` file in the root of the folder using npm
with the `-y` flag to accept the default. We will install the `express` package from the npm registry to help us write
our scripts to run the server.

Then after the initialisation, we need to install the dependencies `express`, `cheerio`, and `axios`.

```
npm install express cheerio axios
``` 

- `express`, a fast and flexible Node.js web framework
- `cheerio`, a package that parses markup and provides an API for traversing/manipulating the resulting data structure.
  Cheerio implementation is identical to jQuery.
- `axios`, a promise-based HTTP client for the browser and node.js.

## Creating a Server With Node.JS

In our `app.js` JavaScript file, we use the following code below to import Express.js, create an instance of the Express
application, and finally start the app as an Express server.

```js
const express = require('express');
const app = express();

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
```

Before starting our application in the command line, we need to install `nodemon` as a development dependencies.

```
npm install nodemon --save-dev
```

Nodemon is a monitor script used during the development of a node.js app. Also, we will configure the `package.json`
file to allow us to run our app without restarting.

```js
{
  "scripts"
:
  {
    "start"
  :
    "nodemon app.js"
  }
,
  "devDependencies"
:
  {
    "nodemon"
  :
    "^2.0.15"
  }
}
```

Now start the app in the command line with `npm start`, which should output this in the command line.

```js
server
is
running
on
PORT:3000
```

> `Express.js` is suitable for routing, as we will see later on in the tutorial.

## Creating the Scraper

With the complete server setup, we will implement the web scraper that helps boost your productivity and efficiency at
work within minutes.

Now in the same file, `app.js` we will import the `axios` package to send HTTP requests to the __Re__presentational __
S__tate __T__ransfer (REST) endpoint to perform CRUD operations.

```js
const express = require('express');
const axios = require('axios')

const app = express();

const PORT = process.env.port || 3000;

const website = 'https://news.sky.com';

try {
  axios(website).then((response) => {
    const html = response.data;
    console.log(html);
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
```

From the code snippet above, we use axios. Axios returns a takes in the URL of the website through chaining, and once it
has resolved, we get a response from the news website URL in the command line.

![Response from Sky news data](https://user-images.githubusercontent.com/25850598/141211163-a602d598-360b-46d7-ac9c-016ffd449ca7.png)

## Scraping the Data

To scrape the news website URL data, update our `app.js` file with the following. The `cheerio` package will make this
possible.

```js
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const PORT = process.env.PORT || 3000;

const website = 'https://news.sky.com';

try {
  axios(website).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $('.sdc-site-tile__headline', data).each(function () {
      const title = $(this).text();
      const url = $(this).find('a').attr('href');

      content.push({
        title,
        url,
      });

      app.get('/', (req, res) => {
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});

```

Let's go through the code above.

- The `cheerio` package will enable us to manipulate the DOM by reading the elements on the page. We will target
  specific elements on the page we need to scrape only.
- To parse through the HTML, we make use of `cheerio.load(data)` to parse all the HTML on the page and save it with a
  variable, `const $`.
- To find specific elements on the website with a title, we inspect the page and copy the class name for the `h3` tag.

![Parse through the html](https://user-images.githubusercontent.com/25850598/141211341-098591a2-df50-4557-a805-62c394a2536b.png)

- For each title headline, we want to grab the text using `text()` and the link to the headline we find with an
  attribute of `href`.
- Now, to scrape all our data in a JSON file, we create an empty array with a variable `content`. With this created
  array, we need to push the saved `title` and `URL` by using the push method in an object to display all the client's
  scraped data with the `GET` method, `app.get` with an endpoint `/`.
- Finally, we execute the block of code within the `try...catch` statements. The `catch` statement execute if an
  exception occurs. That is an error.

With the process completed for scraping a website, we now have the scraped data JSON format.

![Scraped data from Sky news](https://user-images.githubusercontent.com/25850598/141214220-4911cca7-c61c-4472-a296-7def527e4ab7.png)

## Summary

Now that you've seen how to create a web scraper with Node.js using the Express.js framework, there is no excuse not to
try this with any website of your choice while saving time to get accurate data.

This post explored scraping a website and how productive you can be with a method you can replicate with as many website
URLs.

Clone and fork the completed source code [here](https://github.com/Terieyenike/node-express-web-scraper).

### Further Reading

- [Basic routing with the Express framework](https://expressjs.com/en/starter/basic-routing.html)

### What Can You Do Next?

To experiment with what we built, you can fetch the data from the server and call it in your frontend application.

Feel free to share what you build with me on [Twitter](https://twitter.com/terieyenike) and leave a comment if you found
this helpful.
