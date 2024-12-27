<template>
    <div class="canvas" ref="canvasContainer"></div>
</template>

<script>
import * as THREE from 'three';

export default {
    name: "Home3DWidget",
    mounted() {
        // Crée la scène 3D
        this.createScene();
        // Redimensionner le renderer au changement de taille de la fenêtre
        window.addEventListener('resize', this.onResize);
    },
    beforeUnmount() {
        // Retirer l'écouteur pour éviter les fuites mémoire
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        createScene() {
            // Crée la scène
            const scene = new THREE.Scene();

            // Crée la caméra (champ de vision, aspect, et profondeur de vue)
            const camera = new THREE.PerspectiveCamera(75, this.getAspectRatio(), 0.1, 1000);

            // Crée le rendu WebGL et ajoute-le à l'élément div
            const renderer = new THREE.WebGLRenderer();
            this.renderer = renderer; // Sauvegarder une référence du renderer
            this.updateRendererSize(); // Appliquer la taille initiale

            this.$refs.canvasContainer.appendChild(renderer.domElement); // Ajoute le canvas dans le DOM

            // Crée un cube 3D
            const geometry = new THREE.BoxGeometry();
            const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);

            // Positionne la caméra
            camera.position.z = 5;

            // Fonction d'animation
            const animate = function () {
                requestAnimationFrame(animate);
                cube.rotation.x += 0.01; // Rotation autour de l'axe X
                cube.rotation.y += 0.01; // Rotation autour de l'axe Y
                renderer.render(scene, camera); // Rendu de la scène avec la caméra
            };

            // Lance l'animation
            animate();
        },

        onResize() {
            this.updateRendererSize();
            this.camera.aspect = this.getAspectRatio();
            this.camera.updateProjectionMatrix();
        },

        // Méthode pour récupérer l'aspect ratio basé sur la taille du conteneur
        getAspectRatio() {
            const width = this.$refs.canvasContainer.clientWidth;
            const height = this.$refs.canvasContainer.clientHeight;
            return width / height;
        },

        // Méthode pour mettre à jour la taille du renderer
        updateRendererSize() {
            const width = this.$refs.canvasContainer.clientWidth;
            const height = this.$refs.canvasContainer.clientHeight;
            this.renderer.setSize(width, height);
        }
    }
};
</script>

<style scoped>
.canvas {
    width: 100%;
    height: 80vh;
    background-color: #e0e0e0;
    /* Couleur de fond */
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
