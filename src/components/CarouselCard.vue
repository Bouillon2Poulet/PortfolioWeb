<template>
  <div class="carousel-card" :style="style">
    <!-- Utilisation de <router-link> pour la redirection -->
    <router-link :to="`/Project/${project.ProjectName}`" class="image-link">
      <img :src="project.ProjectImgSrc" alt="Project image" class="carousel-card-image" />
    </router-link>
    <!-- <p class="carousel-card-description">{{ project.ProjectTools }}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    style: {
      type: Object,
      required: true,
    },
    project: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style>
.carousel-card {
  /* Assurez-vous que la div occupe tout l'espace disponible */
  position: relative;
  width: 100%; /* Assurez-vous que la carte occupe toute la largeur de son conteneur */
  height: 100%; /* Assurez-vous que la carte occupe toute la hauteur de son conteneur */
}

.image-link {
  display: block; /* Fait en sorte que le <router-link> se comporte comme un bloc */
  width: 100%; /* Assure que le lien prend toute la largeur de la div */
  height: 100%; /* Assure que le lien prend toute la hauteur de la div */
}

.carousel-card-image {
  width: 100%; /* Ajuste l'image à la largeur de la div */
  height: 100%; /* Ajuste l'image à la hauteur de la div */
  object-fit: cover; /* Remplir toute la div tout en conservant le ratio */
  border-radius: 10px;
}

.carousel-card-title {
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Sometype Mono', monospace;
  color: blue;
  font-weight: 600;
}

.carousel-card-description {
  font-size: 18px;
  color: blue;
}
</style>
