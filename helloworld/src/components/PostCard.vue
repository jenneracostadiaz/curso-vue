<template>
	<div class="post-card">
		<h3>Titulo</h3>
		<p>
			Lorem ipsum dolor sit, amet consectetur adipisicing
			elit. Quidem in cupiditate recusandae. Quae sed
			distinctio tenetur illum? Expedita, quas. Explicabo
			facere repellendus qui corporis inventore ratione
			expedita recusandae hic totam.
		</p>
		<PostButton />
	</div>
</template>

<script lang="ts" setup>
import PostButton from './PostButton.vue';
</script>

<style scoped>
.post-card {
	border-radius: 15px;
	padding: 10px;
	margin: 5px;
	border: 1px solid #ccc;
}
</style>
