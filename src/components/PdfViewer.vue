<script setup>
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const page = ref(1)
const { pdf, pages } = usePDF('/public/resume.pdf')
</script>

<template>
  <div class="pdf-wrapper">
    <VuePDF class="pdf-canvas" :pdf="pdf" :page="page" :scale="0.8" />
  </div>
</template>

<style scoped>
.pdf-wrapper {
  display: flex;
  justify-content: center;
  /* Centre horizontalement */
  align-items: center;
  /* Centre verticalement */
  height: 100vh;
  /* Prend toute la hauteur de la fenêtre */
  background-color: white;
}

.pdf-canvas {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* Assure que le contenu du PDF s'adapte à l'espace sans déformation */
}
</style>
