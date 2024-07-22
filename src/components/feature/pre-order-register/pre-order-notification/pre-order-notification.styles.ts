import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

import { PreOrderNotificationContainerProps } from './pre-order-notification.types'

type Props = PreOrderNotificationContainerProps

export const PreOrderNotificationContainer = styled.div<Props>`
	position: relative;

	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.container.maxWidth};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	/* margin-top: ${({ theme, $deviceType }) =>
		$deviceType === 'mobile'
			? theme.layout.container.gutter
			: theme.layout.section.gutter}; */

	margin-top: ${({ theme }) => theme.layout.section.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	div#pre-order-notification-contents-container {
		width: ${({ theme }) => theme.layout.container.width};
		/* max-width: 28rem; */

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		background-image: url(${({ $imageUrl }) => $imageUrl});
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;

		border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.padding.lg} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};

		& > * {
			max-width: 28rem;
		}

		div#pre-order-notification-quote-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			span.pre-order-notification-quote {
				${({ theme }) => getTypography(theme, 'quote')}
				font-size: 1.5rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}

			span#pre-order-notification-quote-dots {
				line-height: 50%;
			}
		}

		p.pre-order-notification-body {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		div#pre-order-notification-button-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;

			span#pre-order-notification-button-caption {
				${({ theme }) => getTypography(theme, 'body')}
				font-size: 0.875rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}
		}
	}
`
