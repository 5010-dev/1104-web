import styled from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'

import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'

export const ServiceContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	gap: ${({ theme }) => theme.layout.page.gutter};

	div.item-container {
		width: ${({ theme }) => theme.layout.container.width};
		min-width: 50%;
		margin-top: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};
		flex-wrap: wrap;

		div.image-container {
			width: ${({ theme }) => theme.layout.component.width};

			flex: 1 1 20rem;

			img.service-image {
				width: ${({ theme }) => theme.layout.component.width};
				max-width: ${({ $deviceType }) =>
					$deviceType !== 'desktop' ? '24rem' : ''};

				border-radius: ${({ theme }) =>
					theme.shape.filled.rounded1.borderRadii};
			}
		}

		div.text-container {
			width: ${({ theme }) => theme.layout.component.width};

			display: flex;
			flex: 1 0 40%;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			text-align: left;
			gap: ${({ theme }) => theme.layout.component.gutter};

			span.caption {
				${({ theme }) => getTypography(theme, 'body')}
				font-weight: bold;
				color: ${({ theme }) => theme.colour.accent.primary.active};
			}

			h2.heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) => theme.colour.neutral.secondary.active};
			}

			p.body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) => theme.colour.neutral.secondary.active};
			}

			.link-button {
				margin-top: ${({ theme }) => theme.layout.component.gutter};
			}
		}
	}

	> *:nth-child(even) {
		flex-direction: row !important;
	}
`
