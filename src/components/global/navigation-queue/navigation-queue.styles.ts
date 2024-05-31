import styled, { css } from 'styled-components'

import { NavigationQueueContainerProps } from './navigation-queue.types'

import { hexToRgba, getColour } from '../../../utils/colour.utils'

type Props = NavigationQueueContainerProps

export const NavigationQueueContainer = styled.div<Props>`
	display: flex;
	justify-content: center;
	align-items: center;

	${(props) =>
		props.$state === 'current'
			? css`
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 1rem;
			  `
			: css`
					width: 1rem;
					height: 0.5rem;
					border-radius: 0.25rem;
			  `}

	background-color: ${({ theme }) =>
		hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.5)};

	${(props) =>
		props.$state === 'notStarted' &&
		css`
			opacity: 0.15;
		`};

	span {
		color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
		font-size: 0.875rem;
		font-weight: bold;
		text-align: center;
	}
`
