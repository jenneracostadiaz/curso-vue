import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

// Import your views/components here

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
