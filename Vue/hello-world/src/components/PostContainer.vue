<template>
  <div class="post-container">
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
  </div>
</template>
<script setup lang="ts">
import PostCard from './PostCard.vue'
</script>
<style scoped>
.post-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
