<template>
	<ul>
		<li v-for="(note, index) in note.notes" :key="index">
			{{ note.title }}: {{ note.content }}
		</li>
	</ul>
</template>

<script setup lang="ts">
import NoteService from '~/services/NoteService';
import { onMounted } from 'vue';
import type iNote from '~/interfaces/iNote';

const note = ref({
	notes: Array<iNote>,
});
const noteService = new NoteService();

onMounted(async () => {
	note.value = await noteService.getNote();
});
</script>

<style scoped></style>
