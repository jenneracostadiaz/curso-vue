<template>
    <h1>Register</h1>
    <form>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
        <button @click.prevent="createUser">Register</button>
        <p>{{ message }}</p>
    </form>
</template>

<script setup lang="ts">
import router from '@/router'
import useAuth from '@/stores/auth'
import { ref } from 'vue'
const store = useAuth()

const name = ref('')
const email = ref('')
const password = ref('')
const message = ref('')

const createUser = async () => {
    message.value = 'sending...'
    const response = await store.register(name.value, email.value, password.value)
    if (response == false) {
        message.value = 'Error creating user'
    } else {
        router.push({ name: 'notes' })
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
}

label {
    margin-top: 1rem;
}

input {
    padding: 0.5rem;
    margin-top: 0.5rem;
}

button {
    padding: 0.5rem;
    margin-top: 1rem;
    background-color: var(--color-primary);
    color: white;
    border: 0;
    cursor: pointer;
}

button:hover {
    background-color: var(--color-primary-dark);
}
</style>
