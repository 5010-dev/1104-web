import { create } from 'zustand'

export interface AuthDataState {
	email: string
	password: string
	verificationCode: string
	loginUser: {
		userId: string
		tradingviewId: string
	}
}

export interface AuthDataAction {
	updateAuthData: (key: string, value: string) => void
	updateLoginUser: (key: string, value: string) => void
	resetAuthData: () => void
	resetLoginUser: () => void
}

const initialState: AuthDataState = {
	email: '',
	password: '',
	verificationCode: '',
	loginUser: {
		userId: '',
		tradingviewId: '',
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
