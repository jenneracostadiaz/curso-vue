<template>
    <div>
        <select v-model="$i18n.locale">
            <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
            >
                <!-- Obtener el nombre a partir de su code, por ejemplo: en -> English -->

                {{ locale }}
            </option>
        </select>
    </div>
    <h1>{{ $t('message.hello', { name: username }) }}</h1>
    <p>{{ $t('message.welcome') }}</p>
    <p>{{ $t('message.products', { count: 4 }) }}</p>
    <p>{{ $t('message.comments', { count: 0 }) }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref('Jenner')
</script>
