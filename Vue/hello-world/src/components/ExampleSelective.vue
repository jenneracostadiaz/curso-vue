<template>
    <h2 v-if="age < 18">Eres menor de edad</h2>
    <h2 v-else>Eres mayor de edad</h2>
</template>
<script setup lang="ts">
let age = 10
</script>
