import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const CheckoutContainer = styled(PageLayoutContainer)`
	min-height: auto;

	width: ${({ theme }) => theme.layout.section.width};

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		margin-top: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? '1.5rem' : '4rem'};
		margin-bottom: 2rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#top-row {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			h1#heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			button#close-button {
				all: unset;
				cursor: pointer;

				position: relative;

				display: flex;
				justify-content: flex-end;
				align-items: center;

				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;

				font-size: 1.5rem;

				&::before {
					content: '';
					position: absolute;
					top: -1rem;
					right: -1rem;
					bottom: -1rem;
					left: -1rem;
				}
			}
		}

		div#item-columns-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: ${({ $deviceType }) =>
				$deviceType === 'desktop' ? 'row' : 'column'};
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.section.gutter};

			div.item-column {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: ${({ theme }) => theme.layout.container.gutter};
			}

			div#left-column {
				flex: 1 1 auto;
			}

			div#right-column {
				flex: 2 2 auto;
			}
		}
	}
`
