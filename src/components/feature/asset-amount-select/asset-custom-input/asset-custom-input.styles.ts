import styled, { css } from 'styled-components'

import { getColour } from '../../../../utils/colour.utils'

import { AssetCustomInputContainerProps } from './asset-custom-input.types'

type Props = AssetCustomInputContainerProps

export const AssetCustomInputContainer = styled.label<Props>`
	position: relative;
	width: ${({ theme }) => theme.layout.container.width};

	#custom-input {
		width: ${({ theme }) => theme.layout.component.width};
		padding: ${({ theme }) => theme.layout.container.padding.sm};
		padding-left: ${({ theme }) => theme.layout.container.padding.default};

		border-radius: ${({ theme }) => theme.shape.outlined.rounded2.borderRadii};

		box-shadow: ${({ theme, $isFocused, $isSelected }) =>
			$isSelected
				? 'none'
				: !$isFocused &&
				  `${theme.shape.outlined.rounded3.boxShadow} ${getColour(
						theme,
						'neutral',
						'tertiary',
						'active',
				  )}`};

		${({ theme, $isSelected }) =>
			$isSelected
				? css`
						background-color: ${getColour(
							theme,
							'neutral',
							'secondary',
							'active',
						)};
						color: ${getColour(theme, 'neutral', 'primary', 'active')};
				  `
				: css`
						background-color: transparent;
				  `};
	}

	#custom-input-icon {
		position: absolute;

		right: ${({ theme }) => theme.layout.container.padding.sm};
		top: ${({ theme }) => theme.layout.container.padding.sm};

		font-size: 1.5rem;
		color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
	}
`
