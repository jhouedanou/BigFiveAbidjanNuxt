<template>
  <div id="accueil">
    <b-carousel id="carousel-1" fade v-model="slide" :interval="4000" controls indicators background="#FFF">
      <b-carousel-slide v-for="slide in homepage.slider" :key="slide.id" :caption="slide.client" :text="slide.titre"
        :img-src="slide.image" alt="agence de marketing web à Abidjan">
        <NuxtLink to="agence">Voir le projet</NuxtLink>
      </b-carousel-slide>
    </b-carousel>
    <div id="contenwrapper1" class="container">
      <h2>{{ homepage.slogan }}</h2>
      <h4 class="soustitre">{{ homepage.soustitre }}</h4>
      <p>{{ homepage.quisommesnous }}</p>
      <NuxtLink class="lelink" to="/agence">{{ homepage.qsnBtn }}</NuxtLink>
      <ul>
        <li v-for="menu in homepage.CommunicationMenu" v-bind:key="menu.id">
          {{ menu }}
        </li>
      </ul>
    </div>
    <div id="contentwrapper2" class="container">
      <h3 class="titre">{{ homepage.clientTitre }}</h3>
      <div class="row">
        <div class="col col-md-6 col-sm-12" v-for="client in homepage.caseStudies" :key="client.id">
          <div class="innerbox">
            <NuxtLink :to="client.lien">
              <img :src="client.image" class="img-fluid wabehi" alt="Agence social media à Abidjan">
              <h4>{{ client.client }}</h4>
              <p>{{ client.pays }}</p>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink id="aragon" class="lelink" to="">{{ homepage.useCaseBtn }}</NuxtLink>
      </div>
    </div>
    <div id="contentwrapper3">
      <div class="container">
        <h3 class="titre">{{ homepage.loffretitre }}</h3>
        <div class="row">
          <div class="dev col-md-4 col-sm-12" v-for="offreDetails in homepage.offreBigFive" :key="offreDetails.id">

            <div class="imgewrapper">
              <img class="img-fluid" :src="offreDetails.Icone" alt="Agence web à Abidjan"/>
            </div>
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
      <div id="capelo">
        <div id="innard">
          <div class="logoclen" v-for="logo in homepage.logosClients" :key="logo.id">
            <img class="img-fluid" :src="logo" alt="">
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
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
