<template>
  <div id="clients">
    <div id="clientswrapper1">
      <div class="container">
        Page individuelle des projets
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'content',
  async asyncData({ $content, params, app, error }) {
    //const url = this.$route.path;
    const projets = await $content(app.i18n.locale, "projets", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      });
    return { projets };
  },

  data() {
    return {
    }
  },
  computed: {

  },
  methods: {
  },
  created(){

  }
};
</script>
