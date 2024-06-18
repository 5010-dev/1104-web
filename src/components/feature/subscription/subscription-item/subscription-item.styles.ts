import styled, { css } from 'styled-components'

import { getContainerStyle } from '../../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { getColour, hexToRgba } from '../../../../utils/colour.utils'

import { SubscriptionItemContainerProps } from './subscription-item.typs'

type Props = SubscriptionItemContainerProps

export const SubscriptionItemContainer = styled.div<Props>`
	position: relative;

	width: ${({ theme, $deviceType }) =>
		$deviceType === 'mobile' ? '18.5rem' : '20rem'};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	flex: 1 0 auto;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'container')};

	${({ theme, $hierarchy }) =>
		$hierarchy === 'primary'
			? getContainerStyle(
					theme,
					'neutral',
					'secondary',
					'filled',
					'rounded1',
					1,
			  )
			: getContainerStyle(
					theme,
					'neutral',
					'tertiary',
					'filled',
					'rounded1',
					1,
			  )}

	${({ theme, $hierarchy }) =>
		$hierarchy === 'primary' &&
		css`
			-webkit-filter: drop-shadow(
				0 0 0.5rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.5)}
			);
			filter: drop-shadow(
				0 0 0.5rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.5)}
			);
		`}

	div#item-contents-container {
		width: ${({ theme }) => theme.layout.component.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		div#plan-text-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;

			padding: ${({ theme, $deviceType }) =>
				$deviceType === 'mobile'
					? theme.layout.component.padding.sm
					: theme.layout.component.padding.default};

			${({ theme, $hierarchy }) =>
				$hierarchy === 'primary'
					? getContainerStyle(
							theme,
							'accent',
							'primary',
							'filled',
							'rounded2',
							0.75,
					  )
					: getContainerStyle(
							theme,
							'neutral',
							'secondary',
							'filled',
							'rounded2',
							0.1,
					  )}

			#best-tag {
				background-color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 1)};

				${({ theme }) => css`
					-webkit-filter: drop-shadow(
						0 0 0.5rem
							${hexToRgba(
								getColour(theme, 'neutral', 'secondary', 'active'),
								0.75,
							)}
					);
					filter: drop-shadow(
						0 0 0.5rem
							${hexToRgba(
								getColour(theme, 'neutral', 'secondary', 'active'),
								0.75,
							)}
					);
				`}
			}

			span#plan-text {
				${({ theme }) => getTypography(theme, 'heading3')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}

		div#price-text-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: 0.5rem;

			padding: ${({ theme }) => `${theme.layout.container.padding.sm} 0`};

			span#service-name {
				${({ theme }) => getTypography(theme, 'heading3')}
				line-height: 120%;
				color: ${({ theme, $hierarchy }) =>
					hexToRgba(getColour(theme, 'neutral', $hierarchy, 'active'), 0.75)};
			}

			h1#heading {
				${({ theme }) => getTypography(theme, 'display')}
				font-size: 2.5rem;
				color: ${({ theme, $hierarchy }) =>
					getColour(theme, 'neutral', $hierarchy, 'active')};

				span#price-caption {
					${({ theme }) => getTypography(theme, 'heading1')}
					font-size: 1.5rem;
					line-height: 100%;
				}
			}

			span#price-text-caption {
				${({ theme }) => getTypography(theme, 'body')}
				font-weight: bold;
				color: ${({ theme, $hierarchy }) =>
					hexToRgba(getColour(theme, 'neutral', $hierarchy, 'active'), 0.3)};
			}
		}

		div#description-text-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme, $deviceType }) =>
				$deviceType === 'mobile'
					? theme.layout.container.gutter
					: theme.layout.section.gutter};

			p#body {
				width: 90%;
				${({ theme }) => getTypography(theme, 'body')}
				font-size: 0.875rem;
				color: ${({ theme, $hierarchy }) =>
					getColour(theme, 'neutral', $hierarchy, 'active')};
			}

			div#features-text-container {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				gap: ${({ theme }) => theme.layout.component.gutter};

				padding: ${({ theme }) =>
					`${theme.layout.component.padding.lg} ${theme.layout.component.padding.default}`};

				${({ theme, $hierarchy }) =>
					getContainerStyle(
						theme,
						'neutral',
						$hierarchy,
						'filled',
						'rounded2',
						0.1,
					)}

				div.feature-text {
					width: ${({ theme }) => theme.layout.component.width};

					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: flex-start;

					text-align: left;

					.feature-icon {
						font-size: 1rem;
						margin-top: 0.25rem;
						margin-right: 0.5rem;
						line-height: 160%;

						color: ${({ theme, $hierarchy }) =>
							hexToRgba(getColour(theme, 'accent', $hierarchy, 'active'), 0.5)};
					}

					span.subheading {
						${({ theme }) => getTypography(theme, 'subheading')}
						color: ${({ theme, $hierarchy }) =>
							getColour(theme, 'neutral', $hierarchy, 'active')};
					}
				}
			}
		}
	}

	div#button-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;

		margin-top: ${({ theme }) => theme.layout.container.gutter};

		span#caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme, $hierarchy }) =>
				getColour(theme, 'neutral', $hierarchy, 'inactive')};
		}
	}
`
