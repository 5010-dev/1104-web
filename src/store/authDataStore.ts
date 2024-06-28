import { create } from 'zustand'
import { ExchangeName } from './exchangeDataStore'

export type User = {
	userId: string
	isEmailVerified: boolean
	access: string
	tradingviewId: string
	exchange: ExchangeName | ''
	uid: string
	asset: string
}

export interface AuthDataState {
	email: string
	password: string
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

const initialState: AuthDataState = {
	email: '',
	password: '',
	verificationCode: '',
	isUserDataLoaded: false,
	passwordResetToken: '',
	loginUser: {
		userId: '',
		isEmailVerified: false,
		access: '',
		tradingviewId: '',
		exchange: '',
		uid: '',
		asset: '',
	},
}

export const useAuthDataStore = create<AuthDataState & AuthDataAction>(
	(set) => ({
		...initialState,
		updateAuthData: (key, value) =>
			set((state) => ({ ...state, [key]: value })),
		updateIsUserDataLoaded: (value) =>
			set((state) => ({ ...state, isUserDataLoaded: value })),
		updateLoginUser: (key, value) =>
			set((state) => ({
				...state,
				loginUser: { ...state.loginUser, [key]: value },
			})),
		resetAuthData: () =>
			set((state) => ({
				...state,
				email: '',
				password: '',
				verificationCode: '',
				isUserDataLoaded: false,
			})),
		resetPasswordResetToken: () =>
			set((state) => ({
				...state,
				passwordResetToken: '',
			})),
		resetLoginUser: () => set(initialState),
	}),
)
