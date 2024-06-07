import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const RgistrationCompleteContainer = styled.div`
	width: ${({ theme }) => theme.layout.section.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	p.body {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	#go-home-button {
		margin-top: ${({ theme }) => theme.layout.section.gutter};
	}

	div#banners-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		padding-top: ${({ theme }) => theme.layout.page.gutter};

		#see-details-banner {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};
			padding: ${({ theme }) =>
				`${theme.layout.container.padding.sm} ${theme.layout.container.padding.default}`};

			text-align: left;

			p#banner-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};

				span {
					${({ theme }) => getTypography(theme, 'subheading')}
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
				}
			}

			#see-details-banner-icon {
				font-size: 1.5rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}
		}
	}

	div#community-container {
		width: ${({ theme }) => theme.layout.container.width};

		& > * {
			padding: 0;

			div#contents-container {
				-webkit-filter: none;
				filter: none;
			}
		}
	}
`
