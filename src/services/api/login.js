import Http from '../http'

class Login {
	async signIn (email, password) {
		try {
			const payload = { path: '/login', body: { email, password }}
			const response = await Http.post(payload)
			const data = await response.json()
			if (data.accessToken) {
				return data.accessToken
			} else {
				throw new Error('No token was provided')
			}
		} catch (err) {
			console.error(err)
		}
	}
}

export default new Login