export interface AuthNavigationState {
	authDestination: string | null
	setAuthDestination: (dest: string | null) => void
}
