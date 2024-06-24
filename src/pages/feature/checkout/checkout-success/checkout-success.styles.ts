import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getContainerStyle } from '../../../../utils/style.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

import PageLayoutContainer from '../../../global/page-layout/page-layout.styles'
import { SectionContainer } from '../../../../components/global/section/section.styles'

export const CheckoutSuccessContainer = styled(PageLayoutContainer)`
	justify-content: center;
`

export const CheckoutSuccessSectionContainer = styled(SectionContainer)`
	/* NOTE: 추후 서비스 세팅 자동화 기능 추가시 사용 */
	/* div#button-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: ${({ theme }) => theme.layout.container.gutter};
	} */

	max-width: ${({ theme }) => theme.layout.container.maxWidth};

	div#checkout-success-title-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 24rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		p.checkout-success-subheading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			text-align: center;
		}
	}

	div#checkout-success-body-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 24rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.container.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'container')};

		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'tertiary', 'filled', 'rounded2', 1)}

		p.checkout-success-body {
			${({ theme }) => getTypography(theme, 'body')}
			font-size: 0.875rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			text-align: left;
		}
	}
`
