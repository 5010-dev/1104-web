import styled, { css } from 'styled-components'

import { getColour } from '../../../utils/colour.utils'

import { BannerContainerProps } from './banner.types'

export const BannerContainer = styled.div<BannerContainerProps>`
	width: ${({ theme }) => theme.layout.container.width};

	z-index: 10;

	display: flex;
	justify-content: center;
	align-items: center;

	text-align: left;

	position: fixed;
	${({ $position }) =>
		$position === 'top' &&
		css`
			top: 0;
		`}
	${({ $position }) =>
		$position === 'bottom' &&
		css`
			bottom: 0;
		`}

    background-color: ${({ theme, $appearance, $hierarchy }) =>
		getColour(theme, $appearance, $hierarchy, 'active')};

	div#banner-contents-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};
		min-width: ${({ theme }) => theme.layout.container.minWidth};

		padding: ${({ theme }) =>
			`${theme.layout.container.padding.sm} ${theme.layout.container.padding.default}`};

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	#banner-button {
		flex: 0 0 auto;
	}
`
