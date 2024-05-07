<template>
	<div>
		<h2>
			Hijo: Te llamas {{ nombre }} y tienes {{ edad }} años
		</h2>
		<button @click="enviar">Cambiar Valores</button>
	</div>
</template>
<script setup>
const emit = defineEmits(['modificar']);
const enviar = () => {
	emit('modificar', 'JEN', 18);
};
const props = defineProps({
	nombre: String,
	edad: Number,
});
</script>
<style scoped></style>
