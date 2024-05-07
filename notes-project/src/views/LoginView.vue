<template>
    <h1>Login</h1>
    <form>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
        <button type="submit" @click.prevent="loginuser">Login</button>
        <p>{{ message }}</p>
    </form>
</template>

<script setup lang="ts">
import router from '@/router'
import useAuth from '@/stores/auth'
import { ref } from 'vue'

const store = useAuth()

const email = ref('')
const password = ref('')
const message = ref('')

const loginuser = async () => {
    message.value = 'sending...'
    const response = await store.login(email.value, password.value)
    if (response == false) {
        message.value = 'Error logging in'
    } else {
        message.value = 'Logged in'
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
