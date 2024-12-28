<template>
  <div class="verticalContainer">
    <HomeInfos />
    <div class="technicalStack">
      <Home3DWidget />
    </div>
    <div class="bottomPart">
      <P5Canvas />
    </div>
  </div>
</template>

<script>
import HomeInfos from './HomeInfos.vue'
import P5Canvas from './P5Canvas.vue'
import Home3DWidget from './Home3DWidget.vue'

export default {
  name: 'HomeLeftSide',
  components: {
    HomeInfos,
    P5Canvas,
    Home3DWidget,
  },
}
</script>

<style>
.verticalContainer {
  display: grid;
  grid-template-columns: 66% auto;
  grid-template-rows: 60% auto;
  grid-gap: 2rem;
  width: 100%;
  height: 100%;
}

.bottomPart {
  grid-column: 1/3;
}

.technicalStack {
  background-color: rgb(26, 82, 63);
  overflow: hidden;
  height: 100%;
}
</style>
