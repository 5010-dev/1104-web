import styled from 'styled-components'
import { motion } from 'framer-motion'

import { DeviceTypeStyledProp } from '../../../types/deviceType.types'
import { getDeviceTypePadding } from '../../../utils/deviceUtils'

type NavigationContainerProps = {
	$isOverlaped?: boolean
	$isScrolled?: boolean
}
type CombinedProps = DeviceTypeStyledProp & NavigationContainerProps

export const NavigationContainer = styled(motion.header)<CombinedProps>`
	position: ${(props) => (props.$isOverlaped ? 'fixed' : 'sticky')};
	top: 0;

	width: ${({ theme }) => theme.layout.component.width};

	z-index: 10;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding-top: ${({ theme }) => theme.layout.page.padding.mobile};
	padding-bottom: ${({ theme }) => theme.layout.page.padding.mobile};
	padding-left: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'page')};
	padding-right: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'page')};

	background-color: ${(props) =>
		props.$isScrolled
			? `${props.theme.colour.neutral.primary.active}`
			: 'rgba(0, 0, 0, 0)'};
	transition: background-color 0.25s;

	div.nav-bar-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		#logo {
			width: 5rem;
			height: auto;
		}

		button#menu-icon {
			all: unset;
			cursor: pointer;

			display: flex;
			justify-content: center;
			align-items: center;

			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

			width: 2.5rem;
			font-size: 1.75rem;
		}
	}
	div#nav-bar-left-container {
		width: 100%;
	}
	div#nav-bar-right-container {
		width: auto;
	}
`
