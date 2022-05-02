---
title: Egghead
cover_image: https://res.cloudinary.com/terieyenike/image/upload/v1651446130/pexels-jeremy-bishop-8241100_oklfpe.jpg
author: Teri Eyenike
description: All we need to do is open up our terminal and run the command npm install @nuxt/content. Once it's installed, you'll see that inside of our package.json, we see our Nuxt Content module. Next, to finalize the setup, let's go ahead and open up our nuxt.config.js, and let's go ahead and scroll down to the section that's labeled Modules.
date: May 2, 2021
publishOn: 2021-05-02T00:00:00
tags: ["learning", "platform"]
---

[Egghead](https://www.egghead.io) is a great platform for developers to enhance their skills!


All we need to do is open up our terminal and run the command npm install @nuxt/content. Once it's installed, you'll see that inside of our package.json, we see our Nuxt Content module. Next, to finalize the setup, let's go ahead and open up our nuxt.config.js, and let's go ahead and scroll down to the section that's labeled Modules.

![aesthetics](https://res.cloudinary.com/terieyenike/image/upload/v1651446130/pexels-jeremy-bishop-8241100_oklfpe.jpg)

Inside of here, let's go ahead and tell Nuxt that we're going to use our Nuxt Content module. Then I'll go ahead and add an additional field here for the content so that, in case you want to configure things regarding Nuxt Content, you can do so inside of this particular block.

I'll leave a comment here for where the Nuxt Content option goes. Then, to keep consistent with the rest of the configuration, I'll go ahead and just add the docs for Nuxt Content in here. With that, let's go and test to make sure that everything works.

Let's go and open up the terminal, and let's run Yarn dev to start up our local dev server. Once that's running, let's go and open up localhost:3000. To make sure everything works, instead of our home page, let's go and open up a mounted lifecycle hook.
