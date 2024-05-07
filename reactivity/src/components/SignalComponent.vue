<template>
  <h3>{{ count }}</h3>
  <button @click="($event) => count.update((v) => v + 1)">Increment</button>
  <button @click="($event) => count.set(0)">Reset</button>
</template>

<script setup lang="ts">
import { signal } from 'vue-signals'

const count = signal(0)
</script>

<style scoped></style>
