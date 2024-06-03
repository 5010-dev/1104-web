import styled from 'styled-components'

import { getContainerStyle } from '../../../utils/style.utils'
import { getColour } from '../../../utils/colour.utils'
import { getTypography } from '../../../utils/typo.utils'

export const WarningTextContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.25rem;

	background-color: ${({ theme }) =>
		getContainerStyle(theme, 'system', 'primary', 'filled', 'rounded3', 0.15)};
	padding: ${({ theme }) => theme.layout.component.padding.default};

	${({ theme }) => getTypography(theme, 'body')}
	font-size: 0.875rem;
	color: ${({ theme }) => getColour(theme, 'system', 'primary', 'active')};
	text-align: left;

	#icon {
		font-size: 1rem;
		line-height: 150%;
		padding: 0.2rem;
		padding-left: 0;
	}
`
