<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'

// Définir les props pour l'image et le texte au survol
const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  hoverText: {
    type: String,
    required: true,
  },
  canActivate: {
    type: Boolean,
    required: false,
    default: false,
  },
})

// Définir un événement personnalisé pour notifier le clic
const emit = defineEmits<{
  (e: 'click', state: boolean): void
}>()

// Donnée réactive pour suivre l'état du bouton (activé/désactivé)
const isActive = ref(false)

// Fonction qui inverse l'état du bouton et émet l'événement
const toggleButton = () => {
  if (props.canActivate) { // Remplacer 'this.canActivate' par 'props.canActivate'
    isActive.value = !isActive.value
    emit('click', isActive.value) // Émettre l'état lorsque le bouton est cliqué
  } else {
    emit('click', true) // Émettre l'état lorsque le bouton est cliqué
  }
}
</script>

<template>
  <button
    class="square-button"
    :class="{ active: isActive }"
    @click="toggleButton"
    :title="props.hoverText"
  >
    <img :src="props.imageUrl" alt="Button Image" />
    <!-- Utiliser l'URL passée en prop -->
  </button>
</template>

<style scoped>
.square-button {
  width: 100px;
  height: 100px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.square-button.active {
  background-color: lightblue;
  /* Ou toute autre couleur pour l'état activé */
}

.square-button img {
  width: 60%;
  height: 60%;
  object-fit: contain;
}
</style>
