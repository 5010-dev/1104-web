import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'

import { SectionContainer } from '../../global/section/section.styles'

import { SubscriptionContainerProps } from './subscription.types'

type Props = SubscriptionContainerProps

export const SubscriptionContainer = styled(SectionContainer)<Props>`
	overflow-x: visible;

	margin: ${({ theme, $deviceType }) =>
		`${getDeviceTypePadding(theme, $deviceType, 'section')} 0`};

	padding: 0;

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
