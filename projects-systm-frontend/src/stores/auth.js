import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
	state: () => ({ authUser: null, authToken: null }),
	getters: {
		user: (state) => state.authUser,
		token: (state) => state.authToken,
	},
	actions: {
		async getToken() {
			await axios.get('sanctum/csrf-cookie');
		},
		async login(form) {
			await this.getToken();
			await axios
				.post('/api/auth/login', form)
				.then((res) => {
					console.log(res.data.data.token);
					this.authToken = res.data.data.token;
					this.authUser = res.data.data.user;
					this.router.push('/clients');
				})
				.catch((errors) => {
					console.log(errors.message);
				});
		},
		async register(form) {
			await this.getToken();
			await axios
				.post('/api/auth/register', form)
				.then((res) => {
					console.log(res.data.message);
					setTimeout(() => {
						this.router.push('/login');
					}, 2000);
				})
				.catch((errors) => {
					console.log(errors.message);
				});
		},
	},
	persist: true,
});

export const logoutUser = () => {
	const authStore = useAuthStore();
	const token = authStore.authToken;
	axios.defaults.headers.common['Authorization'] =
		'Bearer ' + token;
	axios
		.get('/api/auth/logout', authStore.authToken)
		.then(() => {
			authStore.authToken = null;
			authStore.authUser = null;
			authStore.router.push('/login');
		})
		.catch((errors) => {
			console.log(errors.message);
		});
};
