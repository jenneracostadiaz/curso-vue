<template>
    <h1>Detail Post</h1>
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
    <RouterLink :to="{ name: 'home' }">Back</RouterLink>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PostService from '@/services/PostService';

const postService = new PostService();
const post = postService.getPost()

onMounted(async () => {
    const route = useRoute();
    const elm = route.params.id;
    await postService.fetchById(elm);
});

</script>