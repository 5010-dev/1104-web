import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'

import { SectionContainer } from '../../global/section/section.styles'

import { SubscriptionContainerProps } from './subscription.types'

type Props = SubscriptionContainerProps

export const SubscriptionContainer = styled(SectionContainer)<Props>`
	overflow-x: visible;

	padding: ${({ theme, $deviceType }) =>
		`${getDeviceTypePadding(theme, $deviceType, 'section')} 0`};

	div#section-heading-container {
		width: ${({ theme }) => theme.layout.container.width};
		padding: ${({ theme, $deviceType }) =>
			`0 ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

		text-align: center;

		span#section-category-text {
			${({ theme }) => getTypography(theme, 'body')}
			font-weight: bold;
			color: ${({ theme }) => theme.colour.accent.primary.active};
		}

		h1#section-heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) => theme.colour.neutral.secondary.active};
		}
	}

	div#scrolling-container {
		width: 100%;

		overflow-x: auto;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: ${({ $isScrolling }) =>
			$isScrolling ? 'flex-start' : 'center'};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#items-container {
			width: auto;
			display: flex;
			flex-direction: row;
			align-items: stretch;
			gap: ${({ theme, $deviceType }) =>
				$deviceType === 'mobile'
					? theme.layout.container.gutter
					: theme.layout.section.gutter};
		}
	}
`
