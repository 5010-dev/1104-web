import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba } from '../../../utils/colour.utils'

import { NavigationContainerProps } from './navigation.types'

type Props = NavigationContainerProps

export const NavigationContainer = styled(motion.header)<Props>`
	position: ${(props) => (props.$isOverlaped ? 'fixed' : 'sticky')};
	top: 0;

	width: ${({ theme }) => theme.layout.component.width};

	z-index: 10;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.section.gutter};

	padding: ${({ theme, $deviceType }) =>
		`${getDeviceTypePadding(
			theme,
			$deviceType,
			'container',
		)} ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

	& > * {
		z-index: 10;
	}

	div#background-panel {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		width: ${({ theme }) => theme.layout.component.width};
		height: 100%;

		z-index: 5;

		${({ theme, $isScrolled }) =>
			$isScrolled
				? css`
						background-color: ${hexToRgba(
							theme.colour.neutral.primary.active,
							0.5,
						)};
						-webkit-backdrop-filter: blur(1rem);
						backdrop-filter: blur(1rem);
				  `
				: css`
						background-color: ${hexToRgba(
							theme.colour.neutral.primary.active,
							0,
						)};
				  `}
		transition: background-color 0.25s;

		${({ theme, $isMenuOpen }) =>
			$isMenuOpen &&
			css`
				background-color: ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.5,
				)};
				-webkit-backdrop-filter: blur(1rem);
				backdrop-filter: blur(1rem);
			`}
	}

	div#nav-bar {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		div.nav-bar-container {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;

			#home-link {
				position: relative;

				text-decoration: none;
				line-height: 0;

				&::before {
					content: '';
					position: absolute;
					top: -1rem;
					right: -1rem;
					bottom: -1rem;
					left: -1rem;
				}

				#logo {
					width: 4rem;
					height: auto;
				}
			}

			button#menu-icon {
				all: unset;
				cursor: pointer;

				position: relative;

				display: flex;
				justify-content: flex-end;
				align-items: center;

				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;

				font-size: 1.5rem;

				&::before {
					content: '';
					position: absolute;
					top: -1rem;
					right: -1rem;
					bottom: -1rem;
					left: -1rem;
				}
			}
		}
		div#nav-bar-left-container {
			width: 100%;
		}
		div#nav-bar-right-container {
			width: auto;
		}
	}

	div#mobile-navigation-menu-container {
		width: ${({ theme }) => theme.layout.container.width};
	}
`
