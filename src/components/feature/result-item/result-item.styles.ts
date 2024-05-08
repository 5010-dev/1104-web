import styled, { css } from 'styled-components'

import { ResultItemContainerProps } from './result-item.types'
import { CardContainer } from '../../global/card/card.styles'

import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba } from '../../../utils/colour.utils'

type Props = ResultItemContainerProps

export const ResultItemContainer = styled(CardContainer)<Props>`
	position: relative;

	width: ${({ theme }) => theme.layout.component.width};
	min-height: ${({ $deviceType }) =>
		$deviceType === 'mobile' ? '24rem' : '22.5rem'};

	justify-content: space-between;
	align-items: center;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${(props) => props.$imgUrl});
		background-position: right 50% bottom 30%;
		background-repeat: no-repeat;
		background-size: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? 'auto 50%' : '40% auto'};
		z-index: 0;

		${({ $isActivated }) =>
			$isActivated
				? css`
						filter: blur(2rem);
						-webkit-backdrop-filter: blur(2rem);
				  `
				: ''}
	}

	div.contents-container {
		width: ${({ theme }) => theme.layout.component.width};
		/* height: 100%; */

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		flex: 1 0 auto;

		z-index: 1;
	}

	div#inactive-contents-container {
		gap: ${({ theme }) => theme.layout.container.gutter};

		h3#voice {
			width: 80%;
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) => theme.colour.neutral.primary.active};
		}

		p#name {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				hexToRgba(theme.colour.neutral.primary.active, 0.5)};
		}
	}

	div#active-contents-container {
		/* gap: ${({ theme }) => theme.layout.section.gutter}; */
		justify-content: space-between;

		div#text-container {
			span#period {
				${({ theme }) => getTypography(theme, 'caption')}
				color: ${({ theme }) => theme.colour.neutral.primary.active};
			}

			h3#result {
				display: flex;
				flex-direction: column;

				${({ theme }) => getTypography(theme, 'heading1')}
				line-height: 130%;
				color: ${({ theme }) => theme.colour.neutral.primary.active};

				/* margin-bottom: ${({ theme }) => theme.layout.component.gutter}; */

				span#result-surfix {
					${({ theme }) => getTypography(theme, 'heading3')}
				}
			}
		}

		p#comment {
			width: 90%;

			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				hexToRgba(theme.colour.neutral.primary.active, 0.5)};
		}
	}

	.see-result-button {
		padding-right: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'container')};
		margin-bottom: ${({ theme }) => theme.layout.component.gutter};

		z-index: 1;
	}
`
