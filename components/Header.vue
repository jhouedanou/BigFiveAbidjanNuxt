<template>
  <div>
    <!-- header -->
    <div id="header" :class="{ 'bgchange': scrolled }" class="d-flex justify-content-around">
      <button id="menuBtn" @click="toggleSidebar"><img src="~/assets/img/btnopen.svg" alt=""></button>
      <!-- logo -->
      <div id="logo">
        <nuxt-link v-if="$i18n.locale == 'en'" to="/en">
          <span href="https://bigfiveabidjan.com" class="d-flex align-items-center">
            <img src="~/assets/img/logobigfive.png" class="img-fluid" />
          </span>
        </nuxt-link>
        <nuxt-link v-if="$i18n.locale == 'fr'" to="/">
          <span href="https://bigfiveabidjan.com" class="d-flex align-items-center">
            <img src="~/assets/img/logobigfive.png" class="img-fluid" />
          </span>
        </nuxt-link>
      </div>
      <!-- contacts et telephone -->
      <div id="phonewrapper">
        <div class="d-flex align-items-center flex-row justify-content-end">
          <div id="slector">
            {{ $t('numerodeTelephone') }}
            <div id="lswitcher">
              <div id="langselector">
                <nuxt-link :to="switchLocalePath('en')">
                  EN
                </nuxt-link>
                /
                <nuxt-link :to="switchLocalePath('fr')">
                  FR
                </nuxt-link>
              </div>
            </div>
          </div>
          <NuxtLink v-if="$i18n.locale == 'en'" to="en/contacts">
            <img src="~/assets/img/enveloppeblc.png" alt="">
          </NuxtLink>
          <NuxtLink v-if="$i18n.locale == 'fr'" to="contacts">
            <img src="~/assets/img/enveloppeblc.png" alt="">
          </NuxtLink>

        </div>
      </div>
    </div>
    <!-- fadetransition -->
    <transition name="fade">
    <!--   overlay -->
    <div id="pageOverlay" v-if="showSidebar">
      <button id="menuBtn" @click="toggleSidebar"><img src="~/assets/img/btnclose.svg" alt=""></button>
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
    </transition>

  </div>

</template>
<script>

export default {
  name: "Header",
  data() {
    return {
      showDiv: false,
      activeLang: this.$i18n.locale,
      scrolled: false,
      showSidebar: false,
      sidebar: {}
    }
  },
  async fetch() {
    this.sidebar = await this.$content('sidebar', this.params).fetch();
    console.log(this.sidebar);
  },
  computed: {
    filteredSidebar() {
      return this.sidebar.filter(sidebar => sidebar.lang === this.$i18n.locale)
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    handleSCroll() {
      if (window.scrollY > 600) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleSCroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleSCroll);
    }
  }
};
</script>
