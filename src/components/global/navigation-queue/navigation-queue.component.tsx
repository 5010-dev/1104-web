import { NavigationQueueProps } from './navigation-queue.types'

import { NavigationQueueContainer } from './navigation-queue.styles'

export default function NavigationQueue(props: NavigationQueueProps) {
	const { state, number } = props

	return (
		<NavigationQueueContainer $state={state}>
			{state === 'current' ? <span>{number}</span> : null}
		</NavigationQueueContainer>
	)
}
