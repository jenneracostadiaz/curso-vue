<template>
    <ul class="for">
        <li v-for="country in countries" :key="country.code">
            {{ country.name }}
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue'

interface ICountry {
    code: string
    name: string
}

let countries: Ref<Array<ICountry>> = ref([
    {
        code: 'es',
        name: 'Spain'
    },
    {
        code: 'fr',
        name: 'France'
    },
    {
        code: 'it',
        name: 'Italy'
    },
    {
        code: 'de',
        name: 'Germany'
    },
    {
        code: 'pt',
        name: 'Portugal'
    },
    {
        code: 'uk',
        name: 'United Kingdom'
    },
    {
        code: 'us',
        name: 'United States'
    },
    {
        code: 'ca',
        name: 'Canada'
    },
    {
        code: 'au',
        name: 'Australia'
    },
    {
        code: 'nz',
        name: 'New Zealand'
    }
])
</script>
