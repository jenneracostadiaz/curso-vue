<template>
  <h1>Comments</h1>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <ul v-else>
    <li v-for="comment in result.getCommentsFromUser" :key="comment.name">
      <strong>{{ comment.name }}</strong
      >: {{ comment.text }}
    </li>
  </ul>
  <button @click="refetch()">Refetch</button>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const { result, loading, error, refetch, onResult, onError } = useQuery(
  gql`
    query ($name: String!) {
      getCommentsFromUser(name: $name) {
        name
        text
      }
    }
  `,
  () => ({
    name: 'User 1'
  }),
  {
    fetchPolicy: 'cache-and-network',
    pollInterval: 5000
  }
)

onResult((result) => {
  console.log('onResult', result.data)
  console.log('onResult', result.loading)
  console.log('onResult', result.networkStatus)
})

onError((error) => {
  console.log('onError', error)
  console.log('onError', error.graphQLErrors)
})
</script>

<style scoped></style>
