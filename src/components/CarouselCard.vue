<template>
    <div class="carousel-card">
      <h2 class="carousel-card-title">{{ project.title }}</h2>
      <img :src="project.image" alt="Project image" class="carousel-card-image" />
      <p class="carousel-card-description">{{ project.description }}</p>
    </div>
</template>

<script>
export default {
  name: 'CarouselCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
/* .carousel-card {
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  height: 600px;
  width: 430px;
  border: 5px solid blue;
} */

.carousel-card-image {
  width: calc(100% - 60px); /* Respecte le margin total */
  min-height: 65%; /* Respecte le margin total */
  margin: 10px 30px; /* Distance entre l'image et les bords */
  display: block; /* Évite les espaces sous les images */
  border-radius: 10px; /* Bords arrondis de l'image */
}

.carousel-card-title {
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Sometype Mono', monospace;
  color: blue;
  font-weight: 600;
}

.carousel-card-description {
  font-size: 24px;
  color: blue;
}
</style>
