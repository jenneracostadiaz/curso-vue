<script setup lang="ts">
import InvoicesComputed from './components/InvoicesComputed.vue'
</script>

<template>
    <div class="main-default">
        <h1>Vue 3 Composition API</h1>
        <InvoicesComputed />
    </div>
</template>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
    text-align: center;
}

.main-default {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}
</style>
