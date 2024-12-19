<template>
    <div class="verticalContainer">
        <HomeInfos />
        <div class="technicalStack"></div>
        <div class="bottomPart"></div>
    </div>
</template>

<script>
import HomeInfos from './HomeInfos.vue';

export default {
    name: "HomeLeftSide",
    components: {
        HomeInfos
    }
}
</script>

<style>
.verticalContainer {
    display: grid;
    grid-template-columns: 66% auto;
    grid-template-rows: 1fr 1fr;
    grid-gap: 2rem;
    height: 100%;
    width: 100%;
}

.bottomPart {
    background-color: red;
    height: 100%;
    grid-column: 1/3;
}

.technicalStack {
    background-color: rgb(26, 82, 63);
    overflow: hidden;
    /* Empêche le débordement de l'élément */
    height: 100%;
    /* Ajuste la hauteur de la colonne */
}
</style>
