import styled from 'styled-components'

import { getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

import { FreeTrialContainerProps } from './free-trial.types'

type Props = FreeTrialContainerProps

export const FreeTrialContainer = styled(PageLayoutContainer)<Props>`
	position: relative;
	overflow: visible;

	gap: 0;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-image: url(${({ $backgroundImage }) => $backgroundImage});
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;

		opacity: 0.1;
		z-index: -1;
	}

	hr.free-trial-vertical-line {
		border: none;
		height: 6rem;
		width: 0.0625rem;

		margin: 2.5rem 0;

		background-color: ${({ theme }) =>
			getColour(theme, 'neutral', 'secondary', 'inactive')};
	}

	div#free-trial-contents-container {
		width: ${({ theme }) => theme.layout.section.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.page.gutter};
	}
`
