import { ExchangeName } from '../exchange-data/exchange-data.types'

export type User = {
	userId: string
	isEmailVerified: boolean
	seller: number | undefined
	first_purchase_discount_percentage: string | undefined
	is_first_purchased: boolean
	access: string
	tradingviewId: string
	exchange: ExchangeName | ''
	uid: string
	asset: string
}

export interface AuthDataState {
	email: string
	password: string
	sellerCode: string
	verificationCode: string
	isUserDataLoaded: boolean
	passwordResetToken: string
	loginUser: User
}

export interface AuthDataAction {
	updateAuthData: (key: string, value: string) => void
	updateIsUserDataLoaded: (value: boolean) => void
	updateLoginUser: (key: string, value: string | boolean) => void
	resetAuthData: () => void
	resetPasswordResetToken: () => void
	resetLoginUser: () => void
}
