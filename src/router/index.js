import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/",  name: "Home"},
        {path: "/breeds/images", component: () => import("@/views/RandomDogView.vue"), name: "Images"},
        {path: "/breeds/list", component: () => import("@/views/BreedsListView.vue"), name: "Breeds"},
    ],
});

export default router;