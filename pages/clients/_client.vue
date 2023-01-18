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
        <!-- <h1>{{ caseStudies}}</h1> -->
        <img :src="`/${caseStudies[0].image}`" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.clientbanniere {
}
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
    //constante
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

  }
};
</script>
