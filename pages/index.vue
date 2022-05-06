<template>
    <section class="showcase">
      <header>
        <h2 class="logo">
          <nuxt-link to="/">ecosurf</nuxt-link>
        </h2>
        <nav class="nav desktop">
          <ul>
            <li class="nav__list">
              <nuxt-link to="/blogs">Stories</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>

      <video
        autoplay
        loop muted
        src="https://res.cloudinary.com/terieyenike/video/upload/v1651393236/mixkit-tropical-island-landscape-view-4692-large_yanvml.mp4"></video>

      <div class="overlay"></div>
      <div class="text">
        <h2 data-type="uppercase" class="stroke">Never Stop</h2>
        <h3 data-type="uppercase">Exploring The World</h3>
        <p>
          View of the tropical island landscape, from a hill with houses, palm
          trees and many trees, and in the distance the hills that surround the
          sea, on a sunny day.
        </p>
      </div>


      <ul class="social">
        <li>
          <a href="https://twitter.com/terieyenike" rel="noopener noreferrer" target="_blank"><img
            alt="twitter profile" src="https://i.ibb.co/Wnxq2Nq/twitter.png"/></a>
        </li>
        <li>
          <a href="https://instagram.com/terieyenike" rel="noopener noreferrer" target="_blank"><img
            alt="instagram profile" src="https://i.ibb.co/ySwtH4B/instagram.png"/></a>
        </li>
      </ul>
    </section>
</template>
