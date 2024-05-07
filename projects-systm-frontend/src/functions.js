import { useAuthStore } from '@/stores/auth';
import axios from 'axios';
export async function sendRequest(
	method,
	params,
	url,
	redirect = ''
) {
	const authStore = useAuthStore();
	axios.defaults.headers.common['Authorization'] =
		'Bearer ' + authStore.authToken;
	let res;
	await axios({
		method: method,
		url: url,
		data: params,
	})
		.then((response) => {
			res = response.data.status;
			console.log(response.data.message);
			setTimeout(
				() =>
					redirect != ''
						? (window.location.href = redirect)
						: '',
				2000
			);
		})
		.catch((errors) => {
			console.log(errors.message);
		});
	return res;
}
