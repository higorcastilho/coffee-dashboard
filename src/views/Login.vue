<template>
	<div id="login-view">
		<main class="login-card">
			<h1>Login</h1>
			<hr/>

			<Input 
				@handleChange="handleEmailChange($event)" 
				placeholder="email" 
				icon="envelope" 
			/>

			<Input 
				@handleChange="handlePasswordChange($event)" 
				icon="lock"
				placeholder="senha" 
			/>
			<p>Esqueci minha senha</p>
			<button @click="handleLogin">Entrar</button>
		</main>
	</div>
</template>
<script>
import Input from '../components/Input'
import Login from '../services/api/login'
import { setAuthToken } from '../utils/helpers/auth'
export default {
  name: 'Login',
  components: {
		Input
  },
  data() {
		return {
			email: '',
			password: ''
		}
  },
  methods: {
		handleEmailChange(payload) {
			this.email = payload
		},
		handlePasswordChange(payload) {
			this.password = payload
		},
		async handleLogin() {
			Login.signIn(this.email, this.password).then( res => {
				setAuthToken(res)
				document.location.reload(true)
			})
		}
  }
}
</script>

<style scoped>
	#login-view {
		position: relative;
		height: 100vh;
		width: 100vw;
	}	
	.login-card {
		position: absolute;
		width: 45rem;
		left: 50%;
		top: 50%;
		height: 40rem;
		transform: translate(-50%, -50%);
		box-shadow: 0 0 2rem gray;
		border-radius: .5rem;	
	}
	.login-card > h1 {
		margin: 3rem 0;
		font-size: 2.8rem;
	}
	.login-card > p {
		margin: 2rem 0;
		cursor: pointer;
	}
	.login-card > button {
		width: 25rem;
		height: 5rem;
		border-radius: 2rem;
		border: none;
		background: #29a746;
		color: white;
		font-size: 1.5rem;
		font-weight: bold;
		cursor: pointer;
		margin-top: .5rem;
	}
	@media (max-width: 700px) {
		.login-card {
			width: 33rem;
		}
	}
</style>