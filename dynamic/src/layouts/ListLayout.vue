<template>
	<h1>Card Component</h1>
	<ul class="list">
		<UserList v-for="item in props.content" :key="item.id" :content="item" />
	</ul>
</template>

<script setup lang="ts">
import UserList from '@/components/UserList.vue';

const props = defineProps(['content']);
</script>

<style scoped>
h1 {
	text-align: center;
	margin: 1rem auto;
}

.list {
	list-style: none;
	padding: 0;
}

.container {
	gap: 1rem;
	margin-top: 1rem;
	padding: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
