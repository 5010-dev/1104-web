import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'

import { ServiceTermsContainerProps } from './service-terms.types'

type Props = ServiceTermsContainerProps

export const ServiceTermsContainer = styled.div<Props>`
	overflow: auto;

	width: ${({ theme }) => theme.layout.container.width};
	height: ${({ $height }) => $height};

	${({ theme }) => getTypography(theme, 'body')}
	font-size: 0.875rem;
	color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	text-align: left;

	${({ theme }) =>
		getContainerStyle(theme, 'neutral', 'secondary', 'filled', 'rounded3')}

	padding: ${({ theme }) => theme.layout.container.padding.sm};

	div#contents-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		/* gap: ${({ theme }) => theme.layout.container.gutter}; */

		& > h3 {
			padding-top: 2rem;
			padding-bottom: 0.5rem;
		}

		ul {
			padding-left: 1rem;
		}

		ol {
			padding-left: 1rem;
		}

		& > :first-child {
			padding-top: 0;
		}

		& > :last-child {
			padding-bottom: 0;
		}
	}
`
