<template>
	<div>
		<h1>Hijo 2:</h1>
		<h2>{{ canal }}</h2>
		<button @click="modificar">Cambiar</button>
	</div>
</template>
<script setup>
import { inject } from 'vue';
const canal = inject('miCanal');

const modificar = () => {
	canal.value = 'soyjab2';
};
</script>
<style scoped></style>
