<template>
    <div class="subpagetitle">{{ title }}</div>
</template>

<script>
export default {
    name: 'TextComponent',
    props: {
        title: {
            type: String,
            required: true,
            default: '' // Valeur par défaut si aucun texte n'est fourni
        }
    }
};
</script>

<style scoped>
.subpagetitle {
    font-family: 'DigitanyRegularDeluxe', sans-serif;
    font-size: 45px;
    line-height: 0.75;
    text-align: center;
    color: blue;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    margin: 0;
}
</style>
