<template>
  <h3>{{ count.value }}</h3>
  <button @click="count.increment">Increment</button> <br />
  <button @click="count.decrement">Decrement</button> <br />
  <button @click="count.reset">Reset</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const count = reactive({
  value: 0,
  increment() {
    this.value++
  },
  decrement() {
    this.value--
  },
  reset() {
    this.value = 0
  }
})
</script>

<style scoped lang="scss"></style>
