import {  createRouter, createWebHistory } from "vue-router";
import HomeRender from "@/pages/HomeRender.vue";
import BotselectionPage from "@/pages/BotselectionPage.vue";
import CasualBot from "@/pages/CasualBot.vue";
import ProfessionalBot from '../pages/ProfessionalBot.vue'


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
    },
    {
        path:'/professional-bot',
        name:'professionalBot',
        component:ProfessionalBot
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
export default router