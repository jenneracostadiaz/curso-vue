<template>
	<h2>
		Cena {{ contador + 1 }} con el rey godo
		{{ rey }}
	</h2>
	<h3 class="precio">
		Precio: {{ productos[contador].precio }} €
	</h3>
	<div
		v-if="productos[contador].finDeSemana"
		class="dias soloFinesDeSemana"
	>
		(Solo fines de semana)
	</div>
	<div v-else class="dias todosLosDias">
		(De lunes a viernes)
	</div>

	<div
		v-if="productos[contador].precio < 100"
		class="offert"
	>
		Ahora un 10% dto: {{ nuevoPrecio }}€
		<img src="/oferta.jpg" alt="rey en descuento" />
	</div>

	<img :src="imagen" :alt="rey" />
	<button @:click="siguiente">
		Siguiente ({{ contador + 1 }}/{{ total }})
	</button>
</template>
<script setup>
import { ref, computed } from 'vue';
import { productos } from './datos.js';
const contador = ref(0);
const total = productos.length;
const ruta = 'https://www.html6.es/img/rey_';

const siguiente = () => {
	contador.value = (contador.value + 1) % total;
};

const rey = computed(() => {
	const theName =
		productos[contador.value].nombre.toLowerCase();
	return (
		theName.substring(0, 1).toUpperCase() +
		theName.substring(1)
	);
});

const imagen = computed(() => {
	return `${ruta}${productos[
		contador.value
	].nombre.toLowerCase()}.png`;
});

const nuevoPrecio = computed(() => {
	return Number(
		(productos[contador.value].precio / 1.1).toFixed(2)
	);
});
</script>
<style scoped>
.todosLosDias {
	background-color: green;
}
.soloFinesDeSemana {
	background-color: red;
}
.dias {
	color: white;
	padding: 4px 17px;
	font-size: 0.9em;
	border-radius: 4px;
	margin: 5px 0 10px;
	display: inline-block;
}
.offert {
	padding: 10px;
	display: flex;
	align-items: center;
}
.offert img {
	width: 65px;
	margin: 12px 5px;
}
</style>
