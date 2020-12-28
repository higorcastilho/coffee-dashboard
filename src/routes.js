import VueRouter from 'vue-router'

import Login from './views/Login'
import Overview from './views/Overview'

import { isLoggedIn } from './utils/helpers/auth'

const routes = [
	{ 
		path: '/', 
		component: Overview,
		meta: {
			allowAnonymous: false
		} 
	},
	{ 
		path: '/dashboard-login', 
		component: Login,
		meta: {
			allowAnonymous: true
		} 
	}
]

const router = new VueRouter({ routes })

router.beforeEach( (to, from, next) => {
	
	if (to.path === '/dashboard-login' && isLoggedIn()) {
		next({ path: '/dashboard' })
	
	} else if (!isLoggedIn() && !to.meta.allowAnonymous) {
		next({
			path: '/dashboard-login',
			query: { redirect: to.fullPath }
		})
	
	}  else {
		next()
	}
})

export default router