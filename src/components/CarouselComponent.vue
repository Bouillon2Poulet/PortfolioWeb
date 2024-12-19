<template>
  <div class="gallery">
    <div class="gallery-container">
      <img v-for="(item, index) in items" :key="index" :src="item.src"
        :class="['gallery-item', 'gallery-item-' + getClassIndex(index)]" :data-index="index" alt="Gallery item" />
    </div>
    <div class="gallery-controls">
      <button v-for="control in controls" :key="control" :class="'gallery-controls-' + control"
        @click="setCurrentState(control)">
        {{ control }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      items: [
        { src: "/src/images/1.jpg" },
        { src: "/src/images/2.png" },
        { src: "/src/images/3.jpg" },
        { src: "/src/images/4.png" },
        { src: "/src/images/5.jpg" },
      ],
      controls: ["previous", "next"],
    };
  },
  methods: {
    setCurrentState(direction) {
      if (direction === "previous") {
        this.items.unshift(this.items.pop());
      } else {
        this.items.push(this.items.shift());
      }
    },
    getClassIndex(index) {
      return ((index - 2 + this.items.length) % this.items.length) + 1;
    },
  },
};
</script>

<style>
.gallery {
  width: 100%;
}

.gallery-container {
  align-items: center;
  display: flex;
  height: 400px;
  margin: 0 auto;
  max-width: 1000px;
  position: relative;
}

.gallery-item {
  height: 200px;
  opacity: 0;
  position: absolute;
  transition: all 0.3s ease-in-out;
  width: 330px;
  z-index: 0;
  border-radius: 15px;
  background-size: contain;
}

.gallery-item-1 {
  left: 15px;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-item-2,
.gallery-item-4 {
  height: 250px;
  opacity: 0.8;
  width: 380px;
  z-index: 1;
}

.gallery-item-2 {
  left: 30%;
  transform: translateX(-50%);
}

.gallery-item-3 {
  box-shadow: -2px 5px 33px 6px rgba(0, 0, 0, 0.35);
  height: 300px;
  opacity: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 430px;
  z-index: 2;
}

.gallery-item-4 {
  left: 70%;
  transform: translateX(-50%);
}

.gallery-item-5 {
  left: 85%;
  opacity: 0.4;
  transform: translateX(-50%);
}

.gallery-controls {
  display: flex;
  justify-content: center;
  margin: 25px 0;
  height: 100px;
}

.gallery-controls button {
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 30px;
  margin: 0 50px;
  padding: 0 12px;
  text-transform: capitalize;
}

.gallery-controls-button:focus {
  outline: none;
}
</style>
