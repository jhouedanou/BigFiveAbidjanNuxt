<template>
  <div id="client">
    <div id="clientsrapper1">
      <div class="clientbanniere" :style="`background-image:url(/${caseStudies[0].banniere})`">
        <div class="cartouche">
          <div class="container">
            <h1>{{ caseStudies[0].client }}</h1>
            <h2>{{ caseStudies[0].titre }}</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="textedescriptif" v-html="caseStudies[0].contenu"></div>
        <!-- <img :src="`/${caseStudies[0].image}`" alt=""> -->
      </div>
      <div id="espacevideo" v-if="caseStudies[0].video">
        <div class="container">
          {{ caseStudies[0].video }}
          <iframe :src="caseStudies[0].video" width="100%" height="360" frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="galerie">
        <div class="container">
          <div class="row">
            <div class="element col-md-6 col-sm-12" v-for="image in caseStudies[0].galerie" :key="image.id">
              <div class="bruh m-4">
                <img :src="`/${image}`" alt="Agence web à Abidjan" class="img-fluid" />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  layout: 'content',

  async asyncData({ $content, params, route, app, error }) {
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
    //constante pour recupérer l'url du projet
    const url = route.params.client;
    //n'afficher que les items où l'url est égale au slug de la page
    const caseStudies = projets.caseStudies.filter(study => study.lien === url);
    return { homepage, caseStudies };
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
  },
  created() {

  },
  /*   head() {
      return {
        title: this.caseStudies[0].client,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    } */
};
</script>
