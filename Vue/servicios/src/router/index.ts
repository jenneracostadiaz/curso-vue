import PostDetailView from '@/views/PostDetailView.vue'
import PostListView from '@/views/PostListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: () => {
                return { name: 'PostList' }
            }
        },
        {
            path: '/post',
            name: 'PostList',
            component: () => PostListView
        },
        {
            path: '/post/:id',
            name: 'PostDetail',
            component: () => PostDetailView
        }
    ]
})

export default router
