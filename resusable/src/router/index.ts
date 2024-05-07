import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServiceView from '../views/ServiceView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => AboutView
        },
        {
            path: '/service',
            name: 'service',
            component: () => ServiceView
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => ContactView
        }
    ]
})

export default router
