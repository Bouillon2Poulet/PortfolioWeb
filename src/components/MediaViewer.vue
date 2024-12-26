<template>
  <div :class="styleClass" @click="openMedia">
    <!-- Afficher une image ou une vidéo selon le type -->
    <img v-if="isImage" :src="mediaSource" alt="media" class="media-thumbnail" />
    <video v-else :src="mediaSource" class="media-thumbnail" controls />
  </div>

  <!-- Overlay pour afficher en grand -->
  <div v-if="isOpen" class="overlay" @click="closeMedia">
    <div class="media-container">
      <img v-if="isImage" :src="mediaSource" alt="media" class="media-full" />
      <video v-else :src="mediaSource" class="media-full" controls />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaSource: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      required: true,
    },
    styleClass: {
      type: String,
      required: false,
      default: 'default-class', // Classe de style par défaut si aucune classe n'est passée
    },
  },
  data() {
    return {
      isOpen: false, // État pour l'overlay
    }
  },
  computed: {
    isImage() {
      return this.mediaType === 'image' // Vérifier si c'est une image
    },
  },
  methods: {
    openMedia() {
      this.isOpen = true
    },
    closeMedia() {
      this.isOpen = false
    },
  },
}
</script>

<style scoped>
.media-thumbnail {
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 252, 201, 0.913);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.media-container {
  position: relative;
}

.media-full {
  height: 80vh;
  display: block;
}

/* Class de base pour les éléments vidéo/immagine */
.default-class {
  background-color: lightgray;
}
</style>
