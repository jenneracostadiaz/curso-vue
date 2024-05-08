export default class {
	public uri = 'https://jsonplaceholder.typicode.com/posts';
	async getItems() {
		//TODO: fetch items from the server
		const response = await fetch(this.uri);
		const resp = await response.json();
		return resp;
	}
}
