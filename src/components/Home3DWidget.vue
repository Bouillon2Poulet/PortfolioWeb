<template>
  <div ref="rendererContainer" class="canvas-container"></div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'

export default {
  name: 'Home3DWidget',
  mounted() {
    this.initThree()
  },
  beforeUnmount() {
    // Nettoyer la scène et arrêter l'animation
    cancelAnimationFrame(this.animationFrame)
    this.renderer.dispose()
    this.scene = null
  },
  methods: {
    initThree() {
      // Créez une scène
      this.scene = new THREE.Scene()

      // Ajoutez une caméra
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.$refs.rendererContainer.offsetWidth / this.$refs.rendererContainer.offsetHeight,
        0.1,
        1000,
      )
      this.camera.position.z = 0.9

      // Ajoutez un renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setSize(
        this.$refs.rendererContainer.offsetWidth,
        this.$refs.rendererContainer.offsetHeight,
      )
      this.$refs.rendererContainer.appendChild(this.renderer.domElement)

      this.scene.background = new THREE.Color(0x000000) // Remplacez 0x123456 par la couleur hexadécimale souhaitée

      // Ajoutez de la lumière
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) // Lumière ambiante douce
      this.scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 10)
      directionalLight.position.set(5, 10, 7.5) // Positionne la lumière
      this.scene.add(directionalLight)

      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 10)
      directionalLight2.position.set(-5, -10, -7.5) // Positionne la lumière
      this.scene.add(directionalLight2)

      const directionalLight3 = new THREE.DirectionalLight(0xffffff, 10)
      directionalLight3.position.set(0, 0, -5) // Positionne la lumière
      this.scene.add(directionalLight3)

      // Charger le modèle GLTF
      const loader = new GLTFLoader()
      loader.load(
        '/src/assets/rock.gltf',
        (gltf) => {
          this.model = gltf.scene
          this.scene.add(this.model)
        },
        undefined,
        (error) => {
          console.error("Une erreur s'est produite lors du chargement du modèle :", error)
        },
      )
      // const boxHelper = new THREE.BoxHelper(this.model, 0xff0000)
      // this.scene.add(boxHelper)
      // const gridHelper = new THREE.GridHelper(10, 10)
      // this.scene.add(gridHelper)

      // const axesHelper = new THREE.AxesHelper(5)
      // this.scene.add(axesHelper)
      // Shaders personnalisés
      const MosaicShader = {
        uniforms: {
          resolution: {
            value: new THREE.Vector2(
              this.$refs.rendererContainer.offsetWidth / 4,
              this.$refs.rendererContainer.offsetHeight / 4,
            ),
          },
          tDiffuse: { value: null },
          threshold: { value: 0.8 },
        },
        vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                        vUv = uv;
                    }
                `,
        fragmentShader: `
                    uniform vec2 resolution;
                    uniform sampler2D tDiffuse;
                    varying vec2 vUv;
                    uniform float threshold;

                    void main() {
                        vec2 uv = vUv;
                        vec2 p = floor(uv * resolution);
                        vec2 mosaicUV = p / resolution;

                        vec4 color = texture2D(tDiffuse, mosaicUV);
                        vec3 grayscale = color.rgb * vec3(0.299, 0.587, 0.114);
                        float luminance = dot(grayscale, vec3(1.0));

                        if (color.rgb == vec3(0.0)) {
                            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
                        } else {
                        // Sinon, applique le seuil de luminance
                        gl_FragColor = luminance > threshold ? vec4(1.0, 0.94, 0.7, 1.0) : vec4(0.0, 0.0, 1.0, 1.0);
                        }
                    }
                `,
      }

      // Post-traitement
      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(new RenderPass(this.scene, this.camera))
      const mosaicPass = new ShaderPass(MosaicShader)
      this.composer.addPass(mosaicPass)

      // Démarrez l'animation
      this.animate()
    },
    animate() {
      this.animationFrame = requestAnimationFrame(this.animate)

      if (this.model) {
        // Faire tourner le modèle
        this.model.rotation.y += 0.01
      }

      // this.renderer.render(this.scene, this.camera)
      this.composer.render()
    },
  },
}
</script>

<style scoped>
.canvas-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
</style>
