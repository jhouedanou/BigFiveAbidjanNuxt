<template>
  <div id="header" :class="{ 'bgchange': scrolled }" class="d-flex justify-content-around">
    <div id="menu">
      <span><img src="images/btnmenu.svg" alt=""></span>
    </div>
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
            <!-- <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
                      EN
                    </nuxt-link>
                    <nuxt-link v-if="$i18n.locale !== 'fr'" :to="switchLocalePath('fr')">
                      FR
                    </nuxt-link> -->
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

</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeLang: this.$i18n.locale,
      scrolled: false
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
  },
  methods: {
    handleSCroll() {
      if (window.scrollY > 600) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    }
  }
};
</script>
