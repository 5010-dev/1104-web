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
	loginUser: User
}

export interface AuthDataAction {
	updateAuthData: (key: string, value: string) => void
	updateLoginUser: (key: string, value: string | boolean) => void
	resetAuthData: () => void
	resetLoginUser: () => void
}

const initialState: AuthDataState = {
	email: '',
	password: '',
	verificationCode: '',
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
			})),
		resetLoginUser: () => set(initialState),
	}),
)
