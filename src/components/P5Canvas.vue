<template>
  <div ref="p5canvas" class="p5canvas"></div>
</template>

<script>
import p5 from "p5";

export default {
  name: "P5Canvas",
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
    };
  },
  mounted() {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        this.width = entry.contentRect.width;
        this.height = entry.contentRect.height;
        if (this.p5Instance) {
          this.p5Instance.resizeCanvas(this.width, this.height);
        }
      }
    });

    // Observer la taille de l'élément parent
    const parent = this.$refs.p5canvas.parentElement;
    if (parent) {
      resizeObserver.observe(parent);
    }

    // Initialisation du sketch P5
    const sketch = (p) => {
      const detail = 0.5;
      let mouseIsMoving = false;

      p.setup = () => {
        const parentDiv = this.$refs.p5canvas;
        p.createCanvas(this.width, this.height).parent(parentDiv);
        p.noStroke();
        p.fill(p.color(255, 255, 255));
        drawLightning(0, this.height / 2, this.width, this.height / 2, 80);

        window.addEventListener("mousemove", () => {
          mouseIsMoving = true;
        });
      };

      p.draw = () => {
        if (mouseIsMoving) {
          p.background(0, 0, 255);
          drawLightning(0, this.height / 2, this.width, this.height / 2, 500);
        }
        mouseIsMoving = false;
      };

      const drawLightning = (x1, y1, x2, y2, disp) => {
        if (disp < detail || y1 < 0 || y1 > this.height) {
          p.circle((x2 + x1) / 2, (y2 + y1) / 2, 4);
        } else {
          const midX = (x1 + x2) / 2 + (p.random() - 0.5) * disp;
          const midY = (y1 + y2) / 2 + (p.random() - 0.5) * disp;
          drawLightning(x1, y1, midX, midY, disp / 2.0);
          drawLightning(x2, y2, midX, midY, disp / 2.0);
          if (p.random(1) < 0.8) {
            drawLightning(
              midX,
              midY,
              midX + p.random() * disp,
              midY + (p.random() - 0.5) * disp,
              disp / 2
            );
          }
        }
      };
    };

    this.p5Instance = new p5(sketch);
    this.resizeObserver = resizeObserver;
  },
  beforeUnmount() {
    if (this.p5Instance) {
      this.p5Instance.remove();
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
};
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
