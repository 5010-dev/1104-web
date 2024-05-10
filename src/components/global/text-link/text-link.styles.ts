import styled, { css } from 'styled-components'

import { TextLinkContainerProps } from './text-link.types'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

type Props = TextLinkContainerProps

export const TextLinkContainer = styled.div<Props>`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;

	${({ theme }) => getTypography(theme, 'subheading')}
	color: ${({ theme, $appearance, $hierarchy }) =>
		getColour(theme, $appearance, $hierarchy, 'active')};

	${({ $size }) =>
		$size === 'sm' &&
		css`
			font-size: 0.875rem;
		`}

	cursor: pointer;

	span#link-text {
		text-decoration: ${({ $underlined }) =>
			$underlined ? 'underline' : 'none'};

		&:hover {
			text-decoration: underline;
		}
	}

	&:hover {
		color: ${({ theme, $appearance, $hierarchy }) =>
			getColour(theme, $appearance, $hierarchy, 'hover')};
	}
`
