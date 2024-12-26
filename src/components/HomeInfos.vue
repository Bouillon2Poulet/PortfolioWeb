<template>
  <div class="data">
    <div class="name">Romain<br />SERRES</div>
    <div class="title">Développeur<br />logiciel</div>
    <div class="links">
      <div class="link">
        <router-link to="/bio"><h>⌘ Bio</h></router-link>
      </div>
      <div class="link">
        <router-link to="/CV"><h>⌘ CV</h></router-link>
      </div>
      <div class="link">
        <router-link to="/Projects"><h>⌘ Projets</h></router-link>
      </div>
      <div class="link">
        <router-link to="/Links"><h>⌘ Liens</h></router-link>
      </div>
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
}

.yarndings-20-regular {
  font-family: 'Yarndings 20', serif;
  font-weight: 400;
  font-style: normal;
}

.data {
  background-color: rgb(230, 230, 230);
  font-family: 'Sometype Mono', monospace;
  font-optical-sizing: auto;
  display: flex;
  /* Active Flexbox */
  flex-direction: column;
  /* Aligne les enfants en colonne */
  justify-content: space-between;
  /* Aligne les éléments au top et au bottom */
  height: 100%;
  /* Assure que la div occupe toute la hauteur */
  color: blue;
}
</style>
