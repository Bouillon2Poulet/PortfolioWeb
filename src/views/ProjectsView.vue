<template>
  <div>
    <h1>Mes Projets</h1>
    <CarouselComponent />
  </div>
</template>

<script>
import projectsData from "@/assets/projects.json";
import CarouselComponent from "@/components/CarouselComponent.vue";

export default {
  name: "ProjectsCarousel",
  components: {
    CarouselComponent
  },
  data() {
    return {
      slides: [], // Tableau des slides à afficher
    };
  },
  created() {
    // Génération des slides à partir des projets
    this.slides = projectsData.map(project => ({
      src: `@/assets/projects/${project.ProjectId}/slide_img.png`, // Chemin de l'image
    }));
  },
};
</script>

<style>
/* Style de la slide */
.slide-content {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease;
}

/* Effet sur la slide courante */
.current-slide {
  transform: scale(1.1);
  /* Zoom sur la slide active */
  border: 2px solid #4caf50;
}
</style>
