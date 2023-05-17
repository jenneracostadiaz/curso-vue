<template>
	<ul>
		<li v-for="country in countries" v-bind:key="country.code">
			{{ country.name }} [{{ country.code }}]
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';
interface ICountry {
	code: string;
	name: string;
}
let countries: Ref<Array<ICountry>> = ref([
	{
		code: 'es',
		name: 'Spain',
	},
	{
		code: 'en',
		name: 'UK',
	},
	{
		code: 'fr',
		name: 'France',
	},
	{
		code: 'it',
		name: 'Italy',
	},
	{
		code: 'pt',
		name: 'Portugal',
	},
	{
		code: 'pe',
		name: 'Perú',
	},
]);
</script>

<style scoped></style>
