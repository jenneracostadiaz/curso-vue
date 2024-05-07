<template>
    <div>Hola Mundo</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CycleOption',
    created() {
        console.log('CycleOption created')
    },
    mounted() {
        console.log('CycleOption mounted')
    },
    updated() {
        console.log('CycleOption updated')
    },
    unmounted() {
        console.log('CycleOption destroyed')
    }
})
</script>

<style scoped></style>
