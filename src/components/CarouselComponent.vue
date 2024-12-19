<template>
  <div class="gallery">
    <div class="gallery-container">
      <img class="gallery-item gallery-item-1" src="@/images/1.jpg" data-index="1">
      <img class="gallery-item gallery-item-2" src="@/images/2.jpg" data-index="2">
      <img class="gallery-item gallery-item-3" src="@/images/3.jpg" data-index="3">
      <img class="gallery-item gallery-item-4" src="@/images/4.jpg" data-index="4">
      <img class="gallery-item gallery-item-5" src="@/images/5.jpg" data-index="5">
    </div>
  </div>
  <div class="gallery-controls">
  </div>
</template>

<script>
export default {
  name: "CarouselComponent"
}

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelector('.gallery-item');

class Carousel {
  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add('gallery-item-' + i + 1);
    });
  }
}

function setCurrentState(direction) {
  if (direction.className == 'gallery-controls-previous') {
    this.carouselArray.unshift(this.carouselArray.pop());
  } else {
    this.carouselArray.push(this.carouselArray.shift());
  }
  this.updateGallery();
}

function setControls() {
  this.carouselControls.forEach(control => {
    galleryControlsContainer.appendChild(document.createElement('button')).clasSName = 'gallery-controls-' + control;
    document.querySelection('.gallery-controls-' + control).innerText = control;

  });
}

function useControls() {
  const triggers = [...galleryControlsContainer.childNodes];
  triggers.forEach(control => {
    control.addEventListener('click', e => {
      e.preventDefault();
      this.setCurrentState(control);
    });
  });
}
</script>

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
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
  opacity: .4;
  transform: translateX(-50%);
}

.gallery-item-2,
.gallery-item-4 {
  height: 250px;
  opacity: .8;
  width: 380px;
  z-index: 1;
}

.gallery-item-2 {
  left: 30%;
  transform: translateX(-50%);
}

.gallery-item-3 {
  box-shadow: -2px 5px 33px 6px rgba(0, 0, 0, .35);
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
  opacity: .4;
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

.gallery-controls-previous::before {
  border: solid black;
  border-width: 0 5px 5px 0;
  content: '';
  display: inline-block;
  height: 5px;
  left: -30px;
  padding: 10px;
  position: absolute;
  top: 25%;
  transform: rotate(135deg) translateY(-50%);
  transition: left 0.15s ease-in-out;
  width: 5px;
}

.gallery-controls-previous:hover::before {
  left: -40px;
}

.gallery-controls-next {
  position: relative;
}

.gallery-controls-next::before {
  border: solid black;
  border-width: 0 5px 5px 0;
  content: '';
  display: inline-block;
  height: 5px;
  padding: 10px;
  position: absolute;
  right: -30px;
  top: 45;
  transform: rotate(-45deg) translateY(-50%);
  transition: right 0.15s ease-in-out;
  width: 5px;
}

.gallery-controls-next:hover::before {
  right: -40px;
}

.gallery-nav {
  bottom: -15px;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  position: absolute;
  width: 100%;
}

.gallery-nav li {
  background: white;
  border-radius: 50px;
  height: 10px;
  margin: 0 16px;
  width: 10px;
}

.gallery-nav li.gallery-item-selected {
  background: grey;
}
</style>
