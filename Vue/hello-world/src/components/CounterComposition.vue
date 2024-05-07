<template>
    <div class="counter-template">
        <button @click="discCounter">-</button>
        <h3>{{ counter }}</h3>
        <button @click="addCounter">+</button>
    </div>
</template>

<script lang="ts" setup>
import { type Ref, ref } from 'vue'

let counter: Ref<number> = ref(0)
const addCounter = (): number => counter.value++
const discCounter = (): number => counter.value--
</script>

<style scoped>
.counter-template {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
}

.counter-template button {
    padding: 10px 15px;
    background-color: #f00;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.counter-template button:hover {
    background-color: #f55;
}

.counter-template h3 {
    font-size: 2rem;
}
</style>
