<script setup>
</script>

<template>
    <header>Dog App</header>
    <nav>
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'Breeds'}">Breed List</router-link>
        <router-link :to="{name: 'Images'}">Random Dog</router-link>
    </nav>
    <main>
        <router-view></router-view>
    </main>
</template>

<style>
header {
    background-color: #86469C;
    padding: 1rem;
}
nav {
    padding: 1rem 0;
    background-color: #BC7FCD;
}

nav a {
    padding: 0 1rem;
    text-decoration: none;
}


</style>
