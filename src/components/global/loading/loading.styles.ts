import styled from 'styled-components'

import { hexToRgba, getColour } from '../../../utils/colour.utils'

export const LoadingContainer = styled.div`
	overflow: hidden;

	position: fixed;
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;

	display: flex;
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

	#loading-anim {
		position: relative;
	}
`
