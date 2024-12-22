<template>
  <div
    class="carousel-container"
    ref="carouselContainer"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @keydown="onKeydown"
    tabindex="0"
  >
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="carousel-card"
      :style="getCardStyle(index)"
    >
      <h2 class="carousel-card-title">{{ project.title }}</h2>
      <img :src="project.image" alt="Project image" class="carousel-card-image" />
      <p class="carousel-card-description">{{ project.description }}</p>
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
        { title: 'Project 4', image: 'src/images/4.png', description: 'Description 4' },
        { title: 'Project 5', image: 'src/images/5.jpg', description: 'Description 5' },
        { title: 'Project 1', image: 'src/images/1.jpg', description: 'Description 1' },
        { title: 'Project 2', image: 'src/images/2.png', description: 'Description 2' },
        { title: 'Project 3', image: 'src/images/3.jpg', description: 'Description 3' },
        { title: 'Project 4', image: 'src/images/4.png', description: 'Description 4' },
        { title: 'Project 5', image: 'src/images/5.jpg', description: 'Description 5' },
        { title: 'Project 3', image: 'src/images/3.jpg', description: 'Description 3' },
        { title: 'Project 3', image: 'src/images/3.jpg', description: 'Description 3' },
      ],
      radius: 400, // Distance de la caméra
      totalCards: 12, // Nombre total de cartes
      cardWidth: 300, // Largeur des cartes
      cardHeight: 400, // Hauteur des cartes
      dragStartX: 0, // Position de départ du drag (horizontal)
      rotationAngle: 0, // Angle actuel de rotation du carousel
    }
  },
  mounted() {
    this.updateCarouselStyles()
  },
  methods: {
    // Méthode pour obtenir la largeur de la div "carousel-container"
    getContainerWidth() {
      const carouselContainer = this.$refs.carouselContainer
      return carouselContainer ? carouselContainer.offsetWidth : 0
    },

    // Calcul du style de chaque carte
    getCardStyle(index) {
      const totalCards = this.totalCards

      // Calcul de l'angle en radians
      const angle =
        ((index * ((2 * Math.PI) / totalCards) + this.rotationAngle) % (2 * Math.PI)) - Math.PI // Centrage autour de la caméra avec l'angle actuel
      console.log(angle)
      console.log(index)

      const distance = this.radius // Distance de la caméra

      // Ajustement de la taille des cartes en fonction de leur profondeur (distance)
      const scale = Math.max(0.5, 1 - Math.abs(distance) / 1000) // Plus éloigné, plus petit
      const display = angle <= -Math.PI / 2 || angle >= Math.PI / 2 ? 'none' : 'block'
      // const display = 'block'
      return {
        transform: `rotateY(${angle}rad) translateZ(${distance}px)`,
        transformOrigin: 'center', // Éviter une déformation incorrecte
        width: `${this.cardWidth * scale}px`,
        height: `${this.cardHeight * scale}px`,
        display: `${display}`,
        border: `${index}px solid black`,
      }
    },

    // Démarre le drag
    startDrag(event) {
      this.dragStartX = event.clientX // Capture la position initiale de la souris
    },

    // Déplace le carousel pendant le drag
    onDrag(event) {
      if (this.dragStartX) {
        const deltaX = event.clientX - this.dragStartX // Calcul du déplacement horizontal
        // this.rotationAngle += deltaX / 10 // Ajuster la vitesse de rotation (modifiez le facteur pour personnaliser la vitesse)
        this.dragStartX = event.clientX // Mise à jour de la position de départ
      }
    },

    // Gestionnaire d'événements pour les touches fléchées
    onKeydown(event) {
      if (event.key === 'ArrowRight') {
        this.rotationAngle += 0.1 // Rotation vers la droite (ajuste la vitesse)
        console.log('+')
      } else if (event.key === 'ArrowLeft') {
        this.rotationAngle -= 0.1 // Rotation vers la gauche (ajuste la vitesse)
        console.log('-')
      }
    },

    // Arrête le drag
    endDrag() {
      this.dragStartX = 0 // Réinitialiser la position de départ
    },

    updateCarouselStyles() {
      // Vous pouvez également ajouter des méthodes pour mettre à jour les styles lors du redimensionnement de la fenêtre
      window.addEventListener('resize', this.updateCarouselStyles)
    },
  },
}
</script>

<style>
.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  perspective: 1000px; /* Perspective 3D */
  overflow-x: hidden; /* Permet de masquer les cartes qui dépassent */
  position: relative;
  cursor: grab; /* Afficher un curseur pour indiquer que le carousel est interactif */
}

.carousel-container:active {
  cursor: grabbing; /* Changer de curseur quand l'utilisateur est en train de glisser */
}

.carousel-card {
  position: absolute;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.carousel-card-title {
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Sometype Mono', monospace;
  color: blue;
  font-weight: 600;
}

.carousel-card img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-card-description {
  font-size: 18px;
  color: blue;
}
</style>
