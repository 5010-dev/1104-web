import styled from 'styled-components'

import { hexToRgba } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const OurServiceContainer = styled(PageLayoutContainer)`
	position: relative;

	#our-service-hero {
		&::before {
			background: ${({ theme }) =>
				`linear-gradient(to bottom, ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.8,
				)},  ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.9,
				)}, ${hexToRgba(theme.colour.neutral.primary.active, 1)})`} !important;
		}

		div#hero-text-container {
			max-width: 80rem;

			span#subheading {
				width: 80%;
			}
		}
	}
`
