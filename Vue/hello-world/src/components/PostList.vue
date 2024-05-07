<template>
    <div class="container">
        <PostDetail
            v-for="(post, index) in info"
            :key="index"
            :title="post.title"
            :description="post.description"
            @sayHi="showAlert"
            @sayLang="showConsole"
        />
    </div>
</template>

<script setup lang="ts">
import PostDetail from './PostDetail.vue'

interface IPost {
    title: string
    description: string
}

let info: Array<IPost> = [
    {
        title: 'Post 1',
        description: 'Description 1'
    },
    {
        title: 'Post 2',
        description: 'Description 2'
    },
    {
        title: 'Post 3',
        description: 'Description 3'
    },
    {
        title: 'Post 4',
        description: 'Description 4'
    },
    {
        title: 'Post 5',
        description: 'Description 5'
    },
    {
        title: 'Post 6',
        description: 'Description 6'
    },
    {
        title: 'Post 7',
        description: 'Description 7'
    },
    {
        title: 'Post 8',
        description: 'Description 8'
    },
    {
        title: 'Post 9',
        description: 'Description 9'
    },
    {
        title: 'Post 10',
        description: 'Description 10'
    }
]

const showAlert = (msg: string) => {
    alert(msg)
}

const showConsole = (msg: string) => {
    console.log(msg)
}
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
}
</style>
