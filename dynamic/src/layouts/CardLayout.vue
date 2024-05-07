<template>
	<h1>Card Component</h1>
	<div class="container">
		<UserCard v-for="item in props.content" :key="item.id" :content="item" />
	</div>
</template>

<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';

const props = defineProps(['content']);
</script>

<style scoped>
h1 {
	text-align: center;
	margin: 1rem auto;
}

.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1rem;
	margin-top: 1rem;
	padding: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
