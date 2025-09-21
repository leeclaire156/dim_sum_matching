import { createRouter, createWebHistory } from 'vue-router';
import Title from '@/views/Title.vue';
import Game from '@/views/Game.vue';

const routes = [
    {
        path: '/',
        name: 'Title',
        component: Title
    },
    {
        path: '/play',
        name: 'Game',
        component: Game
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('@/views/NotFound.vue'),
    }
    // Other routes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;