<template>
  <div ref="p5canvas" class="p5canvas"></div>
</template>

<script>
import p5 from 'p5'

export default {
  name: 'P5Canvas',
  props: {
    canvasWidth: {
      type: Number,
      default: 800,
    },
    canvasHeight: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      width: this.canvasWidth,
      height: this.canvasHeight,
    }
  },
  mounted() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.width = entry.contentRect.width
        this.height = entry.contentRect.height
        if (this.p5Instance) {
          this.p5Instance.resizeCanvas(this.width, this.height)
        }
      }
    })

    // Observer la taille de l'élément parent
    const parent = this.$refs.p5canvas.parentElement
    if (parent) {
      resizeObserver.observe(parent)
    }

    // Initialisation du sketch P5
    const sketch = (p) => {
      const detail = 0.5
      let orangeGraphics
      let pointsArray = []
      let timer

      p.setup = () => {
        const parentDiv = this.$refs.p5canvas
        p.canvas.willReadFrequently = true

        orangeGraphics = p.createGraphics(this.width, this.height)
        orangeGraphics.noStroke()

        p.createCanvas(this.width, this.height, p.P2D).parent(parentDiv)
        p.noStroke()
        p.background(255, 255, 255, 255)
        drawLightning(0, this.height / 2, this.width, this.height / 2, 200)

        // Exécuter draw toutes les 0.2 secondes
        timer = setInterval(() => {
          draw()
        }, 200)
      }

      p.draw = () => {
        // Inactif, puisque draw() est appelé par setInterval
      }

      const draw = () => {
        orangeGraphics.background(255, 255, 255, 50)
        // Ajouter les éclairs précédents à orangeGraphics avec une couche blanche
        pointsArray.forEach((point) => {
          orangeGraphics.fill(255, 240, 180, point.color.a) // Orange avec alpha
          orangeGraphics.circle(point.x, point.y, point.size)
        })
        pointsArray = []
        p.image(orangeGraphics, 0, 0)
        // Dessiner de nouveaux éclairs sur le canvas par-dessus orangeGraphics
        drawLightning(0, this.height / 2, this.width, this.height / 2, 200)
      }

      const drawLightning = (x1, y1, x2, y2, disp) => {
        if (disp < detail) {
          const newPoint = {
            x: (x2 + x1) / 2,
            y: (y2 + y1) / 2,
            size: p.random() * 4,
            color: { r: 0, g: 0, b: 255, a: p.random(100, 500) },
          }
          p.fill(newPoint.color.r, newPoint.color.g, newPoint.color.b, newPoint.color.a)
          p.circle(newPoint.x, newPoint.y, newPoint.size)
          pointsArray.push(newPoint)
        } else {
          const midX = (x1 + x2) / 2 + (p.random() - 0.5) * disp
          const midY = (y1 + y2) / 2 + (p.random() - 0.5) * disp
          drawLightning(x1, y1, midX, midY, disp / 2.0)
          drawLightning(x2, y2, midX, midY, disp / 2.0)
          if (p.random(1) < 0.4) {
            drawLightning(
              midX,
              midY,
              midX + p.random() * disp,
              midY + (p.random() - 0.5) * disp,
              disp / 2,
            )
          }
        }
      }

      p.cleanup = () => {
        clearInterval(timer)
      }
    }

    this.p5Instance = new p5(sketch)
    this.resizeObserver = resizeObserver
  },
  beforeUnmount() {
    if (this.p5Instance) {
      this.p5Instance.cleanup() // Arrêter le timer
      this.p5Instance.remove()
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
  },
}
</script>

<style scoped>
.p5canvas {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
