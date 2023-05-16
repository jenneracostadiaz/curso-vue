<template>
	<h3>{{ counter }}</h3>
	<button @click="addCounter">Incrementar</button>
	<button @click="dimCounter">Decrementar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
	name: 'CounterOption',
	components: {},
	data() {
		let counter = 0;
		return { counter };
	},
	methods: {
		addCounter() {
			this.counter++;
		},
		dimCounter() {
			this.counter--;
		},
	},
});
</script>

<style></style>
