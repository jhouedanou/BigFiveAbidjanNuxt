<template>
  <div id="clients">
    <div id="clientswrapper1">
      <div class="container">
              <h1>{{ caseStudies}}</h1>
              <img v-if="caseStudies[0]" :src="`/${caseStudies[0].image}`" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'content',

  async asyncData({ $content, params, route, app, error}) {
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
