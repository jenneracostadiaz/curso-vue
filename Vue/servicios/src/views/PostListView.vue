<template>
    <div class="container">
        <h2>Post List</h2>
        <nav>
            <RouterLink
                v-for="p in posts"
                :key="p.id"
                :to="{
                    name: 'PostDetail',
                    params: { id: p.id }
                }"
            >
                <h3>{{ p.title }}</h3>
                <p>{{ p.body }}</p>
            </RouterLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService'
import { onMounted } from 'vue'
import type { RouterLink } from 'vue-router'

const service = new PostService()
const posts = service.getPosts()

onMounted(async () => {
    await service.fetchAll()
})
</script>

<style lang="scss" scoped>
h2 {
    font-size: 3em;
}

h3 {
    font-size: 1.5em;
    text-transform: uppercase;
}

p {
    font-size: 1em;
}

nav {
    list-style: none;
    padding: 1rem;
}

a {
    display: block;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
    background-color: $color-text-secondary;
    color: $color-secondary;
    transition: all 0.3s;
    text-decoration: none;
}

a:hover {
    background-color: $color-primary;
    color: $color-background;
}
</style>
