<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink :to="{ name: 'home' }">Home</RouterLink>
                <RouterLink :to="{ name: 'services' }">Services</RouterLink>
                <RouterLink :to="{ name: 'contact' }">Contact</RouterLink>
                <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped></style>
