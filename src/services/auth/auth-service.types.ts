export type UserAuthToken = {
	accessToken: string
	refreshToken: string
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
