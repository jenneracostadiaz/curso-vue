<template>
    <h3>{{ store.count }}</h3>
    <button @click="store.increment">Add</button>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<style scoped></style>
