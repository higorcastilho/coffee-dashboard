const API_END_POINT = 'http://localhost:5858/api/v2'

class Http {
	async get (payload) {
		const { path } = payload
		return await fetch(API_END_POINT + path, {
			method: 'GET'
		})
	}

	async post (payload) {
		const { path, body } = payload
		return await fetch(API_END_POINT + path, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
	}
}

export default new Http