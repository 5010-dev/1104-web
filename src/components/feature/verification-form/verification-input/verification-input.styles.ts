import styled from 'styled-components'

import { VerificationInputContainerProps } from './verification-input.types'

import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

type Props = VerificationInputContainerProps

export const VerificationInputContainer = styled.div<Props>`
	position: relative;
	display: flex;
	align-items: center;

	#verification-input {
		width: 100%;

		letter-spacing: 1rem;
		font-size: 2rem;
		text-align: center;
		color: rgba(0, 0, 0, 0);
		caret-color: transparent;
	}

	div#verification-code-container {
		position: absolute;
		width: 100%;
		opacity: ${({ $isFocused }) => ($isFocused ? '1' : '0.5')};

		${({ theme }) => getTypography(theme, 'subheading')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
		font-size: 2rem;
		text-align: center;

		z-index: -1;
	}
`
