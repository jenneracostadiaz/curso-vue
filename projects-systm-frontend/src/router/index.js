import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import LoginView from '../views/Login.vue';
import RegisterView from '../views/Register.vue';
import ClientsView from '../views/Clients/Index.vue';
import BudgetsView from '../views/Budgets/Index.vue';
import ProjectsView from '../views/Projects/Index.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/login',
			name: 'login',
			component: LoginView,
		},
		{
			path: '/register',
			name: 'register',
			component: RegisterView,
		},
		{
			path: '/clients',
			name: 'clients',
			component: ClientsView,
		},
		{
			path: '/budgets',
			name: 'budgets',
			component: BudgetsView,
		},
		{
			path: '/projects',
			name: 'projects',
			component: ProjectsView,
		},
	],
});

router.beforeEach(async (to) => {
	const publicPages = ['/login', '/register'];
	const authRequired = !publicPages.includes(to.path);
	const auth = useAuthStore();
	if (authRequired && !auth.user) {
		auth.returnUrl = to.fullPath;
		return '/login';
	}
});

export default router;
