<template>
    <h1>Post {{ postId }}</h1>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'

let postId: Ref<object | string> = ref('')

onMounted(() => {
    const router = useRoute()
    postId.value = router.params.id
})
</script>

<style scoped lang="scss"></style>
