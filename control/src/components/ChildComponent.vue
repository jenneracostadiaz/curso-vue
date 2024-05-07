<template>
  <h1>Porcentaje completado: {{ percentage }} %</h1>
</template>

<script setup lang="ts">
import { onMounted, ref, defineExpose } from 'vue'
const percentage = ref(0)

onMounted(() => {
  percentage.value = 50
})

const recalculate = () => {
  percentage.value = Math.floor(Math.random() * 100)
}

defineExpose({ recalculate })
</script>

<style scoped></style>
