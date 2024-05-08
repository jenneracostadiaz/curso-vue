<template>
	<main>
		<article v-for="item in props.data" :key="item.id">
			<h3>{{ item.title }}</h3>
			<p>{{ item.body }}</p>
		</article>
	</main>
</template>

<script setup lang="ts">
const props = defineProps(['data']);
</script>

<style scoped>
main {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}

article {
	width: 30%;
	margin: 1rem;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 0.5rem;
}

h3 {
	margin: 0;
	font-size: 1.5rem;
	font-weight: bold;
	color: #fdfdfd;
	text-transform: uppercase;
}

p {
	margin: 0.5rem 0;
}
</style>
