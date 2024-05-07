<template>
    <h1>Notes</h1>

    <div class="container">
        <ul v-if="notes">
            <li v-for="note in notes" :key="note.id">
                <p>{{ note.content }}</p>
            </li>
        </ul>
        <p v-else>No notes found</p>

        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import useAuth from '@/stores/auth'
import type INote from '@/interfaces/INote'

const store = useAuth()

const notes: Ref<Array<INote>> = ref([])
const message = ref('loading...')

onMounted(async () => {
    message.value = ''
    notes.value = await store.getNotes()
})
</script>

<style scoped>
.container {
    max-width: 300px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
}
ul {
    list-style: none;
    padding: 0;
}

li {
    padding: 1rem;
    margin: 1rem 0;
    border: 1px solid #ccc;
}
</style>
