export type UserAuthToken = {
	access_token: string
	refresh_token: string
}

export interface UserAuthData {
	email: string
	password: string
}

export interface SignUpResponse {
	data: {
		email: string
		token: UserAuthToken
	}
}

export interface LoginResponse {
	data: {
		email: string
		token: UserAuthToken
	}
}
