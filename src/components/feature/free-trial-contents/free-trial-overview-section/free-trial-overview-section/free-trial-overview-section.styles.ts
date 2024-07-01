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
		}
	}

	div#free-trial-overview-summary-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		span#free-trial-overview-summary-caption {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		h3#free-trial-overview-summary {
			${({ theme }) => getTypography(theme, 'heading1')}
			font-size: 3rem;
			line-height: 150%;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			background: ${({ theme }) =>
				`linear-gradient(transparent 65%, ${getColour(
					theme,
					'accent',
					'primary',
					'inactive',
				)} 65%)`};
			padding: 0 0.5rem;
		}
	}
`
