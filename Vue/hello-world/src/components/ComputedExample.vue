<template>
    <h2>Computed Example</h2>
    <input type="text" v-model="message" />
    <p>{{ reverse }}</p>
</template>

<script setup lang="ts">
import { type Ref, ref, computed } from 'vue'

const message: Ref<string> = ref('')
const reverse = computed(() =>
    message.value.split('').reverse().join('')
)
</script>

<style scoped></style>
