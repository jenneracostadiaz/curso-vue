<template>
  <div class="post-card">
    <h3>Titulo</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo, sunt veniam at ut,
      dolorum rerum et rem quaerat a consequuntur delectus. Ex eum impedit rerum quaerat, iusto
      provident atque!
    </p>
    <PostButton />
  </div>
</template>
<script setup lang="ts">
import PostButton from './PostButton.vue'
</script>
<style scoped>
.post-card {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px 0;
}
</style>
