<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'

import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div id="app">
    <router-view />
  </div>
  <FooterComponent id="footer" />
</template>

<style scoped>
.app {
  width: 100%;
  /* Prend toute la largeur de la fenêtre */
  height: 100%;
  /* Prend toute la hauteur de la fenêtre */
}
</style>
