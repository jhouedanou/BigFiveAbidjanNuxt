<template>
  <div id="lagence">
    <div id="agencewrapper2">
      <div id="ghislaine" class="container">
        <div class="infoOffre" v-for="(offre, index) in agence.offreContenu" :key="offre.id">
          <div v-bind:class="nomdelaclasse(index)">
            <div class="nicole">
              <h4>{{ offre.titre }}</h4>
              <p>{{ offre.contenu }}</p>
              <span>{{ offre.souscontenu }}</span>
            </div>
            <div class="privat">
              <img :src="offre.illustration" alt="agence de développement abidjan">
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
    const agence = await $content(app.i18n.locale, "agence", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { agence };
  },
  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
     nomdelaclasse(index) {
      if ((index + this.counter) % 2 === 0) {
        return 'normal';
      } else {
        return 'normalalt';
      }
    }
  }
};
</script>
