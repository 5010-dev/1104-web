import styled, { css } from 'styled-components'

import { getContainerStyle } from '../../../../../utils/style.utils'
import { getTypography } from '../../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../../utils/colour.utils'

import { SectionContainer } from '../../../../global/section/section.styles'

export const FreeTrialOverviewSectionContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	ul#free-trial-overview-ul {
		padding: 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		list-style-type: none;

		li.free-trial-overview-li {
			width: ${({ theme }) => theme.layout.component.width};

			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;
			flex-wrap: wrap;

			${({ theme }) =>
				getContainerStyle(
					theme,
					'accent',
					'primary',
					'filled',
					'rounded1',
					0.15,
				)}
			padding: ${({ theme }) =>
				`${theme.layout.component.padding.default} ${theme.layout.container.padding.default}`};

			${({ theme, $deviceType }) =>
				$deviceType === 'mobile'
					? getTypography(theme, 'subheading')
					: getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};

			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
				filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
			`}

			.free-trial-overview-li-chip {
			}
		}
	}

	div#free-trial-overview-summary-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		span#free-trial-overview-summary-caption {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		h3#free-trial-overview-summary {
			${({ theme, $deviceType }) =>
				$deviceType === 'mobile'
					? getTypography(theme, 'heading2')
					: getTypography(theme, 'heading1')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			background: ${({ theme }) =>
				`linear-gradient(transparent 65%, ${hexToRgba(
					getColour(theme, 'neutral', 'secondary', 'active'),
					0.15,
				)} 65%)`};
			padding: 0 0.5rem;
		}
	}
`
