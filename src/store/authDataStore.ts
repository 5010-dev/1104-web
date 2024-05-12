import { create } from 'zustand'

export interface AuthDataState {
	email: string
	password: string
}

export interface AuthDataAction {
	updateAuthData: (key: string, value: string) => void
}

export const useAuthDataStore = create<AuthDataState & AuthDataAction>(
	(set) => ({
		email: '',
		password: '',
		updateAuthData: (key, value) =>
			set((state) => ({ ...state, [key]: value })),
	}),
)
