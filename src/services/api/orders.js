import Http from '../http'

class Orders {
	async index (limit, offset) {
		try {
			const params = new URLSearchParams({ limit, offset })
			const payload = { path: `/show-orders?${params.toString()}` }
			
			const response = await Http.get(payload)
			const data = await response.json()
			return data
		} catch (error) {
			console.log(error)
		}
	}
}

export default new Orders