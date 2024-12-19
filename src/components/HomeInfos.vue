<template>
  <div class="data">
    <div class="name">
      Romain<br>SERRES
    </div>
    <div class="title">
      Développeur<br>logiciel
    </div>
    <div class="links">
      <ul>
        <li>
          <router-link to="/bio">Bio</router-link>
        </li>
        <li>
          <router-link to="/CV">CV</router-link>
        </li>
        <li>
          <router-link to="/Projects">Projets</router-link>
        </li>
        <li>
          <a href="#">Liens</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeInfos"
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
  font-family: "Sometype Mono", monospace;
  font-size: 50px;
  line-height: 0.95;
  margin-top: auto;
  font-weight: 500;
}

.links {
  font-size: 30px;
  line-height: 1.2;
  margin-top: auto;
  /* Pousse la div links vers le bas */
}

.yarndings-20-regular {
  font-family: "Yarndings 20", serif;
  font-weight: 400;
  font-style: normal;
}

.data {
  background-color: rgb(230, 230, 230);
  font-family: "Sometype Mono", monospace;
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
