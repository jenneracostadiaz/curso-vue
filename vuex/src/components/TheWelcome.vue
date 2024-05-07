<template>
    <h1>Counter</h1>
    <h2>{{ counter }} x 2 = {{ times2 }}</h2>
    <button @click="increment">Increment</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => store.commit('setCounter', counter.value + 1)
</script>

<style scoped lang="scss"></style>
