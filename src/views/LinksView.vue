<template>
  <div class="links-vue">
    <Home3DWidget />
  </div>
</template>

<script>
import Home3DWidget from '@/components/Home3DWidget.vue' // Assurez-vous que le chemin est correct

export default {
  name: 'LinksVue',
  components: {
    Home3DWidget,
  },
}
</script>

<style scoped>
.links-vue {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000; /* Pour un fond noir */
  overflow: hidden; /* Évite les débordements */
}
</style>
