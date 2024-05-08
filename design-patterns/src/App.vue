<template>
	<ListRender :data="data" />
</template>

<script setup lang="ts">
import { ref, Ref, onMounted } from 'vue';
import ItemService from './services/ItemService';
import ListRender from './components/ListRender.vue';

const data: Ref<Array<string>> = ref([]);
const service = new ItemService();
onMounted(async () => {
	data.value = await service.getItems();
});
</script>
