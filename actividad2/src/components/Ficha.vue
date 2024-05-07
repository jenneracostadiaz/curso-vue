<template>
	<div class="display">
		<button class="boton">
			{{ cosa.ropa }} ({{ cosa.marca }})
		</button>
		<div class="estrellas">
			<span v-for="index in cosa.nota" :key="index">
				<img
					src="https://www.html6.es/img/estrella.png"
					alt="Estrella"
				/>
			</span>
		</div>
		<button @click="incrementarNota(cosa.nota, index)">
			+
		</button>
	</div>
</template>
<script setup>
import cosas from '@/assets/datos';

const props = defineProps({
	cosa: String,
	index: Number,
});

const emit = defineEmits(['retorno']);

const incrementarNota = (nota, i) => {
	if (nota >= 5) {
		nota = nota;
	} else {
		nota++;
	}

	emit('retorno', nota, i);
};
</script>

<style scoped>
.display {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.display img {
	width: 15px;
	margin: 1px;
}
.boton {
	width: 165px;
}
.extrellas {
	width: 125px;
	height: 22px;
}
</style>
