import { create } from 'zustand'

import { AuthNavigationState } from './auth-navigation.types'

export const useAuthNavigationStore = create<AuthNavigationState>((set) => ({
	authDestination: null,
	setAuthDestination: (dest) => set({ authDestination: dest }),
}))
