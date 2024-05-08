<template>
	<span v-if="!data">Loading...</span>
	<component v-else :is="props.componentToShow" :data="data" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = defineProps(['url', 'componentToShow']);
const data = ref(null);

onMounted(async () => {
	const response = await fetch(props.url);
	data.value = await response.json();
});
</script>
