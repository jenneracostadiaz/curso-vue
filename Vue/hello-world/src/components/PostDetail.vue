<template>
    <div class="post">
        <h3 class="title">{{ props.title }}</h3>
        <p class="description">
            {{ props.description }}
        </p>
        <input type="text" v-model="inputValue" placeholder="Your Name" />
        <div class="buttons-content">
            <button @click="handleClickAlert">Say Hi</button>
            <button @click="handleClickConsole">Created by</button>
        </div>
        <p>
            <small>{{ message }}</small>
        </p>
    </div>
</template>

<script setup lang="ts">
import { type Ref, ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
    title: String,
    description: String
})

const emit = defineEmits(['sayHi', 'sayLang'])

const handleClickAlert = () => {
    emit('sayHi', `Hola ${inputValue.value}!`)
}

const handleClickConsole = () => {
    message.value = `${props.title} created by ${inputValue.value}`
    emit('sayLang', message.value)
}

let inputValue: Ref<string> = ref('')
let message: Ref<string> = ref('')
</script>

<style scoped>
.post {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.description {
    font-size: 1rem;
    font-weight: 400;
}

.buttons-content {
    display: flex;
    justify-content: center;
    gap: 10px;
}

input[type='text'] {
    padding: 15px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 10px;
}

.buttons-content button {
    width: 100%;
    padding: 10px 20px;
    background-color: #f00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

small {
    font-size: 0.8rem;
    color: #666;
}
</style>
