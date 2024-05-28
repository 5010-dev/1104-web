import styled from 'styled-components'

import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { AnimationPanelContainerProps } from './animation-panel.types'
import { getTypography } from '../../../utils/typo.utils'

type Props = AnimationPanelContainerProps

export const AnimationPanelContainer = styled.div<Props>`
	overflow: hidden;

	position: fixed;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	pointer-events: none;
	z-index: 100;

	div#background-panel {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		background-color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.5)};

		filter: blur(1.5rem);
		backdrop-filter: blur(1.5rem);
		-webkit-backdrop-filter: blur(1.5rem);
	}

	#lottie-anim {
		width: ${({ $animationSize }) => $animationSize && $animationSize};
		position: relative;
	}

	span#animation-text {
		position: absolute;
		bottom: 50%;
		transform: translateY(350%);
		${({ theme }) => getTypography(theme, 'heading3')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
		z-index: 100;
	}
`
