import styled, { css } from 'styled-components'

import designTokens from '../../../styles/degisn-tokens/design-tokens.tokens'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { NavigationMenuContainerProps } from './navigation-menu.types'

type Props = NavigationMenuContainerProps

export const NavigationMenuContainer = styled.div<Props>`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: ${({ $deviceType }) =>
		$deviceType === 'desktop' ? 'row' : 'column'};
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.section.gutter};

	margin: ${({ theme, $deviceType }) =>
		$deviceType === 'desktop' ? '0' : `${theme.layout.container.gutter} 0`};

	.menu-link {
		position: relative;
		width: ${({ $deviceType }) =>
			$deviceType === 'desktop' ? 'auto' : '100%'};

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

	div#user-buttons-container {
		width: ${({ $deviceType }) => ($deviceType === 'desktop' ? '100%' : '50%')};

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		.user-button {
			white-space: nowrap;
			width: auto;

			flex: 1 0 auto;

			padding: ${({ theme }) =>
				`${designTokens.layout.spacing.xsm} ${theme.layout.container.gutter}`};
		}

		#sign-up-button {
			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
				filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
			`}
		}
	}
`
