<template>
	<tr>
		<td>{{ props.content.name }}</td>
		<td>{{ props.content.email }}</td>
		<td>{{ props.content.position }}</td>
	</tr>
</template>

<script setup lang="ts">
const props = defineProps(['content']);
</script>

<style scoped>
td {
	border: 1px solid #ccc;
	padding: 0.5rem;
}

td:first-child {
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
}

td:last-child {
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
}

tr:nth-child(odd) {
	background-color: #333;
}

tr:nth-child(even) {
	background-color: #555555;
}
</style>
