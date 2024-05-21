import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'

import { SectionContainer } from '../../global/section/section.styles'

import { SubscriptionContainerProps } from './subscription.types'

type Props = SubscriptionContainerProps

export const SubscriptionContainer = styled(SectionContainer)<Props>`
	overflow-x: auto;

	align-items: ${({ $isScrolling }) =>
		$isScrolling ? 'flex-start' : 'center'};

	margin: ${({ theme, $deviceType }) =>
		`${getDeviceTypePadding(theme, $deviceType, 'section')} 0`};

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
`
