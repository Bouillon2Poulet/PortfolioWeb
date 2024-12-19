<template>
  <div>
    <div class="container">
      <div class="left">
        <HomeLeftSide />
      </div>
      <div class="right">
        <Home3DWidget />
      </div>
    </div>
    <FooterComponent id="footer" />
  </div>
</template>

<script>
import Home3DWidget from '@/components/Home3DWidget.vue';
import FooterComponent from '../components/FooterComponent.vue';
import HomeLeftSide from '@/components/HomeLeftSide.vue';

export default {
  components: {
    FooterComponent,
    Home3DWidget,
    HomeLeftSide
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 66% 33%;
  grid-gap: 2rem;
  /* Deux colonnes de largeur égale */
  height: 100vh;
  /* Hauteur de l'écran */
}
</style>
