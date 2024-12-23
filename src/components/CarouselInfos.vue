<template>
  <div class="wrapper">
    <div class="title">
      {{ project.ProjectName }}
    </div>
    <div class="description">
      <h>
        {{ project.ProjectTools.join(' • ') }}
      </h>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselInfos',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.wrapper {
  width: 500px;
  font-family: 'Sometype Mono', monospace;
  color: blue;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
}

.description {
  font-size: 24px;
  line-height: 1.6;
  padding: 0 20px;
}

.description ul {
  list-style-type: disc;
  padding-left: 40px;
}
</style>
