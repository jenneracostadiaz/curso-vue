import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'
import BlogView from '@/views/BlogView.vue'
import PostView from '@/views/PostView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView
        },
        {
            path: '/blog/:id',
            name: 'post',
            component: PostView
        }
    ]
})

export default router
