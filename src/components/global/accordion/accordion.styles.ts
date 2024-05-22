import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

import { AccordionContainerProps } from './accordion.types'
import { getColour } from '../../../utils/colour.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getContainerStyle } from '../../../utils/style.utils'

export const AccordionContainer = styled.div<AccordionContainerProps>`
	position: relative;

	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.container.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'container')};

	border-radius: ${({ theme }) => theme.shape.filled.rounded2.borderRadii};

	div#background-container {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		width: ${({ theme }) => theme.layout.component.width};
		height: 100%;

		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'tertiary', 'filled', 'rounded2', 1)}

		z-index: -1;
	}

	div#heading-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		h3#heading {
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			text-align: left;
		}

		#handle-icon {
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	div#body-container {
		width: ${({ theme }) => theme.layout.container.width};

		margin-top: ${({ theme }) => theme.layout.container.gutter};

		p#body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			text-align: left;
		}
	}
`
