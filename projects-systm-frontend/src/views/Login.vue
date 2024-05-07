<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const form = ref({
	email: '',
	password: '',
});
</script>
<template>
	<div class="login">
		<form
			@submit.prevent="($event) => authStore.login(form)"
			class="login__form"
		>
			<h2 class="login__form__title">Login</h2>
			<div class="login__form__input">
				<label for="email">Email</label>
				<input
					type="email"
					v-model="form.email"
					id="email"
					name="email"
					placeholder="mail@email.com"
					required
					autoFocus
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
				Login
			</button>
		</form>
		<!-- Register -->
		<footer class="login__footer">
			<RouterLink to="/register"
				>Don't have an account? Register</RouterLink
			>
		</footer>
	</div>
</template>
