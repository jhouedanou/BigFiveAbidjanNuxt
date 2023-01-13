
<template>
  <div id="pageOverlay" v-if="overlay">
    <div id="innerOverly">
      <!--  <div v-for="(bar, index) in filteredSidebar" :key="index">
      {{ bar.test }}
    </div> -->
      <ul id="menu">
        <li v-for="(item, index) in filteredSidebar[0].menuOverlay" :key="index">
          <NuxtLink :to="item.lien">
            {{ item.name }}<br>
            <span>{{ item.soustitre }}</span>
          </NuxtLink>
        </li>
      </ul>
      <ul id="socialnetwork">
        <li><a :href="$t('facebook')"><img src="~/assets/img/facebook.png" alt=""></a></li>
        <li><a :href="$t('instagram')"><img src="~/assets/img/instagram.png" alt=""></a></li>
        <li><a :href="$t('linkedin')"><img src="~/assets/img/linkedin.png" alt=""></a></li>
      </ul>
      <div id="credits">
        {{ $t('credits') }}
      </div>
      <div id="villes">
        {{ $t('villes') }}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'SideBar',
  data() {
    return { sidebar: {} ,overlay:false}
  },
  async fetch() {
    this.sidebar = await this.$content('sidebar', this.params).fetch()
  },
  computed: {
    filteredSidebar() {
      return this.sidebar.filter(sidebar => sidebar.lang === this.$i18n.locale)
    }
  }

}
</script>
<style scoped>

</style>
