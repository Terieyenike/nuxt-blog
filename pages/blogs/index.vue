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

    <div class="container section">
      <div class="container__grid">
        <div v-for="blog in blogs" :key="blog.slug + blog.createdAt" class="card">
          <img :src="blog.cover_image"
               alt="blog photographs"/>
          <div class="pad__card">
            <div class="author">
              <p class="author__name">{{ blog.author }}</p> <span>|</span>
              <p>{{ blog.date }}</p>
            </div>
            <h2 class="title">{{ blog.title }}</h2>

            <p>{{
                blog.description.substring(0, 150)
              }}...</p>


            <button>
              <nuxt-link :to="`/blogs/${blog.slug}`">Read More</nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  async asyncData({$content}) {
    const blogs = await $content("blogs").sortBy("publishOn", "desc").fetch()
    return {
      blogs
    }

  },
  head() {
    return {
      title: "Read interesting stories as a nomad",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Daily and juicy content as you learn, work, and relax. WFH'
        }
      ]
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

.section {
  padding: 3em 0;
}

.container__grid {
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
}

.card {
  background: #f0f7f4;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

.card img {
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%
}

.pad__card {
  padding: 2em;
}

.author {
  display: flex;
  align-items: center;
}

.author, .title {
  margin-bottom: 1em;
}

.author span {
  margin: 0 0.3em;
}

.author__name {
  text-transform: capitalize;

}

button {
  border: unset;
  padding: 1em 2em;
  margin-top: 2em;
  background: #0D5159;
  font-weight: 700;
  cursor: pointer;
}

button a {
  color: #fff;
}
</style>
