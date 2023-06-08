<template>
	<div class="container">
		<PostDetail
			v-for="post in info"
			:key="post.title"
			:title="post.title"
			:content="post.content"
			@sayHi="showAlert"
		/>
	</div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';
interface Post {
	title: string;
	content: string;
}

let info: Array<Post> = [
	{ title: 'Este es el post 1', content: 'Texto de ejemplo 1' },
	{ title: 'Este es el post 2', content: 'Texto de ejemplo 2' },
	{ title: 'Este es el post 3', content: 'Texto de ejemplo 3' },
	{ title: 'Este es el post 4', content: 'Texto de ejemplo 4' },
	{ title: 'Este es el post 5', content: 'Texto de ejemplo 5' },
	{ title: 'Este es el post 6', content: 'Texto de ejemplo 6' },
];

function showAlert(msq: string) {
	alert(msq);
}
</script>

<style scoped>
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
</style>
