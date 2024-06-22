export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	SERVICE: '/service',
	SERVICE_ITEM: {
		path: '/service-item/:id',
		createPath: (id: number) => `/service-item/${id}`,
	},
	PARTNERSHIP: '/partnership',
	ACCOUNT: '/account',
	LOGIN: '/login',
	VERIFICATION: '/verification',
	CHECKOUT: '/checkout',
	REGISTRATION: '/registration',
	PRE_ORDER: '/pre-oreder',
	FREE_TRIAL: '/free-trial',
} as const

export type RouteKeys = keyof typeof ROUTES
