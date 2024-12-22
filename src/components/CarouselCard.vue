<template>
  <div class="carousel-card" :style="style">
    <h2 class="carousel-card-title">{{ project.title }}</h2>
    <img :src="project.image" alt="Project image" class="carousel-card-image" />
    <p class="carousel-card-description">{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    style: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
.carousel-card {
  position: absolute;
  width: 300px;
  height: 400px;
  margin: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.carousel-card img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-card-title {
  font-size: 24px;
  text-align: center;
}

.carousel-card-description {
  font-size: 14px;
  text-align: center;
  padding: 10px;
}
</style>
