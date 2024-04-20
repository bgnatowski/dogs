<script setup>
import {getRandomImage} from "@/data.js";
import {onBeforeMount, ref} from "vue";

const props = defineProps({
    breed: String,
    width: {type: String, default: "300px"},
    height: {type: String, default: "300px"},
})

const path = ref([])
onBeforeMount(async () => path.value = await getRandomImage(props.breed))
</script>

<template>
    <div>
        <img :src=path alt="random dog breed image"/>
    </div>
    {{ path }}
</template>

<style scoped>
div {
    width: v-bind(width);
    height: v-bind(height);
    background-color: hotpink;
}

div img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>