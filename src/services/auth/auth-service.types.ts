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

/**
 * 로그인한 사용자 데이터의 응답 타입 정의
 */
export interface GetLoginUserDataResponse {
	id: number
	email: string
	is_email_verified: boolean
	seller: number
	first_purchase_discount_percentage: string
	is_first_purchased: boolean
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
