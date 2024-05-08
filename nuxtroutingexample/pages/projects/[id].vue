<template>
	<NuxtLayout name="projects">
		<h1>Course {{ projectId }} Vue Page</h1>
	</NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const projectId = ref();
projectId.value = route.params.id;
</script>

<style scoped lang="scss"></style>
