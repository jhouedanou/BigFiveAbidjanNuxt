<template>
  <div id="lagence">
<h1>L'agence</h1>
    <div id="contenwrapper1" class="container">
      <h2>{{ homepage.slogan }}</h2>
      <h4>{{ homepage.soustitre }}</h4>
      <p>{{ homepage.quisommesnous }}</p>
      <NuxtLink class="lelink" to="/agence">{{ homepage.qsnBtn }}</NuxtLink>
      <ul>
        <li v-for="menu in homepage.CommunicationMenu" v-bind:key="menu.id">
          {{ menu }}
        </li>
      </ul>
    </div>
    <div id="contentwrapper2" class="container">
      <div class="row">
        <div class="col col-md-6 col-sm-12" v-for="client in homepage.caseStudies" :key="client.id">
          <div class="innerbox">
            <NuxtLink :to="client.lien">
              <img :src="client.image" alt="Agence de développement web à Abidjan">
              <h3>{{ client.client }}</h3>
              <p>{{ client.pays }}</p>
            </NuxtLink>
          </div>

        </div>
        <NuxtLink class="lelink" to="">{{ homepage.useCaseBtn }}</NuxtLink>
      </div>
    </div>
    <div id="contentwrapper3">
      <div class="container">
        <h3>{{ homepage.loffretitre }}</h3>
        <div class="row">
          <div class="col-md-3 col-sm-12" v-for="offreDetails in homepage.offreBigFive" :key="offreDetails.id">
            <img class="img-fluid" :src="offreDetails.Icone" alt="Agence web à Abidjan">
            <h4>{{ offreDetails.Titre }}</h4>
            <ul>
              <li v-for="details in offreDetails.Menu" :key="details">
                {{ details }}</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <div id="contentwrapper4">
      <h3>{{ homepage.ilsnousConfiance }}</h3>
      <li class="logoclen" v-for="logo in homepage.logosClients" :key="logo.id">
        <img class="img-fluid" :src="logo" alt="">
      </li>
    </div>
  </div>
</template>
<script>
export default {
  layout:'content',
  async asyncData({ $content, params, app, error }) {
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
