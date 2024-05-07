<template>
	<h1>Table Component</h1>

	<table class="table">
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Position</th>
			</tr>
		</thead>
		<tbody>
			<UserRow v-for="item in props.content" :key="item.id" :content="item" />
		</tbody>
	</table>
</template>

<script setup lang="ts">
import UserRow from '@/components/UserRow.vue';

const props = defineProps(['content']);
</script>

<style scoped>
h1 {
	text-align: center;
	margin: 1rem auto;
}

.table {
	width: 100%;
	border-collapse: collapse;
	transition: all 0.3s;
}

th,
td {
	border: 1px solid #ccc;
	padding: 0.5rem;
	transition: all 0.3s;
}

th {
	background-color: #101010;
	color: white;
	font-weight: 700;
}
</style>
