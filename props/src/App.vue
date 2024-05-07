<template>
	<div>
		<h1>Padre:</h1>
		<HijoVue
			:nombre="nombre"
			:edad="edad"
			@modificar="cambiarValor"
		/>

		<Hijo2Vue />
	</div>
</template>
<script setup>
import { provide, ref } from 'vue';
import HijoVue from './components/Hijo.vue';
import Hijo2Vue from './components/Hijo2.vue';

const nombre = ref('JAB');
const edad = ref(30);

const cambiarValor = (nuevoNombre, nuevaEdad) => {
	nombre.value = nuevoNombre;
	edad.value = nuevaEdad;
};

const canal = ref('soyjab');
provide('miCanal', canal);
</script>
<style scoped></style>
