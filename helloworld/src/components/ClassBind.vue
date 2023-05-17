<template>
	<p
		v-bind:style="{
			backgroundColor: c,
			color: '#fff',
			padding: '15px',
		}"
	>
		El mensaje se a enviado satisfactoriamente
	</p>
	<button v-on:click="handleClick">Cambiar color</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let c = ref('#343434');
const handleClick = () => (c.value = '#101010');
</script>

<style></style>
