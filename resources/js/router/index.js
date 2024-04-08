import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/page/HomeView.vue'
// import { useAuthStore } from '@/stores/auth.js'

const router = createRouter({
	linkActiveClass: 'nav-router__link--active',
	history: createWebHistory("/"),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/page/AboutView.vue'),
		},
		{
			path: '/services',
			name: 'services',
			component: () => import('../views/page/ServicesView.vue'),
		},
		{
			path: '/demo/input',
			name: 'demo.input',
			component: () => import('@/components/input/example/DemoPageView.vue'),
		},
		{
			path: '/demo/code',
			name: 'demo.code',
			component: () => import('@/views/demo/CodeView.vue'),
		},
		// {
		// 	path: '/panel',
		// 	name: 'panel',
		// 	component: () => import('../views/panel/DashboardView.vue'),
		// 	meta: { requiresAuth: true },
		// },
		// Enable vue-router fallback without 404 error code
		{
			path: '/:catchAll(.*)',
			name: 'error.404',
			component: () => import('../views/error/404.vue'),
		},
	],
    scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

// router.beforeEach(async (to, from, next) => {
// 	// ✅ This will work make sure the correct store is used for the current running app
// 	const auth = useAuthStore()
// 	// ✅ Login with remember me token and/or check is user authenticated
// 	await auth.isAuthenticated()
// 	// ✅ Redirect to panel if logged
// 	if (to.name == 'login' && auth.isLoggedIn.value) {
// 		next({ name: 'panel' })
// 	} else if (to.meta.requiresAuth && !auth.isLoggedIn.value) {
// 		// ✅ Redirect to login if not logged
// 		next({ name: 'login', query: { redirected_from: to.fullPath } })
// 	} else {
// 		// ✅ Continue
// 		next()
// 	}
// })

export default router
