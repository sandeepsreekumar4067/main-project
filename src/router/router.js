import {  createRouter, createWebHistory } from "vue-router";
import HomeRender from "@/pages/HomeRender.vue";
import BotselectionPage from "@/pages/BotselectionPage.vue";
import CasualBot from "@/pages/CasualBot.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeRender,
    },
    {
        path:'/selection-page',
        name:'selection',
        component:BotselectionPage
    },{
        path:'/casual-bot',
        name:'casualBot',
        component:CasualBot
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router