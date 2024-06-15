import styled, { css } from 'styled-components'

import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { CountdownUnitContainerProps } from './countdown-unit.types'

export const CountdownUnitContainer = styled.div<CountdownUnitContainerProps>`
	position: relative;

	width: ${({ $deviceType }) => {
		if ($deviceType === 'desktop') {
			return '11.125rem'
		} else if ($deviceType === 'tablet') {
			return '7.125rem'
		} else if ($deviceType === 'mobile') {
			return '3.875rem'
		}
	}};

	font-family: 'Big Shoulders Display';
	font-weight: 900;

	span.quant-counter {
		display: inline-block;

		font-size: ${({ $deviceType }) => {
			if ($deviceType === 'desktop') {
				return '10rem'
			} else if ($deviceType === 'tablet') {
				return '6rem'
			} else if ($deviceType === 'mobile') {
				return '3.5rem'
			}
		}};
		line-height: 100%;
		text-align: center;

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0 1rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)}
			);
			filter: drop-shadow(
				0 0 1rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)}
			);
		`}
	}

	span.quant-counter::first-letter {
		letter-spacing: ${({ theme, $deviceType }) =>
			$deviceType === 'mobile' ? '0.25rem' : theme.layout.container.gutter};
	}

	span.quant-counter-unit {
		position: absolute;
		left: 50%;
		${({ $deviceType }) =>
			$deviceType === 'mobile'
				? css`
						bottom: 0;
						transform: translate(-50%, 30%);
				  `
				: css`
						top: 50%;
						transform: translate(-50%, -30%);
				  `}

		font-size: ${({ $deviceType }) => {
			if ($deviceType === 'desktop') {
				return '2.5rem'
			} else if ($deviceType === 'tablet') {
				return '1.5rem'
			} else if ($deviceType === 'mobile') {
				return '1rem'
			}
		}};
		color: ${({ theme }) => getColour(theme, 'neutral', 'tertiary', 'active')};

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0 0.1rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.15)}
			);
			filter: drop-shadow(
				0 0 0.1rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.15)}
			);
		`}
	}
`
