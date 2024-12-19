<template>
  <div>
    <div class="wrapper">
      <!-- Titre positionné en haut -->
      <SubPageTitle title="CV" />
      <!-- Ajouter un ref pour accéder à la méthode toggleMagnifier dans ImageViewer -->
      <ImageViewer ref="imageViewer" path="/resume.png" />
      <!-- Ajouter un bouton CustomButton pour tester -->
      <CustomButton
        @click="toggleMagnifierFromParent"
        imageUrl="/magnifier.png"
        hoverText="Cliquez pour activer"
      />
    </div>
    <div>
      <FooterComponent id="footer" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SubPageTitle from '@/components/SubPageTitle.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import ImageViewer from "@/components/ImageViewer.vue";
import CustomButton from '@/components/CustomButton.vue';

// Créer une référence au composant enfant ImageViewer
const imageViewer = ref(null);

// Fonction pour appeler toggleMagnifier depuis la vue parente
const toggleMagnifierFromParent = () => {
  // Vérifier si la méthode toggleMagnifier est disponible sur l'instance du composant ImageViewer
  if (imageViewer.value && typeof imageViewer.value.toggleMagnifier === 'function') {
    imageViewer.value.toggleMagnifier(); // Appeler la méthode toggleMagnifier
  } else {
    console.error('toggleMagnifier method is not available');
  }
};
</script>

<style scoped>
/* Le wrapper occupe toute la hauteur et s'organise en colonne */
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* height: 100vh; */
  margin: 0;
  padding: 0;
}
</style>
