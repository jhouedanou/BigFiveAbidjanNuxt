<template>
  <div id="clients">
    <div id="clientswrapper1">
      <div class="container">
        <h2 class="titre">{{ projets.titre }}</h2>
        <h3 class="soustitre">{{ projets.soustitre }}</h3>
        <div id="projectlist" class="row">
          <div class="col-md-6 col-sm-12" v-for="projet in projets.caseStudies" :key="projet.id">
            <div class="innerbox">
              <NuxtLink :to="`/clients/${projet.lien}`">
                <img :src="projet.image" class="img-fluid wabehi" alt="Agence social media à Abidjan">
                <h4>{{ projet.client }}</h4>
                <p>{{ projet.pays }}</p>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'content',
  async asyncData({ $content, params, app, error }) {
    const projets = await $content(app.i18n.locale, "projets", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { projets };
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {

  }
};
</script>
