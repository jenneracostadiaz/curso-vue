<template>
    <p
        @mouseover="c = '#000'"
        @mouseleave="c = '#fafafa'"
        :style="{
            backgroundColor: hasError ? 'red' : 'green',
            color: c,
            padding: '10px',
            borderRadius: '5px',
            margin: '10px 0'
        }"
    >
        El mensaje se ha enviado satisfactoriamente.
    </p>
    <button @click="hasError = !hasError">Toggle Error</button>
</template>
<script setup lang="ts">
import { ref } from 'vue'

let c = ref('#fafafa')

let hasError = ref(false)
</script>
