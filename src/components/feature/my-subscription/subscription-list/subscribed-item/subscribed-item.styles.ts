import styled from 'styled-components'

import { getContainerStyle } from '../../../../../utils/style.utils'
import { getTypography } from '../../../../../utils/typo.utils'
import { getColour } from '../../../../../utils/colour.utils'

import { SubscribedItemContainerProps } from './subscribed-item.types'

export const SubscribedItemContainer = styled.div<SubscribedItemContainerProps>`
	width: 12rem;

	flex: 1 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${({ theme, $isExpired }) =>
		getContainerStyle(
			theme,
			'neutral',
			'secondary',
			'filled',
			'rounded2',
			$isExpired ? 0.05 : 0.1,
		)}
	padding: ${({ theme }) => theme.layout.container.padding.sm};

	text-align: left;

	div.subscribed-item-contents-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;

		p.subscribed-item-heading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme, $isExpired }) =>
				getColour(
					theme,
					'neutral',
					'secondary',
					$isExpired ? 'inactive' : 'active',
				)};
		}

		div.subscribed-item-period-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};
			flex-wrap: wrap;

			margin-top: ${({ theme }) => theme.layout.component.gutter};

			& > * {
				flex: 0 0 auto;
			}

			p.subscribed-item-timer {
				${({ theme }) => getTypography(theme, 'heading2')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}

			div.subscribed-item-date-container {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				span.subscribed-item-date {
					${({ theme }) => getTypography(theme, 'caption')}
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'inactive')};

					& > span {
						font-weight: bold;
					}
				}
			}
		}
	}

	.repurchase-button {
		align-self: center;
		margin-top: ${({ theme }) => theme.layout.component.gutter};
	}
`
