export type UserAuthToken = {
	access: string
	refresh: string
}

export interface UserAuthData {
	email: string
	password: string
}

export interface SignupPayload {
	email: string
	password: string
	referral_code?: string
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

export interface ChangePassword {
	password_reset_token: string
	password: string
}

export interface ChangePasswordResponse {
	token: UserAuthToken
	email: string
	is_email_verified: boolean
}
