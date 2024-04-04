<script setup>
    import BreedList from "@/components/BreedList.vue";
    import DogImage from "@/components/DogImage.vue";
</script>

<template>
    <h1>Dogs</h1>
    <h2>Dog Image</h2>
    <DogImage></DogImage>
    <h2>Breeds</h2>
    <BreedList flex></BreedList>
    <h2>In column</h2>
    <BreedList></BreedList>

</template>

<style scoped>
</style>
