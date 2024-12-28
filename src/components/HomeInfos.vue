<template>
  <div class="data">
    <div class="name">Romain<br />SERRES</div>
    <div class="title">Développeur<br />logiciel</div>
    <div class="links">
      <router-link to="/bio"
        ><h class="link"> <span class="command">⌘</span> Bio </h></router-link
      >

      <router-link to="/CV">
        <h class="link"><span class="command">⌘</span> CV</h>
      </router-link>
      <router-link to="/Projects">
        <h class="link"><span class="command">⌘</span> Projets</h>
      </router-link>
      <router-link to="/Links">
        <h class="link"><span class="command">⌘</span> Liens</h>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInfos',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sometype+Mono:ital,wght@0,400..700;1,400');

.name {
  font-family: 'DigitanyRegularDeluxe', sans-serif;
  font-size: 85px;
  line-height: 0.75;
}

.title {
  font-family: 'Sometype Mono', monospace;
  font-size: 40px;
  line-height: 0.95;
  margin-top: auto;
  font-weight: 500;
}

.links {
  font-size: 25px;
  line-height: 1;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  font-weight: 500;
}

.link {
  padding-top: 5px;
  display: inline;
}

.command {
  display: inline-block;
  transition: transform 0.3s ease; /* Animation fluide */
}

.link:hover .command {
  transform: rotate(45deg); /* Rotation complète */
}

.data {
  font-family: 'Sometype Mono', monospace;
  font-optical-sizing: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: blue;
}
</style>
