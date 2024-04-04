<script setup>
  import { ref, onBeforeMount } from 'vue'
  import { getBreeds } from "@/data.js";

  const props = defineProps({
    flex: Boolean,
  })

  const breeds = ref([])
  onBeforeMount(async () => breeds.value = await getBreeds())
</script>

<template>
  <div :class="flex ? 'flex' : ''">
    <p v-for="b in breeds">{{ b }}</p>
  </div>
</template>

<style scoped>
  p {
    margin: 0 1rem
  }
  p:nth-child(even) {
    color: hotpink;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
  }
</style>