import { create } from 'zustand'

export interface AuthDataState {
	email: string
	password: string
	verificationCode: string
	loginUser: {
		userId: string
	}
}

export interface AuthDataAction {
	updateAuthData: (key: string, value: string) => void
	updateLoginUser: (value: string) => void
	resetAuthData: () => void
	resetLoginUser: () => void
}

export const useAuthDataStore = create<AuthDataState & AuthDataAction>(
	(set) => ({
		email: '',
		password: '',
		verificationCode: '',
		loginUser: {
			userId: '',
		},
		updateAuthData: (key, value) =>
			set((state) => ({ ...state, [key]: value })),
		updateLoginUser: (value) =>
			set((state) => ({
				...state,
				loginUser: { userId: value },
			})),
		resetAuthData: () =>
			set((state) => ({
				...state,
				email: '',
				password: '',
				verificationCode: '',
			})),
		resetLoginUser: () =>
			set((state) => ({ ...state, loginUser: { userId: '' } })),
	}),
)
