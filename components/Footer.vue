<template>
  <div id="footer">
    <div class="container d-flex flex-row justify-space-between align-items-center">
      <div class="col">
        <div class="wrapperf d-flex flex-row align-items-center justify-content-start">
          <h6>{{ $t('footercontacts') }}</h6>
        </div>
        <div class="bloc">
          <strong>{{ $t('villegeolocalisation') }}</strong>
          <p class="white-space">{{ $t('geolocalisation') }}</p>
        </div>
      </div>
      <div class="col">
        <div class="wrapperf d-flex flex-row align-items-center justify-content-start">
          <img width="15" height="10" src="~/assets/img/enveloppeblc.png" alt="">
          <h6><a :href="$t('contactsblocs1mail')">{{ $t('contactsblocs1name') }}</a></h6>
        </div>
        <div class="bloc">
          <strong>{{ $t('contactsblocs1adressestrong') }}</strong>
          <p class="white-space">{{ $t('contactsblocs1adresse') }}</p>
        </div>
      </div>
      <div class="col">
        <div class="wrapperf d-flex flex-row align-items-center justify-content-start">
          <img width="15" height="10" src="~/assets/img/enveloppeblc.png" alt="">
          <h6><a :href="$t('contactsblocs2mail')">{{ $t('contactsblocs2name') }}</a></h6>
        </div>
        <div class="bloc">
          <strong>{{ $t('contactsblocs2adressestrong') }}</strong>
          <p class="white-space">{{ $t('contactsblocs2adresse') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer"
}
</script>
