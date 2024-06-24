import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getContainerStyle } from '../../../../utils/style.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

import PageLayoutContainer from '../../../global/page-layout/page-layout.styles'
import { SectionContainer } from '../../../../components/global/section/section.styles'

export const CheckoutFailContainer = styled(PageLayoutContainer)`
	justify-content: center;
`

export const CheckoutFailSectionContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.container.maxWidth};

	div#checkout-fail-title-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 24rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		div#checkout-fail-body-container {
			/* width: ${({ theme }) => theme.layout.container.width}; */
			max-width: 24rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			padding: ${({ theme, $deviceType }) =>
				getDeviceTypePadding(theme, $deviceType, 'container')};

			${({ theme }) =>
				getContainerStyle(
					theme,
					'neutral',
					'tertiary',
					'filled',
					'rounded2',
					1,
				)}

			p.checkout-fail-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
				text-align: left;
			}
		}
	}
`
