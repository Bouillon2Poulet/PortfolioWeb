<template>
  <div class="footerWrapper">
    <router-link to="/"><h>accueil</h></router-link>
    <h> • </h>
    <href><h>contacts</h></href>
    <h> • </h>
    <href><h>mentions légales</h></href>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent.vue',
}
</script>

<style>
.footerWrapper {
  font-family: 'Sometype Mono', monospace;
  font-size: 20px;
  line-height: 0.95;
  margin-top: auto;
  font-weight: 600;
  color: red;
}
</style>
