<template>
	<button @click="decremento">-</button>
	<span :class="myColor">{{ contador }}</span>
	<button @click="incremento">+</button>
	<div v-if="contador < 0">
		Escribe una cantidad positiva
	</div>
	<div v-else-if="contador > 5">¡Ya es suficiente!</div>
	<div v-else>¡Sigue sumando!</div>
	<div v-show="comprobacion">
		No está permitido el numero 0
	</div>

	<img :src="imagen3" alt="imagen1" />
</template>

<style scoped>
button {
	font-size: 1.5rem;
	padding: 0.5rem 1rem;
}
span {
	font-size: 2rem;
	margin: 0 1rem;
}
.red {
	color: red;
}
.green {
	color: green;
}
.blue {
	color: blue;
}
</style>

<script setup>
import { computed, ref } from 'vue';
import imagen2 from './assets/logo.svg';
const imagen1 =
	'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
const imagen3 = 'favicon.ico';
const myColor = ref('blue');
const contador = ref(0);
const decremento = () => {
	contador.value--;
	if (contador.value < 0) {
		myColor.value = 'red';
	} else if (contador.value <= 5) {
		myColor.value = 'blue';
	}
};
const incremento = () => {
	contador.value++;
	if (contador.value > 5) {
		myColor.value = 'green';
	} else if (contador.value >= 0) {
		myColor.value = 'blue';
	}
};
const comprobacion = computed(() => {
	return contador.value === 0;
});
</script>
