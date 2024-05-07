import styled, { css } from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'
import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getColour } from '../../../utils/colour.utils'

export const AchievementContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.page.width};

	gap: ${({ theme }) => theme.layout.page.gutter};

	margin-top: ${({ theme }) => theme.layout.section.gutter};

	padding: 0;
	background-color: #ffffff;

	text-align: left;

	div#components-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		margin-top: ${({ theme }) => theme.layout.container.gutter};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#section-heading-container {
			margin-top: ${({ theme }) => theme.layout.section.gutter};

			span#section-category-text {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) => theme.colour.accent.primary.active};
			}

			h1#section-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) => theme.colour.neutral.primary.active};
			}
		}

		div#items-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			div.item-container {
				width: ${({ theme }) => theme.layout.component.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				gap: ${({ theme, $deviceType }) =>
					$deviceType === 'desktop' ? '' : `${theme.layout.component.gutter}`};

				padding: ${({ theme, $deviceType }) =>
					`${getDeviceTypePadding(theme, $deviceType, 'section')} 0`};

				border-bottom: ${({ theme }) =>
					`0.0625rem solid ${getColour(
						theme,
						'neutral',
						'tertiary',
						'inactive',
					)}`};

				div.title-container {
					span.caption {
						${({ theme }) => getTypography(theme, 'caption')}
						color: ${({ theme }) => theme.colour.accent.primary.active};
					}

					h2.heading {
						width: ${({ theme }) => theme.layout.component.width};

						${({ theme }) => getTypography(theme, 'heading2')}
						color: ${({ theme }) => theme.colour.neutral.primary.active};
					}
				}

				div.body-container {
					width: ${({ theme }) => theme.layout.container.width};

					display: flex;
					flex-direction: row;
					justify-content: flex-start;
					align-items: center;
					flex-wrap: wrap;

					gap: ${({ theme }) => theme.layout.component.gutter};

					p.body {
						flex: 1 1 80%;
						${({ theme }) => getTypography(theme, 'body')}
						color: ${({ theme }) => theme.colour.neutral.primary.active};
					}

					.link-button {
						flex-direction: row-reverse;
					}
				}
			}
		}
	}
`
