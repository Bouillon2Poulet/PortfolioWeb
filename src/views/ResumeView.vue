<template>
  <div>
    <SubPageTitle title="CV" />
    <div class="wrapper">
      <!-- Ajouter un ref pour accéder à la méthode toggleMagnifier dans ImageViewer -->
      <ImageViewer ref="imageViewer" path="/resume.png" />
      <!-- Ajouter un bouton CustomButton pour tester -->
      <div class="buttons">
        <CustomButton
          @click="toggleMagnifierFromParent"
          imageUrl="/magnifier.png"
          hoverText="Cliquez pour activer"
          canActivate="true"
        />
        <CustomButton
          @click="downloadResume"
          imageUrl="/magnifier.png"
          hoverText="Cliquez pour télécharger"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SubPageTitle from '@/components/SubPageTitle.vue'
import ImageViewer from '@/components/ImageViewer.vue'
import CustomButton from '@/components/CustomButton.vue'

// Créer une référence au composant enfant ImageViewer
const imageViewer = ref(null)

// Fonction pour appeler toggleMagnifier depuis la vue parente
const toggleMagnifierFromParent = () => {
  if (imageViewer.value && typeof imageViewer.value.toggleMagnifier === 'function') {
    imageViewer.value.toggleMagnifier()
  } else {
    console.error('toggleMagnifier method is not available')
  }
}

// Fonction pour télécharger le CV en PDF
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = import('/resume.pdf') // Chemin vers le PDF dans assets
  link.download = 'CV_Romain_Serres.pdf' // Nom du fichier téléchargé
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link) // Nettoyage du DOM après le clic
}
</script>

<style scoped>
/* Le wrapper est un flex container */
.wrapper {
  display: flex;
  justify-content: center; /* Centre les éléments horizontalement */
  align-items: flex-end; /* Aligne les éléments en bas de la page */
  height: 80vh; /* Fait en sorte que la wrapper occupe toute la hauteur de la page */
  flex-direction: row;
  margin-top: 2rem; /* Met les éléments en ligne */
}

.buttons {
  display: flex;
  flex-direction: row; /* Empile les boutons verticalement */
  justify-content: flex-end; /* Aligne les boutons en bas de leur conteneur */
  margin-left: 20px; /* Espacement entre l'image et les boutons */
}
</style>
