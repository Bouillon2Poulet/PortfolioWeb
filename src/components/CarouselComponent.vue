<template>
  <div
    v-if="isLoaded"
    class="carousel-container"
    ref="carouselContainer"
    @mousedown="startDrag"
    @mousemove="onDrag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    @keydown="onKeydown"
    tabindex="0"
  >
    <!-- Ajout de refs dynamiques avec `ref` -->
    <CarouselCard
      v-for="(card, index) in cards"
      :key="index"
      :style="getCardStyle(index)"
      :project="getAssociatedProject(index)"
    />
  </div>
  <div class="carousel-controls">
    <button @click="rotate(true)">
      <h><</h>
    </button>
    <CarouselInfos :project="getCurrentProject()" />
    <button @click="rotate(false)">
      <h>></h>
    </button>
  </div>
</template>

<script>
import CarouselCard from '@/components/CarouselCard.vue'
import CarouselInfos from '@/components/CarouselInfos.vue'
import Projects from '@/assets/projects.json'

export default {
  name: 'HomeLeftSide',
  components: {
    CarouselCard,
    CarouselInfos,
  },
  data() {
    return {
      projects: null,
      cards: Array.from({ length: 12 }, () => ({})),
      radius: 450, // Distance de la caméra
      totalCards: 12, // Nombre total de cartes
      cardWidth: 400, // Largeur des cartes
      cardHeight: 400, // Hauteur des cartes
      dragStartX: 0, // Position de départ du drag (horizontal)
      rotationAngle: 0, // Angle actuel de rotation du carousel
      nextProjectIndex: 0,
      visibleCardsIndex: [10, 11, 0, 1, 2],
      visibleProjectsIndex: [],
      isLoaded: false, // Indicateur de chargement
    }
  },
  mounted() {
    this.loadProjects()
    // this.$nextTick(() => {
    //   // Après le montage, stocke les références dans `cardsVue`
    //   for (let i = 0; i < 12; i++) {
    //     this.cards.push(this.$refs['CarouselCard' + i])
    //   }
    // })
  },
  methods: {
    async loadProjects() {
      try {
        const response = await fetch('src/assets/projects.json') // Exemple de fetch
        this.projects = await response.json()
        console.log('LOADED')
        this.isLoaded = true // Marquer comme chargé
        this.visibleProjectsIndex = [Projects.length - 2, Projects.length - 1, 0, 1, 2]
      } catch (error) {
        console.error('Erreur lors du chargement des projets', error)
      }
    },
    // Méthode pour obtenir la largeur de la div "carousel-container"
    getContainerWidth() {
      const carouselContainer = this.$refs.carouselContainer
      return carouselContainer ? carouselContainer.offsetWidth : 0
    },

    getNextProjectIndex() {
      const value = this.nextProjectIndex
      this.nextProjectIndex = (value + 1) % Projects.length
      return value
    },

    getAssociatedProject(index) {
      console.log(index)
      if (this.visibleCardsIndex.includes(index)) {
        console.log(Projects[this.visibleProjectsIndex[this.visibleCardsIndex.indexOf(index)]])
        return Projects[this.visibleProjectsIndex[this.visibleCardsIndex.indexOf(index)]]
      } else {
        console.log('!!')
        return { ProjectId: -1 }
      }
    },

    getCurrentProject() {
      return (
        Projects[this.visibleProjectsIndex[2]] || {
          ProjectName: 'Projet par défaut',
          ProjectTools: [],
        }
      )
    },

    // Calcul du style de chaque carte
    getCardStyle(index) {
      const totalCards = this.totalCards

      // Calcul de l'angle en radians
      const angle = index * ((2 * Math.PI) / totalCards) + this.rotationAngle
      const distance = this.radius

      // Ajustement de la taille des cartes en fonction de leur profondeur (distance)
      const scale = Math.max(0.5, 1 - Math.abs(distance) / 1000)

      const display = this.visibleCardsIndex.includes(index) ? 'block' : 'none'
      const zIndex = this.visibleCardsIndex.includes(index) ? 100 : 0
      const opacity = (() => {
        const cardIndex = this.visibleCardsIndex.indexOf(index) // Trouve l'index de 'index' dans le tableau 'visibleCardsIndex'

        if (cardIndex === 2) return 1 // Opacité de 100% pour l'index [2]
        if (cardIndex === 1 || cardIndex === 3) return 0.6 // Opacité de 90% pour les indices [1] et [3]
        if (cardIndex === 0 || cardIndex === 4) return 0.2 // Opacité de 80% pour les indices [0] et [4]
        return 0 // Opacité de 0% pour index - 1 ou index + 1
      })()

      return {
        transform: `rotateY(${angle}rad) translateZ(${distance}px)`,
        transformOrigin: 'center',
        width: `${this.cardWidth * scale}px`,
        height: `${this.cardHeight * scale}px`,
        opacity: opacity, // Applique l'opacité calculée
        zIndex: zIndex,
      }
    },

    // Démarre le drag
    startDrag(event) {
      this.dragStartX = event.clientX
    },

    // Déplace le carousel pendant le drag
    onDrag(event) {
      if (this.dragStartX) {
        const deltaX = event.clientX - this.dragStartX
        this.dragStartX = event.clientX
      }
    },

    // Gestionnaire d'événements pour les touches fléchées
    onKeydown(event) {
      if (event.key === 'ArrowRight') {
        this.rotate(false)
      } else if (event.key === 'ArrowLeft') {
        this.rotate(true)
      }
    },

    rotate(clockwise = true) {
      if (clockwise) {
        this.rotationAngle += (2 * Math.PI) / this.totalCards
        for (let i = 0; i < 5; i++) {
          const newCardValue = (this.visibleCardsIndex[i] - 1) % this.totalCards
          this.visibleCardsIndex[i] = newCardValue < 0 ? 12 + newCardValue : newCardValue

          const newProjectValue = (this.visibleProjectsIndex[i] - 1) % Projects.length
          this.visibleProjectsIndex[i] =
            newProjectValue < 0 ? Projects.length + newProjectValue : newProjectValue
        }
      } else {
        this.rotationAngle -= (2 * Math.PI) / this.totalCards
        for (let i = 0; i < 5; i++) {
          this.visibleCardsIndex[i] = (this.visibleCardsIndex[i] + 1) % this.totalCards
          this.visibleProjectsIndex[i] = (this.visibleProjectsIndex[i] + 1) % Projects.length
        }
      }
      // console.log(this.visibleCardsIndex)
      console.log(this.visibleProjectsIndex)
    },
    // Arrête le drag
    endDrag() {
      this.dragStartX = 0
    },

    updateCarouselStyles() {
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
  height: 40vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
  perspective: 2000px; /* Perspective 3D */
  overflow-x: hidden; /* Permet de masquer les cartes qui dépassent */
  position: relative;
  cursor: grab; /* Afficher un curseur pour indiquer que le carousel est interactif */
}

.carousel-controls {
  margin: auto;
  display: flex; /* Met tous les enfants sur la même ligne */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.carousel-infos {
  display: block;
}

.carousel-controls button {
  text-align: center;
  font-family: 'Sometype Mono', monospace;
  background: transparent;
  border: 0px;
  color: blue;
  font-size: 35px;
  margin-right: 2rem;
  margin-left: 2rem;
}
.carousel-controls button:hover {
  color: deepskyblue;
}
.carousel-container:active {
  cursor: grabbing; /* Changer de curseur quand l'utilisateur est en train de glisser */
}

.carousel-card {
  position: absolute;
  background-color: blue;
  border-radius: 10px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.carousel-card-title {
  font-size: 24px;
  margin: 10px 0;
  font-family: 'Sometype Mono', monospace;
  color: blue;
  font-weight: 600;
}

.carousel-card-description {
  font-size: 18px;
  color: blue;
}
</style>
