<template>
    <h1>
        Login
    </h1>
    <input type="text" placeholder="Email" v-model="email" /> <br />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="login">Login</button>
    <div v-if="error"><p>User or password incorrect</p></div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import { useAuth } from '@/store/useAuth';
import router from '@/router';

const store = useAuth();

const email = ref('');
const password = ref('');
const error = ref(false);

const login = () => {
    error.value = store.login(email.value, password.value)
    if (!error.value) {
        router.push({name: '/'});
    }
}

</script>

<style scoped>
/* Your component styles go here */
</style>