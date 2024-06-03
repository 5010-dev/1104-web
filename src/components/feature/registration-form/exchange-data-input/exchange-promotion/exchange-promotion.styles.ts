import styled from 'styled-components'

import { getTypography } from '../../../../../utils/typo.utils'
import { getColour } from '../../../../../utils/colour.utils'

export const ExchangePromotionContainer = styled.div`
	width: ${({ theme }) => theme.layout.section.width};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 5rem;

	text-align: left;

	#lottie-shining-anim {
		position: absolute;
		top: 2vh;
		left: 50%;
		transform: translate(-50%, 0);
		width: 100%;
		max-width: 30rem;
		/* height: 100vh; */
		opacity: 0.5;
		z-index: -5;
	}

	h1#heading {
		${({ theme }) => getTypography(theme, 'heading1')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};

		span {
			font-size: 1.25rem;
			line-height: 100%;
		}
	}

	p.subheading {
		${({ theme }) => getTypography(theme, 'heading3')}
		color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
	}

	p.body {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	span.caption {
		${({ theme }) => getTypography(theme, 'caption')}
		color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
	}

	div#rows-container {
		width: ${({ theme }) => theme.layout.container.width};
		display: flex;
		flex-direction: column;
		gap: 3rem;

		div.body-rows {
			width: ${({ theme }) => theme.layout.container.width};
			display: flex;
			flex-direction: column;
			gap: ${({ theme }) => theme.layout.component.gutter};
		}
	}

	div#buttons-container {
		width: ${({ theme }) => theme.layout.container.width};
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.layout.component.gutter};
	}
`
