<template>
    <div>Hola Mundo</div>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, onUpdated } from 'vue'

onBeforeMount(() => {
    console.log('CycleComposition beforeMount')
})

onMounted(() => {
    console.log('CycleComposition mounted')
})

onUpdated(() => {
    console.log('CycleComposition updated')
})
</script>

<style scoped></style>
