<template>
  <div id="accueil">
    <b-carousel id="carousel-1" fade v-model="slide" :interval="4000" controls indicators background="#FFF">
      <b-carousel-slide v-for="slide in slides" :key="slide.id" :caption="slide.client" :text="slide.titre"
        :img-src="slide.banniere" alt="agence de marketing web à Abidjan">
        <NuxtLink :to="`/clients/${slide.lien}`">Voir le projet</NuxtLink>
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
<!-- intro -->
    <div id="contentwrapper2" class="container">
      <h3 class="titre">{{ homepage.clientTitre }}</h3>
      <div class="row">
        <div class="col col-md-6 col-sm-12" v-for="client in  caseStudies" :key="client.id">
          <div class="innerbox">
            <NuxtLink :to="`/clients/${client.lien}`">
              <img :src="client.image" class="img-fluid wabehi" alt="Agence social media à Abidjan">
              <h4>{{ client.client }}</h4>
              <p>{{ client.pays }}</p>
            </NuxtLink>
          </div>
        </div>
        <NuxtLink id="aragon" class="lelink" to="projets">{{ homepage.useCaseBtn }}</NuxtLink>
      </div>
    </div>
    <!-- projets à la une -->
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
      });
    const projets = await $content(app.i18n.locale, "projets", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      });
    //n'afficher que les items où à la une est égale à "oui"
    const caseStudies = projets.caseStudies.filter(study => study.alaune === "oui");
    //recupérer les elements du slider

    const slides = projets.caseStudies.filter(study => study.dansleslider === "oui");
    return { homepage, caseStudies , slides};

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
