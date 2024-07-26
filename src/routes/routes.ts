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
	AUTH: '/auth',
	VERIFICATION: '/verification',
	CHECKOUT: '/checkout',
	CHECKOUT_SUCCESS: '/checkout/success',
	CEHCKOUT_FAIL: '/checkout/fail',
	REGISTRATION: '/registration',
	EVENT: '/event',
	FREE_TRIAL: '/free-trial',
} as const

export type RouteKeys = keyof typeof ROUTES
