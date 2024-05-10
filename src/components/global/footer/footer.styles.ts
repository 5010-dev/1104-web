import styled from 'styled-components'

import { SectionContainer } from '../section/section.styles'
import { DeviceType } from '../../../store/deviceTypeStore'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

type FooterContainerProps = {
	$deviceType: DeviceType
}

export const FooterContainer = styled(SectionContainer)<FooterContainerProps>`
	justify-content: center;
	align-items: center;

	padding: 0;

	${({ theme }) => getTypography(theme, 'caption')}
	color: ${({ theme }) => theme.colour.neutral.secondary.inactive};

	div#components-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		/* gap: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')}; */
		gap: ${({ theme }) => theme.layout.section.gutter};

		margin: ${({ theme }) => `${theme.layout.section.gutter} 0`};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#company-info {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme, $deviceType }) =>
				getDeviceTypePadding(theme, $deviceType, 'container')};

			img#company-logo {
				width: 4rem;
				opacity: 0.25;
			}

			div#company-info-text-container {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				p.company-info-text {
					${({ theme }) => getTypography(theme, 'caption')}
					font-weight: 400;

					text-align: left;

					span#reg-num-check-link {
						font-weight: bold;
						margin-left: 0.5rem;

						&:hover {
							color: ${({ theme }) =>
								getColour(theme, 'neutral', 'secondary', 'active')};
							text-decoration: underline;
							cursor: pointer;
						}
					}
				}
			}
		}

		div#disclaimer-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			text-align: left;
			gap: 1rem;

			div#copyright-text {
				display: flex;
				gap: 0.25rem;

				span {
					font-weight: bold;
				}
			}
		}
	}
`
