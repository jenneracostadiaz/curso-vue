<script setup>
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
</script>

<template>
  <div class="container-fluid mt-3">
    <Nav />
  </div>
  <RouterView />
</template>

<style scoped></style>
