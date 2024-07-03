import styled from 'styled-components'

import { getContainerStyle } from '../../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { SectionContainer } from '../../../global/section/section.styles'

export const PartnershipFormContainer = styled(SectionContainer)`
	position: relative;

	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	div#partnership-form-contents-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		${({ theme }) =>
			getContainerStyle(theme, 'accent', 'primary', 'filled', 'rounded1', 0.1)}

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.padding.default} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'container',
			)}`};

		div#partnership-form-title-container {
			display: flex;
			flex-direction: column;
			align-items: center;

			h3#partnership-form-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			p#partnership-form-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
			}
		}

		form#partnership-form-container {
			width: ${({ theme }) => theme.layout.container.width};
			max-width: ${({ theme }) => theme.layout.container.maxWidth};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};

			div#partnership-form-inputs-container {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
				gap: ${({ theme }) => theme.layout.component.gutter};

				.partnership-form-input {
					width: ${({ theme }) => theme.layout.component.width};
					flex: 1 1 20rem;
				}
			}

			div#partnership-form-textarea-container {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				gap: ${({ theme }) => theme.layout.component.gutter};

				.partnership-form-input {
					width: ${({ theme }) => theme.layout.component.width};
				}
			}

			div#partnership-form-button-container {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				gap: ${({ theme }) => theme.layout.component.gutter};

				#partnership-form-button {
					width: 12rem;
				}

				span#partnership-form-button-caption {
					max-width: 20rem;

					${({ theme }) => getTypography(theme, 'caption')}
					color: ${({ theme }) =>
						hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.75,
						)};
				}
			}
		}
	}
`
