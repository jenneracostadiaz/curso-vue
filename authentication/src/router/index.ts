import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import FirebaseView from '@/views/FirebaseView.vue'
import SocialView from '@/views/SocialView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthView
        },
        {
            path: '/firebase',
            name: 'firebase',
            component: FirebaseView
        },
        {
            path: '/social',
            name: 'social',
            component: SocialView
        }
    ]
})

export default router
