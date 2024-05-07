<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore();
const form = ref({
	email: '',
	password: '',
});
</script>
<template>
	<div class="login">
		<form
			@submit.prevent="($event) => authStore.register(form)"
			class="login__form"
		>
			<h2 class="login__form__title">Register</h2>
			<div class="login__form__input">
				<label for="name">Name</label>
				<input
					type="text"
					v-model="form.name"
					id="name"
					name="name"
					placeholder="John Doe"
					required
					autofocus
				/>
			</div>
			<div class="login__form__input">
				<label for="email">Email</label>
				<input
					type="email"
					v-model="form.email"
					id="email"
					name="email"
					placeholder="mail@email.com"
					required
				/>
			</div>
			<div class="login__form__input">
				<label for="password">Password</label>
				<input
					type="password"
					v-model="form.password"
					id="password"
					name="password"
					placeholder="********"
					required
				/>
			</div>
			<button type="submit" class="login__form__button">
				Register
			</button>
		</form>
		<!-- Login -->
		<footer class="login__footer">
			<RouterLink to="/login"
				>Already have an account? Login</RouterLink
			>
		</footer>
	</div>
</template>
