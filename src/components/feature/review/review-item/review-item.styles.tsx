import styled, { css } from 'styled-components'

import { ReviewItemContainerProps } from '../review.types'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getColour, hexToRgba } from '../../../../utils/colour.utils'
import { getTypography } from '../../../../utils/typo.utils'

export const ReviewItemContainer = styled.div<ReviewItemContainerProps>`
	min-width: ${({ $deviceType }) =>
		$deviceType === 'mobile' ? '15rem' : '30rem'};

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
				0 0 0.25rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
			);
			filter: drop-shadow(
				0 0 0.25rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
			);
		`}

		margin-bottom: 0.75rem;
	}

	div.name-container {
		display: flex;
		align-items: center;

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
