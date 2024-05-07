<template>
  <button @click="($event) => createComment()">Create Comment</button>
</template>

<script setup lang="ts">
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'
const {
  mutate: createComment,
  loading: createCommentLoading,
  error: createCommentError,
  onDone,
  onError
} = useMutation(
  gql`
    mutation ($name: String!, $text: String!) {
      createComment(name: $name, text: $text)
    }
  `,
  () => ({
    variables: {
      name: 'User 2',
      text: 'Comment 2'
    },
    update: (cache, { data: { createComment } }) => {
      let data = cache.readQuery({ query: getAllComments })
      data = {
        ...data,
        comments: [...data.comments, createComment]
      }
      cache.writeQuery({ query: getAllComments, data })
    }
  })
)

onDone((result) => {
  console.log('onDone', result.data)
})

onError((error) => {
  console.log('onError', error)
  console.log('onError', error.graphQLErrors)
})
</script>
