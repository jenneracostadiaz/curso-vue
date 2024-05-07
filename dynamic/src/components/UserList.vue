<template>
	<li>
		{{ props.content.name }} - {{ props.content.email }} -
		{{ props.content.position }}
	</li>
</template>

<script setup lang="ts">
const props = defineProps(['content']);
</script>

<style scoped>
li {
	padding: 1rem;
	margin: 1rem;
}

li:nth-child(odd) {
	background-color: #333;
}

li:nth-child(even) {
	background-color: #555555;
}
</style>
