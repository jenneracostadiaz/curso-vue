<template>
    <h2>{{ store.count }} x 2 = {{ store.doubleCount }}</h2>
    <button @click="store.increment">Increment</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()
</script>
