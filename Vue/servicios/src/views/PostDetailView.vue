<template>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <RouterLink :to="{ name: 'PostList' }">Back to list</RouterLink>
    </div>
</template>

<script setup lang="ts">
import PostService from '@/services/PostService'
import { onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const service = new PostService()
const post = service.getPost()

onMounted(async () => {
    const route = useRoute()
    let elm = route.params.id
    await service.fetchById(elm)
})
</script>

<style scoped lang="scss">
h3 {
    font-size: 3em;
}

p {
    font-size: 1.6em;
}

.post-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.post-card {
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    background-color: $color-text-secondary;
    color: $color-secondary;
    transition: all 0.3s;
    text-align: center;
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
    background-color: $color-secondary;
    color: $color-text-secondary;
}
</style>
