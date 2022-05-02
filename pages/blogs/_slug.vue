<template>
  <main>
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
    <div class="container">
      <div class="return">
        <nuxt-link to="/">
          <img alt="back to home" src="/home.png"/>
        </nuxt-link>
        <span>/</span>
        <nuxt-link to="/blogs">Blog</nuxt-link>
        <span>/</span>
        <p>{{ note.title.substring(0, 15) }}...</p>
      </div>
      <section>
        <h1>{{ note.title }}</h1>

        <nuxt-content :document="note" cla />


      </section>

    </div>

  </main>
</template>

<script>
export default {
  async asyncData({$content, route}) {
    const note = await $content(`blogs/${route.params.slug}`).fetch()
    console.log(note)
    return {
      note
    }
  }

}
</script>

<style scoped>
header {
  background: #111111;
  position: unset;
}

.container {
  width: 85%;
  max-width: 75rem;
  margin-inline: auto;
}

section {
  padding-bottom: 2em;
}


.return {
  display: flex;
  margin: 1.5em 0;
}


.return img {
  width: 20px;
  height: 20px;
}

.return span {
  margin: 0 1em;
}

h1 {
  margin-bottom: 1em
}



</style>
