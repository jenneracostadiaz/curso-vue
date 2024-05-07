<template>
    <div>
        <h1>Home</h1>
        <ul>
            <li v-for="post in posts" :key="post.id">
                <RouterLink :to="{ name: 'detail', params: { id: post.id } }">{{ post.title }}</RouterLink>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import PostService from '@/services/PostService';
import { onMounted } from 'vue';
const postService = await PostService.getPosts();
const posts = postService.getPosts();

onMounted(async () => {
    await postService.fetchAll()
});
</script>