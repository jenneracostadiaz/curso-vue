import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NoteView from '@/views/NoteView.vue'
import NoteCreateView from '@/views/NoteCreateView.vue'
import useAuth from '@/stores/auth'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'notes',
            component: NoteView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView,
            meta: {
                requiresAuth: false
            }
        },
        {
            path: '/create',
            name: 'create',
            component: NoteCreateView,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const auth = useAuth()
    const isAuth = auth.token

    if (to.meta.requiresAuth && !isAuth) {
        return next({ name: 'login' })
    } else {
        return next()
    }
})

export default router
