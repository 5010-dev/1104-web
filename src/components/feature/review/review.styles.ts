import styled, { css } from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'

import { ReviewItemContainerProps } from './review.types'

import { getColour, hexToRgba } from '../../../utils/colour.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'

export const ReviewContainer = styled(SectionContainer)`
	overflow: scroll;
	align-items: flex-start;

	&::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;

	background-color: #ffffff;

	div#reviews-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'container')};
	}
`

export const ReviewItemContainer = styled.div<ReviewItemContainerProps>`
	min-width: 30rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'component')};

	color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
	text-align: left;

	div.rating-container {
		color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
		font-size: 1.25rem;

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0 0.5rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
			);
			filter: drop-shadow(
				0 0 0.5rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
			);
		`}

		margin-bottom: 0.75rem;
	}

	div.name-container {
		display: flex;
		gap: 0.5rem;

		span.name {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
		}
	}

	p.body {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
	}
`
