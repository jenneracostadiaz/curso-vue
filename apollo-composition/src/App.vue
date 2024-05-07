<template>
  <ul>
    <li v-for="(sub, index) in subs" :key="index">
      <strong>{{ sub.name }}</strong
      >: {{ sub.text }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useSubscription } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import { ref, watch } from 'vue'

const subs = ref([])

const { result } = useSubscription(gql`
  subscription {
    commentCreated {
      name
      text
    }
  }
`)

watch(result, (data) => {
  subs.value.push(data.commentCreated)
})
</script>
