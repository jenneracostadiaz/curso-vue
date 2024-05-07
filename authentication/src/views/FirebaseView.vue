<template>
    <form>
        <div class="group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" />
        </div>
        <div class="group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <div class="group">
            <button type="submit" @click.prevent="authUser">Login</button>
        </div>
        <div class="group">
            {{ email }}
            {{ password }}
        </div>
    </form>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const authUser = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            alert('Login successful')
        })
        .catch((error) => {
            alert('Error: ' + error.message)
        })
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 300px;
    margin: 4rem auto;
}

.group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-weight: bold;
}

input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
}

button {
    margin-top: 1rem;
    padding: 0.75rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    font-size: 0.8rem;
}
</style>
