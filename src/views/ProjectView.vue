<template>
  <SubPageTitle :title="project.ProjectName" />
  <div class="wrapper">
    <div class="primary-font">
      {{ project.ProjectText }}
    </div>
    <div class="gallery-grid">
      <!-- Utiliser MediaComponent avec les props appropriées -->
      <MediaComponent
        :mediaSource="`/src/projects/${project.ProjectId}/${project.ProjectId}.mp4`"
        mediaType="video"
        styleClass="video"
      />
      <MediaComponent
        :mediaSource="`/src/projects/${project.ProjectId}/img1.png`"
        mediaType="image"
        styleClass="img1"
      />
      <MediaComponent
        :mediaSource="`/src/projects/${project.ProjectId}/img2.png`"
        mediaType="image"
        styleClass="img2"
      />
      <div class="tools-title secondary-font">Outils</div>
      <div class="tools"></div>
    </div>
  </div>
</template>

<script>
import Projects from '@/assets/projects.json'
import SubPageTitle from '@/components/SubPageTitle.vue'
import MediaComponent from '@/components/MediaViewer.vue'

export default {
  components: {
    SubPageTitle,
    MediaComponent, // Déclarer MediaComponent ici
  },
  props: {
    id: {
      type: String,
      required: true, // L'id est requis, il vient de l'URL
    },
  },
  data() {
    return {
      project: {},
    }
  },
  created() {
    // Ici, tu peux récupérer les détails du projet à partir de l'ID
    console.log(`Le projet avec l'ID ${this.id} est chargé !`)
    this.project = Projects.find((project) => project.ProjectId === Number(this.id))
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  margin-top: 2rem;
  overflow: hidden; /* Évite que le contenu dépasse */
}

.gallery-grid {
  display: grid;
  grid-template-columns: 55% 1fr 1fr; /* Colonnes égales */
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
  width: 100%;
  height: 100%; /* Assure que la grille reste à 100% de la largeur */
  max-width: 100vw; /* Ne pas dépasser la largeur de la fenêtre */
  box-sizing: border-box; /* Inclut les bordures et padding dans la largeur totale */
  margin-top: 2rem;
}

/* Exemple de style pour la vidéo */
.video {
  background-color: red;
  grid-column: 1/2;
  grid-row: 1/3;
}

.img1 {
  background-color: rgb(150, 21, 21);
  grid-row: 1/2;
  grid-column: 2/3;
}

.img2 {
  background-color: rgb(150, 21, 21);
  grid-row: 1/2;
  grid-column: 3/4;
}

.tools-title {
  grid-row: 2/3;
  grid-column: 2/4;
  font-size: 32px;
}
</style>
