<template>
  <div>
    <div class="wrapper">
      <!-- Titre positionné en haut -->
      <SubPageTitle title="Biographie" />

      <div class="content">
        <div class="topText">
          Texte en haut
        </div>
        <div class="rightText">
          Texte à droite
        </div>
        <div class="leftImg">
          Image à gauche
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubPageTitle from '@/components/SubPageTitle.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  components: {
    SubPageTitle,
    FooterComponent
  },
};
</script>

<style scoped>
/* Le wrapper occupe toute la hauteur et s'organise en colonne */
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  margin: 0;
  padding: 0;
}

/* La grille pour le contenu principal */
.content {
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 20% auto;
  grid-gap: 2rem;
  height: 100vh;
  padding-top: 2rem;
}

.topText {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: pink;
}

.rightText {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: red;
}

.leftImg {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: green;
}
</style>
