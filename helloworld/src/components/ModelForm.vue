<template>
	<form>
		<input type="text" v-model="inputText" />
		<input type="checkbox" v-model="agree" id="agree" />
		<label for="agree">Acepto los términos y condiciones</label>
		<select v-model="country">
			<option value="Spain">Spain</option>
			<option value="UK">UK</option>
			<option value="France">France</option>
		</select>
	</form>
	<h3>{{ inputText }}</h3>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
let inputText = ref('');
let agree = ref(true);
let country = ref('Spain');
</script>

<style scoped></style>
