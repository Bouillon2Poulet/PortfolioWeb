<template>
  <div class="carousel">
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="perspective-container"
      :ref="setCardRef"
      :style="cardStyles[index]"
    >
      <div class="carousel-card">
        <h2 class="carousel-card-title">{{ project.title }}</h2>
        <img :src="project.image" alt="Project image" class="carousel-card-image" />
        <p class="carousel-card-description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Project 1', image: 'src/images/1.jpg', description: 'Description 1' },
        { title: 'Project 2', image: 'src/images/2.png', description: 'Description 2' },
        { title: 'Project 3', image: 'src/images/3.jpg', description: 'Description 3' },
        { title: 'Project 4', image: 'src/images/4.png', description: 'Description 1' },
        { title: 'Project 5', image: 'src/images/5.jpg', description: 'Description 2' },
      ],
      cards: [], // Références aux cartes
      cardStyles: [], // Styles dynamiques pour chaque carte
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateCardStyles)
    window.addEventListener('resize', this.updateCardStyles)
    this.updateCardStyles() // Mise à jour initiale
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateCardStyles)
    window.removeEventListener('resize', this.updateCardStyles)
  },
  methods: {
    setCardRef(el) {
      if (el && !this.cards.includes(el)) {
        this.cards.push(el)
      }
    },
    updateCardStyles() {
      const centerX = window.innerWidth / 2 // Position centrale de la fenêtre
      const cardWidth = 300 // Largeur initiale de la carte
      const maxRotation = 45 // Rotation max ±45°

      this.cardStyles = this.cards.map((card) => {
        const rect = card.getBoundingClientRect()
        const cardCenterX = rect.left + rect.width / 2
        const distanceFromCenter = cardCenterX - centerX

        // Calcul de la rotation, de l'échelle et de la translation
        const rotation = (distanceFromCenter / centerX) * maxRotation // Rotation max ±45°
        const scale = 1 - Math.abs(distanceFromCenter / centerX) * 0.3 // Réduit l'échelle à distance

        // Calculer la translation en X pour compenser la rotation
        const translateX = (distanceFromCenter / centerX) * 150 // Ajuste la distance ici (150px peut être modifié selon le besoin)

        // Déduire la taille de la carte en fonction de sa rotation (lorsque la carte est tournée, elle occupe moins de place)
        const widthAdjustment = 1 - Math.abs(distanceFromCenter / centerX) * 0.4 // Ajuster la largeur de la carte

        return {
          transform: `
          rotateY(${rotation}deg)
          scale(${Math.max(scale, 0.5)})
          translateX(${translateX}px)`, // Applique la translation
          width: `${cardWidth * widthAdjustment}px`, // Ajuste la largeur de la carte
          zIndex: 1000 - Math.abs(distanceFromCenter), // Priorité visuelle
        }
      })
    },
  },
}
</script>

<style>
/* Conteneur global pour le carousel */
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  perspective: 1000px; /* Perspective 3D */
  overflow-x: hidden; /* Empêche le débordement horizontal */
  transition: transform 0.3s ease-in-out; /* Ajout d'une transition fluide */
}

.carousel-card {
  position: relative;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s ease,
    margin 0.3s ease,
    z-index 0.3s ease; /* Transition fluide */
}

/* Conteneur pour la transformation */
.perspective-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  transform-origin: center;
  transition:
    transform 0.3s ease,
    z-index 0.3s ease;
}

/* Style de la carte */
.carousel-card {
  width: 100%; /* S'assure que la carte respecte les dimensions du conteneur */
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}

/* Image dans la carte */
.carousel-card-image {
  width: 90%; /* Adapte la taille de l'image */
  height: auto;
  max-height: 70%; /* Limite la hauteur de l'image */
  object-fit: cover;
  border-radius: 10px;
  margin: 10px auto; /* Centrage */
}

/* Titre de la carte */
.carousel-card-title {
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Sometype Mono', monospace;
  color: blue;
  font-weight: 600;
}

/* Description de la carte */
.carousel-card-description {
  font-size: 14px;
  color: blue;
}
</style>
