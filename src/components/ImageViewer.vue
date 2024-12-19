<script setup lang="ts">
import { ref, defineExpose } from 'vue';
import VueMagnifier from '@websitebeaver/vue-magnifier';
import '@websitebeaver/vue-magnifier/styles.css';

// Définir une donnée réactive pour gérer l'état du magnifier
const mgShow = ref(false);

// Fonction pour inverser l'état de mgShow
const toggleMagnifier = () => {
  mgShow.value = !mgShow.value;
  console.log('Toggle magnifier, current state:', mgShow.value);
};

// Exposer la fonction toggleMagnifier pour qu'elle soit accessible depuis le parent
defineExpose({
  toggleMagnifier
});
</script>

<script lang="ts">
export default {
  name: "ImageViewer",
  props: {
    path: {
      type: String,
      required: true,
      default: "" // Chemin par défaut
    }
  }
};
</script>

<template>
  <div class="image-wrapper">
    <!-- L'image avec la propriété mgShow qui change -->
    <VueMagnifier class="img-magnifier" :src="path" height="70%" width="auto" mgWidth="250" mgHeight="250"
      :mgShow="mgShow" />
  </div>
</template>

<style scoped>
.image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  height: 100vh;
  background-color: white;
  overflow: hidden;
}

.img-magnifier {
  max-width: 100%;
  max-height: 100%;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn-red {
  background-color: red;
  color: white;
}

.btn-blue {
  background-color: blue;
  color: white;
}
</style>
