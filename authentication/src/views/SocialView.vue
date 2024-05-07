<template>
    <h1>Social Login</h1>
    <div class="buttons-login">
        <button @click="loginGoogle">Login with Google</button>
        <button>Login with Facebook</button>
        <button>Login with Twitter</button>
        <button>Login with Github</button>
    </div>
</template>

<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const googleProvider = new GoogleAuthProvider()
const auth = getAuth()

const loginGoogle = () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            alert('Login success' + token)
        })
        .catch((error) => {
            alert('Login failed' + error)
        })
}
</script>

<style scoped>
.buttons-login {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

button {
    flex: 1 1 200px;
    padding: 10px;
    border: none;
    background-color: #f1f1f1;
    cursor: pointer;
}

button:hover {
    background-color: #e1e1e1;
}

button:active {
    background-color: #d1d1d1;
}

button:focus {
    outline: none;
}

h1 {
    text-align: center;
}
</style>
