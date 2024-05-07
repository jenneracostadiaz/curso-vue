<template>
    <h1>Note Create</h1>

    <form>
        <label for="content">Content</label>
        <input type="text" id="content" v-model="content" />
        <button @click.prevent="sendNote">Create</button>
        <p>{{ message }}</p>
    </form>
</template>

<script setup lang="ts">
import router from '@/router'
import useAuth from '@/stores/auth'
import { ref } from 'vue'
const auth = useAuth()

const content = ref('')
const message = ref('')

const sendNote = async () => {
    const resp = await auth.createNote(content.value)
    if (resp == false) {
        message.value = 'Failed to create note'
    } else {
        message.value = 'Note created'
        router.push({ name: 'notes' })
    }
}
</script>

<style scoped>
form {
    max-width: 300px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

label {
    font-weight: bold;
}

input {
    padding: 0.5em;
    font-size: 1em;
}

button {
    padding: 0.5em;
    font-size: 1em;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
