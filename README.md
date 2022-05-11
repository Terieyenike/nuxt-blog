# Blog for programming nomads

Blog for programming nomads is a blog website created with NuxtJS, Nuxt Content Module, and Cloudinary that helps you
build dynamic blog pages for readers. With Nuxt Content, you can write all your files in markdown, and it renders the
page into a content that people would love to read.

![blog demo](https://user-images.githubusercontent.com/25850598/167312475-c9438ca5-1828-4308-a9ff-91dcd9979fae.png)

## Getting Started

To get the project up and running:

1. clone the repository and navigate to the nuxt-blog folder

```
  $ git clone https://github.com/terieyenike/nuxt-blog
  $ cd nuxt-blog/
```

2. install dependencies

```
  $ yarn install
```

3. serve with hot reload at localhost:3000

```
  $ yarn dev
``` 

4. build for production and launch server

```
  $ yarn build
  $ yarn start
```

5. generate static project

```
  $ yarn generate
```

The blog will be available on the available port on localhost:

`:3000` for the home page for the blog and has the route `:3000/blogs/` for all the articles and `:3000/blogs/slug`
which will dynamically render the individual files and replace the slug to its file name.

## Contributing

We ❤️ pull requests, and we’re continually working hard to make it as easy as possible for developers to contribute.
Before beginning development with the Blog for Programming Nomads, please familiarize yourself with the following developer
resources:

- Contributor Guide (CONTRIBUTING.md) to learn about how to contribute to Kong.
- CODE_OF_CONDUCT

## Author
Teri Eyenike

## Technologies
- NuxtJS
- Cloudinary
