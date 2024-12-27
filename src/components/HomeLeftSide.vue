<template>
  <div class="verticalContainer">
    <HomeInfos />
    <div class="technicalStack"></div>
    <div class="bottomPart">
      <P5Canvas />
    </div>
  </div>
</template>

<script>
import HomeInfos from './HomeInfos.vue'
import P5Canvas from './P5Canvas.vue'

export default {
  name: 'HomeLeftSide',
  components: {
    HomeInfos,
    P5Canvas,
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
  background-color: red;
  grid-column: 1/3;
}

.technicalStack {
  background-color: rgb(26, 82, 63);
  overflow: hidden;
  height: 100%;
}
</style>
