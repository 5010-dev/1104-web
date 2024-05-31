type State = 'complete' | 'current' | 'notStarted'

export type NavigationQueueProps = {
	state: State
	number: number
}

export type NavigationQueueContainerProps = {
	$state: State
}
