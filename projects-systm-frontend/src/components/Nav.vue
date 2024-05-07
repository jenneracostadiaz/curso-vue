<script setup>
import { useAuthStore, logoutUser } from '../stores/auth';
import { RouterLink } from 'vue-router';
const authStore = useAuthStore();
</script>
<template>
	<header class="main-header">
		<div class="main-header__container container">
			<nav class="brand">
				<h1>Projects {Jn}</h1>
			</nav>
			<nav class="nav-main" v-if="authStore.user">
				<ul>
					<li>
						<RouterLink to="/clients">Clients</RouterLink>
					</li>
					<li>
						<RouterLink to="/budgets">Budgets</RouterLink>
					</li>
					<li>
						<RouterLink to="/projects">Projects</RouterLink>
					</li>
				</ul>
			</nav>
			<nav class="nav-main" v-if="authStore.user">
				<ul>
					<li>
						<a href="#">{{ authStore.user.name }}</a>
					</li>
					<li>
						<button @click="logoutUser()">Logout</button>
					</li>
				</ul>
			</nav>
			<nav class="nav-main" v-if="!authStore.user">
				<ul>
					<li>
						<RouterLink to="/login">Login</RouterLink>
					</li>
					<li>
						<RouterLink to="/register">Register</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>
