<template>
  <div id="accueil">
    <b-carousel id="carousel-1" fade v-model="slide" :interval="4000" controls indicators background="#FFF">
      <b-carousel-slide v-for="slide in homepage.slider" :key="slide.id" :caption="slide.client" :text="slide.titre"
        :img-src="slide.image">
        <NuxtLink to="agence">Voir le projet</NuxtLink>
      </b-carousel-slide>
    </b-carousel>
    <h2>{{ homepage.slogan }}</h2>
    <h4>{{ homepage.soustitre }}</h4>
    <p>{{ homepage.quisommesnous }}</p>
    <ul>
      <li v-for="menu in homepage.CommunicationMenu" v-bind:key="menu.id">
        {{ menu }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  //get the json values
  async asyncData({ $content, params, app, error }) {
    // fetch our article here
    const homepage = await $content(app.i18n.locale, "homepage", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { homepage };
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }

};
</script>
