<script setup>
import breeds from "@/state/breeds.js";

const props = defineProps({
    flex: Boolean,
})
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