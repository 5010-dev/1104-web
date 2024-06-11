export type UserAuthToken = {
	access: string
	refresh: string
}

export interface UserAuthData {
	email: string
	password: string
}

export interface EmailVerification {
	access: string
	code: string
}

export interface SignUpResponse {
	data: {
		email: string
		token: UserAuthToken
		is_email_verified: boolean
	}
}

export interface LoginResponse {
	data: {
		email: string
		token: UserAuthToken
		is_email_verified: boolean
	}
}
