import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const NotionPageContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: ${({ theme }) => theme.layout.container.width};
	height: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) =>
		getColour(theme, 'neutral', 'secondary', 'active')};
	text-align: left;

	z-index: 9999;

	div#body-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 30rem;

		padding: 0 1rem 6rem 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		div#top-bar {
			position: fixed;
			top: 0;
			right: 0;

			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: center;

			z-index: 9999;

			div#close-button-container {
				width: ${({ theme }) => theme.layout.container.width};
				max-width: 30rem;

				display: flex;
				justify-content: flex-end;

				#close-button {
					width: 2rem;
					padding: 0.5rem 1.5rem;
					font-size: 1.75rem;
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'primary', 'active')};
				}
			}
		}

		#description-card {
			margin-top: 4rem;

			h4 {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'primary', 'active')};
				padding: 0.5rem 0.25rem;
			}
		}

		div#notion-page {
			width: ${({ theme }) => theme.layout.container.width};
			height: auto;

			background-color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			text-align: left;
		}

		div#bottom-bar {
			position: fixed;
			bottom: 0;
			left: 0;
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			align-items: center;

			padding: 1rem 1.5rem 1.5rem 1.5rem;
			box-sizing: border-box;
			background-color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};

			#button {
				width: ${({ theme }) => theme.layout.container.width};
				max-width: 30rem;
				box-sizing: border-box;
			}
		}
	}
`
