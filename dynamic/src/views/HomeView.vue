<template>
	<h1>Listado de Usuarios</h1>
	<input
		type="text"
		placeholder="Buscar usuario"
		v-model="search"
		@keyup="handleSearch"
	/>
	<div>
		<button @click="handleLayout(ListLayout)">Ver en lista</button>
		<button @click="handleLayout(CardLayout)">Ver en tarjetas</button>
		<button @click="handleLayout(TableLayout)">Ver en tabla</button>
	</div>

	<component :is="layout" :content="filteredUsers" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const ListLayout = defineAsyncComponent(
	() => import('@/layouts/ListLayout.vue')
);
const TableLayout = defineAsyncComponent(
	() => import('@/layouts/TableLayout.vue')
);
const CardLayout = defineAsyncComponent(
	() => import('@/layouts/CardLayout.vue')
);

const layout = ref(ListLayout);

const handleLayout = (emp: any) => (layout.value = emp);

const search = ref('');

const handleSearch = () => {
	filteredUsers.value = users.value.filter((user) =>
		user.name.toLowerCase().includes(search.value.toLowerCase())
	);
};

const users = ref([
	{
		name: 'John Doe',
		email: 'john.doe@example.com',
		position: 'Software Engineer',
	},
	{
		name: 'Jane Smith',
		email: 'jane.smith@example.com',
		position: 'Frontend Developer',
	},
	{
		name: 'Michael Johnson',
		email: 'michael.johnson@example.com',
		position: 'Backend Developer',
	},
	{
		name: 'Emily Davis',
		email: 'emily.davis@example.com',
		position: 'UI/UX Designer',
	},
	{
		name: 'Daniel Wilson',
		email: 'daniel.wilson@example.com',
		position: 'Full Stack Developer',
	},
	{
		name: 'Sophia Anderson',
		email: 'sophia.anderson@example.com',
		position: 'Data Scientist',
	},
	{
		name: 'Matthew Thompson',
		email: 'matthew.thompson@example.com',
		position: 'DevOps Engineer',
	},
	{
		name: 'Olivia Martinez',
		email: 'olivia.martinez@example.com',
		position: 'Product Manager',
	},
	{
		name: 'James Taylor',
		email: 'james.taylor@example.com',
		position: 'QA Engineer',
	},
	{
		name: 'Ava Hernandez',
		email: 'ava.hernandez@example.com',
		position: 'Mobile App Developer',
	},
	{
		name: 'William Garcia',
		email: 'william.garcia@example.com',
		position: 'Systems Analyst',
	},
	{
		name: 'Isabella Robinson',
		email: 'isabella.robinson@example.com',
		position: 'Database Administrator',
	},
	{
		name: 'Ethan Clark',
		email: 'ethan.clark@example.com',
		position: 'Network Engineer',
	},
	{
		name: 'Mia Lewis',
		email: 'mia.lewis@example.com',
		position: 'Scrum Master',
	},
	{
		name: 'Alexander Walker',
		email: 'alexander.walker@example.com',
		position: 'Technical Writer',
	},
]);

interface User {
	name: string;
	email: string;
	position: string;
}

const filteredUsers = ref<User[]>([]);
filteredUsers.value = users.value;
</script>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 1rem;
}

input {
	width: 100%;
	padding: 0.5rem;
	margin-bottom: 1rem;
}
</style>
