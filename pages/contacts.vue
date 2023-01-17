<template>
  <div id="contact">
    <div id="contactwrapper1">
      <div class="container">
        <h2 class="titre">{{ contacts.titrepage }}</h2>
        <h3 class="soustitre">{{ contacts.soustitre }}</h3>
        <form action="https://public.herotofu.com/v1/ab38d3e0-967d-11ed-a003-6f0b76086b1c" method="post">
          <div class="row">
            <div class="input-control col-md-4 col-sm-12">
              <input name="Name" id="name" type="text" :placeholder="contacts.champNom" required />
            </div>
            <div class="input-control col-md-4 col-sm-12">
              <input name="societe" id="societe" type="text" :placeholder="contacts.champSociete" required />
            </div>
            <div class="input-control col-md-4 col-sm-12">
              <input name="email" id="email" type="email" :placeholder="contacts.champEmail" required />
            </div>
          </div>
          <div class="row">
            <div class="input-control col-md-12 col-sm-12">
              <textarea name="message" id="message" :placeholder="contacts.champMessage"></textarea>
            </div>
          </div>
          <div id="marathon">
            <input class="lelink" type="submit" :value="contacts.btnEnvoyer" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'contact',
  async asyncData({ $content, params, app, error }) {
    const contacts = await $content(app.i18n.locale, "contacts", params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { contacts };
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
