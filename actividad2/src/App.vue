<template>
	<div>
		<div v-for="(cosa, index) in cosas" :key="index">
			<FichaVue
				:cosa="cosa"
				:index="index"
				@retorno="retornoFuction"
			/>
		</div>
	</div>
</template>
<script setup>
import FichaVue from './components/Ficha.vue';
import cosas from './assets/datos';

const retornoFuction = (a, i) => {
	cosas.value[i].nota = a;
};
</script>

<style scoped></style>
