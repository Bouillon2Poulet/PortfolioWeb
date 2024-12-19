<template>
  <div class="carousel-card">
    <img :src="project.image" alt="Project image" class="carousel-card-image" />
    <h2 class="carousel-card-title">{{ project.title }}</h2>
    <p class="carousel-card-description">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  name: "CarouselCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.carousel-card {
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.carousel-card-image {
  max-width: 100%;
  border-radius: 10px;
}

.carousel-card-title {
  font-size: 18px;
  margin: 10px 0;
}

.carousel-card-description {
  font-size: 14px;
  color: #555;
}
</style>
