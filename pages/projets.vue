<template>
  <div id="clients">
    <div id="clientswrapper1">
      <div class="container">
        <h2 class="titre">{{ jobs.titrepage }}</h2>
        <h3 class="soustitre">{{ jobs.soustitre }}</h3>
        <p class="texte">{{ jobs.presentation }}</p>
        <NuxtLink to="contacts" class="lelink">{{ jobs.postuler }}</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'content',
  async asyncData({ $content, params, app, error }) {
    const jobs = await $content(app.i18n.locale, "jobs", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { jobs };
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
    nomdelaclasse(index) {
      if ((index) % 2 === 0) {
        return 'normal';
      } else {
        return 'normalalt';
      }
    }
  }
};
</script>
