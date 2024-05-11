import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { NavigationMenuContainerProps } from './navigation-menu.types'

type Props = NavigationMenuContainerProps

export const NavigationMenuContainer = styled.div<Props>`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: ${({ $deviceType }) =>
		$deviceType === 'desktop' ? 'row' : 'column'};
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.section.gutter};

	margin: ${({ theme, $deviceType }) =>
		$deviceType === 'desktop' ? '0' : `${theme.layout.container.gutter} 0`};

	.menu-link {
		position: relative;
		width: ${({ $deviceType }) => $deviceType === 'mobile' && '100%'};

		text-decoration: none;
		text-align: left;

		${({ theme }) => getTypography(theme, 'subheading')}
		line-height: 100%;
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};

		&::before {
			content: '';
			position: absolute;
			top: -1rem;
			left: -0.25rem;
			bottom: -1rem;
			right: -0.25rem;
		}
	}
`
