import NavigationQueue from '../../global/navigation-queue/navigation-queue.component'

import { NavigationQueueBarProps } from './navigation-queue-bar.types'
import { NavigationQueueBarContainer } from './navigation-queue-bar.styles'

export default function NavigationQueueBar(props: NavigationQueueBarProps) {
	const { queueLength, currentQueue } = props

	return (
		<NavigationQueueBarContainer>
			{Array.from({ length: queueLength }).map((_, index) => (
				<NavigationQueue
					key={index}
					state={
						index === currentQueue
							? 'current'
							: index > currentQueue
							? 'notStarted'
							: 'complete'
					}
					number={index + 1}
				></NavigationQueue>
			))}
		</NavigationQueueBarContainer>
	)
}
