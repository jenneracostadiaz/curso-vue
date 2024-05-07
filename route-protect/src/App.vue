<template>
    <div class="container">
        <input type="text" v-model="note" />
        <button @click="sendToServer">Enviar nota al servidor</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let note = ref('')

const sendToServer = async () => {
    const response = await fetch('asdasd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer xxxxxxxx'
        },
        body: JSON.stringify({ note: note.value })
    })
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

button:active {
    background-color: #004080;
}
</style>
