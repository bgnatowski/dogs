<script setup>
  import {getRandomImage} from "@/data.js";
  import {onBeforeMount, ref} from "vue";

  const path = ref([])
  onBeforeMount(async () => path.value = await getRandomImage('cardigan corgi'))
</script>

<template>
  {{path}}
</template>

<style scoped>

</style>