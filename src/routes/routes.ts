export const ROUTES = {
	HOME: '/',
	ABOUT: '/about',
	SERVICE: '/service',
	SERVICE_ITEM: (id: string) => `/service/${id}`,
	PARTNERSHIP: '/partnership',
	ACCOUNT: '/account',
	LOGIN: '/login',
	VERIFICATION: '/verification',
	CHECKOUT: '/checkout',
	REGISTRATION: '/registration',
	PRE_ORDER: '/pre-oreder',
} as const

export type RouteKeys = keyof typeof ROUTES
