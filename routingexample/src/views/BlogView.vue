<template>
    <h1>Blog</h1>
    <ul>
        <li>
            <RouterLink :to="{ name: 'post', params: { id: 1 } }">Post 1</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'post', params: { id: 2 } }">Post 2</RouterLink>
        </li>
        <li>
            <RouterLink :to="{ name: 'post', params: { id: 3 } }">Post 3</RouterLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { RouterLink } from 'vue-router'
</script>

<style scoped></style>
