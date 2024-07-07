import { create } from 'zustand'

import { AuthDataState, AuthDataAction } from './auth-data.types'

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
				// isUserDataLoaded: false,
			})),
		resetPasswordResetToken: () =>
			set((state) => ({
				...state,
				passwordResetToken: '',
			})),
		resetLoginUser: () => set(initialState),
	}),
)
