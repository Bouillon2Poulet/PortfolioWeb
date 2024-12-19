<template>
    <div class="footerWrapper">
        <router-link to="/">accueil</router-link>
        <h> • </h>
        <href>contacts</href>
        <h> • </h>
        <href>mentions légales</href>
    </div>
</template>

<script>
export default {
    name: "FooterComponent.vue"
}
</script>

<style>
.footerWrapper {
    font-family: "Sometype Mono", monospace;
    font-size: 20px;
    line-height: 0.95;
    margin-top: auto;
    font-weight: 500;
}
</style>