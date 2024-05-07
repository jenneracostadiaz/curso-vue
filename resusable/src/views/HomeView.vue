<template>
    <MainLayout>
        <template #main><h1>Home Page Content</h1></template>
        <template #aux>
            <p>x position is: {{ x }}</p>
            <p>y position is: {{ y }}</p>
        </template>
    </MainLayout>
</template>

<script setup lang="ts">
import { useMouse } from '@/composables/useMouse'
import MainLayout from '@/layouts/MainLayout.vue'

const { x, y } = useMouse()
</script>
