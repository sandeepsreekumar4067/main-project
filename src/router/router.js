import {  createRouter, createWebHistory } from "vue-router";
import HomeRender from "@/pages/HomeRender.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeRender,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router