<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import useAuth from './stores/auth'
import router from './router'

const auth = useAuth()

const logout = () => {
    auth.logout()
    router.push({ name: 'login' })
}
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Notes</RouterLink>
                <RouterLink to="/create">Crear Nota</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
                <RouterLink to="/register">Register</RouterLink>
                <button class="router-link-exact" @click="logout">Logout</button>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav .router-link-exact-active {
    color: var(--color-text);
}

nav .router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
