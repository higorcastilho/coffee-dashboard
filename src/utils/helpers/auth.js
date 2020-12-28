export const setAuthToken = (token) => {
	localStorage.setItem('AUTH_TOKEN', token)
}

export const getAuthToken = () => {
	return localStorage.getItem('AUTH_TOKEN')
}

export const isLoggedIn = () => {
	let authToken = getAuthToken()
	return !!authToken
}

export const logout = () => {
	localStorage.removeItem('AUTH_TOKEN')
}