export interface UserAuthData {
	email: string
	password: string
}

export interface SignUpResponse {
	token: string
	email: string
}
