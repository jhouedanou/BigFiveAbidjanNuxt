<template>
  <div id="lagence">
    <div id="agencewrapper1">
      <div class="container">
        <h2 class="titre">{{ agence.titrepage }}</h2>
        <h3 class="soustitre">{{ $t('villes') }}</h3>
        <p class="texte">{{ agence.presentation }}</p>
        <p class="soustexte">{{ agence.payscouverts }}</p>
      </div>
    </div>
    <div id="agencewrapper2">
      <div id="ghislaine" class="container">
        <h3 class="titre">{{ agence.offre }}</h3>
        <div class="container">
          <div class="infoOffre" v-for="(offre, index) in agence.offreContenu" :key="offre.id">
            <div v-bind:class="nomdelaclasse(index)">
              <div class="nicole">
                <h4>{{ offre.titre }}</h4>
                <p>{{ offre.contenu }}</p>
                <span>{{ offre.souscontenu }}</span>
              </div>
              <div class="privat">
                <img :src="offre.illustration" alt="agence de développement web à abidjan">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="agencewrapper3" class="container">
      <h3 class="titre">{{ agence.lequipe }}</h3>
      <h4 class="soustitre">{{ agence.sousequipe}}</h4>
    </div>
    <div id="agencewrapper4" class="container">

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
      if ((index) % 2 === 0) {
        return 'normal';
      } else {
        return 'normalalt';
      }
    }
  }
};
</script>
