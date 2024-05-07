<template>
	<div class="card">
		<h3>{{ props.content.name }}</h3>
		<p>{{ props.content.email }}</p>
		<p>{{ props.content.position }}</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps(['content']);
</script>

<style scoped>
.card {
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 1rem;
	margin: 1rem;
	width: 300px;
}

.card h3 {
	margin: 0;
}

.card p {
	margin: 0.5rem 0;
}

.card p:last-child {
	margin-bottom: 0;
}
</style>
